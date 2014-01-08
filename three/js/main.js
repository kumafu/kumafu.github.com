$(document).ready(function(){
	init();
});

function init(){

    var windowHeight = document.documentElement.clientHeight;
    var lastHeight = $("div.article:last").outerHeight(true);
    console.log(lastHeight);
    $('div.spacer').css("height",windowHeight - 130);
    $('div.spacer-last').css("height",windowHeight - lastHeight);

    var queue = new createjs.LoadQueue(true);
    queue.setMaxConnections(100);

    var manifest = [];
    for (var i in THREEWEB.works){
        manifest.push("./img/works/" + THREEWEB.works[i].MainImage);
    }

    queue.loadManifest(manifest,true);

    queue.addEventListener("complete",handleComplete);

    $('a[rel*=lightbox]').fancybox({
        'type':'inline',
        'overlayOpacity':0.0,
        'hideOnContentClick':true,
    });

    function handleComplete(event){
        var j = 0;
		for (var i in THREEWEB.works){
            var work = THREEWEB.works[i];
			var card = $("<div>")
				.addClass("works-card")
                .css("background-image","url(./img/works/"+work.MainImage+")")
				.css('opacity',0);
            if (j % 3 == 2){
                card.addClass("works-card-return");
            }
            var base = $("<div>")
                .addClass("card-title-base")
                .appendTo(card);
            var title = $("<div>")
                .addClass("card-title")
                .append(work.Title)
                .appendTo(base);
			card.stop().animate({opacity: 1},2000);

			var a = $("<a>").attr("href","./work.html?id="+j).attr("data-num",j);
			a.append(card);
			$("#works-footer-spacer").before(a);
            j++;
		}

        initEvent();
        initAnchorEvent();
    }
}

function initEvent(){

    $("section.contents").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var num = $(this).attr("name");
        if (isInView){
            if (num == 0){
                //console.log("hide");
                $("div#submenu").stop().animate({
                    opacity: 0,
                    marginLeft: -30
                }, 400, function(){$("div#submenu").hide()});
                $("div#footer").stop().animate({
                    opacity: 0,
                    bottom: -43
                }, 400);
                // $("div#sublogo").stop().animate({
                //     marginLeft: -43,
                //     opacity: 0
                // }, 400);
                $("div.each-submenu").fadeOut(400);
            }
            else{
                //console.log("show");
                $("div#submenu").stop().show().animate({
                    opacity: 1.0,
                    marginLeft: 18
                }, 400);
                $("div#footer").stop().animate({
                    opacity: 1.0,
                    bottom: 0
                }, 400);
                // $("div#sublogo").stop().animate({
                //     marginLeft: 5,
                //     opacity: 1.0
                // }, 400);
                $("div.each-submenu[name!="+num+"]").fadeOut(400);
                $("div.each-submenu[name="+num+"]").fadeIn(400);
            }
        }
    });
    $("div.article").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //console.log($(this).attr("id") + ":" +isInView + "/" + visiblePartY); 
        if (isInView && visiblePartY == 'bottom'){
            $("div.submenu-menu-item").removeClass("submenu-menu-select");
            var id = $(this).attr("id");
            $("div.submenu-menu-item a[href=#"+id+"]").parent().addClass("submenu-menu-select");
        }
    });

}