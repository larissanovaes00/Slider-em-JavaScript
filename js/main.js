var slides = document.querySelectorAll('#slides .slide');
var slideAtual = 0;

function prevSlide(){
  if(slideAtual !== 0 ){
  slides[slideAtual].className = 'slide';
	slideAtual = (slideAtual-1)%slides.length;
  slides[slideAtual].className = 'slide mostrar';
  } else if(slideAtual <= 0) {
  slideAtual = 6;
  }
}

function nextSlide(){
  slides[slideAtual].className = 'slide';
	slideAtual = (slideAtual+1)%slides.length;
  slides[slideAtual].className = 'slide mostrar';
}

