$(document).ready(function(){
	$("form").submit(function(event){
		var mob = /^[1-9]{1}[0-9]{9}$/;
		var currentValue = $("#inputMobile").val();
		if(mob.test(currentValue) == false && currentValue != 10){
			$("p").html("Invalid mobile number").addClass("error").show().fadeOut(1000);
		}else{
			$("p").html("Valid mobile number").addClass("success").show().fadeOut(1000);
		}
		event.preventDefault();

	});
});