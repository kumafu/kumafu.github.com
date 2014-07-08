var data = {};
var selectedFile = [];
var selectedRows = [];
var tabs;
var data_dir = "";

var ACCESS_TOKEN = "";
$(document).ready(function(){
	// var params = get_url_vars();
	if (location.hash){
		var hash = location.hash;
		if (hash.indexOf('#access_token=') != -1){
			ACCESS_TOKEN = hash.replace('#access_token=','');
			alert(ACCESS_TOKEN);
			getUserInfo();
		}
	}
    init();
});

function init(){
}

function getUserInfo(){

	$.ajax('https://api.instagram.com/v1/users/self', {
		type: 'GET',
		dataType: 'json',
		data:{
			'access_token':ACCESS_TOKEN
		},
		success: function(_json) {
			console.log(_json);
		}
	});
}