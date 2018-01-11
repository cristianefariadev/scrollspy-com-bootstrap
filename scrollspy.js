$(document).ready(function(){
    
  // Adiciona scrollspy no <body>
  $('body').scrollspy({target: ".navbar", offset: 80});   

  // Adicione uma rolagem suave em todos os links dentro da barra de navegação
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // Usando o método animate() do jQuery para adicionar uma rolagem suave na página
      // O número (1000) especifica o número de milissegundos necessários para rolar para a área especificada
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    }  
  });
});

//função para ocultar o navbar no responsivo ao clicar
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

