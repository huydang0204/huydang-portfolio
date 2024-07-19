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
    image: "/assets/work/quick-connect-studio.jpeg",
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
    image: "/assets/work/jarvis.png",
    live: "https://viatick.com",
    github: "",
    company: "Viatick PTE LTD",
  },
];
