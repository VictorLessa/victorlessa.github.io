function carregar_barra(){
	var $window = $(window);

	function iniciar_design(){
	$window.scroll(function(){
		var scroll = $(document).scrollTop();
		var barraTop = $('.design').offset().top;
		var janela = $(window).height() * 3/4 + 130;
		if(scroll > barraTop - janela){
			$('.design').addClass('ativar-design');
		}else{
			$('.design').removeClass('ativar-design');
		}
	});
}
iniciar_design();


	function iniciar_desenvolvimento(){
		$window.scroll(function(){
		var scroll = $(document).scrollTop();
		var barraTop = $('.desenvolvimento').offset().top;
		var janela = $(window).height() * 3/4 + 130;
		if(scroll > barraTop - janela){
			$('.desenvolvimento').addClass('ativar-desenvolvimento');
		}else{
			$('.desenvolvimento').removeClass('ativar-desenvolvimento');
		}
	});
	}
	iniciar_desenvolvimento();


	function iniciar_commerce(){
		$window.scroll(function(){
		var scroll = $(document).scrollTop();
		var barraTop = $('.commerce').offset().top;
		var janela = $(window).height() * 3/4 + 130;
		if(scroll > barraTop - janela){
			$('.commerce').addClass('ativar-commerce');
		}else{
			$('.commerce').removeClass('ativar-commerce');
		}
	});
	}
	iniciar_commerce();
}


carregar_barra();