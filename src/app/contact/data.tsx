import { JSX } from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

type ContactInfo = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+84) 905 347 725",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dangquanghuy0204@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Email",
    description: "Ho Chi Minh City, Vietnam",
  },
];

export { CONTACT_INFO };
