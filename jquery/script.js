$(document).ready(function(){
	$(".toggle-btn").click(function(){
		$("p").toggle(1000, function(){
			alert("toggle");
		});
	});
});