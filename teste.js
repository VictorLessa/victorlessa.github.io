// JavaScript Document

function inicio(){
	var $window = $(window);
	
	
	$window.scroll(function() {
		$('.anime').each(function(){
			var scroll = $(document).scrollTop();
			var item = $('.menu2').offset().top;
			
			if(scroll > item ){
				$('.anime').addClass('start-anime');
			}else{
				$('.anime').removeClass('start-anime');
			}
		});
	});
	

	
}