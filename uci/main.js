$(document).ready(function(){
    init();
});

function init(){
	//console.log(userAgent);

}

 
window.addEventListener('deviceorientation', function(e) {
  gamma = Math.abs(Math.pow(e.gamma,2) * 0.33); //左右の傾きを取得。値は-90〜90。
  var val = gamma;
  if (val > 100) val = 100;
  $("#bar").css('width',val+'%');
  $("#bar").css('background-color',HSVtoRGBA(0.8,120 - 120 * val / 100.0,255,255));
  $("#value").text(val.toFixed(1) + "%");

});
// window.addEventListener("devicemotion", function(event) {
//   var x  = parseFloat(event.acceleration.x);
//   var y  = parseFloat(event.acceleration.y);
//   var z  = parseFloat(event.acceleration.z);

//   /*
//      iosとAndroidとで、向きが逆。
//      基準はどちらでも良いが、端末を上から見て、
//        x:右方向
//        y:上方向
//        z:手前方向
//       を正とするなら、iOS側を補正する。
//   */
//   // if (userAgent.indexOf("iPhone") > 0 || userAgent.indexOf("iPad") > 0 || userAgent.indexOf("iPod") > 0) {
//   //   x *= -1;
//   //   y *= -1;
//   //   z *= -1;
//   // }
//   //var val = Math.abs((Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2)) * 10.0);
//   var val = gamma;
//   if (val > 100) val = 100;
//   $("#bar").css('width',val+'%');
//   $("#bar").css('background-color',HSVtoRGBA(0.8,120 - 120 * val / 100.0,255,255));
//   $("#value").text(val.toFixed(0) + "%");
// });