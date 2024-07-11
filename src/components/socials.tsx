import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const SOCIAL_ITEMS = [
  {
    icon: <FaGithub />,
    url: "https://githuib.com/huydang0204",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/huydang0204/",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/huydang0204",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/huyq_",
  },
];
function Socials(props: { containerStyles?: string; iconStyles?: string }) {
  return (
    <div className={props.containerStyles}>
      {SOCIAL_ITEMS.map((item, index) => {
        return (
          <Link key={index} href={item.url} className={props.iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
