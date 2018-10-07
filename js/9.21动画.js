$(function(){
	$(".box").mouseover(function(){
//		$(".son").fadeToggle('slow’');
//		$(".son").slideUp("slow").delay(800).fadeIn(400);
		$(".son").animate({marginTop:100},100)
	})
	$('box').onmouseout(function(){
		$(".box").animate({marginTop:0},100)
	})
	
})