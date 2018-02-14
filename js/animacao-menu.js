function tirar_fixed(){
	var $window = $(window);

	$window.scroll(function(){
		$('.menu-fixed').each(function(){
			var scroll = $(document).scrollTop();
			if (scroll > 30){
				$(this).addClass('menu-desfixed');
			}else{
				$(this).removeClass('menu-desfixed');
			}
		});
	});

	function mostrar_menu(){
		$window.scroll(function(){
			$('.menu-que-vai-aparecer').each(function(){
				var scroll = $(document).scrollTop();
				if(scroll > 35){
					$(this).addClass('menu-aparecendo');
				}else{
					$(this).removeClass('menu-aparecendo');
				}
			});
		});
	}
	mostrar_menu();
	
}
tirar_fixed();

