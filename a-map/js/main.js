var data = {};
var selectedFile = [];
var selectedRows = [];
var tabs;
var data_dir = "";

var ACCESS_TOKEN = "";
$(document).ready(function(){
	// var params = get_url_vars();
	// if (params['code']){
	// 	getAccessToken(params['code']);
	// }
    init();
});

function init(){
}

function get_url_vars()
{
  var vars = new Object, params;
  var temp_params = window.location.search.substring(1).split('&');
  for(var i = 0; i <temp_params.length; i++) {
    params = temp_params[i].split('=');
    vars[params[0]] = params[1];
  }
  return vars;
}

function getAccessToken(_code){

	$.ajax('https://api.instagram.com/oauth/access_token', {
		type: 'POST',
		dataType: 'json',
		data: {
			'client_id':'114ad5620479499b9302a2c2df8e6f7e',
			'client_secret':'b0862bc7285b4e4a838dc7047fc0384a',
			'grant_type':'authorization_code',
			'redirect_uri':'http://kumafu.github.io/a-map/',
			'code':_code
		},
		success: function(_json) {
			console.log(_json);
		}
	});
}