$(document).ajaxStart( function(){$('<div id="loadingImg"><img src="/images/loading.gif" /></div>').prependTo(document.body ); });


$(".siteform").on("click", "input, textarea, select", function() {
    $(this).parents('form').find('.error').fadeOut(500); // убираем ошибки при наведении
});

// Очистка формы
function resetForm(formclass) {
    $(':input',formclass)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}

// Вывод ошибок в ajax-форме
function showErrors(formclass, errors) {
    clearErrors(formclass);
    jQuery.each(errors, function(elem, itemErrors) {
        var div = jQuery('<div>').addClass('error');

        if (typeof itemErrors === 'string') {
            div.append('<div>' + itemErrors + '</div>');
            jQuery('.' + formclass + ' ul').prepend(div);
        } else {
            jQuery.each(itemErrors, function(i, error) {
                div.append('<div>' + error + '</div>');
            });
            jQuery('.' + formclass + ' :input[name=' + elem + ']').after(div);
        }
    });
}

function clearErrors(formClass) {
    jQuery('.' + formClass + ' div.error').remove();
}


$(document).ready(function() {

    // Слайдер матчей
    $('.matches-list.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }, ]
    });

    // Слайдер рекламы

    $('.promo-banner ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        }]
    });



    // Схема проезда
    if ($('#gis_map').length) {
        "use strict";
        DG.then(function () {
            var gisMap = DG.map('gis_map', {
                'center': [55.9931903, 92.916244],
                'zoom': 16,
                fullscreenControl: false,
                scrollWheelZoom: false
            });

            myDivIcon = DG.divIcon({
                iconSize: [320, 65],
                className: 'my-div-icon',
                html: '<div class="divIcon"><b>ХК &laquo;Енисей&raquo;</b><span>ул. Юности 18</span></div>'
            });
            DG.marker([55.9930903, 92.916244], {
                icon: myDivIcon
            }).addTo(gisMap);

        });
    }

    // Показ мобильного меню
    $('#mobmenu').click( function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('ul:first').toggleClass('active');
    });
    // Показ блока поиска
    $('.search').click( function(e){
        e.preventDefault();
        $( ".bl-search" ).toggleClass('active');
        $(this).toggleClass('active');
    });

    // Активация поиска при вводе символов
    $('.bl-search input[name="text"]').on('change keyup paste', function () {
        if ($(this).val().length >= 2) {
            $(this).siblings('.s-button').removeAttr('disabled');
        } else $(this).siblings('.s-button').attr('disabled', 'disabled');
    });

    // Смена команды в шапке на главной
    $('.chage-team span').click( function(e){
        e.preventDefault();
        var team = $(this).data('team');
        $('.chage-team span').removeClass('active');
        $( ".top-game" ).fadeOut(0).css("display","none");;
        $( ".top-game." + team ).fadeIn().css("display","inline-block");

        $(this).addClass('active');
    });

    // Показ блока с турнирами
    $('#to-drop-tournaments').click( function(e){
        e.preventDefault();
        $(this).parent().find('.drop-tournaments').toggleClass('active');
    });

    // Показ блока со ссылками на сайты
    $('.drop-sites').click( function(e){
        e.preventDefault();
        $(this).parent().find('.drop-sites-layer').toggleClass('active');
    });

    // Переход по ссылкам из блока
    $(".drop-sites a").click(function() {
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });


    // Замена таблиц турнира со ссылкой
    $('.drop-tournaments li').click( function(e){
        e.preventDefault();
        var tournament = $(this).data('tournament'),
            title = $(this).text();

        $('#to-drop-tournaments').html(title + '<span><i class="fa fa-bars" aria-hidden="true"></i></span> ');
        $(this).parent().find('li').removeClass('active');
        $(this).parent().parent().find('.drop-tournaments').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.table-wrap').fadeOut(0);
        $(this).parent().parent().find('#' + tournament).fadeIn(400);
    });


    // Раскрытие ответа в вопрос-ответ
    $('.str').click(function(){
        $(this).parent().children('.answer').toggle('normal');
        $(this).toggleClass('down');
        return false;
    });
});

// Скрытие блока при клике вне его

jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".drop-sites-layer.active"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0
            && !$(".drop-sites").is(e.target)
        ) { // и не по его дочерним элементам
            $('.drop-sites-layer').removeClass('active');
            e.stopPropagation();
        }
    });
});


// Пролистывание слайдера матчей до текущего

$(window).load(function(){

    var index = $('.matches-list li.todayGame').data('slick-index');
    $(".matches-list").slick('slickGoTo', index);

});

$('.fancybox').fancybox();

// Появление кнопки вверх и прокрутка вверх
jQuery( document ).ready(function() {
    jQuery('#scrollup').click( function(){
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });

    $("input.count").keydown(function(event) {
        // Разрешаем нажатие клавиш backspace, Del, Tab и Esc
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем выделение: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем клавиши навигации: Home, End, Left, Right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });

});

jQuery(window).scroll(function(){
    if ( jQuery(document).scrollTop() > 180 ) {
        jQuery('#scrollup').fadeIn('fast');
    } else {
        jQuery('#scrollup').fadeOut('fast');
    }
});

// Отображение подменю при наведении

$('nav li').hover(function () {
    $('ul',this).slideToggle(100);
});


if (document.body.clientWidth < 802) {
    //$( "nav li" ).has( "ul" ).click(function() { return false; });
    $( "nav ul li:has(ul) > a" ).click(function() { return false; });
}


$(function() {

    // находим видео YouTube
    var $allVideos = $("iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com']"),

        // Элемент с плавающей шириной
        $fluidEl = $(".about-main-block .container-center");

    // Сохранение пропорций видео
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

            // удаление ширину и высоты из оригинального кода
            .removeAttr('height')
            .removeAttr('width');

    });

    // когда окно браузера изменяет размеры
    $(window).resize(function() {

        var newWidth = $fluidEl.width();

        // изменение размеров видео с сохранением пропорций
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

        // фиксирование размеров и отображение видео
    }).resize();

});

$(document).ajaxStop( function(){$('#loadingImg').remove();} );
