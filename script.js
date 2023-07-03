document.addEventListener('DOMContentLoaded', function() {
  var texto = document.getElementById('texto-meio');
  var titulo = document.getElementById('Titulo-meio');
  
  function aparecerTexto() {
    var alturaJanela = window.innerHeight;
    var posicaoTexto = texto.getBoundingClientRect().top;
    var posicaoTitulo = titulo.getBoundingClientRect().top;

    if (posicaoTexto < alturaJanela) {
      texto.classList.remove('escondido');
      texto.classList.add('aparecer');
    }

    if (posicaoTitulo < alturaJanela) {
      titulo.classList.remove('T-escondido');
      titulo.classList.add('aparecer');
    }
  }

  window.addEventListener('scroll', aparecerTexto);
});


  function aparecerImagem() {
    var imagem = document.getElementById('imagem');
    var alturaJanela = window.innerHeight;
    var posicaoImagem = imagem.getBoundingClientRect().top;

    if (posicaoImagem < alturaJanela) {
        imagem.style.opacity = 1;
    }
}

window.addEventListener('scroll', aparecerImagem);

window.addEventListener('resize', adaptarImagem);

function adaptarTexto() {
  var infoParagrafos = document.querySelectorAll('#menuinformacional .info p');

  infoParagrafos.forEach(function(paragrafo) {
    var larguraJanela = window.innerWidth;

    if (larguraJanela < 600) {
      paragrafo.style.fontSize = '4vw'; // Tamanho do texto proporcional à largura da janela
    } else if (larguraJanela < 400) {
      paragrafo.style.fontSize = '3em'; // Tamanho do texto relativo ao elemento pai
    } else {
      paragrafo.style.fontSize = '20px'; // Tamanho padrão do texto
    }
  });
}

window.addEventListener('resize', adaptarTexto);
adaptarTexto();