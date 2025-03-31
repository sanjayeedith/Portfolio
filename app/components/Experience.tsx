import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      position: "Gen AI Research Engineer",
      company: "Renault Nissan Technology Business Centre - R&D",
      logo: "/nissan-seeklogo.png",
      period: "6/2024 - Present",
      description: "Leading the fine-tuning of large language models (LLMs), integrating generative AI into systems, and conducting research in emerging technologies. Focused on new algorithm development and driving innovative research to advance the field of AI."
    },
    {
      position: "Project Trainee",
      company: "DRDO – Centre for AI and Robotics",
      logo: "/drdo_logo.png",
      period: "7/2023 - 1/2024",
      description: "Work closely with AI Scientist. Developed advanced object detection algorithms for SAR satellite images, improving accuracy by 15% and reducing false positives by 20%."
    },
    {
      position: "Machine Learning Engineer",
      company: "Technocolabs Software Inc.",
      logo: "/Pi7_logo-2.png",
      period: "5/2022 - 10/2022",
      description: "Developed ML model for company acquisition prediction with 91.5% accuracy, working with cross-functional teams."
    },
    {
      position: "Community Volunteer",
      company: "Climatic Change AI",
      logo: "/ccai_logo_white.png",
      period: "1/2022 - Present",
      description: "Collaborate with some of the brightest minds in the field and contribute to our shared mission of using AI for social good"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="experience" className="py-8 sm:py-16 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">Experience</h2>
        <motion.div className="space-y-8 sm:space-y-12" variants={staggerContainer}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="opacity-100"
                />
              </div>
              <div className="relative sm:pl-10 border-l-2 border-[#5B4DFB]/30 flex-grow">
                <div className="absolute w-4 h-4 sm:w-5 sm:h-5 purple-gradient rounded-full -left-[9px] sm:-left-[11px] top-1" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{exp.position}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between text-gray-400 mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base">{exp.company}</span>
                  <span className="text-sm sm:text-base">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-base sm:text-lg">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 