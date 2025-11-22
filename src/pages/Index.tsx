import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Brain, Code, Database, Sparkles, Cpu, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import skinDiseaseImg from "@/assets/skin-disease-project.jpg";
import emotionDetectionImg from "@/assets/emotion-detection-project.png";
import churnPredictionImg from "@/assets/churn-prediction-project.webp";
import heartHealthImg from "@/assets/heart-health-project.png";
import certDeepLearning from "@/assets/certifications/deep-learning.png";
import certDatacrumbs from "@/assets/certifications/datacrumbs.png";
import certN8n from "@/assets/certifications/n8n.png";
import certNlpIntro from "@/assets/certifications/ms.png";
import certIbm from "@/assets/certifications/ibm.png";
import certCisco from "@/assets/certifications/cisco.png";
import certPandasNumpy from "@/assets/certifications/pandas-numpy.png";
import certGithub from "@/assets/certifications/github-concepts.png";
import certSoftech from "@/assets/certifications/softech.png";
import certGoogleSoft from "@/assets/certifications/google-softskills.png";
import certTs from "@/assets/certifications/ts.png";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AR Portfolio
            </h1>
            <div className="hidden md:flex gap-6">
              {["hero", "about", "skills", "experience", "projects", "certifications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in space-y-6">
            <div className="inline-block mb-4">
              <Sparkles className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                Adeena Ramzan
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              AI Engineer & Machine Learning Enthusiast
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Focused on building intelligent systems, ML models, and practical AI solutions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="neon-glow-hover transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-glow-hover transition-all duration-300 hover:scale-105 border-primary/50"
                asChild
              >
                <a href="/ADEENA_RAMZAN_RESUME.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="max-w-4xl mx-auto p-8 glassmorphism card-glow hover:scale-[1.02] transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Brain className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-foreground leading-relaxed">
                  AI and ML engineering enthusiast with hands-on experience in Deep Learning, NLP, classical ML, and deploying models using FastAPI, Streamlit, and Gradio. Skilled in Python, TensorFlow, PyTorch, and associated data workflows. Also familiar with WordPress customization as a secondary skill. Actively looking for an internship to apply and deepen AI engineering skills in real-world projects.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
  title: "Machine Learning",
  icon: <Brain className="w-8 h-8" />,
  skills: [
    "Python",
    "Regression",
    "Classification",
    "Model Evaluation",
    "Feature Engineering",
    "Hyperparameter Tuning",
    "Cross-validation"
  ],
},
{
  title: "Deep Learning & NLP",
  icon: <Cpu className="w-8 h-8" />,
  skills: [
    "Neural Networks",
    "CNNs",
    "ResNet",
    "MobileNet",
    "Transformers",
    "Transfer Learning",
    "Text Classification",
    "Sentiment Analysis"
  ],
},
{
  title: "AI Tools & Frameworks",
  icon: <Sparkles className="w-8 h-8" />,
  skills: [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Hugging Face",
    "Git",
    "GitHub"
  ],
},
{
  title: "Deployment",
  icon: <Database className="w-8 h-8" />,
  skills: [
    "FastAPI",
    "Streamlit",
    "Gradio"
  ],
},
{
  title: "Web Development (Side Skill)",
  icon: <Code className="w-8 h-8" />,
  skills: [
    "WordPress",
    "Elementor",
    "Custom CSS",
    "Theme Customization",
    "Plugin Configuration",
    "Responsive Design"
  ],
},
{
  title: "Math & Core Concepts",
  icon: <Brain className="w-8 h-8" />,
  skills: [
    "Statistics",
    "Probability",
    "Linear Algebra",
    "Calculus"
  ],
},

            ].map((category, idx) => (
              <Card
                key={idx}
                className="p-6 glassmorphism card-glow hover:scale-105 transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "AI Trainee Intern",
                company: "Wenawa",
                period: "2025 – Present",
                points: [
  "Developed and optimized deep learning models for skin-disease detection using ResNet-50, achieving strong validation performance",
  "Engineered preprocessing and augmentation pipelines to improve model robustness and reduce overfitting",
  "Deployed trained models via Gradio on Hugging Face Spaces for real-time predictions",
  "Conducted technical research on open-source projects (e.g., Averion Labs Front-End) to enhance AI–UI integration",
  "Built a Sindhi→Urdu/English translation tool using Google Translate API with an Express.js backend and custom frontend"
],

              },
              {
                title: "WordPress Intern",
                company: "Cloudbourne Consultancy",
                period: "2025",
                points: [
                  "Built and maintained client websites using Elementor & custom CSS",
                  "Customized themes and improved responsiveness and UI/UX",
                  "Fixed layout and performance issues to deliver client-ready solutions",
                ],
              },
              {
  title: "Brand Ambassador Intern",
  company: "DataCrumbs",
  period: "2025",
  points: [
    "Promoted DataCrumbs’ AI and automation programs through community outreach and online engagement",
    "Guided students and learners toward relevant AI courses, events, and hands-on learning resources",
    "Represented the brand during cohort activities and supported community growth through active participation",
  ],
},

            ].map((exp, idx) => (
              <Card key={idx} className="p-8 glassmorphism card-glow relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="ml-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary text-lg">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "AI Skin Disease Detection",
                description: "ResNet-50 classifier trained on skin disease images. Deployed using Gradio with an interactive UI. Fine-tuned for high accuracy.",
                tech: "Deep Learning / CNN",
                githubUrl: "https://github.com/AdeenaRamzan/ai-dermnet-classifier",
                demoUrl: "https://huggingface.co/spaces/AdeenaRamzan93/AI-DermNet-Classifier",
                image: skinDiseaseImg,
              },
              {
                title: "Text Emotion Detection",
                description: "Achieved 90% accuracy using TF-IDF and Logistic Regression. Classifies emotions from text in real-time.",
                tech: "NLP",
                githubUrl: "https://github.com/AdeenaRamzan/text-emotion-detection-nlp",
                demoUrl: "https://text-emotion-detection-nlp.streamlit.app/",
                image: emotionDetectionImg,
              },
              {
                title: "Customer Churn Prediction",
                description: "Random Forest Classifier with SMOTE for class imbalance. Features hyperparameter tuning and interactive Streamlit deployment.",
                tech: "Machine Learning",
                githubUrl: "https://github.com/AdeenaRamzan/customer-churn-prediction",
                demoUrl: "https://customer-churn-prediction-ml-model.streamlit.app/",
                image: churnPredictionImg,
              },
              {
                title: "Heart Health Prediction",
                description: "Multiple ML models (KNN, Logistic Regression, SVM, Decision Tree) to predict heart disease with interactive Streamlit interface.",
                tech: "Machine Learning",
                githubUrl: "https://github.com/AdeenaRamzan/Heart_Health_Prediction",
                demoUrl: "https://heart-health-prediction-app.streamlit.app/",
                image: heartHealthImg,
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="p-6 glassmorphism card-glow hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-40 rounded-lg mb-4 overflow-hidden border border-border/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.tech}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/20" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
    <section id="certifications" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Certifications
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { title: "Deep Learning Specialization", org: "DeepLearning.AI", image: certDeepLearning },
        { title: "AI Powered Website & Chatbot Masterclass", org: "DataCrumbs", image: certDatacrumbs },
        { title: "N8N Chatbot Lab", org: "DataCrumbs", image: certN8n },
        { title: "Introduction to natural language processing concepts", org: "Microsoft Learning", image: certNlpIntro },
        { title: "Machine Learning Introduction for Everyone", org: "IBM", image: certIbm },
        { title: "Python Essentials 1", org: "Cisco", image: certCisco },
        { title: "Python for Data Analysis (Pandas & NumPy)", org: "Coursera", image: certPandasNumpy },
        { title: "Introduction to GitHub Concepts", org: "DataCamp", image: certGithub },
        { title: "Web Designing", org: "Softech", image: certSoftech },
        { title: "Google Soft Skills Certification", org: "Google", image: certGoogleSoft },
        { title: "TypeScript String Properties and Methods", org: "Coursera", image: certTs },
      ].map((cert, idx) => (
        <Card
          key={idx}
          className="p-6 glassmorphism card-glow hover:scale-105 transition-all duration-300 group overflow-hidden"
        >
          <div className="h-48 rounded-lg mb-4 overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-colors">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
          <p className="text-sm text-primary">{cert.org}</p>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
     <section id="contact" className="py-20 bg-card/30">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 
      bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Contact Me
    </h2>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <Card className="p-4 sm:p-6 md:p-8 glassmorphism card-glow w-full">

        {/* EMAIL-SENDING FORM (Style unchanged, but paddings adjusted) */}
        <form
          action="https://formsubmit.co/aradeenaramzan@gmail.com"
          method="POST"
          className="space-y-4 sm:space-y-6"
        >
          {/* Hidden FormSubmit options */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Message From Portfolio!" />
          <input
            type="hidden"
            name="_next"
            value="https://adeena-ramzan-portfolio.vercel.app//#contact"
          />

          <div>
            <label className="text-sm font-medium mb-2 block">Name</label>
            <Input
              name="name"
              placeholder="Your name"
              className="bg-background/50 w-full"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="bg-background/50 w-full"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Message</label>
            <Textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              className="bg-background/50 w-full"
              required
            />
          </div>

          <Button type="submit" className="w-full neon-glow-hover">
            Send Message
          </Button>
        </form>

      </Card>

      <Card className="p-4 sm:p-6 md:p-8 glassmorphism card-glow flex flex-col justify-center space-y-6 w-full">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <div className="space-y-4">
          <a
            href="mailto:aradeenaramzan@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span>aradeenaramzan@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/adeena-ramzan65"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <span>linkedin.com/in/adeena-ramzan65</span>
          </a>

          <a
            href="https://github.com/AdeenaRamzan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <span>github.com/AdeenaRamzan</span>
          </a>
        </div>
      </Card>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 Adeena Ramzan. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/adeena-ramzan65"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/AdeenaRamzan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:aradeenaramzan@gmail.com"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
