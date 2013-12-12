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

    $("div#logo-images").bind('inview', function(event, isInView, visiblePartX, visiblePartY) { 
            console.log("view");
        if (isInView){
            $("img#small-logo").fadeOut(400);
            $("div#footer-pagetop").fadeOut(400);
            $("div#submenu").animate({
                opacity: 0,
                marginLeft: -30
            }, 400);
            $("div.each-submenu").fadeOut(400);
        }
        else{
            $("img#small-logo").fadeIn(400);
            $("div#footer-pagetop").fadeIn(400);
            $("div#submenu").animate({
                opacity: 1.0,
                marginLeft: 0
            }, 400);
            $("div.each-submenu[name=1]").fadeIn(400);
        }
    });
}