export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  tags: string[];
  problem: string;
  built: string;
  technology: string[];
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  screenshotNote?: string;
  isFlagship?: boolean;
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
  roleTitle: "Mobile Developer & IT Professional",
  heroHeadline: "Abubakar Abdulrahim",
  heroSubtitle: "Mobile Developer & IT Professional",
  heroTagline: "Building practical digital products that solve real problems.",
  heroSubtext: "Based in Kano, Nigeria. Specializing in Flutter, Firebase, and web technologies.",
  location: "Kano, Nigeria",
  status: "Available for engineering roles & select contracts",
  github: "https://github.com/AbubakarAbdulrahim",
  githubHandle: "AbubakarAbdulrahim",
  linkedin: "https://linkedin.com/in/abubakar-abdulrahim-8b8619228",
  email: "abubakarabdulrahimibrahim@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const CORE_SKILLS = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "Git / GitHub",
];

export const WORKING_KNOWLEDGE_SKILLS = [
  "Django",
  "React",
  "PostgreSQL",
  "Supabase",
  "Python",
];

export const WHAT_I_DO = [
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps built with Flutter and Dart, with real-time Firebase sync and offline caching.",
    iconName: "Smartphone",
  },
  {
    title: "Web Platforms",
    description: "Responsive web apps and dashboards built with React, Next.js, and clean Tailwind CSS.",
    iconName: "Globe",
  },
  {
    title: "Backend & APIs",
    description: "REST API integrations, serverless Cloud Functions, authentication flows, and relational database modeling.",
    iconName: "Cpu",
  },
  {
    title: "Applied AI Integrations",
    description: "Adding practical language model capabilities, streaming assistants, and smart document processing into user workflows.",
    iconName: "Sparkles",
  },
  {
    title: "Tech Training & Mentorship",
    description: "Running bootcamps and workshops for emerging software developers in northern Nigeria through Hausasoft.",
    iconName: "Users",
  },
];

export const CURRENTLY = {
  building: "SmartBUK campus mobile app & Hausasoft educational tools",
  working: "Production mobile application development",
  learning: "Applied AI integrations & system architecture patterns",
  based: "Kano, Nigeria",
  openTo: "Full-time engineering roles, mobile contracts & technical collaborations",
};

export const TIMELINE_EXPERIENCE: TimelineEntry[] = [
  {
    id: "tubali-current",
    role: "Mobile Application Developer",
    company: "Tubali Digital",
    location: "Kano State, Nigeria (Hybrid)",
    period: "Sep 2026 – Present",
    isCurrent: true,
    type: "Full-time",
    summary:
      "Developing Flutter-based fintech applications, authentication workflows, API integrations, and mobile security.",
    highlights: [
      "Improved mobile authentication, password recovery, and transaction verification flows.",
      "Implemented multi-channel OTP verification workflows across key account checkpoints.",
      "Structured clean state and routing architectures using Provider and GoRouter.",
      "Engineered secure token storage using hardware-backed keystore integration.",
      "Collaborated with cross-functional teams on production mobile feature releases.",
    ],
    technologies: ["Flutter", "Dart", "Provider", "GoRouter", "Dio", "REST APIs"],
  },
  {
    id: "codealpha-intern",
    role: "Mobile Developer Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "Dec 2025 – Present",
    isCurrent: true,
    type: "Internship",
    summary:
      "Developing cross-platform mobile user interfaces and state management workflows in Flutter.",
    highlights: [
      "Built modular Flutter widgets adhering to clean responsive layouts and component standards.",
      "Collaborated on code reviews, bug fixes, and sprint deliverables.",
    ],
    technologies: ["Flutter", "Dart", "State Management", "REST APIs", "Git"],
  },
  {
    id: "hausasoft-founder",
    role: "Founder & Mobile Developer",
    company: "Hausasoft Technologies",
    location: "Kano, Nigeria",
    period: "Dec 2025 – Present",
    isCurrent: true,
    type: "Founder / Independent",
    summary:
      "Independent initiative focused on building community digital tools and technology training in northern Nigeria.",
    highlights: [
      "Designed and deployed Safetify, a crowdsourced incident reporting mobile app with GPS geofencing and push alerts.",
      "Organized practical Flutter developer bootcamps, mentoring beginner developers across Kano.",
      "Built Hausasoft E-Learn, delivering programming and technology tutorials in English and Hausa.",
    ],
    technologies: ["Flutter", "Firebase", "Google Maps API", "SQLite", "Next.js"],
  },
  {
    id: "citad-siwes",
    role: "SIWES Trainee (Web Development)",
    company: "Centre for Information Technology and Development (CITAD)",
    location: "Kano State, Nigeria",
    period: "Nov 2024 – Jul 2025",
    isCurrent: false,
    type: "SIWES",
    summary:
      "Industrial training focused on web development, relational database design, and institutional IT systems.",
    highlights: [
      "Developed web portals using Python, Django, HTML5, CSS3, and JavaScript.",
      "Gained hands-on experience in database queries, version control, and client-server architecture.",
    ],
    technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "PostgreSQL", "Git"],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "safetify",
    title: "Safetify",
    subtitle: "Real-Time Incident Reporting & Safety Alert Mobile App",
    tagline: "Crowdsourced safety alerts with real-time geofencing and offline queueing.",
    category: "Mobile Application / Capstone",
    isFlagship: true,
    image: "/projects/safetify.jpg",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore", "SQLite"],
    problem:
      "In dense communities, incident awareness often takes too long because alerts are scattered across phone calls and unverified social media posts without geographical precision.",
    built:
      "Engineered an offline-first mobile application in Flutter with background GPS geofencing, on-device image downsampling, and Cloud Firestore push broadcasting to nearby users.",
    technology: ["Flutter", "Dart", "Firebase", "Google Maps API", "SQLite"],
    result:
      "Delivered real-time incident dispatch with proximity filtering, tested under simulated multi-user load conditions.",
    githubUrl: "https://github.com/AbubakarAbdulrahim/Safetify",
    liveUrl: "https://safetify-61721.web.app",
    screenshotNote: "Replace image in /public/projects/safetify.jpg",
  },
  {
    id: "smartbuk",
    title: "SmartBUK",
    subtitle: "Campus Services & Information Mobile App for Bayero University Kano",
    tagline: "Centralized academic bulletins, lost & found, and student resources.",
    category: "Mobile Application / Campus Platform",
    isFlagship: true,
    image: "/projects/smartbuk.jpg",
    tags: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Real-Time Sync"],
    problem:
      "Important academic circulars, exam schedules, and lost-and-found items at BUK were fragmented across dozens of informal WhatsApp groups and physical notice boards.",
    built:
      "Developed a dedicated Flutter mobile application for students, providing categorized faculty wire feeds, matriculation-token authorization, and a searchable lost-and-found registry.",
    technology: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
    result:
      "Consolidated essential campus announcements and student services into a single persistent mobile platform.",
    githubUrl: "https://github.com/AbubakarAbdulrahim/buk_smart_app",
    screenshotNote: "Replace image in /public/projects/smartbuk.jpg",
  },
  {
    id: "smartroute",
    title: "SmartRoute",
    subtitle: "Route Optimization & Logistics Dashboard",
    tagline: "Interactive route planning and waypoint dispatch prototype.",
    category: "Web & Logistics Application",
    isFlagship: false,
    image: "/projects/smartroute.jpg",
    tags: ["TypeScript", "React", "Mapping APIs", "Tailwind CSS"],
    problem:
      "Regional transport and delivery planning often suffers from inefficient multi-stop routing and lack of interactive visual dispatch tools.",
    built:
      "Constructed a clean dispatch dashboard with interactive map waypoints, stopover sequencing, and transit duration estimates.",
    technology: ["TypeScript", "React", "Tailwind CSS", "Map APIs"],
    result:
      "Demonstrated efficient visual stopover reordering and dispatch planning for regional transport networks.",
    githubUrl: "https://github.com/AbubakarAbdulrahim/SmartRoute",
    screenshotNote: "Replace image in /public/projects/smartroute.jpg",
  },
  {
    id: "hausasoft-elearn",
    title: "Hausasoft E-Learn",
    subtitle: "Accessible Tech Education & Digital Skills Platform",
    tagline: "Bilingual programming curriculum in English and Hausa.",
    category: "Web Platform / Education",
    isFlagship: false,
    image: "/projects/hausasoft.jpg",
    tags: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    problem:
      "Beginner developers in northern Nigeria often face barriers accessing structured programming tutorials in both English and their native language.",
    built:
      "Built a web platform delivering mobile development lessons, video workshops, and practical code exercises in English and Hausa.",
    technology: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    result:
      "Provided accessible, bilingual programming curricula to beginner students across Kano and northern Nigeria.",
    githubUrl: "https://github.com/AbubakarAbdulrahim/Hausasoft",
    screenshotNote: "Replace image in /public/projects/hausasoft.jpg",
  },
];


export const EDUCATION_AND_CERTS: EducationCertification[] = [
  {
    title: "B.Sc. Information Technology",
    institution: "Bayero University Kano (BUK)",
    period: "Jan 2021 – Feb 2026",
    details:
      "Graduated with 4.44 / 5.00 CGPA (Second Class Honours: Upper Division). Final-Year Capstone Project: Safetify (Real-Time Safety & Incident Response System).",
    badge: "Degree",
    type: "education",
    gradeOrScore: "4.44 / 5.00 CGPA",
  },
  {
    title: "Certified Cybersecurity Analyst",
    institution: "Cisco Networking Academy",
    period: "Issued Dec 2023",
    details:
      "Comprehensive certification covering network defense, threat analysis, access control, and security operations.",
    badge: "Certification",
    type: "certification",
    gradeOrScore: "Verified Credential",
  },
  {
    title: "Certified Data Scientist",
    institution: "Cisco Networking Academy",
    period: "Issued Jan 2024",
    details:
      "Credential covering data analytics pipelines, statistical modeling, and data-driven decision frameworks.",
    badge: "Certification",
    type: "certification",
    gradeOrScore: "Verified Credential",
  },
];

export const VOLUNTEERING = [
  {
    role: "Active Member",
    organization: "Google Developer Student Clubs (GDSC BUK)",
    period: "Feb 2022 – Feb 2026",
    description: "Mentored fellow students in Flutter development, clean code practices, and Firebase integrations.",
  },
  {
    role: "Active Member",
    organization: "MSSN BUK (Faculty of Computing)",
    period: "Feb 2022 – Jan 2026",
    description: "Organized peer study groups, academic tutorial sessions, and technical support workshops.",
  },
];
