export const projectData = {
  "medical-ai": {
    title: "Simultaneous Tracking & Segmentation",
    subtitle: "Bachelor Thesis: Carotid Plaque Analysis",
    tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging"],
    description: `
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
    `,
    mediaType: "image",
    mediaSrc: "./Medical_DeepLearning_Network_Architecure.png"
  },
  "hpc": {
    title: "HPC Algorithm Optimization",
    subtitle: "Leibniz Supercomputing Centre (LRZ)",
    tags: ["C++", "C", "GPU", "CUDA", "MPI"],
    description: `
      <h2>Overview</h2>
      <p>Working at the Leibniz Supercomputing Centre, I focused on pushing the limits of computational performance. My role involved optimizing scientific algorithms to run efficiently on high-performance clusters.</p>
      
      <h2>Optimization Strategy</h2>
      <p>I refactored legacy C and C++ codebases to leverage parallel processing capabilities. This involved memory management optimization and implementing GPU kernels.</p>
    `,
    videoSrc: null
  },
  "hackatum": {
    title: "Open Source Map App",
    subtitle: "Hackatum 2022 Project",
    tags: ["Flutter", "Dart", "Django", "Android"],
    description: `
      <h2>The Hackathon Entry</h2>
      <p>Built during the 48-hour Hackatum event, this Android application aims to gamify the collection of OpenStreetMap data.</p>
      
      <h2>Full Stack Implementation</h2>
      <p>I worked on the frontend using Flutter to ensure a smooth, native-like experience on Android, while the backend was built with Django to handle geospatial data queries.</p>
    `,
    videoSrc: null
  },
  "automation": {
    title: "Test Automation Framework",
    subtitle: "Software Developer at WWK",
    tags: ["Java", "Python", "Selenium", "Data Analysis"],
    description: `
      <h2>Professional Experience</h2>
      <p>As a working student at WWK, I was responsible for improving the QA process. I developed automated testing tools in Java that reduced manual testing time significantly.</p>
      
      <h2>Data Analysis</h2>
      <p>Additionally, I created Python scripts to parse log files and visualize error rates, helping the team catch regressions earlier in the release cycle.</p>
    `,
    videoSrc: null
  }
};
