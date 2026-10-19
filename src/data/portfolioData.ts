export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: ('AI & ML' | 'Full Stack Web' | 'Collaborative / Hackathon' | 'Academic & Mobile')[];
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  status: 'Live Deployed' | 'Hackathon Finalist Prototype' | 'Collaborative Prototype' | 'In Development' | 'Academic Coursework Project' | 'Completed Prototype';
  githubUrl?: string;
  liveUrl?: string;
  contribution: string;
  architectureNotes?: string;
  lessonsLearned: string;
  badge?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  verifiedPeriod: string;
  certificateUrl: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Used in Projects' | 'Certified / Coursework' | 'Actively Learning';
    iconName?: string;
    details?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'Award / Finalist' | 'Certification' | 'Workshop';
  description: string;
  badgeText: string;
  credentialUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Dharm Chaniyara",
  fullName: "Dharm Hiteshbhai Chaniyara",
  headline: "Computer Science Student | Aspiring AI/ML Engineer & Software Developer",
  subHeadline: "Third-semester B.Tech CSE student at GSFC University. Building practical web applications, exploring AI-augmented systems, and turning technical curiosity into demonstrable software.",
  location: "Vadodara, Gujarat, India",
  availability: "Available across Gujarat (Vadodara, Ahmedabad, Surat, Rajkot, etc.) & Remote",
  phone: "+91 73830 15150",
  university: "GSFC University",
  degree: "B.Tech in Computer Science and Engineering",
  semester: "3rd Semester (Batch 2025–2029)",
  email: "dharmchaniyara7368@gmail.com",
  github: "https://github.com/DharmChaniyara",
  linkedin: "https://www.linkedin.com/in/dharm-chaniyara-b51b9137a/",
  portfolioUrl: "https://dharm-chaniyara-portfolio.vercel.app",
  resumeUrl: "/resume/Dharm_Chaniyara_CV.pdf",
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Idealfolks",
    role: "AI Web Developer Intern",
    location: "Rajkot, Gujarat, India",
    duration: "1 Month (Verified)",
    verifiedPeriod: "05/06/2026 – 05/07/2026",
    certificateUrl: "/certificates/IdeaFolks_Internship_Certificate.pdf",
    description: "Completed a structured 1-month web development internship focusing on practical front-end engineering and integrating modern AI developer tools into everyday engineering workflows.",
    highlights: [
      "Built responsive, accessible user interfaces using semantic HTML5, CSS3, and JavaScript.",
      "Adopted AI-assisted developer tools (LLMs, code assistants) to accelerate component prototyping, debugging, and documentation.",
      "Collaborated with project mentors to understand practical software delivery cycles, code reviews, and version control discipline.",
      "Earned formal certificate of completion signed by Founder Mr. Hardik Mandir commending dedication and technical sincerity."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "AI-Assisted Workflows", "Git", "Responsive Design"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "jobguard-ai",
    name: "JobGuard AI (Fake Job Offer Detector)",
    tagline: "Full-stack fraud detection system powered by OpenAI text analysis & VirusTotal URL scanning.",
    category: ["AI & ML", "Full Stack Web"],
    status: "Completed Prototype",
    badge: "Featured AI Project",
    problem: "College students and job seekers are increasingly targeted by sophisticated employment scams, phishing offers, and malicious link attachments masquerading as genuine corporate recruiters.",
    solution: "JobGuard AI provides an automated dual-layer verification platform: users can paste raw job descriptions or upload PDF offer letters to receive an AI-generated risk score, verdict, and explainable scam indicators, while checking outbound domains via VirusTotal.",
    features: [
      "Job Offer Text Scanner with OpenAI prompt scoring (Risk Score, Verdict, Scam Reasons)",
      "PDF Upload & Text Extraction via Node.js Multer and pdf-parse",
      "Malicious Link Verification integrated with the VirusTotal API",
      "User Authentication and Scan History persistence powered by Supabase (PostgreSQL)",
      "Modern dark UI with responsive layout built using Tailwind CSS and Framer Motion"
    ],
    technologies: ["React (Vite)", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "Multer", "pdf-parse", "Supabase", "OpenAI API", "VirusTotal API"],
    contribution: "Designed and implemented the full application from scratch: developed the Vite React frontend, built the Express backend API with PDF stream extraction, engineered the OpenAI risk evaluation prompt, and configured Supabase auth & PostgreSQL schemas.",
    architectureNotes: "Client (React Vite on Vercel) -> REST API (Node/Express on Render) -> OpenAI API & VirusTotal API -> Supabase DB & Auth.",
    lessonsLearned: "Handling multi-part file streaming with Multer, sanitizing raw extracted PDF text before sending to LLM context windows, and structuring prompt outputs as deterministic JSON payloads.",
    githubUrl: "https://github.com/DharmChaniyara/Fake-Job-Offer-Detector-"
  },
  {
    id: "deal-intelligence-agent",
    name: "Deal Intelligence Agent (Team CODE BUSTERS)",
    tagline: "AI sales copilot with organizational memory, objection mapping, and D3.js relationship graphs.",
    category: ["AI & ML", "Collaborative / Hackathon"],
    status: "Hackathon Finalist Prototype",
    badge: "Hack Baroda 2026 Finalist",
    problem: "Enterprise sales organizations experience severe knowledge leakage whenever reps move on. Teams repeatedly stumble on the same client objections and lack systematic memory of past deal structures.",
    solution: "An intelligent sales knowledge agent that captures past deal interactions, creates organizational memory, dynamically maps multi-stakeholder buyer networks with D3.js, and suggests objection-handling strategies based on past outcomes.",
    features: [
      "Organizational memory system capturing deal notes, objections, and winning patterns",
      "Interactive stakeholder network graph visualization implemented with D3.js",
      "Objection intelligence view predicting potential blockers based on customer profile",
      "Deal similarity comparison interface assisting sales reps before client calls"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "D3.js", "CSS3", "Vercel"],
    contribution: "Co-developed the project with Team CODE BUSTERS at Hack Baroda 2026. Built the interactive stakeholder network visualization with D3.js and frontend deal exploration views, qualifying for the offline hackathon finals.",
    architectureNotes: "Frontend interaction layer with D3.js force-directed graphs connected to Express.js service layer and simulated organizational knowledge base.",
    lessonsLearned: "Managing complex D3 SVG rendering lifecycles inside modern web frameworks and translating sales domain requirements into intuitive technical data representations.",
    githubUrl: "https://github.com/DharmChaniyara/CODE-BUSTERS-"
  },
  {
    id: "studyshare",
    name: "StudyShare (Campus Academic Platform)",
    tagline: "Centralized peer-to-peer academic learning and course resource sharing portal for GSFC University.",
    category: ["Full Stack Web", "Academic & Mobile"],
    status: "Completed Prototype",
    badge: "University Community Tool",
    problem: "University students frequently struggle with scattered course documents, outdated syllabi, and informal messaging groups to find reliable exam question papers and verified notes.",
    solution: "StudyShare provides a dedicated academic platform tailored specifically for GSFC University subjects (C++, Web Technology, BTCS204, DE Course), enabling students to view syllabi, share notes, and access previous year papers securely.",
    features: [
      "Subject-wise resource categorization for core B.Tech CSE modules",
      "In-browser document viewer for course syllabi, past question papers, and study guides",
      "Supabase backend integration with custom SQL schemas for user authentication and role management",
      "Document upload workflows and administrative approval controls",
      "Document persistence serving student peers across semesters"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Supabase (PostgreSQL)", "Supabase Storage", "Vercel"],
    contribution: "Architected database schemas (`master_setup.sql`, `setup_features.sql`, `setup_admin.sql`), implemented client-side API integrations for document retrieval and upload, and deployed the service.",
    architectureNotes: "Static frontend with dynamic JavaScript API modules interacting with Supabase BaaS (PostgreSQL DB, Storage buckets, and Auth policies).",
    lessonsLearned: "Configuring Supabase Row Level Security (RLS) policies, managing file uploads with storage buckets, and organizing multi-subject university curricula.",
    githubUrl: "https://github.com/DharmChaniyara/tinkering-mentoring"
  },
  {
    id: "campus-copilot",
    name: "Campus Copilot (IEEE Collaborative Project)",
    tagline: "Collaborative university knowledge assistant combining RAG retrieval with student services.",
    category: ["Collaborative / Hackathon", "AI & ML"],
    status: "Collaborative Prototype",
    badge: "Collaborative Student Project",
    problem: "Campus information remains fragmented between static PDF notices, administrative bulletin boards, and exam circulars, creating friction for new and existing students.",
    solution: "An architecture combining official university documentation, authenticated student data, and vector-based Retrieval-Augmented Generation (RAG) to provide an intelligent single assistant for student queries.",
    features: [
      "Conversational study and campus information engine specification",
      "Student portal integration architecture for authenticated records and timetable retrieval",
      "RBAC security design protecting private academic records",
      "Modular frontend design system with glassmorphic UI components"
    ],
    technologies: ["TypeScript", "React (Vite)", "Tailwind CSS", "RAG Concepts", "API Service Abstraction"],
    contribution: "Collaborated with university peers on system requirements, frontend component structure, and evaluating RAG interaction models for campus knowledge retrieval.",
    architectureNotes: "Frontend UI (React/Tailwind) -> API Service Abstraction -> Vector Knowledge Base & Student Record API.",
    lessonsLearned: "Understanding RAG retrieval pipelines, designing secure mock API contracts for academic records, and working in a shared team codebase.",
    githubUrl: "https://github.com/skyuchiha69/Campus-copilot-ieee"
  },
  {
    id: "devfest-companion",
    name: "DevFest Baroda 2026 Companion App",
    tagline: "Android mobile application designed for attendees of GDG Baroda's premier annual conference.",
    category: ["Academic & Mobile"],
    status: "In Development",
    badge: "GDG Community Project",
    problem: "Developer conference attendees need quick, offline-resilient access to speaker schedules, session tracks, and venue navigation in busy convention environments.",
    solution: "A native Android companion app built in Kotlin providing detailed event itineraries, speaker directories, and venue transit guidelines with graceful offline support.",
    features: [
      "Conference schedule and speaker directory navigation",
      "Vadodara city transit and venue guide with automated updates",
      "Offline-first mobile UI following modern Android Material design principles",
      "Built with Kotlin and Android Jetpack libraries"
    ],
    technologies: ["Kotlin", "Android Jetpack", "XML Layouts", "Gradle", "Android Studio"],
    contribution: "Created the mobile application repository, designed UI screen layouts, and structured data models for conference sessions and speakers.",
    architectureNotes: "Native Android architecture with activities, fragment navigation, and local data persistence.",
    lessonsLearned: "Exploring Android UI lifecycles, Kotlin syntax, and designing mobile experiences for developer audiences.",
    githubUrl: "https://github.com/DharmChaniyara/DevFest"
  },
  {
    id: "wind-turbine-sim",
    name: "Wind Turbine Physics & Energy Simulator",
    tagline: "Interactive HTML5 Canvas simulation modeling aerodynamic rotation and electrical power curves.",
    category: ["Academic & Mobile"],
    status: "Completed Prototype",
    problem: "Understanding how fluctuating wind velocity and blade aerodynamics influence clean energy power generation can be difficult without interactive visualization.",
    solution: "A browser-based physics simulation using HTML5 Canvas that calculates aerodynamic torque, rotational speed, and watt output based on dynamic wind velocity inputs.",
    features: [
      "Real-time Canvas animation of multi-blade turbine rotation",
      "Dynamic wind speed and resistance slider controls",
      "Instantaneous mechanical-to-electrical power output calculations",
      "Containerized with a lightweight Dockerfile for portable deployment"
    ],
    technologies: ["HTML5 Canvas", "JavaScript", "CSS3", "Physics Modeling", "Docker"],
    contribution: "Implemented mathematical physics formulas for rotational mechanics and rendered the dynamic 2D canvas animation.",
    architectureNotes: "Client-side requestAnimationFrame loop updating angular velocity and power calculations dynamically.",
    lessonsLearned: "Optimizing 2D canvas frame rates, mathematical modeling of physical forces, and containerizing static applications.",
    githubUrl: "https://github.com/DharmChaniyara/wind-turbine-sim"
  },
  {
    id: "java-game-manager",
    name: "Java Game Collection Management System",
    tagline: "Console-based Object-Oriented application for cataloging, filtering, and persisting game records.",
    category: ["Academic & Mobile"],
    status: "Academic Coursework Project",
    problem: "Demonstrating practical object-oriented principles, structured data persistence, and robust command-line interface validation.",
    solution: "A modular Java console application that enables users to record, search, modify, and delete game title entries, featuring ArrayList collection handling and file I/O persistence.",
    features: [
      "Complete CRUD operations for game titles, genres, ratings, and release years",
      "ArrayList collection management with dynamic sorting and search algorithms",
      "File I/O serialization for persisting game catalogs between runs",
      "Defensive user input validation and exception handling"
    ],
    technologies: ["Java", "OOP (Encapsulation, Polymorphism)", "Java Collections (ArrayList)", "File I/O"],
    contribution: "Developed the complete academic project as part of GSFC University computer science coursework.",
    architectureNotes: "Class-based architecture separating domain models (Game), collection managers (GameCatalog), and CLI views.",
    lessonsLearned: "Deepened core OOP understanding, Java exception handling, and file read/write streams.",
    githubUrl: "https://github.com/DharmChaniyara"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used in coursework, hackathons, and software projects.",
    skills: [
      { name: "Python", level: "Certified / Coursework", details: "Cisco Certified (Python Essentials 2), scripting, data basics" },
      { name: "JavaScript (ES6+)", level: "Used in Projects", details: "Async/await, DOM, APIs, core for web development" },
      { name: "Java", level: "Used in Projects", details: "Core OOP, Collections, file handling, university coursework" },
      { name: "Kotlin", level: "Actively Learning", details: "Basic Android app development (DevFest companion)" },
      { name: "C / C++", level: "Certified / Coursework", details: "Foundational data structures and procedural programming" }
    ]
  },
  {
    title: "Web Development & Frontend",
    description: "Technologies utilized to build responsive, accessible web interfaces.",
    skills: [
      { name: "React.js", level: "Used in Projects", details: "Component lifecycle, state management, hooks" },
      { name: "Vite", level: "Used in Projects", details: "Modern tooling, rapid build pipelines, asset handling" },
      { name: "Tailwind CSS", level: "Used in Projects", details: "Utility-first design, custom themes, dark mode" },
      { name: "HTML5 & CSS3", level: "Used in Projects", details: "Semantic markup, CSS Grid, Flexbox, media queries" },
      { name: "Framer Motion", level: "Used in Projects", details: "Fluid UI micro-interactions and transitions" },
      { name: "D3.js", level: "Used in Projects", details: "Network graphs and data-driven visualization" }
    ]
  },
  {
    title: "Backend, Databases & BaaS",
    description: "Server-side logic, API endpoints, and cloud database persistence.",
    skills: [
      { name: "Node.js & Express", level: "Used in Projects", details: "REST API routes, middleware, Multer file parsing" },
      { name: "Supabase", level: "Used in Projects", details: "PostgreSQL, Row Level Security, Auth, Storage buckets" },
      { name: "PostgreSQL / SQL", level: "Used in Projects", details: "Schema design, relational querying, table constraints" },
      { name: "MongoDB", level: "Actively Learning", details: "NoSQL document fundamentals" }
    ]
  },
  {
    title: "AI, ML & Modern Workflows",
    description: "Practical application of AI APIs and AI-assisted development tools.",
    skills: [
      { name: "OpenAI API Integration", level: "Used in Projects", details: "Prompt engineering, structured JSON responses, evaluation" },
      { name: "RAG Concepts", level: "Actively Learning", details: "Retrieval-Augmented Generation architecture for knowledge bases" },
      { name: "AI Developer Tooling", level: "Used in Projects", details: "Using AI code assistants to accelerate prototyping and testing" },
      { name: "Python Data Analysis", level: "Actively Learning", details: "Basic numerical processing and dataset manipulation" }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    description: "Version control, deployment platforms, and developer environment.",
    skills: [
      { name: "Git & GitHub", level: "Used in Projects", details: "Branching, PRs, commit hygiene, team collaboration" },
      { name: "Vercel", level: "Used in Projects", details: "Continuous frontend deployment and preview environments" },
      { name: "VS Code", level: "Used in Projects", details: "Primary development IDE and debugging setup" },
      { name: "Postman", level: "Used in Projects", details: "API testing, endpoint validation, header inspection" },
      { name: "Computer Hardware", level: "Certified / Coursework", details: "Cisco Certified in Computer Hardware Basics" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hack-baroda-2026",
    title: "Offline Finalist — Hack Baroda 2026",
    organization: "Hack Baroda & University Student Community",
    date: "2026",
    type: "Award / Finalist",
    description: "Selected for the final offline round of Hack Baroda 2026 with Team CODE BUSTERS for building the Deal Intelligence Agent prototype — an AI sales copilot with organizational memory.",
    badgeText: "Offline Finalist",
    credentialUrl: "https://github.com/DharmChaniyara/CODE-BUSTERS-"
  },
  {
    id: "cisco-python-2",
    title: "Python Essentials 2 Certification",
    organization: "Cisco Networking Academy & OpenEDG Python Institute",
    date: "October 18, 2026",
    type: "Certification",
    description: "Verified certification covering advanced Python concepts including object-oriented programming, exception handling, string manipulation, and module architecture.",
    badgeText: "Verified Credential",
    credentialUrl: "/certificates/Cisco_Python_Essentials_2.pdf"
  },
  {
    id: "cisco-hardware",
    title: "Computer Hardware Basics Certification",
    organization: "Cisco Networking Academy",
    date: "September 24, 2026",
    type: "Certification",
    description: "Verified certification covering computer architecture, motherboard components, memory systems, storage devices, and hardware troubleshooting fundamentals.",
    badgeText: "Verified Credential",
    credentialUrl: "/certificates/Cisco_Computer_Hardware_Basics.pdf"
  },
  {
    id: "ssip-drone",
    title: "SSIP Drone Technology Workshop",
    organization: "Student Start-up and Innovation Policy (SSIP), Gujarat & GSFC University",
    date: "2025–2026",
    type: "Workshop",
    description: "Participated in an intensive hands-on workshop on drone aerodynamics, hardware integration, microcontrollers, and autonomous aerial system concepts.",
    badgeText: "Technical Workshop"
  }
];

export const GITHUB_REPOS = [
  {
    name: "Fake-Job-Offer-Detector-",
    displayName: "JobGuard AI (Scam Detector)",
    description: "Full-stack AI scam detector using OpenAI for text analysis & VirusTotal for link scanning.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/DharmChaniyara/Fake-Job-Offer-Detector-",
    tag: "AI + Full Stack"
  },
  {
    name: "CODE-BUSTERS-",
    displayName: "Deal Intelligence Agent",
    description: "AI-powered sales copilot with organizational memory & D3.js stakeholder graphs. Hack Baroda 2026 Finalist.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/DharmChaniyara/CODE-BUSTERS-",
    tag: "AI Sales Copilot"
  },
  {
    name: "tinkering-mentoring",
    displayName: "StudyShare Campus Platform",
    description: "Academic resource-sharing portal for GSFC University students with Supabase PostgreSQL.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/DharmChaniyara/tinkering-mentoring",
    tag: "Full Stack Platform"
  },
  {
    name: "Campus-copilot-ieee",
    displayName: "Campus Copilot (Collaborative)",
    description: "University AI assistant architecture combining official campus data with student services and RAG.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/skyuchiha69/Campus-copilot-ieee",
    tag: "Collaborative / IEEE"
  },
  {
    name: "DevFest",
    displayName: "DevFest Baroda 2026 Companion",
    description: "Mobile companion app for GDG Baroda DevFest developer conference.",
    language: "Kotlin",
    stars: 0,
    url: "https://github.com/DharmChaniyara/DevFest",
    tag: "Android Mobile"
  },
  {
    name: "wind-turbine-sim",
    displayName: "Wind Turbine Physics Sim",
    description: "Interactive HTML5 Canvas physics simulator calculating aerodynamic power output.",
    language: "HTML / JS",
    stars: 0,
    url: "https://github.com/DharmChaniyara/wind-turbine-sim",
    tag: "Physics Simulation"
  }
];
