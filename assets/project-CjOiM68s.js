import"./style-Co3NcvAX.js";const o={"medical-ai":{title:"Medical Deep Learning",subtitle:"Carotid Plaque Segmentation & Tracking",tags:["Python","PyTorch","Deep Learning","Computer Vision"],description:`
      <h2>Overview</h2>
      <p>During my Clinical Internship at CAMP, I developed a sophisticated Deep Learning pipeline designed to assist in the analysis of medical imaging data. The primary goal was to automate the segmentation and tracking of carotid plaques, which is critical for stroke risk assessment.</p>
      
      <h2>Technical Challenge</h2>
      <p>Medical datasets are often noisy and unlabeled. I had to process raw medical data sets using Python and design a custom neural network architecture capable of handling temporal consistency across frames.</p>
      
      <h2>Key Outcomes</h2>
      <ul>
        <li>Implemented a U-Net based architecture for semantic segmentation.</li>
        <li>Achieved high accuracy in plaque boundary detection.</li>
        <li>Processed large volumetric datasets efficiently.</li>
      </ul>
    `,videoSrc:null},hpc:{title:"HPC Algorithm Optimization",subtitle:"Leibniz Supercomputing Centre (LRZ)",tags:["C++","C","GPU","CUDA","MPI"],description:`
      <h2>Overview</h2>
      <p>Working at the Leibniz Supercomputing Centre, I focused on pushing the limits of computational performance. My role involved optimizing scientific algorithms to run efficiently on high-performance clusters.</p>
      
      <h2>Optimization Strategy</h2>
      <p>I refactored legacy C and C++ codebases to leverage parallel processing capabilities. This involved memory management optimization and implementing GPU kernels.</p>
    `,videoSrc:null},hackatum:{title:"Open Source Map App",subtitle:"Hackatum 2022 Project",tags:["Flutter","Dart","Django","Android"],description:`
      <h2>The Hackathon Entry</h2>
      <p>Built during the 48-hour Hackatum event, this Android application aims to gamify the collection of OpenStreetMap data.</p>
      
      <h2>Full Stack Implementation</h2>
      <p>I worked on the frontend using Flutter to ensure a smooth, native-like experience on Android, while the backend was built with Django to handle geospatial data queries.</p>
    `,videoSrc:null},automation:{title:"Test Automation Framework",subtitle:"Software Developer at WWK",tags:["Java","Python","Selenium","Data Analysis"],description:`
      <h2>Professional Experience</h2>
      <p>As a working student at WWK, I was responsible for improving the QA process. I developed automated testing tools in Java that reduced manual testing time significantly.</p>
      
      <h2>Data Analysis</h2>
      <p>Additionally, I created Python scripts to parse log files and visualize error rates, helping the team catch regressions earlier in the release cycle.</p>
    `,videoSrc:null}};document.addEventListener("DOMContentLoaded",()=>{const n=new URLSearchParams(window.location.search).get("id");if(!n||!o[n]){document.getElementById("p-title").textContent="Project Not Found",document.getElementById("p-subtitle").textContent="The project you are looking for does not exist.";return}const e=o[n];document.getElementById("p-title").innerHTML=e.title,document.getElementById("p-subtitle").textContent=e.subtitle;const a=document.getElementById("p-tags");if(a.innerHTML="",e.tags.forEach(t=>{const i=document.createElement("span");i.className="tag",i.textContent=t,a.appendChild(i)}),document.getElementById("p-content").innerHTML=e.description,e.videoSrc){const t=document.getElementById("media-container");t.innerHTML=`
      <video src="${e.videoSrc}" controls autoplay muted loop style="width:100%; height:100%; object-fit:contain;"></video>
    `}else{const t=document.getElementById("media-container");t.innerHTML=`
       <div style="text-align:center;">
          <h3 style="color:#555; margin-bottom:0.5rem;">Video Coming Soon</h3>
          <p style="color:#444;">Deploy to see updates</p>
       </div>
    `}document.title=`${e.title} | Jason Mann`});
