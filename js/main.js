var data = {};
var selectedFile = [];
var selectedRows = [];
var tabs;
var data_dir = "";
$(document).ready(function(){
    init();
});

function init(){
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'あーマップ',
        clientId: '114ad5620479499b9302a2c2df8e6f7e'
    });
    feed.run();
}

function getFeed(){
	$.ajax('https://api.instagram.com/v1/users/self/media/recent?access_token=1449629.114ad56.71120074c8bc4e2e952f18890106423d', {
		type: 'GET',
		dataType: 'json',
		success: function(_json) {
			console.log(_json);
		}
	});
}