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
      content: "Learning to build robust digital experiences by combining modern web technologies with intelligent data models. Currently focused on mastering the backend and exploring the endless possibilities of Machine Learning.\n\nCurious by nature. Developer by choice. Problem solver by habit."
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
    id: 'get-project-auth',
    path: '/projects/auth-service',
    method: 'GET',
    label: 'Alpha-Auth Details',
    description: 'Get details for the Auth Service project.',
    group: 'Projects',
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Afsheen-Aziz/auth-service', type: 'github' }
    ],
    response: {
      type: "Backend API",
      stack: ["FastAPI", "PostgreSQL", "JWT"],
      features: [
        "Secure authentication",
        "Role-based access",
        "Token refresh"
      ],
      github_url: "https://github.com/Afsheen-Aziz/auth-service"
    }
  },
  {
    id: 'get-project-chat',
    path: '/projects/chat-api',
    method: 'GET',
    label: 'Skyline Chat Details',
    description: 'Get details for the Chat API project.',
    group: 'Projects',
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Afsheen-Aziz/chat-api', type: 'github' }
    ],
    response: {
      type: "Backend Service",
      stack: ["Node.js", "WebSockets", "Redis"],
      features: [
        "Real-time messaging",
        "Horizontal scaling",
        "Presence tracking"
      ],
      github_url: "https://github.com/Afsheen-Aziz/chat-api"
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
