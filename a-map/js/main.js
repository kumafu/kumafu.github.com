var data = {};
var selectedFile = [];
var selectedRows = [];
var tabs;
var data_dir = "";
var aMapTag = "あーマップ";

var ACCESS_TOKEN = "";
$(document).ready(function(){
	// var params = get_url_vars();
	if (location.hash){
		var hash = location.hash;
		if (hash.indexOf('#access_token=') != -1){
			ACCESS_TOKEN = hash.replace('#access_token=','');
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
		dataType: 'jsonp',
		data:{
			'access_token':ACCESS_TOKEN
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		},
		success: function(data, textStatus, jqXHR) {
			console.log(data);
			gotoMain(data);
		}
	});
}

function gotoMain(_data){
	var username = _data.data.username;
	$('#user-info').html("<span>"+username+" でログイン中</span>")
	$('#login').hide();
	$('#main').show();
	getFeed();

}

function getFeed(){
	$.ajax('https://api.instagram.com/v1/tags/'+aMapTag+'/media/recent', {
		type: 'GET',
		dataType: 'jsonp',
		data:{
			'access_token':ACCESS_TOKEN
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		},
		success: function(data, textStatus, jqXHR) {
			console.log(data);
		}
	});
}