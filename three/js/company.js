$(document).ready(function(){
	init();
    initEvent();
    initAnchorEvent();
});

function init(){

    var windowHeight = document.documentElement.clientHeight;
    var lastHeight = $("div.article:last").outerHeight(true);
    console.log(lastHeight);
    $('div.spacer').css("height",windowHeight);
    $('div.spacer-last').css("height",windowHeight - lastHeight);

    $("div.each-submenu").fadeIn(400);

}

function initEvent(){

    $("div.article").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        console.log($(this).attr("id") + ":" +isInView + "/" + visiblePartY); 
        if (isInView && visiblePartY == 'bottom'){
            $("div.submenu-menu-item").removeClass("submenu-menu-select");
            var id = $(this).attr("id");
            $("div.submenu-menu-item a[href=#"+id+"]").parent().addClass("submenu-menu-select");
        }
    });

    $("div#header-title").bind('inview', function(event, isInView, visiblePartX, visiblePartY) { 
        if (isInView){
            $("div#submenu").stop().animate({
                opacity: 0,
                marginLeft: -30
            }, 400);
            $("div#footer").stop().animate({
                opacity: 0,
                bottom: -43
            }, 400);
            $("div#sublogo").stop().animate({
                marginTop: -200,
                opacity: 0
            }, 400);
        }
        else{
            $("div#submenu").stop().animate({
                opacity: 1.0,
                marginLeft: 18
            }, 400);
            $("div#footer").stop().animate({
                opacity: 1.0,
                bottom: 10
            }, 400);
            $("div#sublogo").stop().animate({
                marginTop: 0,
                opacity: 1.0
            }, 400);
        }
    });
}