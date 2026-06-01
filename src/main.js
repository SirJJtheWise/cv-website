// Main entry point logic

// 1. Navigation Active State & Smooth Scroll handling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Offset for sticky nav
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) {
      a.classList.add('active');
    }
  });
});

// 2. Video Hover Effects (Placeholder Logic)
// This logic assumes you will put actual <video> tags in the .video-container
// For now, we will just log to console or simulate the 'active' class if needed
// but CSS hover usually handles the overlay opacity.

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const video = card.querySelector('video');
  if (video) {
    card.addEventListener('mouseenter', () => {
      // video.play(); 
      // console.log('Playing preview...');
    });

    card.addEventListener('mouseleave', () => {
      // video.pause();
      // video.currentTime = 0;
      // console.log('Stopping preview...');
    });
  }
});

// 3. Scroll Reveal Animations
// Select elements to animate
const revealElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, h2:not(.gradient-text)');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  root: null,
  threshold: 0.15, // Trigger when 15% visible
  rootMargin: "0px"
});

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Hero Animation (keeping existing but ensuring it doesn't conflict)
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
});

console.log('CV Website Loaded - Animations Initialized!');
