  const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item2');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

// FIM DA PARTE DO RASTRO ARCO IRIS





// fade in curiosidade
    const items = document.querySelectorAll('#secao-curiosidade .item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' com um pequeno atraso para cada item
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); // Atraso de 200ms entre cada item
                observer.unobserve(entry.target); // Para de observar o item após a animação
            }
        });
    }, {
        threshold: 0.2 // Dispara a animação quando 20% do item estiver visível
    });

    items.forEach(item => {
        observer.observe(item);
    });




















//SLIDER ANTES DA FOOTER

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
  













  





