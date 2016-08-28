$(document).ready(function() {
	$(".start").click(function() {
		$("p").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
	});
	$(".reset").click(function(){
		$("p").removeAttr("style");
	});

});
