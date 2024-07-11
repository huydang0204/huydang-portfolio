import Link from "next/link";

const TextLogo = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        Huy<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default TextLogo;
