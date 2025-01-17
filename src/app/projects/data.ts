export type ProjectInfo = {
  num: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  github?: string;
  company?: string;
};

export const PROJECTS: ProjectInfo[] = [
  {
    num: "01",
    name: "QuickConnect Studio",
    description:
      "QuickConnect Studio is a cloud-based design platform allowing users to visually create software prototypes for rapid validation and product development. Engineers can drag and drop hardware device blocks to build solutions, and the platform auto-generates software for no-code development. QuickConnect boards with standard connections are then available for users to deploy the auto-generated software to test within a matter of minutes.",
    stack: ["Theia", "VSCode", "Typescript", "React", "NestJS"],
    image: "/assets/projects/quick-connect-studio.jpeg",
    live: "https://www.renesas.com/us/en/software-tool/quickconnect-studio",
    github: "",
    company: "Renesas Design Vietnam",
  },
  {
    num: "02",
    name: "Jarvis",
    description:
      "JARVIS offers comprehensive solutions tailored to diverse industries, supported by its versatile templates and intuitive interface. With adaptable hardware options and proven deployment strategies, our platform facilitates seamless reporting and analysis on the cloud.",
    stack: [
      "Typescript",
      "React",
      "Next.js",
      "Express.js",
      "React Native",
      "Java",
      "Spring Boot",
    ],
    image: "/assets/projects/jarvis.png",
    live: "https://viatick.com",
    github: "",
    company: "Viatick PTE LTD",
  },
  {
    num: "03",
    name: "ThingDash",
    description:
      "ThingDash provides solutions to transform MQTT data, from filtering, storing, exporting, etc.. without coding.",
    stack: [
      "Typescript",
      "Next.js",
      "NestJS",
      "Express.js",
      "MQTT",
      "Socket.io",
    ],
    image: "/assets/projects/thingdash.png",
    live: "https://www.thingdash.io",
    github: "",
    company: "Freelance Projects",
  },
  {
    num: "04",
    name: "ShineYup Multi Platform",
    description:
      "ShineYup Multi Platform is a all-in-one platform that provides utilize tools for everyone, from students to professionals, for basic usage to advanced usage.",
    stack: [
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "React",
      "Bootstrap",
      "Express.js",
      "NestJS",
      "and more incoming...",
    ],
    company: "After work, to learn and contribute",
    image: "/assets/projects/shineyup.png",
    github: "https://github.com/longnguyentpvt/shineyup-multi-platform",
    live: "https://www.shineyup.com/demo/tailwind-config-builder",
  },
  {
    num: "05",
    name: "My Portfolio",
    description:
      "Yeah, exactly what you are seeing right now. A portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    stack: ["Typescript", "Next.js", "Tailwind CSS"],
    image: "/assets/projects/huydang-portfolio.png",
    github: "https://github.com/huydang0204/huydang-portfolio",
  },
];
