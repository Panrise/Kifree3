$(document).on("click", "#sendButton", function () {
	var sendName = $("#sendName").val();
	var sendText = $("#sendText").val();
	var sendroom = $("#sendroom").val();
	var url = "https://taketake.azurewebsites.net/api/HttpTrigger1?code=WRYArh2Z8sXoJM0VyKf0hgzk6UWhXQr2sZbCZTB9LtiBLKZbA/BETg==";
	url = url + "&name=" + sendName + "&message=" + sendText+ "&room" + sendroom ;
	$.get(url).done(function (string) {
		var object = JSON.parse(string);
		var myHTML = '';
		for (var i = 0; i < object.length; i++) {
			myHTML += '<div class="balloon6">';
			myHTML += '  <div class="name">';
			myHTML += object[i].name;
			myHTML += '  </div>';
			myHTML += '  <div class="chatting">';
			myHTML += '    <div class="says">';
			myHTML += object[i].message;
			myHTML += '    </div>';
			myHTML += '  </div>';
			myHTML += '</div>';
		}
		$("#message").html(myHTML);
	});

});