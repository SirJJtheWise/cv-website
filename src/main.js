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

// 3. Simple Hero Animation (Parallax or Fade-in)
// Fade in elements on load
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(20px)';
  heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

  setTimeout(() => {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 100);
});

console.log('CV Website Loaded - Ready for assets!');
