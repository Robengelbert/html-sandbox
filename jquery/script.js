$(document).ready(function(){
	$("p").hover(function() {
		$(this).addClass("highlight");
	}, function(){
		$($this).removeClass("highlight");
	});
});