document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen Logic
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');
  const progressBar = document.querySelector('.loading-progress');

  let progress = 0;
  const interval = setInterval(function() {
      progress += 1;
      progressBar.style.width = progress + '%';

      if (progress >= 100) {
          clearInterval(interval);
          setTimeout(function() {
              loadingScreen.style.opacity = '0';
              setTimeout(function() {
                  loadingScreen.style.display = 'none';
                  content.style.display = 'block';
                  content.style.opacity = '1';
              }, 500);
          }, 500);
      }
  }, 30);

  // Carousel Logic
  const carousel = document.querySelector('.gallery-detail-carousel');
  const images = document.querySelectorAll('.gallery-detail-image');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;

  function updateCarousel() {
      images.forEach(img => img.classList.remove('active'));
      images[currentIndex].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
  });

  updateCarousel(); // Show the first image on page load
});