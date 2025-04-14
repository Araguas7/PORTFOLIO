document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Lizeth's Portfolio!");


 
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

  
    document.querySelectorAll('.carousel').forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-images img');
        let currentSlide = 0;

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            const offset = -currentSlide * 100;
            carousel.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        }

        carousel.querySelector('.prev').addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        carousel.querySelector('.next').addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Initialize
        showSlide(currentSlide);
    });
});


const fadeElements = document.querySelectorAll('.fade-in-paragraph');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
    } else {
      entry.target.classList.remove('animate-visible');
    }
  });
}, {
  threshold: 0.4
});

fadeElements.forEach(el => fadeObserver.observe(el));

const skillCards = document.querySelectorAll('.skill-card');

const skillCardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

skillCards.forEach(card => {
  card.style.animationPlayState = 'paused'; 
  
  skillCardObserver.observe(card);
});

const educationItems = document.querySelectorAll('.education-item');

const educationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

educationItems.forEach(item => educationObserver.observe(item));

document.addEventListener('DOMContentLoaded', () => {
  // Existing DOMContentLoaded code...

  const fadeElements = document.querySelectorAll('.fade-in-paragraph, .fade-in-contact');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => fadeObserver.observe(el));
});

// Hobbies fade-in on scroll
const hobbiesSection = document.querySelector('.fade-in-hobbies');

const hobbiesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});

if (hobbiesSection) {
  hobbiesObserver.observe(hobbiesSection);
}