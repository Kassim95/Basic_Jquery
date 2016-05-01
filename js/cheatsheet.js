
//won`t run until the entirepage is loaded
$(document).ready(function(){});

//anonymous function can 
function(){
	console.log("Hello!");
}

// call back function
var func = function(){ console.log('Kassim')}
function name(f){
	console.log("Your name is ") ;
	f();
}

name(func);

// show and hide
$('body').show();
$('body').hide();

//fade in and fade out 
$('body').fadeIn(4000)
$('body').fadeOut(1000)

//fade in and out with sliding
$("#section-one").slideUp(1000);
$("#section-one").slideDown(1000);

// annimate an element
$(".my-element").animate({
   opacity: 0.25, 
   width: "70%" 
 } , 2000 );

//click event
$("ul li a").click(function(){
  alert('imclicked!');   
} );