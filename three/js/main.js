$(document).ready(function(){
	init();
    initEvent();
});

function init(){

    var windowHeight = document.documentElement.clientHeight;
    $('div.spacer').css("height",windowHeight);

    var queue = new createjs.LoadQueue(true);
    queue.setMaxConnections(100);

    var manifest = [
    	"./img/s-mov_sample_001.jpg",
    	"./img/s-mov_sample_002.jpg",
    	"./img/s-mov_sample_003.jpg",
    	"./img/s-mov_sample_004.jpg",
    	"./img/s-mov_sample_005.jpg",
    	"./img/s-mov_sample_006.jpg",
    	"./img/s-mov_sample_007.jpg",
    	"./img/s-mov_sample_008.jpg",
    	"./img/s-mov_sample_009.jpg",
    	"./img/s-mov_sample_010.jpg",
    	"./img/s-mov_sample_011.jpg",
    	"./img/s-mov_sample_012.jpg"
    ];

    queue.loadManifest(manifest,true);

    queue.addEventListener("complete",handleComplete);

    function handleComplete(event){
		for (var i = 0; i < 12; ++i){
			var rand = Math.floor(Math.random() * 9);
			var numStr = ("0" + (i + 1)).slice(-2);
			var card = $("<div>")
				.addClass("works-card")
                .css("background-image","url(./img/s-mov_sample_0"+ numStr +".jpg)");
				//.hide();
            if (i % 3 == 2){
                card.addClass("works-card-return");
            }
            // var imgdiv = $("<div>")
            //     .addClass("card-image")
            //     .css("background-image","url(./img/s-mov_sample_0"+ numStr +".jpg)")
            //     .appendTo(card);
            var base = $("<div>")
                .addClass("card-title-base")
                .appendTo(card);
            var title = $("<div>")
                .addClass("card-title")
                .append("Film<br>Spitz<br><br>...<br>2013")
                .appendTo(base);
			//card.delay(i * 80).fadeIn(800);

			var a = $("<a>").attr("href","./works/works.html");
			a.append(card);
			$("#works-footer-spacer").before(a);
		}
    }
}

function initEvent(){
    $("#about").bind('inview', function(event, isInView, visiblePartX, visiblePartY) { 
        console.log("article inview");
        if (isInView){
            $("div#submenu").animate({
                opacity: 1.0,
                marginLeft: 0
            }, 400);
        }else{

            $("div#submenu").animate({
                opacity: 0,
                marginLeft: -30
            }, 400);
        }
    });
}