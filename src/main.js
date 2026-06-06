// Main entry point logic

// 0. Preloader Logic
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  let progress = 0;
  
  // Simulate loading progress
  const interval = setInterval(() => {
    progress += Math.random() * 15; // Random increment
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (preloaderBar) preloaderBar.style.width = `${progress}%`;
      
      // Hide preloader after a short delay
      setTimeout(() => {
        if (preloader) preloader.classList.add('hidden');
      }, 400);
    } else {
      if (preloaderBar) preloaderBar.style.width = `${progress}%`;
    }
  }, 100);
});

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

// 4. Timeline Progress Bar
const timelineSection = document.getElementById('timeline');
const timelineProgress = document.getElementById('timeline-progress');

if (timelineSection && timelineProgress) {
  window.addEventListener('scroll', () => {
    const sectionTop = timelineSection.offsetTop;
    const sectionHeight = timelineSection.clientHeight;
    
    // We want the line to start drawing when the middle of the screen hits the top of the timeline
    const scrollPosition = window.scrollY + (window.innerHeight / 2);
    
    if (scrollPosition >= sectionTop) {
      let progress = ((scrollPosition - sectionTop) / (sectionHeight - window.innerHeight / 2)) * 100;
      progress = Math.max(0, Math.min(progress, 100)); // Clamp between 0 and 100
      timelineProgress.style.height = `${progress}%`;
    } else {
      timelineProgress.style.height = '0%';
    }
  });
}

// 5. Global Scroll Flow
const globalProgress = document.getElementById('global-scroll-progress');

if (globalProgress) {
  window.addEventListener('scroll', () => {
    // Total height of the document minus the viewport height
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY;
    
    if (scrollHeight > 0) {
      let progress = (scrollY / scrollHeight) * 100;
      progress = Math.max(0, Math.min(progress, 100)); // Clamp between 0 and 100
      globalProgress.style.height = `${progress}%`;
    }
  });
}

console.log('CV Website Loaded - Animations Initialized!');
