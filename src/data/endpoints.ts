export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface EndpointLink {
  label: string;
  url: string;
  type: 'github' | 'resume' | 'external' | 'linkedin' | 'email' | 'phone';
}

export interface Endpoint {
  id: string;
  path: string;
  method: Method;
  label: string;
  description: string;
  group: string;
  response: any;
  requestBody?: any;
  intro?: {
    title: string;
    subtitle: string;
    content?: string;
    highlights?: { label: string; value: string }[];
  };
  links?: EndpointLink[];
}

export const endpoints: Endpoint[] = [
  {
    id: 'get-about',
    path: '/about',
    method: 'GET',
    label: 'About Me',
    description: 'Retrieve basic information about the developer.',
    group: 'Profile',
    intro: {
      title: "Afsheen Aziz",
      subtitle: "Backend & AI/ML Explorer",
      content: "Learning to build robust digital experiences by combining modern web technologies with intelligent data models. Currently focused on mastering the backend and exploring the endless possibilities of artificial intelligence and machine learning."
    },
    links: [
      { label: 'Download Resume', url: 'https://drive.google.com/file/d/1jcH-D_4YXrS6nQ4ZtEizM0j2yxK7Ohd6/view?usp=sharing', type: 'resume' },
      { label: 'GitHub Profile', url: 'https://github.com/Afsheen-Aziz', type: 'github' }
    ],
    response: {
      name: "Afsheen Aziz",
      location: "Kochi, India",
      interests: [
        "Backend Development",
        "Cloud & Deployment",
        "AI/ML"
      ],
      focus: "Building backend systems and exploring cloud & AI solutions through hands-on projects"
    }
  },
  {
    id: 'get-skills',
    path: '/skills',
    method: 'GET',
    label: 'My Technical Skills',
    description: 'List technical skills and proficiencies.',
    group: 'Profile',
    intro: {
      title: "Technical Stack",
      subtitle: "Backend, Web & ML Infrastructure",
      content: "",
      highlights: [
        { label: "Backend", value: "Flask, Django" },
        { label: "Web", value: "HTML, CSS, Bootstrap" },
        { label: "Languages", value: "Python, Java, C/C++, SQL" },
        { label: "Data", value: "NumPy, Pandas, Scikit-learn" },
        { label: "Tools", value: "Git, Linux, AWS, Vercel" }
      ]
    },
    response: {
      "programming languages": [
        "Python",
        "Java",
        "C",
        "C++",
        "SQL",
        "Bash/Shell"
      ],
      "backend & web": [
        "Flask",
        "Django",
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      "databases": [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Supabase"
      ],
      "data & ML": [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "OpenCV",
        "Scikit-learn"
      ],
      "tools & deployment": [
        "Git",
        "Linux",
        "AWS",
        "Vercel",
        "VS Code"
      ]
    }
  },
  {
    id: 'get-project-codevista',
    path: '/projects/codevista',
    method: 'GET',
    label: 'CodeVista Details',
    description: 'Coding Lab Management.',
    group: 'Projects',
    intro: {
      title: "CodeVista",
      subtitle: "Coding Lab Management",
      content: "An intelligent web-based platform designed to modernize coding lab workflows by combining automation, online code execution, visual learning tools, and AI-assisted evaluation for students and instructors.",
      highlights: [
        { label: "Frontend", value: "Next.js & React" },
        { label: "Backend", value: "Supabase" },
        { label: "Engine", value: "Compiler API" },
        { label: "Logic", value: "AI Evaluation" }
      ]
    },
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Afsheen-Aziz/lab_management_app', type: 'github' }
    ],
    response: {
      id: "codevista",
      status: "active_development",
      overview: "A smart ecosystem for digitalizing programming labs with AI evaluation and logic visualization.",
      stack: [
        "Next.js",
        "React",
        "Supabase",
        "Compiler API"
      ],
      features: {
        instructor: [
          "Lab provisioning",
          "Real-time monitoring",
          "Automated evaluation"
        ],
        student: [
          "In-browser IDE",
          "Algorithm visualizer",
          "Instant submission"
        ],
        ai_layer: [
          "Plagiarism detection",
          "Code quality scoring"
        ]
      },
      links: "https://github.com/Afsheen-Aziz/lab_management_app"
    }
  },
  {
    id: 'get-project-echonews',
    path: '/projects/echonews',
    method: 'GET',
    label: 'EchoNews Details',
    description: 'AI Audio News Platform',
    group: 'Projects',
    intro: {
      title: "EchoNews",
      subtitle: "AI Audio News Platform",
      content: "AI-powered news aggregation and recommendation system using Gemini AI, providing personalized feeds, article summarization, trending news, and an interactive Streamlit interface.",
      highlights: [
        { label: "Core", value: "Python" },
        { label: "AI", value: "Gemini / GPT" },
        { label: "UI", value: "Streamlit" },
        { label: "Audio", value: "Whisper & TTS" }
      ]
    },
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Afsheen-Aziz/EchoNews', type: 'github' }
    ],
    response: {
      id: "ai-audio-news",
      features: {
        core: [
          "AI audio news",
          "Personalized feeds",
          "Short news clips",
          "Trending topics",
          "Hyperlocal alerts"
        ],
        modes: [
          "Aspirant mode",
          "Exam revision"
        ],
        ai: [
          "News summarization",
          "Content recommendations"
        ],
        languages: [
          "Malayalam",
          "English"
        ],
        access: [
          "Offline listening",
          "Daily summaries",
          "Smart quizzes"
        ]
      },
      tech_stack: [
        "Python",
        "Streamlit",
        "Gemini / GPT",
        "Whisper",
        "Cloud TTS"
      ],
      link: "https://github.com/Afsheen-Aziz/EchoNews"
    }
  },
  {
    id: 'get-project-sentiment',
    path: '/projects/sentiment-analyzer',
    method: 'GET',
    label: 'Sense-ML Details',
    description: 'Get details for the Sentiment Analyzer project.',
    group: 'Projects',
    links: [
      { label: 'View Code on GitHub', url: 'https://github.com/Afsheen-Aziz/sentiment-analyzer', type: 'github' }
    ],
    response: {
      type: "Machine Learning",
      model: "Logistic Regression",
      dataset: "IMDb Reviews",
      accuracy: "87%",
      deployment: "Inference via FastAPI",
      github_url: "https://github.com/Afsheen-Aziz/sentiment-analyzer"
    }
  },
  {
    id: 'get-credentials',
    path: '/credentials',
    method: 'GET',
    label: 'Certifications & Awards',
    description: 'Retrieve certifications and honors.',
    group: 'Credentials',
    response: {
      certification: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      hackathons: ["Global AI Hackathon - Finalist"],
      scholarship: "STEM Excellence Scholarship"
    }
  },
  {
    id: 'get-education',
    path: '/education',
    method: 'GET',
    label: 'Educational Background',
    description: 'Retrieve academic qualifications and institutions.',
    group: 'Education',
    intro: {
      title: "Education",
      subtitle: "Academic Foundations",
      highlights: [
        { label: "Degree", value: "Bachelor of Technology (CSE), with Honours" },
        { label: "Duration", value: "2023 – 2027 (Expected)" },
        { label: "Institution", value: "Cochin University of Science and Technology" },
        { label: "Cgpa", value: "9.4 / 10.0" },
        { label: "Location", value: "Kochi, India" }
      ]
    },
    response: {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Cochin University of Science and Technology",
      location: "Kochi , India",
      duration: "2023 - 2027",
      status: "In Progress",
      cgpa: 9.4,
      honours: true
    }
  },
  {
    id: 'get-contact',
    path: '/contact',
    method: 'GET',
    label: 'Contact Details',
    description: 'Retrieve contact information and social links.',
    group: 'Contact',
    intro: {
      title: "Say Hello!",
      subtitle: "Seeking opportunities to build and learn.",
      content: "My inbox is always open. Whether it's a project idea, a technical question, or just a virtual coffee to discuss the future of AI—reach out and let’s chat!"
    },
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/afsheen-aziz-020899281/', type: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/afsheen-aziz', type: 'github' },
      { label: 'Email Me', url: 'mailto:afsheenonnar@gmail.com', type: 'email' }
    ],
    response: {
      email: "afsheenonnar@gmail.com",
      phone: "+91 9207024247",
      linkedin: "https://www.linkedin.com/in/afsheen-aziz-020899281/",
      github: "https://github.com/afsheen-aziz"
    }
  }
];
