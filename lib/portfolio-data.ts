export type ProjectImage = {
  src?: string
  alt: string
  caption?: string
  /** CSS object-position value, e.g. 'right center' to crop from the left */
  objectPosition?: string
}

export type FeaturedProject = {
  id: string
  tag: string
  title: string
  description: string
  hero: ProjectImage
  supporting?: ProjectImage[]
  metrics?: { label: string; value: string }[]
  tags: string[]
  links: { label: string; href: string; variant: 'primary' | 'outline' }[]
  note?: string
}

export type GridProject = {
  id: string
  category: string
  categoryLabel: string
  name: string
  description: string
  image: ProjectImage
  tags: string[]
  demo?: string
  github?: string
  badge?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'securescope',
    tag: 'Featured · Security AI',
    title: 'SecureScope AI: ML-Powered Python Vulnerability Scanner',
    description:
      'A 3-phase cascade detection system combining ANN + XGBoost + LightGBM, Bidirectional LSTM, and a LoRA fine-tuned CodeBERT model. Achieves F1 0.954 and ROC-AUC 0.989 on 3,563 real-world GitHub functions. Integrates a CodeBERT + FAISS RAG pipeline over OWASP documentation with Groq Llama 3.1 for automated fix suggestions.',
    hero: {
      src: '/secure-scope1.png',
      alt: 'SecureScope AI scan results and risk classification dashboard',
      caption: 'Scan results · risk classification',
    },
    supporting: [
      {
        src: '/secure-scope2.png',
        alt: 'SecureScope AI 3-phase cascade architecture diagram',
        caption: '3-phase cascade architecture',
      },
      {
        src: '/secure-scope3.png',
        alt: 'SecureScope AI phase progression metrics table',
        caption: 'Phase progression metrics',
      },
    ],
    metrics: [
      { label: 'F1 Score', value: '0.954' },
      { label: 'ROC-AUC', value: '0.989' },
      { label: 'Test functions', value: '3,563' },
    ],
    tags: [
      'Python',
      'TensorFlow',
      'XGBoost',
      'LightGBM',
      'CodeBERT',
      'FAISS',
      'FastAPI',
      'Docker',
      'Groq',
    ],
    links: [
      {
        label: 'Live Demo',
        href: 'https://securescope-ai.vercel.app/',
        variant: 'primary',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/AdeenaRamzan/securescope-ai',
        variant: 'outline',
      },
    ],
  },
  {
    id: 'rag-chatbot',
    tag: 'Featured · Generative AI',
    title: 'Document Intelligence RAG Chatbot',
    description:
      'Upload any document and get instant, source-cited answers. Built with LangChain and vector search, retrieves only from your document, eliminating hallucination, with exact source references for every answer.',
    hero: {
      src: '/RAG-Chatbot.png',
      alt: 'RAG chatbot conversation showing an answer with source citation',
      caption: 'Chat with source citations',
    },
    tags: ['LangChain', 'ChromaDB', 'Groq', 'FastAPI', 'RAG'],
    links: [
      {
        label: 'Live Demo',
        href: 'https://rag-chatbot-nine-taupe.vercel.app/',
        variant: 'primary',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/AdeenaRamzan/RAG-Chatbot',
        variant: 'outline',
      },
    ],
  },
  {
    id: 'multi-agent',
    tag: 'Featured · Generative AI',
    title: 'ResearchMind — Autonomous Multi-Agent AI Research Network & SaaS Platform',
    description:
      'ResearchMind is an open-source, full-stack multi-agent AI research suite designed to automate deep academic, market, and technical research. Built with a 4-stage sequential agentic architecture, it replaces manual web research by orchestrating specialized AI agents to gather intelligence, scrape deep web body content, write publication-grade reports, and perform peer-review evaluations in seconds.',
    hero: {
      src: '/Multi-agent-research-system.png',
      alt: 'ResearchMind dashboard interface showing autonomous research generation',
      caption: 'ResearchMind dashboard · 4-agent flow',
    },
    metrics: [
      { label: 'Avg Critic Score', value: '9.6/10' },
      { label: 'Agent Pipeline', value: '4-Stage' },
      { label: 'Groq Fallover', value: 'Auto-Fallback' },
    ],
    tags: [
      'LangChain',
      'Groq LPU',
      'FastAPI',
      'React 19',
      'SSE Streaming',
      'DuckDuckGo Search',
      'BeautifulSoup4',
      'Vite',
      'Vanilla CSS'
    ],
    links: [
      {
        label: 'Live Demo',
        href: 'https://multi-agent-research-system-khaki.vercel.app/',
        variant: 'primary',
      },
      {
        label: 'Video Demo',
        href: 'https://youtu.be/d9dO8Y8GpmE',
        variant: 'outline',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/AdeenaRamzan/Multi-agent-research-system',
        variant: 'outline',
      },
    ],
  },
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'machine-learning', label: 'Machine Learning & NLP' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'healthcare-ml', label: 'Healthcare ML' },
  { id: 'systems', label: 'Systems & Full-Stack' },
  { id: 'hackathons', label: 'Hackathons' },
]

export const gridProjects: GridProject[] = [
  {
    id: 'voicesphere',
    category: 'generative-ai',
    categoryLabel: 'Generative AI',
    name: 'VoiceSphere AI',
    description:
      'Real-time speech assistant combining ultra-low-latency Whisper Large v3 (via Groq LPU) and Llama 3.3 (70B). Features a zero-config multi-language pipeline, an embeddable Shadow DOM widget, dynamic Canvas audio spectrum visualizer, and live typewriter captions.',
    image: { src: '/VoiceSphere-ai.png', alt: 'VoiceSphere AI voice assistant interface' },
    tags: ['Whisper Large v3', 'Llama 3.3 (70B)', 'FastAPI', 'Web Audio API', 'Shadow DOM', 'gTTS'],
    demo: 'https://voicesphere-ai.vercel.app/',
    github: 'https://github.com/AdeenaRamzan/voicesphere-ai',
  },
  {
    id: 'care4diabetics',
    category: 'healthcare-ml',
    categoryLabel: 'Healthcare ML',
    name: 'Diabetic Complication Prediction System',
    description:
      'LightGBM for retinopathy prediction (ROC-AUC 0.9315) and Random Forest for neuropathy prediction (ROC-AUC 0.9370), trained on a real 1,500-patient dataset from DOW University Hospital.',
    image: { src: '/Care4Diabetes.jfif', alt: 'Diabetic Complication Prediction System evaluation output' },
    tags: ['LightGBM', 'Random Forest', 'Scikit-learn', 'Flask'],
    github: 'https://github.com/ZobiaShakil/Care4Diabetics',
    badge: 'Clinical Tool',
  },
  {
    id: 'dermnet',
    category: 'computer-vision',
    categoryLabel: 'Computer Vision',
    name: 'AI DermNet Classifier',
    description:
      '3-stage ResNet-50 fine-tuning achieving 78.3% accuracy across 5 skin disease classes, with Grad-CAM heatmaps for interpretable predictions.',
    image: { src: '/Derm-net.png', alt: 'AI DermNet skin disease classifier with Grad-CAM heatmap' },
    tags: ['ResNet-50', 'Grad-CAM', 'PyTorch', 'Gradio'],
    demo: 'https://huggingface.co/spaces/AdeenaRamzan93/AI-DermNet-Classifier',
    github: 'https://github.com/AdeenaRamzan/ai-dermnet-classifier',
  },
  {
    id: 'endpoint-monitoring',
    category: 'systems',
    categoryLabel: 'Systems & Full-Stack',
    name: 'Enterprise Endpoint Activity Monitoring System',
    description:
      'Real-time IT endpoint monitoring and remote-support platform. Low-latency 20+ FPS remote screen streaming with full mouse/keyboard control, USB/DLP logging, browser history auditing, and a zero-dependency standalone Windows client agent.',
    image: { src: '/monitoring system.png', alt: 'Enterprise endpoint monitoring dashboard' },
    tags: ['WebSockets', 'Python', 'Remote Control', 'Windows Agent'],
    demo: 'https://youtu.be/HqBfWK9iZjQ',
    github: 'https://github.com/AdeenaRamzan/Enterprise-Endpoint-Monitoring-System',
    badge: 'Video Demo Available',
  },
  {
    id: 'heart-disease',
    category: 'healthcare-ml',
    categoryLabel: 'Healthcare ML',
    name: 'Heart Disease Risk Prediction',
    description:
      'Classifier achieving 83% accuracy, deployed as a live interactive dashboard for real-time risk assessment.',
    image: { src: '/heart-risk.png', alt: 'Heart disease risk prediction dashboard' },
    tags: ['Scikit-learn', 'Streamlit', 'Classification'],
    demo: 'https://heart-health-prediction-app.streamlit.app/',
    github: 'https://github.com/AdeenaRamzan/Heart_Health_Prediction',
  },
  {
    id: 'churn',
    category: 'machine-learning',
    categoryLabel: 'Machine Learning',
    name: 'Customer Churn Prediction',
    description:
      'SMOTE-balanced ensemble model, F1 0.9943, deployed as a live business decision-support dashboard.',
    image: { src: '/churn-pre.png', alt: 'Customer churn prediction dashboard' },
    tags: ['SMOTE', 'Ensemble', 'Streamlit', 'F1 0.9943'],
    demo: 'https://customer-churn-prediction-ml-model.streamlit.app/',
    github: 'https://github.com/AdeenaRamzan/customer-churn-prediction',
  },
  {
    id: 'emotion',
    category: 'machine-learning',
    categoryLabel: 'NLP & Machine Learning',
    name: 'Text Emotion Detection',
    description:
      'NLP classifier achieving 89.7% accuracy across 6 emotion categories using TF-IDF and Logistic Regression.',
    image: { src: '/text-emotion-classifier.png', alt: 'Text emotion detection NLP interface' },
    tags: ['NLP', 'TF-IDF', 'Logistic Regression', 'Streamlit'],
    demo: 'https://text-emotion-detection-nlp.streamlit.app/',
    github: 'https://github.com/AdeenaRamzan/text-emotion-detection-nlp',
  },
  {
    id: 'skillbridge',
    category: 'hackathons',
    categoryLabel: 'Hackathons',
    name: 'SkillBridge: AI Multilingual Career Mentor',
    description:
      'Built solo at AI Skills Hackathon 2026. Bilingual (Arabic/English) AI chat mentor, mock interview simulator, personality-based career quiz, and Stripe monetization for Arab youth job seekers.',
    image: { src: '/skill-bridge.jpeg', alt: 'SkillBridge AI career mentor interface' },
    tags: ['React.js', 'Node.js', 'Gemini 1.5 Flash', 'Stripe'],
    demo: 'https://text-sentiment-analyzer--aradeenaramzan.replit.app',
    badge: 'Hackathon Project',
  },
]

export const skillGroups = [
  {
    title: 'Generative AI & LLMs',
    skills: [
      'LangChain',
      'RAG Pipelines',
      'FAISS',
      'Vector Databases',
      'ChatGPT',
      'Claude',
      'Gemini',
      'Llama',
      'Groq',
      'LLM Fine-tuning',
      'Prompt Engineering',
    ],
  },
  {
    title: 'ML & Deep Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'CNNs',
      'ResNet',
      'BiLSTM',
      'Transformers',
      'CodeBERT',
      'BERT',
      'Ensemble Methods',
    ],
  },
  {
    title: 'Backend & Deployment',
    skills: [
      'FastAPI',
      'Docker',
      'PostgreSQL',
      'MySQL',
      'WebSockets',
      'SQLAlchemy',
      'REST APIs',
      'HuggingFace Spaces',
      'Vercel',
      'Git/GitHub',
    ],
  },
  {
    title: 'Frontend & AI-Assisted Dev',
    skills: [
      'React',
      'Next.js',
      'Streamlit',
      'Gradio',
      'V0',
      'Lovable',
      'Antigravity',
    ],
  },
]

export const experience = [
  {
    role: 'ML Engineer',
    company: 'Syslab',
    period: 'August 2026 - Present',
    current: true,
    description:
      'Machine learning, deep learning, and LLM systems development in a production environment.',
  },
  {
    role: 'AI Research Intern',
    company: 'Alphatron Technologies',
    period: 'Feb 2026 - Jun 2026',
    current: false,
    description:
      'Engineered AI-powered data pipelines for industrial water monitoring in collaboration with NED University. Integrated LangChain LLM with a vector database for RAG-based query interfaces; researched Chain-of-Thought and Tree-of-Thoughts prompting for production GenAI workflows.',
  },
  {
    role: 'AI Trainee Intern',
    company: 'Wenawa',
    period: 'Oct 2025 - Dec 2025',
    current: false,
    description:
      'Fine-tuned ResNet-50 for 5-class skin disease detection achieving 78.3% validation accuracy. Built a Sindhi-to-Urdu/English translation tool extending platform accessibility across 3 language communities.',
  },
  {
    role: 'IT Instructor (Part-time)',
    company: 'Benazir Bhutto Shaheed Youth Development Program',
    period: 'Mar 2026 - May 2026',
    current: false,
    description:
      'Delivered AI, ML, and Web Development curriculum to 20+ students per cohort for a government-backed digital skills initiative.',
  },
]

export type Certification = {
  name: string
  issuer: string
  date?: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    name: 'AI Training Hackathon',
    issuer: 'Kanz',
    date: 'Jul 2026',
    credentialId: 'KANZ-CMP-9CC7CB1F53',
  },
  {
    name: "ProBattle'26 (Hackathon)",
    issuer: 'IBA Computer Science Society',
  },
  {
    name: 'AI Powered Website & Chatbot Masterclass',
    issuer: 'DataCrumbs',
    date: 'Sep 2025',
  },
  {
    name: 'Introduction to Natural Language Processing Concepts',
    issuer: 'Microsoft Learning',
    date: 'Sep 2025',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'Aug 2025',
  },
  {
    name: 'AI Python for Beginners',
    issuer: 'DeepLearning.AI',
    date: 'Aug 2025',
  },
  {
    name: 'Introduction to GitHub Concepts',
    issuer: 'DataCamp',
    date: 'Mar 2025',
  },
  {
    name: 'Web Designing',
    issuer: 'Softech',
    date: 'Dec 2024',
  },
  {
    name: 'Google Certifications',
    issuer: 'Google',
    date: 'Aug 2024',
  },
  {
    name: 'AI Upskilling',
    issuer: 'Qualcomm Academy',
  },
  {
    name: 'Machine Learning Introduction',
    issuer: 'IBM',
  },
  {
    name: 'Python for Data Analysis',
    issuer: 'Coursera',
  },
]

export const aboutSkills = [
  'Python',
  'PyTorch',
  'LangChain',
  'FastAPI',
  'Docker',
  'React',
  'PostgreSQL',
  'HuggingFace',
]
