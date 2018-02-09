function links_cor(){
	
	$(window).scroll(function(){
		var home = $('#home').offset().top;
		var section2 = $('#section2').offset().top;
		var section3 = $('#section3').offset().top;
		var section5 = $('#section5').offset().top;
		var scroll = $(window).scrollTop();
		var aba_home = document.getElementById('aba_home');
		var aba_trabalhos = document.getElementById('aba_trabalhos');
		var aba_servicos = document.getElementById('aba_servicos');
		var aba_habilidades = document.getElementById('aba_habilidades');
		if(scroll >= home && scroll < section2){
			aba_home.style.color = 'skyblue';
		}else{
			aba_home.style.color = '';
		}
		if (scroll >= section2 && scroll < section3 ) {
			aba_trabalhos.style.color = 'skyblue';
		}else{
			aba_trabalhos.style.color = '';
		}
		if (scroll >= section3 && scroll < section5 ) {
			aba_servicos.style.color = 'skyblue';
		}else{
			aba_servicos.style.color = '';
		}
		if (scroll >= section5 ) {
			aba_habilidades.style.color = 'skyblue';
		}else{
			aba_habilidades.style.color = '';
		}

});
}
links_cor();