"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

type SliderButtonProps = Partial<
  {
    containerStyles: string;
    buttonStyles: string;
    iconStyles: string;
  } & { lastIndex: number }
>;

function SliderButtons(props: SliderButtonProps) {
  const swiper = useSwiper();
  const currentIndex = swiper.activeIndex;

  const first = currentIndex == 0;
  const last = currentIndex == props.lastIndex;

  return (
    <div className={props.containerStyles}>
      <button
        className={cn(props.buttonStyles, first && "hidden")}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={props.iconStyles} />
      </button>
      <button
        className={cn(props.buttonStyles, first && "ms-auto", last && "hidden")}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={props.iconStyles} />
      </button>
    </div>
  );
}

export default SliderButtons;
