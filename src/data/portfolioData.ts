export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  architectureHighlights: string[];
  technology: string[];
  githubUrl?: string;
  liveUrl?: string;
  appDownloadUrl?: string;
  image?: string;
  isFlagship?: boolean;
}

export interface SkillProgress {
  name: string;
  category: string;
  percentage: number;
  highlight: string;
}

export interface CapabilityDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship' | 'Founder / Independent' | 'SIWES';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationCertification {
  title: string;
  institution: string;
  period: string;
  details: string;
  badge: string;
  type: 'education' | 'certification';
  gradeOrScore?: string;
}

export const PERSONAL_INFO = {
  name: "Abubakar Abdulrahim",
  fullName: "Abubakar Abdulrahim Ibrahim",
  shortName: "Abubakar",
  roleTitle: "Mobile Application Developer & Software Engineer",
  heroHeadline: "Engineering resilient mobile systems and digital products.",
  heroSubtitle: "Mobile Application Developer & Software Engineer",
  heroTagline: "Building software that performs reliably in the real world.",
  heroSubtext:
    "Based in Kano, Nigeria. Experienced in Flutter, Firebase, REST APIs, authentication security, and on-device AI model compression for resource-constrained environments.",
  location: "Kano, Nigeria",
  phone: "+234 816 995 0252",
  status: "Available for engineering roles & select contracts",
  github: "https://github.com/AbubakarAbdulrahim",
  githubHandle: "AbubakarAbdulrahim",
  linkedin: "https://linkedin.com/in/abubakar-abdulrahim-8b8619228",
  portfolioUrl: "https://abubakarabdulrahim.vercel.app",
  email: "abubakarabdulrahimibrahim@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const SKILLS_WITH_PROGRESS: SkillProgress[] = [
  {
    name: "Flutter & Dart",
    category: "Mobile",
    percentage: 95,
    highlight: "Cross-platform mobile apps, state management, offline architecture, and hardware keystore",
  },
  {
    name: "Firebase & Cloud Services",
    category: "Cloud",
    percentage: 90,
    highlight: "Auth, Firestore real-time listeners, Cloud Messaging, Functions, and Cloudinary",
  },
  {
    name: "REST APIs & Backend Integration",
    category: "Backend",
    percentage: 88,
    highlight: "Python (Django, Django REST Framework), Node.js, and API security workflows",
  },
  {
    name: "Mobile UI/UX Optimization",
    category: "Frontend",
    percentage: 86,
    highlight: "Responsive widgets, fluid state, Android SDK, and low-latency interaction",
  },
  {
    name: "Databases & Data Pipelines",
    category: "Data",
    percentage: 84,
    highlight: "PostgreSQL, Supabase, SQLite, and real-time event sync",
  },
  {
    name: "Edge AI & Model Compression",
    category: "Research",
    percentage: 80,
    highlight: "On-device AI, quantization, pruning, and multimodal anomaly detection",
  },
];

export const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: "mobile-engineering",
    title: "Mobile Architecture & Systems",
    subtitle: "Cross-platform mobile applications engineered for reliability",
    description:
      "Architecting modular, cross-platform mobile apps in Flutter and Dart. Focused on deterministic state management, offline SQLite/Hive caching, and hardware-backed keystore security.",
    skills: ["Flutter", "Dart", "Android SDK", "Provider", "GoRouter", "SQLite / Hive", "Offline Caching", "Hardware Keystore"],
    iconName: "Smartphone",
  },
  {
    id: "cloud-backend",
    title: "Backend, APIs & Cloud Services",
    subtitle: "Real-time sync, serverless execution & relational data",
    description:
      "Integrating cloud services with client applications. Experience structuring Cloud Firestore listeners, serverless functions, authentication pipelines, and relational database schemas.",
    skills: ["Firebase (Auth, FCM, Functions)", "Cloud Firestore", "Python (Django, DRF)", "RESTful APIs", "PostgreSQL", "Supabase", "Cloudinary"],
    iconName: "Server",
  },
  {
    id: "edge-ai-research",
    title: "Edge AI & Model Compression",
    subtitle: "On-device intelligence for resource-constrained devices",
    description:
      "Researching and implementing on-device AI pipelines: model quantization and pruning to run multimodal anomaly detection directly on smartphones without cloud latency or continuous bandwidth.",
    skills: ["On-Device AI", "Model Quantization", "Model Pruning", "Mobile Crowdsensing", "Python", "Anomaly Detection"],
    iconName: "Sparkles",
  },
  {
    id: "cybersecurity-auth",
    title: "Cybersecurity & Flow Verification",
    subtitle: "Authentication security, OTP migration & system defense",
    description:
      "Hands-on experience redesigning security-critical flows (account activation, PIN resets, OTP-based verification) at Tubali Digital, backed by Cisco Cybersecurity training.",
    skills: ["OTP Verification", "Biometric Auth", "Keystore/Keychain Token Storage", "Network Defense", "Threat Analysis", "IAM"],
    iconName: "Shield",
  },
  {
    id: "leadership-mentorship",
    title: "Technical Leadership & Community Impact",
    subtitle: "Founder of Hausasoft Technologies & bootcamp instructor",
    description:
      "Founded and lead Hausasoft Technologies. Designed and delivered practical bootcamps teaching web and mobile development to over 200+ early-career learners with bilingual resources.",
    skills: ["Hausasoft Founder & Tech Lead", "200+ Learners Mentored", "Bilingual Tech Curricula", "Agile/Scrum", "Git/GitHub"],
    iconName: "Users",
  },
];

export const TIMELINE_EXPERIENCE: TimelineEntry[] = [
  {
    id: "tubali-current",
    role: "Mobile Application Developer",
    company: "Tubali Digital",
    location: "Kano State (Remote)",
    period: "Sep 2026 – Present",
    isCurrent: true,
    type: "Full-time",
    summary:
      "Developing and improving Flutter applications for a fintech product, specializing in application architecture, API integration, and security-critical verification workflows.",
    highlights: [
      "Redesigned critical security flows in Tubali's mobile fintech app, including account activation, login PIN reset, and transaction PIN reset.",
      "Moved these flows from email-link-based verification to OTP-based verification, cutting down on a recurring source of failed and delayed verifications.",
      "Engineered secure token persistence using hardware-backed Android Keystore and iOS Keychain integrations.",
      "Structured clean state and routing architectures using Provider and GoRouter with resilient error boundaries.",
    ],
    technologies: ["Flutter", "Dart", "Provider", "GoRouter", "REST APIs", "OTP Security", "Hardware Keystore"],
  },
  {
    id: "hausasoft-founder",
    role: "Founder & Technical Lead",
    company: "Hausasoft Technologies",
    location: "Kano, Nigeria",
    period: "Dec 2022 – Present",
    isCurrent: true,
    type: "Founder / Independent",
    summary:
      "Founded and run a startup building mobile applications and delivering community digital-skills programs in northern Nigeria.",
    highlights: [
      "Designed and led a bootcamp teaching web development and cross-platform mobile development to over 200+ early-career learners, handling both course content and day-to-day mentorship.",
      "Architected and deployed Safetify, a real-time crowdsourced incident reporting mobile app with GPS geofencing and push alerts.",
      "Built Hausasoft E-Learn, delivering structured programming tutorials with bilingual technical explanations in English and Hausa.",
    ],
    technologies: ["Flutter", "Firebase", "Google Maps API", "SQLite", "Next.js", "Cloudinary"],
  },
  {
    id: "citad-siwes",
    role: "Web Development Trainee (SIWES)",
    company: "Centre for Information Technology and Development (CITAD)",
    location: "Kano, Nigeria",
    period: "Nov 2024 – Jul 2025",
    isCurrent: false,
    type: "SIWES",
    summary:
      "Completed a structured industrial work placement in web development, as part of Bayero University Kano's Student Industrial Work Experience Scheme (SIWES).",
    highlights: [
      "Collaborated on the development of EventMaster, a modern web application that simplifies event planning and booking by connecting users with venues and trusted service providers in one platform.",
      "Developed web portals using Python, Django, HTML5, CSS3, and JavaScript.",
      "Structured relational database queries, version control practices, and client-server architectures.",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "JavaScript", "HTML5/CSS3", "PostgreSQL", "Git"],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "safetify",
    title: "Safetify",
    subtitle: "Real-Time Crowdsourced Incident Reporting & Safety Alert Mobile Application",
    tagline: "Undergraduate thesis at Bayero University Kano. Sub-2.1s alert delivery with on-device AI compression research.",
    category: "Mobile Systems / B.Sc. Thesis",
    isFlagship: true,
    image: "/projects/safetify.jpg",
    tags: ["Flutter", "Firebase (Auth, Firestore, Cloud Messaging)", "Google Maps API", "Cloudinary", "Three-Tier Architecture"],
    problem:
      "In dense communities, incident awareness often takes too long because reports are scattered across phone calls and unverified social media posts without geographical coordinates.",
    solution:
      "Built a mobile app, using Kano State as the case study, that lets residents submit geo-tagged incident reports and receive real-time safety alerts for incidents nearby. Accompanied by a centralized admin dashboard for verifying and clustering incoming reports before alerts go out, and an interactive map of reported incidents.",
    architectureHighlights: [
      "Tested with six participants across unit, integration, system, and usability tests; scored 4.4/5.0 on usability",
      "Delivered real-time proximity alerts in about 2.1 seconds on average across live mobile networks",
      "Three-tier architecture with Firebase Auth, Cloud Firestore, Cloud Messaging, and Cloudinary media processing",
      "Currently extending into a research paper on compressing the detection model (quantization and pruning) so it can run multimodal anomaly detection directly on the phone instead of relying on the cloud",
    ],
    technology: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloudinary", "SQLite"],
    githubUrl: "https://github.com/AbubakarAbdulrahim/Safetify",
    liveUrl: "https://safetify-61721.web.app",
    appDownloadUrl: "https://drive.google.com/file/d/1Dhhe9xdak8l-xykDF1D7i1W4JTyKfsaA/view?usp=drive_link",
  },
  {
    id: "smartbuk",
    title: "SmartBUK",
    subtitle: "Centralized Campus Information & Student Services Platform",
    tagline: "Unifying academic notices, timetables, and student utilities for Bayero University Kano.",
    category: "Mobile Application / Campus Portal",
    isFlagship: true,
    image: "/projects/smartbuk.jpg",
    tags: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Real-Time Sync"],
    problem:
      "Essential academic circulars, lecture timetables, and lost-and-found items across Bayero University Kano were scattered across physical notice boards and informal WhatsApp groups, resulting in missed deadlines and lost property.",
    solution:
      "Built a unified Flutter mobile application for BUK students providing verified faculty newsfeeds, lecture and exam schedules, and a moderated lost-and-found registry with item claim workflows.",
    architectureHighlights: [
      "Categorized faculty announcement feeds with real-time push notifications",
      "Interactive lost-and-found registry with photo verification and contact claim flows",
      "Persistent on-device caching ensuring students can access schedules without an active internet connection",
    ],
    technology: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
    githubUrl: "https://github.com/AbubakarAbdulrahim/buk_smart_app",
  },
  {
    id: "eventmaster",
    title: "EventMaster",
    subtitle: "Modern Event Planning & Service Provider Booking Web Platform",
    tagline: "SIWES industrial placement project at CITAD Kano connecting organizers with venues and trusted vendors.",
    category: "Web Application / CITAD Placement",
    isFlagship: false,
    image: "/projects/smartroute.jpg",
    tags: ["Python", "Django", "PostgreSQL", "JavaScript", "REST APIs"],
    problem:
      "Event hosts and planners in Kano face fragmented communication and lack centralized tools to discover, inspect, and book verified event venues and trusted service providers.",
    solution:
      "Collaborated on building EventMaster at CITAD: a modern web application simplifying event planning by connecting users with venues, photographers, caterers, and sound engineers on a unified platform.",
    architectureHighlights: [
      "Engineered venue reservation and scheduling workflows with relational data modeling",
      "Implemented role-based dashboards for event planners, venue owners, and service providers",
      "Built during structured industrial training placement at CITAD Kano",
    ],
    technology: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML5/CSS3"],
    githubUrl: "https://github.com/AbubakarAbdulrahim",
  },
  {
    id: "hausasoft-elearn",
    title: "Hausasoft E-Learn",
    subtitle: "Bilingual Technical Education & Digital Skills Platform",
    tagline: "Empowering 200+ early-career learners with structured programming curricula in English and Hausa.",
    category: "Web Platform / Startup Initiative",
    isFlagship: false,
    image: "/projects/hausasoft.jpg",
    tags: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    problem:
      "Emerging developers in northern Nigeria often face steep language barriers when attempting to learn programming exclusively through English-language documentation.",
    solution:
      "Created a web learning portal providing structured mobile and web development lessons with dual-language technical explanations in English and Hausa, supporting Hausasoft's 200+ bootcamp students.",
    architectureHighlights: [
      "Bilingual lesson delivery designed for low-bandwidth mobile browsing",
      "Structured modular programming exercises from foundational logic to mobile app deployment",
      "Integrated with Hausasoft community workshops and developer bootcamps in Kano",
    ],
    technology: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/AbubakarAbdulrahim/Hausasoft",
  },
];

export const RESEARCH_INTERESTS = [
  "Mobile Computing",
  "Mobile Crowdsensing",
  "Edge / On-Device Artificial Intelligence",
  "Model Compression for Resource-Constrained Devices (Quantization & Pruning)",
  "Applied Software Systems for Public Safety",
];

export const EDUCATION_AND_CERTS: EducationCertification[] = [
  {
    title: "B.Sc. in Information Technology",
    institution: "Bayero University, Kano (BUK)",
    period: "Dec 2021 – Mar 2026",
    details:
      "Graduated with 4.44 / 5.00 CGPA (Second Class Honours, Upper Division). Undergraduate Thesis: 'Safetify: A Real-Time Crowdsourced Incident Reporting and Safety Alert Mobile Application (A Case Study of Kano State, Nigeria)', supervised by Murja Sani Gadanya and Faruk Umar Ambursa (HOD).",
    badge: "Academic Degree",
    type: "education",
    gradeOrScore: "4.44 / 5.00 CGPA",
  },
  {
    title: "Research Methodology and Scientific Writing",
    institution: "Maryam Abacha American University of Nigeria",
    period: "Issued Feb 2025",
    details:
      "Advanced certification covering scientific research methodology, technical paper composition, empirical experimentation, and academic literature analysis.",
    badge: "Academic Credential",
    type: "certification",
    gradeOrScore: "Verified",
  },
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    period: "Issued Dec 2023",
    details:
      "Industry credential covering network defense architectures, threat intelligence analysis, vulnerability assessment, endpoint protection, and security operations.",
    badge: "Industry Credential",
    type: "certification",
    gradeOrScore: "Verified Credential",
  },
  {
    title: "Introduction to Data Science",
    institution: "Cisco Networking Academy",
    period: "Issued Jan 2024",
    details:
      "Credential covering data ingestion pipelines, exploratory data analysis, statistical modeling, and data-driven decision frameworks for software systems.",
    badge: "Industry Credential",
    type: "certification",
    gradeOrScore: "Verified Credential",
  },
  {
    title: "Higher Professional Diploma in Data Processing & IT",
    institution: "VIT",
    period: "Issued Jan 2021",
    details:
      "Comprehensive professional diploma covering computer fundamentals, data processing workflows, systems software, and IT operations.",
    badge: "Professional Diploma",
    type: "education",
    gradeOrScore: "Certified",
  },
  {
    title: "Jobberman Soft-Skills Training",
    institution: "Jobberman",
    period: "Issued Mar 2022",
    details:
      "Professional workplace competencies covering cross-functional communication, emotional intelligence, teamwork, and project execution.",
    badge: "Professional Skills",
    type: "certification",
    gradeOrScore: "Certified",
  },
  {
    title: "Web Development Fundamentals",
    institution: "Sololearn",
    period: "Issued Mar 2022",
    details:
      "Foundational web development credential covering semantic HTML5, CSS3 responsive styling, and modern JavaScript programming.",
    badge: "Technical Certificate",
    type: "certification",
    gradeOrScore: "Certified",
  },
];

export const LEADERSHIP_AND_COMMUNITY = [
  {
    role: "Member & Peer Mentor",
    organization: "Google Developer Student Clubs (GDSC BUK)",
    period: "Feb 2022 – Feb 2026",
    description: "Mentored fellow students in Flutter development, clean code practices, and Firebase integrations.",
  },
  {
    role: "Member",
    organization: "Muslim Students' Society of Nigeria (MSSN), BUK Chapter",
    period: "Feb 2022 – Jan 2026",
    description: "Participated in academic tutorials, technical support, and peer student development workshops.",
  },
  {
    role: "Secretary General",
    organization: "Albarka Group Youth Development Association",
    period: "Jun 2020 – Sep 2024",
    description: "Led administrative coordination, youth development initiatives, and community digital literacy advocacy in Kano.",
  },
];

export const LANGUAGES = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hausa", proficiency: "Native" },
  { language: "Arabic", proficiency: "Basic" },
];
