import React from 'react';
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AnimatedButton } from "./AnimatedButton";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export function Hero() {
  const handleScroll = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-[80vh] py-4 pb-0 px-4 md:px-10 lg:px-20 xl:px-40 flex items-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <GridPattern
          squares={[
            [4, 4], [5, 1], [8, 2], [5, 3], [5, 5],
            [10, 10], [12, 15], [15, 10], [10, 15],
            [15, 10], [10, 15], [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            "stroke-[#5B4DFB]/10"
          )}
        />
      </div>
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          <motion.span 
            className="gradient-text block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypingAnimation
              className="gradient-text text-6xl md:text-8xl"
              duration={100}
              delay={500}
            >
              Hi, I'm SANJAY R
            </TypingAnimation>
          </motion.span>
          <motion.span 
            className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5B4DFB] to-[#8F7BF7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Gen AI Engineer
          </motion.span>
        </h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-12 tracking-wide font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          AI Engineer with expertise in machine learning, specializing in advanced object detection and Gen AI solutions.
        </motion.p>
        <motion.div 
          className="flex gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AnimatedButton />
          <ShinyButton 
            onClick={handleScroll('contact')}
            className="!text-white min-h-[48px] px-[16px] flex items-center justify-between gap-[12px] text-lg font-semibold bg-[#000212] border border-[#5B4DFB]/20 hover:border-[#5B4DFB]/50 dark:bg-[radial-gradient(circle_at_50%_120%,#5B4DFB_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_#5B4DFB/30] [&>span]:!text-white rounded-[4px]"
            style={{
              "--primary": "234 88% 58%"
            } as React.CSSProperties}
          >
            Contact Me
          </ShinyButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 