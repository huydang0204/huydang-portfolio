"use client";

import CountUp from "react-countup";

const STATS = [
  { num: 5, text: "Years of Experience" },
  { num: 6, text: "Projects Completed" },
  { num: 7, text: "Technologies Advanced" },
  { num: 500, text: "Code commits" },
];
function Stats() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STATS.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <div className="flex items-center gap-1">
                  <CountUp
                    end={stat.num}
                    duration={2}
                    delay={1}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p className="text-[28px] font-bold">+</p>
                </div>
                <p
                  className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[100px]"} leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
