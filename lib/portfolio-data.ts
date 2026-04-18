// ─── Types ────────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
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
  name: "John Rey Arugay Vilbar",
  headline: "BS Information Technology · Database Major",
  tagline: "Developer · Designer · Musician",
  bio: "A 4th year BS Information Technology student (database major) at MSU–General Santos who aims to improve skills and contribute to nation building through constant experimentation and exploration of newfound knowledge. Experienced in Web Development, Graphics Design, Microsoft Office, and Music Production.",
  nationality: "Filipino",
  age: 22,
  nickname: "John · Rey · Jay-R",
  location: "General Santos City, Philippines",
  email: "johnrey.vilbar@msugensan.edu.ph",
  photo: "https://johnn600.github.io/johnn600.github.ion/assets/images/profile.png",
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
  "Web Development", "Database Administration", "Graphics Design",
  "Music Production", "Microsoft Office", "Programming",
  "Computer Literate", "Academic Achiever", "Eagerness to Learn",
];

export const DB_LANGUAGES: string[] = ["SQLite", "MySQL", "PostgreSQL"];

export const EDUCATION: EducationItem[] = [
  {
    level: "Undergraduate",
    degree: "Bachelor of Science in Information Technology",
    major: "Database Major",
    school: "Mindanao State University – General Santos",
    period: "2020 – Present",
    current: true,
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
  { title: "Dean's Lister", org: "BSiT – MSU General Santos", period: "2020 – Present" },
  { title: "Rank 13 – MSU SASE 2019 System Top 20 Passers", org: "Mindanao State University System", period: "2019" },
  { title: "UPCAT 2020 Passer (Qualifier for BS Computer Science in UP Mindanao)", org: "University of the Philippines System", period: "2020" },
  { title: "With High Honors – Alamid Class of 2020", org: "General Santos City National High School (Senior High)", period: "2020" },
  { title: "With Honors – Alamid Class of 2020", org: "General Santos City National High School (Junior High)", period: "2020" },
  { title: "Class Salutatorian – Class of 2014", org: "HN Cahilsot Central Elementary School", period: "2014" },
];

export const SCHOLARSHIPS: ScholarshipItem[] = [
  {
    name: "Google Career Certification Program (in partnership with DICT)",
    org: "Google / DICT",
    period: "2023 – Present",
    active: true,
  },
  {
    name: "DOST–SEI Scholarship (RA 7687)",
    org: "Department of Science and Technology – Science Education Institute",
    period: "2020 – Present",
    active: true,
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
];

export const CERTIFICATIONS: CertificationItem[] = [
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
    title: "Grand Finalist (as Pastil Labs)",
    event: "Youth Leaders of Agribusiness Congress (YLAC) 2023",
    org: "UP Agribusiness Society (UPABS/BISOK)",
    year: "2023",
  },
  {
    title: "Best in Musical Score Award",
    event: 'Project VacSINEation 2023 – "When the Crickets Stop Singing" by Vince Vesiete',
    org: "Supreme Student Council – MSU Gensan",
    year: "2023",
  },
  {
    title: "2nd Place (as Team Cryptolockers)",
    event: "National ICT Month 2022 – Design Thinking Workshop",
    org: "DICT Region 12 & Mainland BARMM",
    year: "2022",
  },
];

export const AFFILIATIONS: AffiliationItem[] = [
  { org: "Rotaract Club of Dadiangas Community-Based", role: "Aspiring Member, Public Image Associate", period: "2023 – Present" },
  { org: "SIGLAUM Coalition – YOUTHLED (UVPN Supervised)", role: "Communications & Advocacy Committee", period: "2023 – Present" },
  { org: "Supreme Student Council – MSU Gensan", role: "STRAW Undersecretary", period: "2023 – Present" },
  { org: "Pastil Labs", role: "Technology Consultant, Editor", period: "2023 – Present" },
  { org: "Junior Information Technology Society – MSU Gensan", role: "Member · 3rd Year Representative (2022–2023)", period: "2020 – Present" },
  { org: "Illuresion Films", role: "Musical Scorer", period: "2023 – Present" },
  { org: "MSU-GenSan Association of DOST Scholars", role: "Member", period: "2020 – Present" },
];

export const EVENTS: EventItem[] = [
  { name: "Gensan Innovation Week 2023: Copyright Caravan", org: "IPOPHL, ICEBOX TBI", date: "Oct 26, 2023" },
  { name: "Regional Startup Pitching Competition (Philippine Startup Challenge 8)", org: "DICT Region 12 & Mainland BARMM", date: "Oct 13, 2023" },
  { name: "AWS Community Day Philippines – Roadshow Davao 2023", org: "AWS User Group Philippines", date: "Sep 23, 2023" },
  { name: "Regional Science, Technology, and Innovation Week (RSTW) 2023", org: "DOST XII", date: "Sep 15, 2023" },
  { name: "Local Youth Assembly – General Santos (Technical Cooperation)", org: "United Voices for Peace Network, Inc.", date: "Aug 26–28, 2023" },
  { name: "Google I/O Extended Davao 2023", org: "Google Developers Group Davao", date: "Jul 15, 2023" },
  { name: "Tech Trends: Blockchain (Advanced Session)", org: "DICT", date: "Jun 29, 2023" },
  { name: "ICEbox: Unboxing Weekend (Critical Thinking & Personal Development)", org: "ICEbox TBI", date: "Jun 10–11, 2023" },
  { name: "Youth Leaders of Agribusiness Congress (YLAC) 2023", org: "UP Agribusiness Society", date: "May 31–Jun 2, 2023" },
  { name: "Campus Developer's Connect (DEVCON) 2023", org: "JITS – MSU GSC, DEVCON Davao", date: "May 12, 2023" },
  { name: "11th PSITS Regional Convention", org: "PSITE Region 12, PSITS Region 12", date: "Apr 28–29, 2023" },
  { name: "The Hitchhiker's Guide to the Startup World", org: "UP Mindanao SPARCS", date: "Feb 18, 2023" },
  { name: "DOST SEI Scholars Leadership Boot Camp", org: "DOST SEI Filipino Patriot Scholars Project", date: "Oct 23–27, 2022" },
  { name: "Intel® OpenVINO™ Toolkit Online Training", org: "Intel Corporation", date: "Sep 24, 2022" },
  { name: "Startup 101 Design Thinking Workshop (National ICT Month)", org: "DICT Region 12", date: "Jun 29–30, 2022" },
  { name: "Scholars' Values Formation Program", org: "DOST SEI Filipino Patriot Scholars Project", date: "Apr 1, 2022" },
  { name: "Eco Scilympics: Science Processes Practices on Site Test", org: "Department of Education XII", date: "Oct 27–29, 2019" },
  { name: "Visit Gensan, Learn in Gensan – Mayor's Lecture Series", org: "LGU GenSan", date: "Jul 27, 2014" },
  { name: "2nd Regional Integrated Competition (RIC)", org: "Department of Education XII", date: "Oct 2011" },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "pixelCheck",
    description: "A web app for detecting AI-generated images (alpha version).",
    url: "https://pixel-watch-534b1.web.app/",
    tags: ["Web App", "AI Detection", "Firebase"],
  },
];
