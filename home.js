const slider = document.querySelector('.slider');

function nextSlide() {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);
}

function prevSlide() {
  const items = document.querySelectorAll('.item');
  slider.prepend(items[items.length - 1]);
}

// Remove o evento geral 'activate' para evitar duplicação
// document.addEventListener('click', activate, false);

// Configura o auto slide
let autoSlide = setInterval(nextSlide, 3000);

// Evento para o botão "next"
document.querySelector('.next').addEventListener('click', () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(nextSlide, 3000);
});

// Evento para o botão "prev"
document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, 3000);
});