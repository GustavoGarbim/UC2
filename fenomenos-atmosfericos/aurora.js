const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item2');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

const swiper = new Swiper(".swiper-slider", {
	// Optional parameters
	centeredSlides: true,
	slidesPerView: 1,
	grabCursor: true,
	freeMode: false,
	loop: true,
	mousewheel: false,
	keyboard: {
	  enabled: true
	},
  
	// Enabled autoplay mode
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false
	},
  
	// If we need pagination
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: false,
	  clickable: true
	},
  
	// If we need navigation
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev"
	},
  
	// Responsive breakpoints
	breakpoints: {
	  640: {
		slidesPerView: 1.25,
		spaceBetween: 20
	  },
	  1024: {
		slidesPerView: 2,
		spaceBetween: 20
	  }
	}
  });


document.addEventListener('DOMContentLoaded', () => {
    const botaoSom = document.querySelector('.botao-som');
    const audio = new Audio('aurora-som.mp4'); // Substitua pelo caminho do seu arquivo de áudio
    
    botaoSom.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            botaoSom.textContent = 'Parar Som';
        } else {
            audio.pause();
            botaoSom.textContent = 'Reproduzir Som';
        }
    });
});


// BOTAO SOM
const audio = document.getElementById('somFundo');

function controleSom() {
    if (audio.paused) {
        audio.play();
        document.querySelector('.botao-som').textContent = 'Parar Som';
    } else {
        audio.pause();
        document.querySelector('.botao-som').textContent = 'Tocar Som';
    }
}

window.onload = function() {
    audio.play().catch(error => {
        console.log('Erro ao reproduzir áudio automaticamente:', error);
    });
};