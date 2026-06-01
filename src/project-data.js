export const projectData = {
  "medical-ai": {
    title: "Simultaneous Tracking & Segmentation",
    subtitle: "Bachelor Thesis: Carotid Plaque Analysis",
    tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging"],
    description: `
      <h2>Motivation & Objectives</h2>
      <p>Stroke is a leading cause of death worldwide. The state of the carotid plaque indicates the likelihood of a stroke. Ultrasound is a low-cost, noninvasive imaging method but suffers from noise and occlusion.</p>
      <p>My thesis focused on creating a network to <strong>segment and track carotid plaques</strong> in ultrasound sequences to aid diagnosis and maximize accuracy.</p>
      
      <h2>Methodology</h2>
      <p>I designed a novel hybrid architecture combining:</p>
      <ul>
        <li><strong>Tracking Encoder:</strong> Based on the <em>DiMP</em> architecture, using an iterative optimization process to maximize discriminative tracking power.</li>
        <li><strong>Segmentation Decoder:</strong> Utilizes refinement modules (inspired by <em>SiamMask</em>) to produce precise segmentation masks.</li>
      </ul>
      <p>The encoder focuses on the vessel area via tracking, which significantly increases the robustness of the segmentation against ultrasound noise.</p>

      <h2>Dataset & Experiments</h2>
      <p>The dataset was created in collaboration with <strong>Klinikum West</strong>, comprising B-Mode ultrasound sequences from <strong>18 patients</strong> (approx. 4000 vessel frames and 3400 plaque frames). Ground truth masks were manually annotated.</p>

      <h2>Results</h2>
      <p>The network achieved performance on par with state-of-the-art semantic segmentation networks like <strong>DeepLab3+</strong>, while demonstrating superior robustness in maintaining temporal consistency across video frames.</p>
    `,
    mediaType: "image",
    mediaSrc: "./unet_ultrasound.png"
  },
  "hpc": {
    title: "HPC Performance Engineering",
    subtitle: "BEAST Lab @ Leibniz Supercomputing Centre",
    tags: ["C++", "OpenMP", "MPI", "AVX512", "ARM SVE", "Performance Analysis"],
    description: `
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
    `,
    mediaType: "image",
    mediaSrc: "./HPC image.png"
  },
  "hackatum": {
    title: "Gamified OpenStreetMap Tracker",
    subtitle: "Hackatum Project: Full-Stack Mobile App",
    tags: ["Flutter", "Django", "Azure", "Machine Learning", "PostgreSQL"],
    description: `
      <h2>Project Overview</h2>
      <p>Developed a full-stack mobile application that gamifies the process of improving OpenStreetMap (OSM) data. The app enables users to identify, report, and fix road/mapping issues in their local neighborhoods through a competitive interface. By integrating machine learning for automated issue verification, the system incentivizes community contributions.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Interactive Mapping:</strong> Real-time visualization of OSM data and pending issues using <code>flutter_map</code>.</li>
        <li><strong>Gamification:</strong> A competitive "race" mechanic where users earn points and level up by resolving discrepancies.</li>
        <li><strong>AI-Powered Verification:</strong> Integrated <strong>Azure Custom Vision</strong> to automatically classify and verify user-submitted images of road conditions.</li>
      </ul>

      <h2>Technical Stack</h2>
      <p>The solution uses a <strong>Flutter</strong> frontend for cross-platform mobile support and a <strong>Django Rest Framework</strong> backend. Data is managed via PostgreSQL (architected) and Azure Blob Storage, while the machine learning models were developed using Jupyter Notebooks and deployed on Azure.</p>
    `,
    mediaType: "image",
    mediaSrc: "./Mapo.png"
  },
  "automation": {
    title: "Test Automation Framework",
    subtitle: "Working Student @ WWK insurance (Jun '23 - May '24)",
    tags: ["Java", "Playwright", "Spring", "Vue", "Test Automation"],
    description: `
      <h2>Role & Responsibilities</h2>
      <p>As a working student in the IT Test Management & Infrastructure department, I was responsible for the maintenance and expansion of the corporate test automation framework.</p>
      
      <h2>Key contributions</h2>
      <ul>
        <li><strong>Automation Infrastructure:</strong> Supported the migration and introduction of <strong>Playwright</strong> for modern web testing, integrated with a Java/Spring ecosystem.</li>
        <li><strong>Tool Development:</strong> Developed a bespoke <strong>Java application</strong> for automated document evaluation, significantly reducing manual analysis time.</li>
        <li><strong>Maintenance:</strong> Managed and optimized locators within IntelliJ to ensure robust and clear test execution.</li>
      </ul>
    `,
    mediaType: "image",
    mediaSrc: "./WWk_logo.png"
  },
  "kako-ai": {
    title: "Kako AI",
    subtitle: "Currently Running Project",
    tags: ["AI", "Machine Learning", "Innovation"],
    description: `
      <h2>Project Overview</h2>
      <p>An ongoing artificial intelligence initiative. Development is currently in progress.</p>
    `,
    videoSrc: null
  },
  "llm-automation": {
    title: "LLM Business Automation",
    subtitle: "Currently Running Project",
    tags: ["LLM", "Python", "Automation", "Generative AI"],
    description: `
      <h2>Project Overview</h2>
      <p>Leveraging Large Language Models to automate complex business processes and workflows. Currently under active development.</p>
    `,
    videoSrc: null
  },
  "review-analysis": {
    title: "Customer Review Analysis App",
    subtitle: "Currently Running Project",
    tags: ["NLP", "Sentiment Analysis", "Python", "Data Science"],
    description: `
      <h2>Project Overview</h2>
      <p>A comprehensive application to analyze customer feedback and extract actionable insights using Natural Language Processing techniques.</p>
    `,
    videoSrc: null
  },
  "churn-analyzer": {
    title: "Customer Churn Prediction",
    subtitle: "Telecommunications Data Analysis",
    tags: ["Python", "Scikit-Learn", "Pandas", "Random Forest"],
    description: `
      <h2>Project Overview</h2>
      <p>Targeting specific pain points in the telecommunications sector, I developed a machine learning model to predict customer churn. The goal was to identify at-risk customers early to enable proactive retention strategies.</p>
      
      <h2>Methodology</h2>
      <p>The solution involved cleaning and preprocessing a dataset of customer profiles (demographics, services, payment info). I implemented <strong>One-Hot Encoding</strong> for categorical variables and utilized ensemble methods for prediction.</p>
      
      <h2>Technical Implementation</h2>
      <p>Using <strong>Scikit-Learn</strong>, I trained and evaluated multiple models, including <strong>Logistic Regression</strong> and <strong>Random Forest Classifiers</strong>. The models were evaluated using balanced accuracy scores to handle class imbalance effectively.</p>
    `,
    mediaType: "image",
    mediaSrc: "./churn_visual.png"
  }
};
