function link_automatico(){
  $(document).ready(function($) {
      $(".scroll").click(function(event){ 
        $("#botao_menu").attr('checked', false);
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
        event.preventDefault(); 
      }); 
    });
}
link_automatico();

