$(document).ready(function(){
    initAnchorEvent();
});
function initAnchorEvent(){
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 1200; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position + 1}, speed, 'easeInOutCubic');
        return false;
   });
}