import"./style-CTz7fj_L.js";const a={"medical-ai":{title:"Simultaneous Tracking & Segmentation",subtitle:"Bachelor Thesis: Carotid Plaque Analysis",tags:["Python","PyTorch","Deep Learning","Computer Vision","Medical Imaging"],description:`
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
    `,mediaType:"image",mediaSrc:"./unet_ultrasound.png"},hpc:{title:"HPC Performance Engineering",subtitle:"BEAST Lab @ Leibniz Supercomputing Centre",tags:["C++","OpenMP","MPI","AVX512","ARM SVE","Performance Analysis"],description:`
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
    `,mediaType:"image",mediaSrc:"./HPC image.png"},hackatum:{title:"Gamified OpenStreetMap Tracker",subtitle:"Hackatum Project: Full-Stack Mobile App",tags:["Flutter","Django","Azure","Machine Learning","PostgreSQL"],description:`
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
    `,mediaType:"image",mediaSrc:"./Mapo.png"},automation:{title:"Test Automation Framework",subtitle:"Working Student @ WWK insurance (Jun '23 - May '24)",tags:["Java","Playwright","Spring","Vue","Test Automation"],description:`
      <h2>Role & Responsibilities</h2>
      <p>As a working student in the IT Test Management & Infrastructure department, I was responsible for the maintenance and expansion of the corporate test automation framework.</p>
      
      <h2>Key contributions</h2>
      <ul>
        <li><strong>Automation Infrastructure:</strong> Supported the migration and introduction of <strong>Playwright</strong> for modern web testing, integrated with a Java/Spring ecosystem.</li>
        <li><strong>Tool Development:</strong> Developed a bespoke <strong>Java application</strong> for automated document evaluation, significantly reducing manual analysis time.</li>
        <li><strong>Maintenance:</strong> Managed and optimized locators within IntelliJ to ensure robust and clear test execution.</li>
      </ul>
    `,mediaType:"image",mediaSrc:"./WWk_logo.png"},"kako-ai":{title:"KakoAI Industrial Copilot",subtitle:"Automated BOM Extraction & Procurement",tags:["Generative AI","DSPy","Multi-Agent Systems","Python","Automation"],description:`
      <h2>Project Overview</h2>
      <p>KakoAI is an industrial copilot designed to automate critical workflows for a cable confection company. The system acts as a secure bridge between unstructured customer data (technical drawings/PDFs) and structured enterprise resources (ERP systems, procurement APIs).</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>BOM Extraction:</strong> Automatically extracts the Bill of Materials (BOM) from technical drawings and PDFs.</li>
        <li><strong>Inventory & Procurement:</strong> Cross-references components with the internal Xentral ERP system and integrates with the Octopart API for real-time procurement of missing parts.</li>
        <li><strong>Agentic Architecture:</strong> Built using DSPy and a multi-agent system to ensure reliable extraction, validation, and demand analysis.</li>
      </ul>
    `,mediaType:"image",mediaSrc:"./bom_table_edit_new.png"},"llm-automation":{title:"Business AI Automation",subtitle:"Working Student @ e-mobilio",tags:["n8n","Xano DB","HubSpot","Shopify","API Integration"],description:`
      <h2>Role & Focus</h2>
      <p>As a Working Student at <strong>e-mobilio</strong>, I specialize in streamlining complex business operations through advanced workflow automation and robust data architectures.</p>
      
      <h2>Key Integrations & Technologies</h2>
      <ul>
        <li><strong>Workflow Automation:</strong> Leveraging <strong>n8n</strong> to design and implement seamless data flows across enterprise platforms.</li>
        <li><strong>Database Management:</strong> Utilizing <strong>Xano</strong> databases for scalable and efficient backend operations.</li>
        <li><strong>API Integration:</strong> Developing extensive API integrations connecting core business tools like <strong>HubSpot</strong>, <strong>Shopify</strong>, and <strong>Microsoft Teams</strong> to unify operational communications.</li>
      </ul>
    `,videoSrc:null},"review-analysis":{title:"AI Customer Review Analysis",subtitle:"Working Student @ e-mobilio",tags:["Fonio.ai","Docsbot","AI Agents","NLP"],description:`
      <h2>Project Overview</h2>
      <p>Developed an intelligent application to analyze customer feedback and extract actionable business insights during my time at <strong>e-mobilio</strong>.</p>
      
      <h2>AI Agent Development</h2>
      <p>I specialize in building and deploying customized AI Agents to process and interpret customer sentiment and support queries.</p>
      <ul>
        <li><strong>AI Tools:</strong> Extensively utilized <strong>Fonio.ai</strong> and <strong>Docsbot</strong> to develop conversational agents and analytical bots.</li>
        <li><strong>Insight Generation:</strong> The system automatically categorizes reviews, identifies trends, and highlights areas for improvement.</li>
      </ul>
    `,videoSrc:null},"churn-analyzer":{title:"Customer Churn Prediction",subtitle:"Telecommunications Data Analysis",tags:["Python","Scikit-Learn","Pandas","Random Forest"],description:`
      <h2>Project Overview</h2>
      <p>Targeting specific pain points in the telecommunications sector, I developed a machine learning model to predict customer churn. The goal was to identify at-risk customers early to enable proactive retention strategies.</p>
      
      <h2>Methodology</h2>
      <p>The solution involved cleaning and preprocessing a dataset of customer profiles (demographics, services, payment info). I implemented <strong>One-Hot Encoding</strong> for categorical variables and utilized ensemble methods for prediction.</p>
      
      <h2>Technical Implementation</h2>
      <p>Using <strong>Scikit-Learn</strong>, I trained and evaluated multiple models, including <strong>Logistic Regression</strong> and <strong>Random Forest Classifiers</strong>. The models were evaluated using balanced accuracy scores to handle class imbalance effectively.</p>
    `,mediaType:"image",mediaSrc:"./churn_visual.png"}};document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search).get("id");if(!t||!a[t]){document.getElementById("p-title").textContent="Project Not Found",document.getElementById("p-subtitle").textContent="The project you are looking for does not exist.";return}const e=a[t];document.getElementById("p-title").innerHTML=e.title,document.getElementById("p-subtitle").textContent=e.subtitle;const o=document.getElementById("p-tags");o.innerHTML="",e.tags.forEach(s=>{const i=document.createElement("span");i.className="tag",i.textContent=s,o.appendChild(i)}),document.getElementById("p-content").innerHTML=e.description;const n=document.getElementById("media-container");e.mediaSrc?e.mediaType==="video"?n.innerHTML=`
        <video src="${e.mediaSrc}" controls autoplay muted loop style="width:100%; height:100%; object-fit:contain;"></video>
      `:e.mediaType==="image"&&(n.innerHTML=`
        <img src="${e.mediaSrc}" alt="${e.title} Visual" style="width:100%; height:100%; object-fit:contain;">
      `):n.innerHTML=`
       <div style="text-align:center;">
          <h3 style="color:#555; margin-bottom:0.5rem;">Visual Coming Soon</h3>
          <p style="color:#444;">Deploy to see updates</p>
       </div>
    `,document.title=`${e.title} | Jason Mann`});
