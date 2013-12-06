$(document).ready(function(){
	init();
});

function init(){

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
				.hide();
            var imgdiv = $("<div>")
                .addClass("card-image")
                .css("background-image","url(./img/s-mov_sample_0"+ numStr +".jpg)")
                .appendTo(card);
            var title = $("<div>")
                .addClass("card-title")
                .append("Movie")
                .appendTo(card);
            var title = $("<div>")
                .addClass("card-desc")
                .append("description...")
                .appendTo(card);
			card.delay(i * 80).fadeIn(800);

			var a = $("<a>").attr("href","./works/works.html");
			a.append(card);
			$("#works-container").append(a);
		}
    }
}