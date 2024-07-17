"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ABOUT, CERTIFICATIONS, EXPERIENCE, SKILLS } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InfoTitle } from "./components";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificate">Certifications</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <InfoTitle title={EXPERIENCE.title} />
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {EXPERIENCE.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-center bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <h3 className="text-xl text-accent">{item.company}</h3>
                        <span className="text-white/70">{item.duration}</span>
                        <h4 className="text-lg max-w-[260px] text-center lg:text-left">
                          {item.position}
                        </h4>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <InfoTitle title={SKILLS.title} />
              <ScrollArea className="h-full xl:h-[50vh]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {SKILLS.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="certificate" className="w-full">
              <InfoTitle title={CERTIFICATIONS.title} />
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {CERTIFICATIONS.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-center bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <h3 className="text-xl text-accent">{item.degree}</h3>
                      <span className="text-white/70">{item.duration}</span>
                      <h4 className="text-lg max-w-[260px]\ text-center lg:text-left">
                        {item.institution}
                      </h4>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <InfoTitle title={ABOUT.title} />
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {ABOUT.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/70">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
