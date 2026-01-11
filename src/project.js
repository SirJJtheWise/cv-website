import { projectData } from './project-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // 2. Validate ID
    if (!projectId || !projectData[projectId]) {
        document.getElementById('p-title').textContent = "Project Not Found";
        document.getElementById('p-subtitle').textContent = "The project you are looking for does not exist.";
        return;
    }

    const data = projectData[projectId];

    // 3. Inject Data
    document.getElementById('p-title').innerHTML = data.title; // Using innerHTML to allow HTML in title if needed
    document.getElementById('p-subtitle').textContent = data.subtitle;

    // Tags
    const tagsContainer = document.getElementById('p-tags');
    tagsContainer.innerHTML = ''; // Clear loading state
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Content
    document.getElementById('p-content').innerHTML = data.description;

    // Media (Video)
    // Check if user has added a video path in data.js
    if (data.videoSrc) {
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = `
      <video src="${data.videoSrc}" controls autoplay muted loop style="width:100%; height:100%; object-fit:contain;"></video>
    `;
    } else {
        // Show placeholder if no video
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = `
       <div style="text-align:center;">
          <h3 style="color:#555; margin-bottom:0.5rem;">Video Coming Soon</h3>
          <p style="color:#444;">Deploy to see updates</p>
       </div>
    `;
    }

    // Update Page Title
    document.title = `${data.title} | Jason Mann`;
});
