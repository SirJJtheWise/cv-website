import"./style-CIkEmENU.js";const o={"medical-ai":{title:"Simultaneous Tracking & Segmentation",subtitle:"Bachelor Thesis: Carotid Plaque Analysis",tags:["Python","PyTorch","Deep Learning","Computer Vision","Medical Imaging"],description:`
      <h2>Motivation & Objectives</h2>
      <p>Stroke is a leading cause of death worldwide. The state of the carotid plaque indicates the likelihood of a stroke. Ultrasound is a low-cost, noninvasive imaging method but suffers from noise and occlusion.</p>
      <p>My thesis focused on creating a network to <strong>segment and track carotid plaques</strong> in ultrasound sequences to aid diagnosis and maximize accuracy.</p>
      
      <h2>Proposed Method</h2>
      <p>I designed a novel architecture combining a <strong>Tracking Encoder</strong> (inspired by DiMP) and a <strong>Segmentation Decoder</strong> (using refinement modules). This hybrid approach leverages temporal information from tracking to improve segmentation robustness.</p>
      
      <div style="margin: 2rem 0; text-align:center;">
         <p style="font-size:0.9rem; color:#888; margin-bottom:0.5rem;">Qualitative Results: Example Segmentation</p>
         <img src="./Example_segmentation.png" alt="Segmentation Example" style="max-width:100%; border-radius:8px; border:1px solid #333;">
      </div>

      <h2>Results & Performance</h2>
      <p>The network was trained on a dataset from Klinikum West covering 18 patients (~4000 frames). The results showed performance on par with state-of-the-art networks like DeepLab3+, with improved robustness in vessel area tracking.</p>

      <div style="margin: 2rem 0; text-align:center;">
         <p style="font-size:0.9rem; color:#888; margin-bottom:0.5rem;">Quantitative Comparison (DSC Scores)</p>
         <img src="./Medical_DeepLearning_performance_graph.png" alt="Performance Graph" style="max-width:100%; border-radius:8px; border:1px solid #333;">
      </div>
    `,mediaType:"image",mediaSrc:"./Medical_DeepLearning_Network_Architecure.png"},hpc:{title:"HPC Performance Engineering",subtitle:"BEAST Lab @ Leibniz Supercomputing Centre",tags:["C++","OpenMP","MPI","AVX512","ARM SVE","Performance Analysis"],description:`
      <h2>BEAST Lab Overview</h2>
      <p>Participated in the <strong>Bavarian Energy Architecture and Software Testbed (BEAST)</strong> lab at LRZ. The focus was on the experimental evaluation of single-node performance across a diverse range of next-generation architectures.</p>
      
      <h2>Target Architectures</h2>
      <p>I benchmarked and optimized kernels for specific instruction sets and hardware constraints on cutting-edge systems:</p>
      <ul>
        <li><strong>Intel Icelake</strong> (x86-64 + AVX512)</li>
        <li><strong>AMD Rome</strong> (x86-64 + AVX2)</li>
        <li><strong>Marvell ThunderX2</strong> (ARM AArch64 + Neon)</li>
        <li><strong>Fujitsu A64FX</strong> (ARM AArch64 + SVE)</li>
      </ul>

      <h2>Optimization & Analysis</h2>
      <p>The work involved deep performance analysis and code tuning using <strong>OpenMP</strong> and SIMD vectorization. I optimized memory access patterns (Triad/Traversal) and compute-bound kernels (Matrix Multiplication) to exploit the specific capabilities of each architecture, such as the scalability of ARM SVE on the A64FX.</p>
    `,mediaType:"image",mediaSrc:"./HPC image.png"},hackatum:{title:"Open Source Map App",subtitle:"Hackatum 2022 Project",tags:["Flutter","Dart","Django","Android"],description:`
      <h2>The Hackathon Entry</h2>
      <p>Built during the 48-hour Hackatum event, this Android application aims to gamify the collection of OpenStreetMap data.</p>
      
      <h2>Full Stack Implementation</h2>
      <p>I worked on the frontend using Flutter to ensure a smooth, native-like experience on Android, while the backend was built with Django to handle geospatial data queries.</p>
    `,videoSrc:null},automation:{title:"Test Automation Framework",subtitle:"Software Developer at WWK",tags:["Java","Python","Selenium","Data Analysis"],description:`
      <h2>Professional Experience</h2>
      <p>As a working student at WWK, I was responsible for improving the QA process. I developed automated testing tools in Java that reduced manual testing time significantly.</p>
      
      <h2>Data Analysis</h2>
      <p>Additionally, I created Python scripts to parse log files and visualize error rates, helping the team catch regressions earlier in the release cycle.</p>
    `,videoSrc:null},"churn-analyzer":{title:"Customer Churn Prediction",subtitle:"Telecommunications Data Analysis",tags:["Python","Scikit-Learn","Pandas","Random Forest"],description:`
      <h2>Project Overview</h2>
      <p>Targeting specific pain points in the telecommunications sector, I developed a machine learning model to predict customer churn. The goal was to identify at-risk customers early to enable proactive retention strategies.</p>
      
      <h2>Methodology</h2>
      <p>The solution involved cleaning and preprocessing a dataset of customer profiles (demographics, services, payment info). I implemented <strong>One-Hot Encoding</strong> for categorical variables and utilized ensemble methods for prediction.</p>
      
      <h2>Technical Implementation</h2>
      <p>Using <strong>Scikit-Learn</strong>, I trained and evaluated multiple models, including <strong>Logistic Regression</strong> and <strong>Random Forest Classifiers</strong>. The models were evaluated using balanced accuracy scores to handle class imbalance effectively.</p>
    `,mediaType:"image",mediaSrc:"./churn_visual.png"}};document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search).get("id");if(!t||!o[t]){document.getElementById("p-title").textContent="Project Not Found",document.getElementById("p-subtitle").textContent="The project you are looking for does not exist.";return}const e=o[t];document.getElementById("p-title").innerHTML=e.title,document.getElementById("p-subtitle").textContent=e.subtitle;const a=document.getElementById("p-tags");a.innerHTML="",e.tags.forEach(r=>{const i=document.createElement("span");i.className="tag",i.textContent=r,a.appendChild(i)}),document.getElementById("p-content").innerHTML=e.description;const n=document.getElementById("media-container");e.mediaSrc?e.mediaType==="video"?n.innerHTML=`
        <video src="${e.mediaSrc}" controls autoplay muted loop style="width:100%; height:100%; object-fit:contain;"></video>
      `:e.mediaType==="image"&&(n.innerHTML=`
        <img src="${e.mediaSrc}" alt="${e.title} Visual" style="width:100%; height:100%; object-fit:contain;">
      `):n.innerHTML=`
       <div style="text-align:center;">
          <h3 style="color:#555; margin-bottom:0.5rem;">Visual Coming Soon</h3>
          <p style="color:#444;">Deploy to see updates</p>
       </div>
    `,document.title=`${e.title} | Jason Mann`});
