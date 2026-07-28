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
    id: 'care4diabetics',
    tag: 'Featured · Healthcare ML · Real Clinical Data',
    title: 'Diabetic Complication Prediction System',
    description:
      'Extended a real hospital application with DOW University Hospital, Karachi. Two binary classification models: LightGBM for retinopathy prediction (ROC-AUC 0.9315) and Random Forest for neuropathy prediction (ROC-AUC 0.9370), trained on a real 1,500-patient Pakistani clinical dataset with 50-fold cross-validation and zero data leakage.',
    hero: {
      src: '/Care4Diabetes.jfif',
      alt: 'Model evaluation notebook output showing ROC-AUC results',
      caption: 'Model evaluation · ROC-AUC output',
    },
    metrics: [
      { label: 'ROC-AUC', value: '0.93+' },
      { label: 'Real patients', value: '1,500' },
      { label: 'Cross-validation', value: '50-fold' },
    ],
    tags: ['Python', 'LightGBM', 'Random Forest', 'Scikit-learn', 'Flask'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/ZobiaShakil/Care4Diabetics',
        variant: 'outline',
      },
    ],
    note: 'In collaboration with DOW University Hospital, repo maintained under a collaborator\u2019s account. Clinical tool, no public demo.',
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
      'Real-time voice AI assistant with speech-to-text, LLM reasoning, and natural text-to-speech.',
    image: { src: '/VoiceSphere-ai.png', alt: 'VoiceSphere AI voice assistant interface' },
    tags: ['LLM', 'Speech-to-Text', 'TTS', 'React'],
    demo: 'https://voicesphere-ai.vercel.app/',
    github: 'https://github.com/AdeenaRamzan/voicesphere-ai',
  },
  {
    id: 'multi-agent',
    category: 'generative-ai',
    categoryLabel: 'Generative AI',
    name: 'Multi-Agent Research System',
    description:
      'Autonomous multi-agent AI that automates deep research, orchestrating specialized agents to synthesize reports from live web search.',
    image: { src: '/Multi-agent-research-system.png', alt: 'Multi-agent research system report interface' },
    tags: ['LangChain', 'Groq', 'SSE Streaming', 'React 19'],
    demo: 'https://multi-agent-research-system-khaki.vercel.app/',
    github: 'https://github.com/AdeenaRamzan/Multi-agent-research-system',
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
