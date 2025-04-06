document.addEventListener('DOMContentLoaded', function() {
	// Criando o elemento canvas para o rastro
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	
	// Configurando o canvas
	canvas.style.position = 'fixed';
	canvas.style.top = '0';
	canvas.style.left = '0';
	canvas.style.pointerEvents = 'none';
	canvas.style.zIndex = '9999';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	
	// Array para armazenar as posições do mouse
	const mousePositions = [];
	const maxPositions = 20; // Reduzido o comprimento do rastro
	
	// Cores do arco-íris
	const rainbowColors = [
	  '#FF0000', // Vermelho
	  '#FF7F00', // Laranja
	  '#FFFF00', // Amarelo
	  '#00FF00', // Verde
	  '#0000FF', // Azul
	  '#4B0082', // Índigo
	  '#9400D3'  // Violeta
	];
	
	// Variáveis para desenho
	let mouseX = 0;
	let mouseY = 0;
	
	// Evento para capturar o movimento do mouse
	document.addEventListener('mousemove', function(e) {
	  mouseX = e.clientX;
	  mouseY = e.clientY;
	  
	  // Adicionar nova posição
	  mousePositions.push({x: mouseX, y: mouseY});
	  
	  // Limitar o número de posições
	  if (mousePositions.length > maxPositions) {
		mousePositions.shift();
	  }
	});
	
	// Função para desenhar o rastro
	function drawRainbowTrail() {
	  // Limpar completamente o canvas para cada frame
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  
	  // Desenhar o rastro se tiver pontos suficientes
	  if (mousePositions.length > 2) {
		// Para cada segmento entre pontos do mouse
		for (let i = 0; i < mousePositions.length - 1; i++) {
		  const point = mousePositions[i];
		  const nextPoint = mousePositions[i + 1];
		  
		  // Calcular a grossura baseada na posição no rastro (mais fino agora)
		  const thickness = 5 * (i / mousePositions.length) + 1;
		  
		  // Calcular a opacidade para desaparecer gradualmente
		  const opacity = i / mousePositions.length;
		  
		  // Selecionar a cor do arco-íris
		  const colorIndex = Math.floor((i / mousePositions.length) * rainbowColors.length);
		  const color = rainbowColors[rainbowColors.length - 1 - colorIndex];
		  
		  // Converter cor para formato rgba para controlar a opacidade
		  const r = parseInt(color.slice(1, 3), 16);
		  const g = parseInt(color.slice(3, 5), 16);
		  const b = parseInt(color.slice(5, 7), 16);
		  
		  // Desenhar uma linha com a cor do arco-íris
		  ctx.beginPath();
		  ctx.moveTo(point.x, point.y);
		  ctx.lineTo(nextPoint.x, nextPoint.y);
		  ctx.lineWidth = thickness;
		  ctx.lineCap = 'round';
		  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
		  ctx.stroke();
		}
	  }
	  
	  // Continuar animação
	  requestAnimationFrame(drawRainbowTrail);
	}
	
	// Iniciar a animação
	drawRainbowTrail();
	
	// Ajustar o tamanho do canvas quando a janela for redimensionada
	window.addEventListener('resize', function() {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	});
  });


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
  













  





