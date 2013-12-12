
function initAnchorEvent(){
    var url = $(location).attr('href');
    if (url.indexOf("?id=") == -1) {
    }else{
        var url_sp = url.split("?id=");
        var hash   = '#' + url_sp[url_sp.length - 1];
        var tgt    = $(hash);
        var pos    = tgt.offset().top;
        $("html, body").animate({scrollTop:pos + 1}, 1200, "swing");
    }

    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position + 1}, speed, 'swing');
        return false;
   });
}