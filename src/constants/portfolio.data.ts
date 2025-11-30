import { PortfolioData } from "~/@type/data.type";

export const portfolioData: PortfolioData = {
  name: "Mahede Hasan",
  role: "React Native Developer",
  about:
    "Detail-oriented, organized and meticulous employee.Works at fast pace to meet tight deadlines. Dynamic and passionate with a robust emphasis on application lifecycle. Interested in roles indulging best practices and offering diverse customer project",
  profileImage: "/images/profile-lock.webp",
  blogUrl: "https://medium.com/@mahede.object",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/mahede182",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/md-mahede-567b6418b/",
      icon: "Linkedin",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@mahede.object",
      icon: "BookText",
    },
    {
      platform: "Email",
      url: "mailto:mahede.object@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    mobile: [
      "React Native",
      "Expo",
      "Swift",
      "Android SDK",
    ],
    libraries: [
      "Restyle",
      "Nativewind",
      "Redux",
      "XState",
      "Zustand",
      "Node.js",
      "Jest",
    ],
    web: [
      "REST APIs",
      "AWS",
      "Supabase",
      "MySQL",
      "SQLite",
      "AWS EC2",
      "AWS S3",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    tools: ["Git", "Android Studio", "Xcode", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  experience: [
    {
      company: "Tecoyo Media Group",
      role: "Software Engineer (SDE-1)",
      period: "April, 2025 - September, 2025",
      location: "Braunschweig, Germany",
      description: [
        "Developed a comprehensive statistics dashboard, enabling merchants to track sales data and make data-driven decisions.",
        "Created a flexible voucher system that led to an 10% increase in promotional redemption.",
        "Spearheaded the migration from Realm DB to SQLite improving database performance and reducing app size.",
        "Developed a tipping feature that enhanced customer engagement and increased average transaction value.",
        "Actively collaborated with cross-functional teams using well-documented RFC and RCA processes to streamline development and ensure effective problem resolution.",
      ],
    },
    {
      company: "Bitsofts Software Solutions",
      role: "React Native Developer",
      period: "March, 2023 - February, 2025",
      location: "Dhaka, Bangladesh",
      description: [
        "Implemented push notification system for Android and iOS, enhancing user engagement by 20% .",
        "Successfully developed and deployed 7+ mobile apps to the Play Store and App Store , reaching a broad user base.",
        "Designed for 32\" Phablet devices and implement responsive design to accommodate multiple languages, including Arabic and Bangla .",
        "Involved in requirement gathering, analysis, and design as the application was started from scratch.",
      ],
    },
  ],
  projects: [
    {
      title: "Gontobbo",
      description:
        "A Hotel Booking App.",
      techStack: ["Expo", "Firebase", "Local Storage", "Rest APIs"],
      link: "https://github.com/mahede182/gontobbo",
      github: "https://github.com/mahede182/gontobbo",
      thumbnail: "/images/projects/gontobbo.webp",
    },
    {
      title: "Volvet",
      description:
        "Modern E-commerce Platform | Django, PostgreSQL, Function-as-a-Service, pythoneverywhere.",
      techStack: ["Django", "PostgreSQL", "pythoneverywhere", "Bash"],
      link: "https://mahede182.pythonanywhere.com/",
      github: "https://github.com/mahede182/djEco/tree/main",
      thumbnail: "/images/projects/volvet.webp",
    },
    {
      title: "Lendora",
      description:
        "Lendora is a real estate platform that connects borrowers with lenders to facilitate loan transactions.",
      techStack: ["Nest JS", "Prisma", "React Native", "Expo"],
      link: "https://github.com/mahede182/real-estate-assessment",
      github: "https://github.com/mahede182/real-estate-assessment",
      thumbnail: "/images/projects/lendora.webp",
    },

  ],
};
