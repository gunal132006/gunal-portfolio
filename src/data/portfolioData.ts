export interface EducationData {
  degree: string;
  college: string;
  year: string;
  expectedGraduation: string;
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
  phone: string;
  phoneUrl: string;
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
    heroBioText: string;
    heroBioLines: string[];
    heroBio?: {
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
    heroBioText: "Computer science student trying not to be unemployed\nCurrently debugging my life and my code.",
    heroBioLines: [
      "Computer science student trying not to be unemployed",
      "Currently debugging my life and my code."
    ],
    heroBio: {
      greeting: "Hi, I'm Gunal S.",
      lead: "Computer science student trying not to be unemployed",
      highlights: ["Currently debugging my life and my code."]
    }
  },
  myself: {
    greeting: "Hi, I'm Gunal S,",
    paragraphs: [
      "I'm Gunal S, a 3rd-year B.Tech Information Technology student at Saveetha School of Engineering. I enjoy building practical software, exploring full-stack development, and learning through hands-on projects.",
      "Areas of focus: Full-stack development, Web applications, Software development, Data analysis, and Problem solving."
    ],
    education: {
      degree: "B.Tech (Information Technology)",
      college: "Saveetha School of Engineering",
      year: "3rd Year",
      expectedGraduation: "2028"
    },
    interests: [
      "Full-stack development",
      "Web applications",
      "Software development",
      "Data analysis",
      "Problem solving"
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
      repositoryUrl: "https://github.com/gunal132006/shared-home-expense-tracker",
      liveUrl: "https://shared-home-expense-tracker.vercel.app/",
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
      repositoryUrl: null,
      liveUrl: null,
      status: "upcoming",
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
      repositoryUrl: "https://github.com/gunal132006",
      liveUrl: null,
      status: "upcoming",
      featured: false,
      rotate: "-1deg",
      isPlaceholder: true
    }
  ],
  contact: {
    email: "sg4818749@gmail.com",
    phone: "+91 6380127729",
    phoneUrl: "tel:+916380127729",
    location: "Chennai, Tamil Nadu, India",
    githubUrl: "https://github.com/gunal132006",
    linkedinUrl: "https://www.linkedin.com/in/gunal-s-9b7b90382/",
    formspreeUrl: "" // Connect to Formspree, Resend or EmailJS when desired
  }
};
