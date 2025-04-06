document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slider__slide");
  let currentIndex = 0;
  let totalSlides = slides.length;
  
  const nextBtn = document.querySelector(".slider__control--right");
  const prevBtn = document.querySelector(".slider__control--left");

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("s--active", "s--prev");

      if (i === index) {
        slide.classList.add("s--active");
      } else if (i === index - 1) {
        slide.classList.add("s--prev");
      }
    });
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
  });

  goToSlide(currentIndex);
});


  