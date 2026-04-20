// ─── Types ────────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  description: string;
  period: string;
  current: boolean;
}

export interface EducationItem {
  level: string;
  degree: string;
  major: string;
  school: string;
  period: string;
  current: boolean;
}

export interface AchievementItem {
  title: string;
  org: string;
  period: string;
}

export interface ScholarshipItem {
  name: string;
  org: string;
  period: string;
  active: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface AwardItem {
  title: string;
  event: string;
  org: string;
  year: string;
}

export interface AffiliationItem {
  org: string;
  role: string;
  period: string;
}

export interface EventItem {
  name: string;
  org: string;
  date: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "John Rey Vilbar",
  headline: "BS Information Technology · Cum Laude",
  tagline: "Junior Software Developer",
  bio: "An Information Technology professional aiming to improve their skills and contribute to nation building through constant experimentation and exploration of newfound knowledge. Experienced in Web Development, Test Automation, Web Scraping, Graphics Design, and Music Production.",
  nationality: "Filipino",
  age: 24,
  nickname: "John · Rey · Jay-R",
  location: "General Santos City, Philippines",
  email: "reyjohn.vilbar@gmail.com",
  photo: "/image/profile.png",
  cvUrl: "https://drive.google.com/file/d/1-9pJfhqOpOAZ4dJ001Y-aasYqwR--oXj/view?usp=sharing",
  socials: [
    { label: "Facebook", url: "https://www.facebook.com/jannrey.vilbar/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/johnrey-vilbar/" },
    { label: "GitHub", url: "https://github.com/johnn600" },
    { label: "YouTube", url: "https://www.youtube.com/@entangledcoder" },
    { label: "Spotify", url: "https://open.spotify.com/artist/1Pppi28FTC2XsPLQL3BIK4" },
  ] satisfies SocialLink[],
};

export const SKILLS: string[] = [
  "Python", "JavaScript", "TypeScript",
  "Next.js", "React.js", "TailwindCSS", "Bootstrap",
  "OpenLayers", "Firebase", "Git & GitHub",
  "Web Scraping", "Test Automation (Playwright)", "Wireframing",
  "Graphics Design", "Music Production",
];

export const DB_LANGUAGES: string[] = ["SQLite", "MySQL", "PostgreSQL"];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Project Technical Assistant",
    org: "DOST PCAARRD (through MSU Gensan)",
    description: "Serving as a technical assistant & blockchain developer under the DOST-PCAARRD-funded research project (implemented by MSU-GenSan) focusing on blockchain integration and shrimp product traceability.",
    period: "Jul 2025 – Present",
    current: true,
  },
  {
    role: "Junior Software Developer",
    org: "inriver Philippines",
    description: "I worked on web scraping, code refactoring and testing, QA test automation, team collaboration, preparing daily technical reports, and monitoring and maintaining collected data.",
    period: "Aug 2024 – Jun 2025",
    current: false,
  },
  {
    role: "Intern",
    org: "General Santos City Water District",
    description: "Our team developed a proof of concept custom geographical information system (GIS) for General Santos City Water District built on top of available open-source frameworks. I was responsible for tracking the overall progress of the system and implemented the core mapping features.",
    period: "Jan – May 2024",
    current: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    level: "College",
    degree: "Bachelor of Science in Information Technology",
    major: "Database Major",
    school: "Mindanao State University – General Santos",
    period: "2020 – 2024",
    current: false,
  },
  {
    level: "Senior High School",
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    major: "",
    school: "General Santos City National High School",
    period: "2018 – 2020",
    current: false,
  },
  {
    level: "Junior High School",
    degree: "Science, Technology, Engineering Program (STE)",
    major: "",
    school: "General Santos City National High School",
    period: "2014 – 2018",
    current: false,
  },
  {
    level: "Elementary",
    degree: "Primary Education",
    major: "",
    school: "HN Cahilsot Central Elementary School",
    period: "2008 – 2014",
    current: false,
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { title: "Cum Laude", org: "BSiT – MSU General Santos", period: "2024" },
  { title: "Dean's Lister", org: "BSiT – MSU General Santos", period: "2020 – 2024" },
  { title: "Rank 13 – MSU SASE 2019 System Top 20 Passers", org: "Mindanao State University System", period: "2019" },
  { title: "UPCAT 2020 Passer (Qualifier for BS Computer Science in UP Mindanao)", org: "University of the Philippines System", period: "2020" },
  { title: "With High Honors – Alamid Class of 2020", org: "General Santos City National High School (Senior High)", period: "2020" },
  { title: "With Honors – Pag-Asa Class of 2018", org: "General Santos City National High School (Junior High)", period: "2018" },
  { title: "Class Salutatorian – Class of 2014", org: "HN Cahilsot Central Elementary School", period: "2014" },
];

export const SCHOLARSHIPS: ScholarshipItem[] = [
  {
    name: "Google Career Certification Program (in partnership with DICT)",
    org: "Google / DICT",
    period: "2023",
    active: false,
  },
  {
    name: "DOST–SEI Scholarship (RA 7687)",
    org: "Department of Science and Technology – Science Education Institute",
    period: "2020 – 2024",
    active: false,
  },
  {
    name: "Academic Scholar",
    org: "Mindanao State University – General Santos",
    period: "2020 – 2022",
    active: false,
  },
  {
    name: "Scholar",
    org: "Cargill Oil Mills Philippines (General Santos)",
    period: "2014 – 2020",
    active: false,
  },
  {
    name: "Scholar (BIAPO)",
    org: "LGU Calumpang, General Santos",
    period: "2014 – 2020",
    active: false,
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Aug 5, 2024",
    url: "https://www.credly.com/",
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Coursera (Google Career Certification Program)",
    date: "Nov 3, 2023",
    url: "https://www.coursera.org/",
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google / Coursera",
    date: "Sep 29, 2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/9UWHMCMTR283",
  },
  {
    name: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "Sep 13, 2023",
    url: "https://www.credly.com/badges/bb3a61db-89af-484e-8092-5c560f58c0a7/public_url",
  },
  {
    name: "Principles of Design",
    issuer: "Coursebank",
    date: "Aug 3, 2023",
    url: "https://coursebank.ph/certificates/e80525c79b634e98b68692040cdcbc64",
  },
  {
    name: "Using Firebase as an Application Back End",
    issuer: "Coursebank",
    date: "Feb 28, 2023",
    url: "https://coursebank.ph/certificates/f89c01e00b1d44469a6da02c7607055c",
  },
  {
    name: "Networking Essentials",
    issuer: "Cisco",
    date: "Jun 17, 2022",
    url: "https://www.credly.com/badges/7510e1d8-5864-4962-824e-dff8009b0375/linked_in_profile",
  },
];

export const AWARDS: AwardItem[] = [
  {
    title: "Service Award – Undersecretary (AY 2023–2024)",
    event: "Supreme Student Council – MSU GSC",
    org: "Mindanao State University – General Santos",
    year: "2024",
  },
  {
    title: "Service Award – 3rd Year Representative (AY 2022–2023)",
    event: "Junior Information Technology Society – MSU Gensan",
    org: "Mindanao State University – General Santos",
    year: "2023",
  },
  {
    title: "Grand Finalist (as Pastil Labs)",
    event: "Youth Leaders of Agribusiness Congress (YLAC) 2023",
    org: "UP Agribusiness Society (UPABS/BISOK)",
    year: "2023",
  },
  {
    title: "Best in Musical Score Award",
    event: 'Project VacSINEation 2023 – "When the Crickets Stop Singing" by Vince Ivan Vesiete',
    org: "Supreme Student Council – MSU GenSan",
    year: "2023",
  },
  {
    title: "2nd Place (as Team Cryptolockers)",
    event: "National ICT Month 2022 – Design Thinking Workshop",
    org: "DICT Region 12 & Mainland BARMM",
    year: "2022",
  },
  {
    title: "Finalist (as Pastil Studios)",
    event: "Independent Category – Game Development Grant",
    org: "Cultural Center of the Philippines",
    year: "2022",
  },
  {
    title: "1st Place (Division level)",
    event: "2019 EcoScilympics: Science Processes Practices on Site Test",
    org: "Department of Education XII",
    year: "2019",
  },
];

export const AFFILIATIONS: AffiliationItem[] = [
  { org: "Rotaract Club of Dadiangas Community-Based", role: "Member, Public Image Associate", period: "2023 – 2025" },
  { org: "Philippine Society of Information Technology Students (PSITS) Region 12", role: "Secretary", period: "2023 – 2024" },
  { org: "SIGLAUM Coalition – YOUTHLED (UVPN Supervised)", role: "Communications & Advocacy Committee", period: "2023 – 2024" },
  { org: "Supreme Student Council – MSU Gensan", role: "STRAW Undersecretary", period: "2023 – 2024" },
  { org: "Pastil Labs", role: "Technology Consultant, Editor", period: "2023 – 2024" },
  { org: "Illuresion Films", role: "Musical Scorer, Gaffer", period: "2023 – 2024" },
  { org: "Pastille Studios (formerly Pastil Studios)", role: "Programmer / Music Director", period: "2022 – 2023" },
  { org: "Junior Information Technology Society – MSU Gensan", role: "Member · 3rd Year Representative (2022–2023)", period: "2020 – 2024" },
  { org: "MSU-GenSan Association of DOST-SEI Scholars", role: "Member", period: "2020 – 2024" },
  { org: "Organization of Mathematics and Natural Sciences Students (OMANSS)", role: "Member", period: "2020 – 2024" },
  { org: "EN-coder", role: "Independent Bedroom Producer/Artist", period: "2018 – Present" },
  { org: "Youth for Environment in Schools Organization (YES-O) – GSCNHS", role: "Member", period: "2014 – 2020" },
];

export const EVENTS: EventItem[] = [
  { name: "15th Philippine Shrimp Congress", org: "Philippine Shrimp Industry, Inc. (PHILSHRIMP)", date: "Oct 8–10, 2025" },
  { name: "Proof of Teach – A Blockchain Development Workshop for Instructors", org: "PSITE XII, Davao DeFi Community", date: "Sep 12–13, 2025" },
  { name: "TREES4PEACE: GREENERATION CULMINATING ACTIVITY (Mangrove tree planting)", org: "Supreme Student Council – MSU GSC", date: "May 25, 2024" },
  { name: "SunTALK: Basic Psychological First Aid Training", org: "Supreme Student Council – MSU GSC, Office of Guidance and Counseling", date: "Mar 2, 2024" },
  { name: "EducaTOUR (Review Session)", org: "Supreme Student Council – MSU GSC, MSU-Gensan Association of DOST-SEI Scholars", date: "Feb 3, 2024" },
  { name: "ArtAccess360 (Empowering PWDs Through Graphic Designing)", org: "SK Calumpang, J. Amado Araneta Foundation, Calumpang Youth Development Council", date: "Dec 8–9, 2023" },
  { name: "Digital Careers Expo (Accelerating Global Digital Opportunities for Filipino Talents)", org: "DICT Region XII & Mainland BARMM, DICT IIDB", date: "Nov 28, 2023" },
  { name: "KESESOTU: Puno Para sa Kapayapaan", org: "Supreme Student Council – MSU Gensan, CENRO Gensan", date: "Nov 22, 2023" },
  { name: "Gensan Innovation Week 2023: Copyright Caravan", org: "IPOPHL, ICEBOX TBI", date: "Oct 26, 2023" },
  { name: "Regional Cyber Incident and Threat Landscape (DICT Cybersecurity Awareness Month)", org: "DICT Region XII & Mainland BARMM", date: "Oct 19, 2023" },
  { name: "World Mental Health Day Celebration", org: "MSU GSC - Office of Guidance and Counseling", date: "Oct 18, 2023" },
  { name: "Regional Startup Pitching Competition (Philippine Startup Challenge 8)", org: "DICT Region 12 & Mainland BARMM", date: "Oct 13, 2023" },
  { name: "AWS Community Day Philippines – Roadshow Davao 2023", org: "AWS User Group Philippines", date: "Sep 23, 2023" },
  { name: "Regional Science, Technology, and Innovation Week (RSTW) 2023", org: "DOST XII", date: "Sep 15, 2023" },
  { name: "Local Youth Assembly – General Santos (Technical Cooperation)", org: "United Voices for Peace Network, Inc.", date: "Aug 26–28, 2023" },
  { name: "Tech Trends: Cybersecurity (Advanced Session)", org: "ICT Industry Development Bureau (DICT IIDB)", date: "Aug 3, 2023" },
  { name: "MSUans, Taking the Lead: Student Leadership Training 2023", org: "Supreme Student Council – MSU GenSan", date: "Jul 17–18, 2023" },
  { name: "Google I/O Extended Davao 2023", org: "Google Developers Group Davao", date: "Jul 15, 2023" },
  { name: "Tech Trends: Blockchain (Advanced Session)", org: "DICT", date: "Jun 29, 2023" },
  { name: "ICEbox: Unboxing Weekend (Critical Thinking & Personal Development)", org: "ICEbox TBI", date: "Jun 10–11, 2023" },
  { name: "LAWIG: A GDSC Philippines Info Session", org: "Google Developer Student Clubs Philippines", date: "Jun 3, 2023" },
  { name: "Youth Leaders of Agribusiness Congress (YLAC) 2023", org: "UP Agribusiness Society", date: "May 31–Jun 2, 2023" },
  { name: "Campus Developer's Connect (DEVCON) 2023", org: "JITS – MSU GSC, DEVCON Davao", date: "May 12, 2023" },
  { name: "11th PSITS Regional Convention", org: "PSITE Region 12, PSITS Region 12", date: "Apr 28–29, 2023" },
  { name: "FLExPHD: Food is Life Exemplified (App Development Competition) 2023", org: "National Academy of Science and Technology (NAST PHL)", date: "Apr 2023" },
  { name: "Valuing Innovation through Technology Business Incubation", org: "ICEbox TBI", date: "Mar 29, 2023" },
  { name: "ICEBOX Unboxing Series Part II", org: "ICEbox TBI", date: "Mar 21, 2023" },
  { name: "ICEBOX Kick-off Event (The Art of Filipino Dreamagineering)", org: "ICEbox TBI", date: "Mar 7, 2023" },
  { name: "CapaciTHINK: Mental Health Awareness in the Academe", org: "OMANSS", date: "Mar 1, 2023" },
  { name: "The Hitchhiker's Guide to the Startup World", org: "UP Mindanao SPARCS", date: "Feb 18, 2023" },
  { name: "Using Digital Technology for Making Data- and Values-Driven Food Choices (FLExPHD)", org: "NAST PHL", date: "Feb 15, 2023" },
  { name: "Genes, Nutrition, and Underutilized Plants (FLExPHD)", org: "NAST PHL", date: "Feb 8, 2023" },
  { name: "Diets, Economy, Environment, and Local Culture (FLExPHD)", org: "NAST PHL", date: "Feb 1, 2023" },
  { name: "Code Your Future: 40-min Coding Workshop for Non-Coders", org: "Team StackTrek", date: "Jan 25, 2023" },
  { name: "Project Pananggalang: University-Wide Peace and Human Rights Talk", org: "Human Rights Society MSU – GenSan", date: "Nov 16, 2022" },
  { name: "Leadership Training and Financial Literacy Seminar", org: "OMANSS", date: "Nov 5, 2022" },
  { name: "DOST SEI Scholars Leadership Boot Camp", org: "The Filipino Patriot Scholars Project – DOST SEI", date: "Oct 23–27, 2022" },
  { name: "Intel® OpenVINO™ Toolkit Online Training", org: "Intel Corporation", date: "Sep 24, 2022" },
  { name: "Startup 101 Design Thinking Workshop (National ICT Month)", org: "DICT Region 12", date: "Jun 29–30, 2022" },
  { name: "Independent Category (Game Development Grant)", org: "Cultural Center of the Philippines", date: "Jun 2022" },
  { name: "Loquinte-Padua's Stochastic Model for AIDS Epidemic", org: "MSU – GenSan Office of International Affairs", date: "May 1, 2022" },
  { name: "Scholars' Values Formation Program", org: "DOST SEI", date: "Apr 1, 2022" },
  { name: "Scholars' Values Formation Program", org: "DOST SEI", date: "Apr 23, 2021" },
  { name: "Eco Scilympics: Science Processes Practices on Site Test", org: "Department of Education XII", date: "Oct 27–29, 2019" },
  { name: "Geographical Information System Appreciation and Training", org: "Agricultural & Biosystems Engineering Department – MSU Gensan", date: "Jul 23, 2019" },
  { name: "YES-O First Activity 2018", org: "General Santos City National High School", date: "Jul 28, 2018" },
  { name: "15th National Science & Math Quest", org: "Department of Education", date: "Feb 9–11, 2018" },
  { name: "Math Camp 2017", org: "General Santos City National High School", date: "Nov 17–19, 2017" },
  { name: "Visit Gensan, Learn in Gensan – Mayor's Lecture Series", org: "LGU GenSan", date: "Jul 27, 2014" },
  { name: "2nd Regional Integrated Competition (RIC)", org: "Department of Education XII", date: "Oct 2011" },
  { name: "KAB Scout Gathering & PALARO", org: "HN Cahilsot Central Elementary School", date: "Oct 1–3, 2010" },
  { name: "20th Council-Wide Jamborette & KAB Holiday", org: "Scout Camp, General Santos City", date: "Oct 27–31, 2010" },
  { name: "KAB Scout Gathering & PALARO", org: "HN Cahilsot Central Elementary School", date: "Oct 9–11, 2009" },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "Soundi.py",
    description: "A simple Spotify dataset visualizer built with Python Eel. Class project for Big Data Analytics (ITD105).",
    url: "#",
    tags: ["Python", "Data Visualization", "Spotify API"],
  },
  {
    name: "pixelCheck",
    description: "A web app for detecting AI-generated images (alpha version).",
    url: "https://pixel-watch-534b1.web.app/",
    tags: ["Web App", "AI Detection", "Firebase"],
  },
];
