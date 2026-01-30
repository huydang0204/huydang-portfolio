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
      "A cloud-based IDE for embedded systems development, enabling engineers to visually design IoT solutions through drag-and-drop hardware blocks. Built on Eclipse Theia framework, it features real-time code generation, integrated debugging, and seamless deployment to Renesas microcontrollers. Reduces development time from weeks to minutes.",
    stack: [
      "Eclipse Theia",
      "TypeScript",
      "React",
      "NestJS",
      "Node.js",
      "WebSocket",
      "Docker",
    ],
    image: "/assets/projects/quick-connect-studio.jpeg",
    live: "https://www.renesas.com/us/en/software-tool/quickconnect-studio",
    github: "",
    company: "Renesas Design Vietnam",
  },
  {
    num: "02",
    name: "Jarvis IoT Platform",
    description:
      "Enterprise IoT platform serving 100+ clients across manufacturing, logistics, and smart building sectors. Architected microservices backend handling 1M+ daily sensor events, developed cross-platform mobile apps, and built real-time dashboards. Implemented role-based access control, device provisioning, and automated reporting systems.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "AWS",
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
      "No-code MQTT data transformation platform with visual workflow builder. Features real-time data filtering, protocol conversion, cloud storage integration, and automated exports. Built with event-driven architecture using WebSocket for live updates and supports 10K+ concurrent MQTT connections.",
    stack: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "MQTT",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    image: "/assets/projects/thingdash.png",
    live: "https://www.thingdash.io",
    github: "",
    company: "Freelance Project",
  },
  {
    num: "04",
    name: "ShineYup Multi Platform",
    description:
      "Open-source developer toolkit featuring 15+ utilities including Tailwind Config Builder, JSON formatter, regex tester, and code snippet manager. Built with modular architecture for easy plugin development. Focus on performance and offline-first functionality.",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React",
      "NestJS",
      "PostgreSQL",
      "PWA",
    ],
    company: "Open Source Contribution",
    image: "/assets/projects/shineyup.png",
    github: "https://github.com/longnguyentpvt/shineyup-multi-platform",
    live: "https://www.shineyup.com/demo/tailwind-config-builder",
  },
  {
    num: "05",
    name: "Personal Portfolio",
    description:
      "Modern portfolio website showcasing projects and experience. Features smooth page transitions with Framer Motion, responsive design, interactive project carousel, and optimized performance. Built with Next.js 14 App Router and deployed on Vercel.",
    stack: [
      "TypeScript",
      "Next.js 14",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
    ],
    image: "/assets/projects/huydang-portfolio.png",
    github: "https://github.com/huydang0204/huydang-portfolio",
    live: "https://huydang-portfolio.vercel.app",
  },
];
