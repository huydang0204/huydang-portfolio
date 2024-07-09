import { motion } from "framer-motion";

// variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const TOTAL_STEPS = 6;
const reverseIndex = (index: number): number => {
  return TOTAL_STEPS - index - 1;
};

function Stairs() {
  return (
    <>
      {/* Render 6 motions deivcs, each reprensenting a step of a stairs. Each div
      will have the same animation defined by the stairAnimation object. The
      delay for each div is calculated sinamically based on its reversed index,
      creating a staggered effect with decreasing delay for each subsequent step */}
      {[...Array(TOTAL_STEPS)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: reverseIndex(index) * 0.1,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
