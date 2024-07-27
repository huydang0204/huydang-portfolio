"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "./data";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-md">
              <h3 className="text-accent text-xl">Let&apos;s work together</h3>
              <p className="text-white/60">Lorem ipsum</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First name" />
                <Input type="text" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="text" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fe">Front-end Development</SelectItem>
                    <SelectItem value="be">Back-end Development</SelectItem>
                    <SelectItem value="mb">Mobile Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Let me know more about your idea!"
              />

              <Button size="md" className="max-w-40 ms-auto">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {CONTACT_INFO.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[78px] h-[78px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
