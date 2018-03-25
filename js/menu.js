$(document).ready(function(){


	function togglemenu(){
		$('.bar-top').toggleClass('bar-top-active');
		$('.bar-bottom').toggleClass('bar-bottom-active');
		$('.main').toggleClass('main-active');
		$('.link-item').toggleClass('link-item-active');

	}

	$('.bar').on('click tap', function(){
	    togglemenu();
	  });

	 $(document).keyup(function(e) {
	    if (e.keyCode === 27) {
	      togglemenu();
	    }
	  });
	
});
