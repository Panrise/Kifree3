$(document).on("click", "#myButton", function(){

	$.get( "https://taketake.azurewebsites.net" ).done( function(value) {
		alert(value);
	});

});
