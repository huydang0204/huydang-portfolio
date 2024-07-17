import { JSX } from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";

import {
  SiAmazonaws,
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOracle,
  SiPlaywright,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type BaseInformationFields<T> = {
  icon?: string;
  title: string;
  items: T[];
};

type AboutItems = {
  fieldName: string;
  fieldValue: string;
};
const ABOUT: BaseInformationFields<AboutItems> = {
  title: "About me",
  items: [
    {
      fieldName: "Name",
      fieldValue: "Huy Dang",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 905 347 725",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnam",
    },
    {
      fieldName: "Based in",
      fieldValue: "Ho Chi Minh City, Vietnam",
    },
    {
      fieldName: "Email",
      fieldValue: "dangquanghuy0204@gmail.com",
    },
  ],
};

type ExperienceItems = {
  position: string;
  company: string;
  duration: string;
  description: string;
};
const EXPERIENCE: BaseInformationFields<ExperienceItems> = {
  icon: "",
  title: "My Experience",
  items: [
    {
      position: "Software Engineer",
      company: "Renesas Design Vietnam",
      duration: "01/2019-01/2021, 08/2023-Now",
      description: "Onsite",
    },
    {
      position: "Full-stack Developer",
      company: "Viatick PTE Singapore",
      duration: "01/2021 - 08/2023",
      description: "Remote",
    },
  ],
};

type CertificationsItems = {
  degree: string;
  institution: string;
  duration: string;
};
const CERTIFICATIONS: BaseInformationFields<CertificationsItems> = {
  icon: "",
  title: "My Certifications",
  items: [
    {
      degree: "ELECTRONICS & TELECOMMUNICATION ENGINEERING",
      institution: "Bach Khoa University",
      duration: "2015 - 2019",
    },
    {
      degree: "TOEIC Certificate  issued by IIG Vietnam",
      institution: "Score 945",
      duration: "11/2019",
    },
    {
      degree: "Oracle Cloud Infrastructure Certified Architect Associate",
      institution: "",
      duration: "2022",
    },
  ],
};

type SkillItems = {
  icon: JSX.Element;
  name: string;
};
const SKILLS: BaseInformationFields<SkillItems> = {
  title: "My Skills",
  items: [
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML/HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS/SCSS",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
    {
      icon: <SiPlaywright />,
      name: "Playwright",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
    {
      icon: <SiOracle />,
      name: "Oracle Cloud",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
  ],
};

export { ABOUT, CERTIFICATIONS, EXPERIENCE, SKILLS };
