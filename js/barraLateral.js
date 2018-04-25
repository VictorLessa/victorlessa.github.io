// JavaScript Document
$(document).ready(function(){
	$(window).scroll(function(){
		var home = $('.home').offset().top  * 2/3;
		var web = $('.web').offset().top  * 2/3 ;
		var sobre = $('.sobre').offset().top  * 2/3;
		var contato = $('.contato').offset().top * 2/3;
		var topo = $(window).scrollTop();

		console.log(contato, 'teste');
		//script para a barra da home
		if(topo < web ){
			$('.bar1').addClass('active');
		}else{
			$('.bar').removeClass('active');
		}
		//script para barra web
		if(topo < sobre && topo >= web ){
			$('.bar2').addClass('active');
		}else{
			$('.bar2').removeClass('active');
		}
		//script para a barra sobre
		if(topo < contato && topo >= sobre ){
			$('.bar3').addClass('active');
		}else{
			$('.bar3').removeClass('active');
		}
		//script para a barra contato 
		if(topo >= contato ){
			$('.bar4').addClass('active');
		}else{
			$('.bar4').removeClass('active');
		}
		
		
	});
});