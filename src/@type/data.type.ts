export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    mobile: string[];
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export interface SocialIconsProps {
  variant?: "default" | "footer";
  className?: string;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  center?: boolean;
}
