if ($.cookie("style")=="white") {setDefault(); setCSS('/css/gost/white.css', 'gostthemeID');};
if ($.cookie("style")=="black"){ setDefault(); setCSS('/css/gost/black.css', 'gostthemeID');};
if ($.cookie("style")=="blue") { setDefault(); setCSS('/css/gost/blue.css', 'gostthemeID');};
if ($.cookie("image")=="off") { setDefault(); setCSS('/css/gost/noimages.css', 'gostimageID');};



$(document).ready(function(){


	if ($.cookie("CecutientCookie")=="on"){
		setTimeout(function(){ $('#goldesign').addClass('appear');}, 0);
	}

    if ($.cookie("CecutientCookie")=="on"){
        CecutientOn();
        if ($.cookie("fonts")=="small"){SmallFonts();}
        if ($.cookie("fonts")=="medium"){MediumFonts();}
        if ($.cookie("fonts")=="big"){BigFonts();}
        if ($.cookie("image")=="on"){ImageOn();}
        if ($.cookie("image")=="off"){ImageOff();}
        if ($.cookie("style")=="white"){WhiteStyle();}
        if ($.cookie("style")=="black"){BlackStyle();}
        if ($.cookie("style")=="blue"){BlueStyle();}
    }

    /*Включение стилей для слабовидящих*/
    $('#CecutientOn').click(function(){
       CecutientOn();
       WhiteStyle();
       $('#goldesign').addClass('appear');
    });

    /*Включение выключение изображений*/
    $('#ImageOn').click(function(){ImageOn();});
    $('#ImageOff').click(function(){ImageOff();});
    /*Размер шрифта*/
    $('#SmallFonts').click(function(){SmallFonts();});
    $('#MediumFonts').click(function(){MediumFonts();});
    $('#BigFonts').click(function(){BigFonts();});
    /*Цветовая схема*/
    $('#WhiteStyle').click(function(){WhiteStyle();});
    $('#BlackStyle').click(function(){BlackStyle();});
    $('#BlueStyle').click(function(){BlueStyle();});

    /*Функция обработчик включения стилей*/
    function CecutientOn(){
		$('#infobardm').show();
		$('#CecutientOn').hide();

        setDefault();

        $.cookie("CecutientCookie", "on", {
            expires: 365,
            path: "/"
        });
        return false;
    }

    /*Отключение версии для слабовидящих*/
    $('#CecutientOff').click(function(){
        $.removeCookie('CecutientCookie', { path: "/" });
        $.removeCookie('style', { path: "/" });
        $.removeCookie('image', { path: "/" });
        $.removeCookie('fonts', { path: "/" });
/*        $.cookie("CecutientCookie", null);
        $.cookie("style", null);
        $.cookie("image", null);
        $.cookie("fonts", null);*/
        window.location.reload();
        return false;
    });


    /*Функции обработчик отображения изображений*/
    function ImageOn(){
        if ($.cookie("CecutientCookie")=="on"){
		    $("img").addClass("");
		    $('img').css({ display: 'inherit'});
			$('#top_cells').css({
				    height: '150px'
				});

            removeCSS('/css/gost/noimages.css');

		    $("a.dmenableimage").addClass("dmimageActive");
		    $("a.dmdisableimage").removeClass("dmimageActive");
            $.cookie("image", "on", {
                expires: 365,
                path: "/"
            });
            return false;
        }
    }
    function ImageOff(){
        if ($.cookie("CecutientCookie")=="on"){
		    $("img").addClass("");
		    $("a.dmdisableimage").addClass("dmimageActive");
		    $("a.dmenableimage").removeClass("dmimageActive");

			setCSS('/css/gost/noimages.css', 'gostimageID');

			$('#top_cells').css({
				    height: '60px'
				});

            $.cookie("image", "off", {
                expires: 365,
                path: "/"
            });
            return false;
        }
    }

	function SmallFonts(){

	        if ($.cookie("CecutientCookie")=="on"){

				//делаем все в 14 пикселях
			    $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul, input").css("fontSize", "14px");
			    $("h1").css("fontSize", "18px");
			    $("h2").css("fontSize", "16px");
			    $(".active").css({"fontWeight":"bold", "background":"none"});
			    $(".content_style, .content_style span").removeAttr("style").css("fontSize", "14px");

				//делаем отступы в 30px
			 	$("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "30px");
			    $("h1").css("line-height", "30px");
			    $("h2").css("line-height", "30px");
			    $(".content_style, .content_style span").removeAttr("style").css("line-height", "30px");
				$('#top_cells span').css({ "margin": '0 10px 0 0' });
				$('.search input').css({ 'float':'left' });

                $("li").css("padding-bottom", "4px");

				$('#top_cells .call_center .b_empty').css({ "padding": '0' });
                $('#top_cells').css({ "font-size": '14px','height':'150px' });
				//выделяем текущий пункт

				$("a.dmchangea2").removeClass("dmchangeaActive");
				$("a.dmchangea1").addClass("dmchangeaActive");
				$("a.dmchangea3").removeClass("dmchangeaActive");
	            $.cookie("fonts", "small", {
	                expires: 365,
	                path: "/"
	            });

	            return false;
	        }
	}

	function MediumFonts(){

	        if ($.cookie("CecutientCookie")=="on"){

			//делаем все в 27 пикселях
			    $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul, input").css("fontSize", "18px");
			    $("h1").css("fontSize", "24px");
			    $("h2").css("fontSize", "19px");
			    $(".active").css({"fontWeight":"bold", "background":"none"});
			    $(".content_style, .content_style span").removeAttr("style").css("fontSize", "18px");

			//делаем отступы в 35px
			 	$("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "30px");
			    $("h1").css("line-height", "35px");
			    $("h2").css("line-height", "35px");
			    $("li").css("padding-bottom", "6px");
			    $(".content_style, .content_style span").removeAttr("style").css("line-height", "35px");
				$('#top_cells span').css({ "margin": '0 10px 0 0' });
				$('.search input').css({ 'float':'left' });
				$('#top_cells .call_center .b_empty').css({ "padding": '0' });
                $('#top_cells').css({ "font-size": '16px','height':'200px' });
			//выделяем текущий пункт

				$("a.dmchangea2").addClass("dmchangeaActive");
				$("a.dmchangea1").removeClass("dmchangeaActive");
				$("a.dmchangea3").removeClass("dmchangeaActive");

	            $.cookie("fonts", "medium", {
	                expires: 365,
	                path: "/"
	            });

	            return false;
	        }
	}
	function BigFonts(){

	        if ($.cookie("CecutientCookie")=="on"){

			//делаем все в 27 пикселях
			    $("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul, input").css("fontSize", "22px");
			    $("h1").css("fontSize", "26px");
			    $("h2").css("fontSize", "23px");
			    $("li").css("padding-bottom", "14px");
			    $(".active").css({"fontWeight":"bold", "background":"none"});
			    $(".content_style, .content_style span").removeAttr("style").css("fontSize", "18px");

			//делаем отступы в 40px
			 	$("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "38px");
			    $("h1").css("line-height", "40px");
			    $("h2").css("line-height", "40px");
			    $(".content_style, .content_style span, .content_style div").removeAttr("style").css("line-height", "38px");
				$('#top_cells').css({ "font-size": '20px','height':'250px' });
				$('#top_cells span').css({ "margin": '0 10px 0 0' });
				$('.search input').css({ 'float':'left' });
				$('.nav img').css({
				    display: 'block', 'width':'auto'
				});
				$(".nav img").addClass("");
				$('#top_cells .call_center .b_empty').css({ "padding": '0' });

			//выделяем текущий пункт

				$("a.dmchangea2").removeClass("dmchangeaActive");
				$("a.dmchangea1").removeClass("dmchangeaActive");
				$("a.dmchangea3").addClass("dmchangeaActive");

	            $.cookie("fonts", "big", {
	                expires: 365,
	                path: "/"
	            });

	            return false;
	        }
	}

    /*Функции изменения цветовой схема*/
    function WhiteStyle(){
        if ($.cookie("CecutientCookie")=="on"){

            setCSS('/css/gost/white.css', 'gostthemeID');

            $.cookie("style", "white", {
                expires: 365,
                path: "/"
            });
            return false;
        }
    }
    function BlackStyle(){

        if ($.cookie("CecutientCookie")=="on"){

            setCSS('/css/gost/black.css', 'gostthemeID');

            $.cookie("style", "black", {
                expires: 365,
                path: "/"
            });
            return false;
        }
    }
    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){

            setCSS('/css/gost/blue.css', 'gostthemeID');

            $.cookie("style", "blue", {
                expires: 365,
                path: "/"
            });
            return false;
        }
    }
});

function setCSS(cssFile, id) {

            $('li.active a').css({"font-weight":"bold"});

            if ($("#"+id).length > 0) {
			    $('link[id^="'+id+'"]').remove();
			}

		    var link = $('<link>');
            link.attr('href', cssFile);
            link.attr('rel', 'stylesheet');
            link.attr('media', 'screen');
            link.attr('id', id);
            link.appendTo('head');
}

function removeCSS(cssFile) {

            $('link[href^="'+cssFile+'"]').remove();
}

function setDefault() {
		$('div, span, body, table, td, th, tr, a, li, input, ul').css({ "background": 'none', "box-shadow" : "none"});
		$("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul, input").css("fontSize", "14px");
    	$('body, html').css({"background":"#fff","background-color":"#fff","color":"#000"});
        $('a, p, span, li, ul, td, tr, th, table, div, input, li a').css({"color":"#000", "background":"none", "background-color":"none"});
        $('a').css({"color":"#000","text-decoration":"underline","border":"transparent"});
        $('img').removeClass();
        $('header, footer, #header, #footer, #content, #body, div, span, td, section, header, aside, h1, h2, h3, h4, h5').css({"background":"#fff","background-color":"#fff","color":"#000"});
        $('input, textarea').css({"border":"2px #000 solid"});
        $('#top_cells').css({ "font-size": '20px','height':'150px','display':'block','overflow':'hidden' });
        $('#left_cells .menu ul li ul').css({ "background": 'rgba(0,0,0,.1)', "border": '2px rgba(255,255,255,.5) solid', "padding":"25px"  });
        $('.search input').css({ 'float':'left' });
        $('#top_cells .logo').css({ 'left':'0' });
        $('.links').css({ 'display':'none' });
        $('#top_cells .pics').css({ 'display':'none' });
        $('#topnews .prev_item').css({ 'position':'static' });
}