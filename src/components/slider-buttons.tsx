"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type SliderButtonProps = Partial<{
  containerStyles: string;
  buttonStyles: string;
  iconStyles: string;
}>;

function SliderButtons(props: SliderButtonProps) {
  const swiper = useSwiper();

  return (
    <div className={props.containerStyles}>
      <button className={props.buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={props.iconStyles} />
      </button>
      <button className={props.buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={props.iconStyles} />
      </button>
    </div>
  );
}

export default SliderButtons;
