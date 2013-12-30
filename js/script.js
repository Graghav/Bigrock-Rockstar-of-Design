
$(function(){
	NProgress.done(true);
	$("#domain-search").on('focus keyup',function(){
		
		if($("#domain-search").val() == "Enter your Domain name") {
			$("#domain-search").val("").css("color","#5c5c5c");
		}
		
		$("#domain-search").css("opacity","1");
		
		
	});
	
	$("#domain-search").blur(function(){
		if($("#domain-search").val() == "") {
				$("#domain-search").val("Enter your Domain name");
		}
		
		$("#domain-search").css("opacity","0.5");	
	});
	
	//Start the testimonials rotator
	$( '#testimonial-rotator' ).cbpQTRotator();

	//Cart pull out sidebar
	$(".cart-logo").on('click',function(){
		$(".cart-pull-out-wrapper").addClass("pull-out");
	});

	$(".cart-pull-out-wrapper").on('mouseleave',function(){
		$(".cart-pull-out-wrapper").removeClass("pull-out");
	});


});