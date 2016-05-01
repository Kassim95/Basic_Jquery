$(document).ready(function(){
	$("body").click(function(e){
		$("body").hide();
		$(".hey").hide();
		$(".text3").animate({
		   opacity: 0.9, 
		   width: "70%" 
		 } , 6000 );
		$("body").fadeIn(4000);

		$(".text2").slideUp(5000);

		$("h3").mouseover(function(){
			$("h3").html("Ouattara")
		});
	});	
})