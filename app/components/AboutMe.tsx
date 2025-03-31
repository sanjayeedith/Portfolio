import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function AboutMe() {
  return (
    <section id="aboutme" className="py-12 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">About Me</h2>
        <NeonGradientCard 
          className="w-full [&>div]:!bg-[#000212] [&>div]:p-6 [&>div]:md:p-8"
          neonColors={{ firstColor: "#5B4DFB", secondColor: "#8F7BF7" }}
          borderSize={2}
          borderRadius={16}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  🔥 AI Engineer | ML Innovator | Generative AI Enthusiast
                </p>
                <p className="mt-2 text-sm md:text-base">
                  I don't just build AI models—I craft intelligent systems that see, think, and evolve. From decoding satellite imagery with deep learning to fine-tuning LLMs for next-gen AI applications, I thrive at the intersection of code, creativity, and real-world impact.
                </p>
                <div className="space-y-2 mt-4">
                  <p className="flex items-start text-sm md:text-base">
                    <span className="text-[#8F7BF7] mr-2">🔹</span>
                    Engineered an object detection model that sees beyond the noise—improving SAR satellite image analysis by 15% while cutting false positives by 20%.
                  </p>
                  <p className="flex items-start text-sm md:text-base">
                    <span className="text-[#8F7BF7] mr-2">🔹</span>
                    Integrated Generative AI into cutting-edge solutions, redefining automation and human-AI collaboration.
                  </p>
                  <p className="flex items-start text-sm md:text-base">
                    <span className="text-[#8F7BF7] mr-2">🔹</span>
                    Filed patents on AI-driven climate tech & accessibility, proving that innovation isn't just about code—it's about changing lives.
                  </p>
                </div>
                <p className="mt-4 text-base md:text-lg font-semibold text-[#8F7BF7]">
                  I believe AI isn't just technology—it's a revolution, and I'm here to drive it forward. Let's build the future, one algorithm at a time. 🚀
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-[#000212]/50 px-4 py-2 rounded-md border border-[#5B4DFB]/20">
                  <span className="text-[#8F7BF7] font-semibold">3+</span>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="bg-[#000212]/50 px-4 py-2 rounded-md border border-[#5B4DFB]/20">
                  <span className="text-[#8F7BF7] font-semibold">15+</span>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-[#000212]/50 px-4 py-2 rounded-md border border-[#5B4DFB]/20">
                  <span className="text-[#8F7BF7] font-semibold">5+</span>
                  <p className="text-sm text-gray-400">Research Papers</p>
                </div>
                <div className="bg-[#000212]/50 px-4 py-2 rounded-md border border-[#5B4DFB]/20">
                  <span className="text-[#8F7BF7] font-semibold">3+</span>
                  <p className="text-sm text-gray-400">Patents</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg overflow-hidden bg-[#000212]/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/Mine.jpg"
                alt="Sanjay R"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  );
} 