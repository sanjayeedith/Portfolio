import React from 'react';
import { motion } from "framer-motion";

export function Work() {
  const projects = [
    {
      title: "SAR Image Object Detection",
      description: "Advanced algorithm for object detection in SAR satellite images, achieving 15% improved accuracy.",
      tech: ["Deep Learning", "Computer Vision", "YOLO", "Python"]
    },
    {
      title: "Hurricane Prediction AI",
      description: "Research project using AI & ML to predict hurricane paths and intensity using satellite data.",
      tech: ["Machine Learning", "Satellite Data", "TensorFlow", "AWS"]
    },
    {
      title: "Gen AI Integration",
      description: "LLM fine-tuning and system integration at Renault Nissan Technology Business Centre.",
      tech: ["LLM", "Gen AI", "Langchain", "Transformers"]
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

  const hoverScale = {
    hover: { scale: 1.02 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  return (
    <section id="work" className="py-16 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Work</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="glass-effect p-8 rounded-lg purple-glow"
              variants={fadeInUp}
              whileHover="hover"
              {...hoverScale}
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-sm bg-[#5B4DFB]/10 text-[#8F7BF7] px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 