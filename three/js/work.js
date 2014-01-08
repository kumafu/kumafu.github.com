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
    var title = $("<div>").addClass("eachwork-content");
    title.append(THREEWEB.works[num].Title);
    $("#eachwork-1").append(title);
    
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

    $("div#header-title").bind('inview', function(event, isInView, visiblePartX, visiblePartY) { 
        if (isInView){
            $("div#submenu").stop().animate({
                opacity: 0,
                marginLeft: -30
            }, 400, function(){$("div#submenu").hide()});
            $("div#footer").stop().animate({
                opacity: 0,
                bottom: -43
            }, 400);
        }
        else{
            $("div#submenu").stop().show().animate({
                opacity: 1.0,
                marginLeft: 18
            }, 400);
            $("div#footer").stop().animate({
                opacity: 1.0,
                bottom: 0
            }, 400);
        }
    });
}