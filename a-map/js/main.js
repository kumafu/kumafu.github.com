var data = {};
var selectedFile = [];
var selectedRows = [];
var tabs;
var data_dir = "";
var aMapTag = "あーマップ";
var map;
var mapcenter;

var itemList = [];
var opened_iw;

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
	mapcenter = new google.maps.LatLng(35.67208,139.653397);
	var opts = {
		zoom: 12,
		center: mapcenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), opts);
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
	google.maps.event.trigger(map, 'resize');
	map.setCenter(mapcenter);
	getFeed();

}

function getFeed(){
	$.ajax('https://api.instagram.com/v1/tags/'+aMapTag+'/media/recent', {
		type: 'GET',
		dataType: 'jsonp',
		data:{
			'count':35,
			'access_token':ACCESS_TOKEN
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		},
		success: function(data, textStatus, jqXHR) {
			console.log(data);
			for (var i in data.data){
				var obj = data.data[i];
				createItem(obj);
			}
		}
	});
}

function createItem(_obj){
	var node = {};
	var imageURL = _obj.images.standard_resolution.url;
	var caption = _obj.caption.text;
	var lat = _obj.location.latitude;
	var lon = _obj.location.longitude;
	var locationName = _obj.location.name;
	var likeCount = _obj.likes.count;


	var div = $("<div>").addClass("item-body").append("<img src='"+imageURL+"'>").append("<b>"+locationName+"</b><br>"+likeCount+" Likes");
	$("#item-area").append(div);

	var m_latlng = new google.maps.LatLng(lat,lon);
	var marker = new google.maps.Marker({
		position: m_latlng,
		title:locationName,
		map: map
	});

	var infoWindow = new google.maps.InfoWindow({
		content:"<div class='infowindow'><img class='iw-image' src='"+imageURL+"'><div class='iw-location-name'><b>"+locationName + "</b></div><div class='iw-caption'>"+caption+"</div></div>"
	});

	node['imageURL'] = imageURL;
	node['caption'] = caption;
	node['lat'] = lat;
	node['lon'] = lon;
	node['locationName'] = locationName;
	node['marker'] = marker;
	node['likeCount'] = likeCount;
	node['infoWindow'] = infoWindow;

	google.maps.event.addListener(marker, 'click', function() {
		if (opened_iw) opened_iw.close();
		opened_iw = infoWindow;
		infoWindow.open(map,marker);
		$("#btn_show").attr("disabled","disabled");
		$("#btn_hide").attr("disabled",false);
	});

	div.click(function(){
		window.scrollTo(0,0);
		google.maps.event.trigger( marker, 'click' );
	});

	itemList.push(node);
}