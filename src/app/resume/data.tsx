import { JSX } from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

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
      fieldValue: "Ho Chi Minh City",
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
      position: "Full Stack Developer",
      company: "Freelancer",
      duration: "2021 - Present",
      description: "Developed web applications using React, Node.js, and Java.",
    },
    {
      position: "Software Engineer",
      company: "FPT Software",
      duration: "2019 - 2021",
      description: "Developed web applications using React, Node.js, and Java.",
    },
  ],
};

type EducationItems = {
  degree: string;
  institution: string;
  duration: string;
};
const EDUCATION: BaseInformationFields<EducationItems> = {
  icon: "",
  title: "My Education",
  items: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Information Technology",
      duration: "2015 - 2019",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Information Technology",
      duration: "2015 - 2019",
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
  ],
};

export { ABOUT, EDUCATION, EXPERIENCE, SKILLS };
