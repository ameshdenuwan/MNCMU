// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ... your existing JavaScript ...

// Number Counting Animation
const statisticNumbers = document.querySelectorAll('.statistic-number');

statisticNumbers.forEach(number => {
    const target = parseInt(number.dataset.target);
    let current = 0;
    let startTime = null;
    const duration = 2000; // Animation duration in milliseconds

    const animateNumber = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const ease = easeOutCubic(progress, 0, 1, duration); // Use easing function

        current = Math.ceil(target * ease);
        number.textContent = current > target ? target : current;

        if (progress < duration) {
            requestAnimationFrame(animateNumber);
        } else {
            number.textContent = target; // Ensure final value is exact
        }
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(animateNumber);
                observer.unobserve(number);
            }
        });
    }, options);

    observer.observe(number);
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const loadingProgress = document.querySelector('.loading-progress');
  
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      loadingProgress.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
        initCarousel();
      }
    }, 300); // Adjust interval for loading speed
  
    function initCarousel() {
      const carousel = document.querySelector('.gallery-detail-carousel');
      const images = document.querySelectorAll('.gallery-detail-image');
      let currentIndex = 0;
  
      function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
  
      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      }, 3000); // Change image every 3 seconds
    }
  });

    // JavaScript for Mobile Slide Menu
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

mobileNavToggle.addEventListener('click', () => {
    const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';
    primaryNavigation.setAttribute('data-visible', !isVisible);
    mobileNavToggle.setAttribute('aria-expanded', !isVisible);
});
  

// Easing Function (Ease Out Cubic)
function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}
});

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

    // Statistics Counting Animation
    document.addEventListener('DOMContentLoaded', function() {
        const statCounts = document.querySelectorAll('.stat-count');
    
        statCounts.forEach(statCount => {
            const target = parseInt(statCount.dataset.target);
            let currentCount = 0;
            const duration = 2000;
            const startTime = performance.now();
    
            function updateCount(timestamp) {
                const elapsedTime = timestamp - startTime;
                if (elapsedTime < duration) {
                    const progress = elapsedTime / duration;
                    currentCount = Math.ceil(target * progress);
                    statCount.textContent = currentCount;
                    requestAnimationFrame(updateCount);
                } else {
                    statCount.textContent = target;
                }
            }
    
            requestAnimationFrame(updateCount);
        });
    });
    
    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Message sent!');
            contactForm.reset();
        });
    }

    // Smooth Scrolling Logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in Animation on Scroll (Example for Event Items)
    const eventItems = document.querySelectorAll('.event-item');

    function checkSlide() {
        eventItems.forEach(eventItem => {
            const slideInAt = (window.scrollY + window.innerHeight) - eventItem.offsetHeight / 2;
            const eventItemBottom = eventItem.offsetTop + eventItem.offsetHeight;
            const isHalfShown = slideInAt > eventItem.offsetTop;
            const isNotScrolledPast = window.scrollY < eventItemBottom;

            if (isHalfShown && isNotScrolledPast) {
                eventItem.classList.add('slide-in');
            } else {
                eventItem.classList.remove('slide-in');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide();
});

document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '+94761544734'; // Replace with your WhatsApp number (with country code)
    const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    const whatsappLink = `https://wa.me/<span class="math-inline">\{whatsappNumber\}?text\=</span>{encodedMessage}`;

    window.open(whatsappLink, '_blank');
});

