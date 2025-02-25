"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SliderButtons from "@/components/slider-buttons";

import { PROJECTS, ProjectInfo } from "./data";

function Projects() {
  const [project, setProject] = useState<ProjectInfo>(PROJECTS[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col  gap-[30px] h-[50%]">
              {/* prj number */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              {/* prj name */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.name}
              </h2>
              {project.company && (
                <div className="text-sm text-white/30">{project.company}</div>
              )}
              {/* prj description */}
              <p className="text-white/60">{project.description}</p>
              {/* prj stacks */}
              <ul className="flex flex-wrap gap-3">
                <li className="text-white/80">Stack:</li>
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {stack}
                      {/* last comma */}
                      {index !== project.stack.length - 1 && (
                        <span className="text-white/60">,</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20" />
              {/* buttons */}
              <div className="flex gap-4">
                {/* live project button  */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 xl:mb-0"
              onSlideChange={handleSlideChange}
            >
              {PROJECTS.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                w-[44px] h-[44px] flex justify-center items-center transition-all"
                lastIndex={PROJECTS.length - 1}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
