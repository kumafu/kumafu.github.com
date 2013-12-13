$(document).ready(function(){
	init();
    initEvent();
});

function init(){

    var num = -1;
    var url = $(location).attr('href');
    if (url.indexOf("?id=") == -1) {
    }else{
        var url_sp = url.split("?id=");
        num   = url_sp[url_sp.length - 1];
    }

    $("#submenu div.submenu-works-title").append(THREEWEB.works[num].Title)
    for (var i in THREEWEB.works[num].Contents){
        var con = THREEWEB.works[num].Contents[i];
        var type = con[0];
        var elem = $("<div>").addClass("eachwork-content");
        switch(type){
            case "Image":
                elem.append("<img src='./img/works/"+con[1]+"'>");
                break;
            case "Youtube":
                elem.append("<iframe width='580px' height='327px' src='//www.youtube.com/embed/"+con[1]+"?rel=0' frameborder='0' allowfullscreen></iframe>");
                break;
            case "Text":
                elem.append(con[1]);
                break;
        }
        $("#eachwork-1").append(elem);

    }
    // var windowHeight = document.documentElement.clientHeight;
    // var lastHeight = $("div.article:last").outerHeight(true);
    // console.log(lastHeight);
    // $('div.spacer').css("height",windowHeight);
    // $('div.spacer-last').css("height",windowHeight - lastHeight);

    // $("div.each-submenu").fadeIn(400);

}

function initEvent(){

    // $("div.article").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    //     console.log($(this).attr("id") + ":" +isInView + "/" + visiblePartY); 
    //     if (isInView && visiblePartY == 'bottom'){
    //         $("div.submenu-menu-item").removeClass("submenu-menu-select");
    //         var id = $(this).attr("id");
    //         $("div.submenu-menu-item a[href=#"+id+"]").parent().addClass("submenu-menu-select");
    //     }
    // });

    $("div#logo-images").bind('inview', function(event, isInView, visiblePartX, visiblePartY) { 
            console.log("view");
        if (isInView){
            $("img#small-logo").fadeOut(400);
            $("div#footer-pagetop").fadeOut(400);
            $("div#submenu").animate({
                opacity: 0,
                marginLeft: -30
            }, 400);
            // $("div.each-submenu").fadeOut(400);
        }
        else{
            $("img#small-logo").fadeIn(400);
            $("div#footer-pagetop").fadeIn(400);
            $("div#submenu").animate({
                opacity: 1.0,
                marginLeft: 0
            }, 400);
            // $("div.each-submenu[name=1]").fadeIn(400);
        }
    });
}