import { JSX } from "react";

const InfoTitle = (props: {
  title: string;
  icon?: JSX.Element;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left mb-[26px]">
      <h3 className="text-4xl font-bold">{props.title}</h3>
    </div>
  );
};

export { InfoTitle };
