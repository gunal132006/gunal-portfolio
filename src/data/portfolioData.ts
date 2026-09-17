export interface EducationData {
  degree: string;
  college: string;
  year: string;
}

export interface MyselfData {
  greeting: string;
  paragraphs: string[];
  education: EducationData;
  interests: string[];
}

export interface SkillCategory {
  title: string;
  color: 'orange' | 'blue' | 'green' | 'purple';
  rotate: string;
  pinColor: string;
  items: string[];
}

export interface SkillsData {
  frontend: SkillCategory;
  backend: SkillCategory;
  databases: SkillCategory;
  tools: SkillCategory;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string | null;
  repositoryUrl?: string | null;
  liveUrl?: string | null;
  status: 'completed' | 'in-progress' | 'upcoming';
  featured?: boolean;
  rotate?: string;
  isPlaceholder?: boolean;
}

export interface ContactData {
  email: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  formspreeUrl?: string; // Set this when connecting to Formspree, Resend, or EmailJS
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    heroBio: {
      greeting: string;
      lead: string;
      highlights: string[];
    };
  };
  myself: MyselfData;
  skills: SkillsData;
  projects: ProjectItem[];
  contact: ContactData;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Gunal S',
    role: 'FULL STACK DEV',
    tagline: 'Computer Science Student & Developer',
    heroBio: {
      greeting: "Hi, I'm Gunal.",
      lead: "Computer Science student & developer building",
      highlights: ["practical software", "web applications", "data-driven solutions"]
    }
  },
  myself: {
    greeting: "Hi, I'm Gunal S,",
    paragraphs: [
      "a Computer Science student and developer who enjoys building practical software and exploring technology through hands-on projects.",
      "I’m interested in full-stack development, data-driven applications, problem solving, and learning how different technologies can be combined to build useful solutions.",
      "I enjoy turning ideas into working applications and continuously improving my technical skills through academic and personal projects."
    ],
    education: {
      degree: "Bachelor's Degree in Computer Science",
      college: "[College Name]",
      year: "[Academic Year]"
    },
    interests: [
      "Software Development",
      "Web Applications",
      "Data Analysis",
      "Problem Solving"
    ]
  },
  skills: {
    frontend: {
      title: "Frontend",
      color: "orange",
      rotate: "-2deg",
      pinColor: "#e44242",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS"
      ]
    },
    backend: {
      title: "Backend",
      color: "blue",
      rotate: "1deg",
      pinColor: "#2563eb",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ]
    },
    databases: {
      title: "Databases",
      color: "green",
      rotate: "-1deg",
      pinColor: "#16a34a",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQLite"
      ]
    },
    tools: {
      title: "Tools",
      color: "purple",
      rotate: "2deg",
      pinColor: "#9333ea",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel"
      ]
    }
  },
  projects: [
    {
      id: "shared-expense-tracker",
      title: "Shared Home Expense Tracker",
      description: "A responsive shared household expense management application designed to help roommates record expenses, track individual spending, divide shared rent, and calculate final settlements.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "PWA"],
      image: null,
      repositoryUrl: null, // Ready for real repository URL
      liveUrl: null,       // Ready for real demo URL
      status: "completed",
      featured: true,
      rotate: "-1.5deg",
      isPlaceholder: false
    },
    {
      id: "environmental-data-interpolation",
      title: "Reconstruction of Incomplete Environmental Data Using Polynomial Interpolation",
      description: "A data analysis project that reconstructs missing environmental observations using polynomial interpolation and evaluates the reconstructed data for further analysis.",
      technologies: ["R", "Statistics", "Polynomial Interpolation", "Data Analysis"],
      image: null,
      repositoryUrl: null, // Ready for real repository URL
      liveUrl: null,       // Ready for real research URL
      status: "completed",
      featured: true,
      rotate: "1.5deg",
      isPlaceholder: false
    },
    {
      id: "more-projects-upcoming",
      title: "MORE PROJECTS COMING SOON",
      description: "More experiments, ideas and builds are on the way. Check back soon or visit my GitHub for ongoing repositories and code snippets.",
      technologies: ["Experiments", "Prototypes", "Ideas"],
      image: null,
      repositoryUrl: "https://github.com",
      liveUrl: null,
      status: "upcoming",
      featured: false,
      rotate: "-1deg",
      isPlaceholder: true
    }
  ],
  contact: {
    email: "[Your Email Address]",
    location: "[Your Location / City, Country]",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    formspreeUrl: "" // Connect to Formspree, Resend or EmailJS when desired
  }
};
