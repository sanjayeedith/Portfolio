import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function Projects() {
  const projects = [
    {
      title: "AI Object Detection System",
      description: "Advanced object detection system using deep learning and computer vision techniques.",
      image: "/projects/Object Detection.avif",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      link: "https://github.com/sanjayeedith/Satellite-Imagery-and-Machine-Learning-To-Detect-Vegetation-Height-Beneath-Transmission-Lines"
    },
    {
      title: "Gen AI Implementation",
      description: "Implementation of cutting-edge generative AI models for creative applications.",
      image: "/projects/Gen AI.png",
      technologies: ["Python", "PyTorch", "Transformers", "Hugging Face"],
      link: "https://github.com/sanjayeedith/ATS-Tracking-LLM-Project-with-Google-Gemini-pro"
    },
    {
      title: "DISEASES DETECTION SYSTEM FOR LIVESTOCK",
      description: "Systems for detecting diseases that are effective are essential to reducing these difficulties.",
      image: "/projects/computer vision.png",
      technologies: ["Python", "OpenCV", "NumPy", "scikit-learn"],
      link: "https://github.com/sanjayeedith/DISEASES-DETECTION-SYSTEM-FOR-LIVESTOCK"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NeonGradientCard 
                className="w-full h-full [&>div]:!bg-[#000212] [&>div]:p-6"
                neonColors={{ firstColor: "#5B4DFB", secondColor: "#8F7BF7" }}
                borderSize={2}
                borderRadius={16}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#5B4DFB]/20 text-[#5B4DFB] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#5B4DFB] text-white rounded-lg hover:bg-[#8F7BF7] transition-colors"
                >
                  View Project
                </a>
              </NeonGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 