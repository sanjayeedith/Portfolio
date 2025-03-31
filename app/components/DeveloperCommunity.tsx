import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

interface Community {
  name: string;
  image: string;
}

export const DeveloperCommunity = React.memo(({ communities }: { communities: Community[] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const topCommunities = React.useMemo(() => 
    communities.filter(community => 
      community.name !== "AWS Cloud Community" && 
      community.name !== "Climatic Change AI"
    ), [communities]);

  const bottomCommunities = React.useMemo(() => 
    communities.filter(community => 
      community.name === "AWS Cloud Community" || 
      community.name === "Climatic Change AI"
    ), [communities]);

  return (
    <section 
      className="pt-0 pb-8 px-4 md:px-10 lg:px-20 xl:px-40 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className={`text-xl md:text-2xl text-gray-400 mb-8 font-moon-light tracking-widest uppercase transition-all duration-300 ${isHovered ? 'text-white' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.5 }}
        >
          Developer Community
        </motion.h2>
        <motion.div 
          className="flex flex-col items-center gap-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {/* Top grid with other logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {topCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                className="relative w-32 h-16 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0.7,
                  y: 0,
                  filter: isHovered ? 'grayscale(0)' : 'grayscale(1)'
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  style={{ 
                    objectFit: 'contain',
                    mixBlendMode: 'normal'
                  }}
                  className="transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom row with AWS and Climatic Change AI */}
          <div className="flex justify-center items-center gap-12 flex-wrap mt-4">
            {bottomCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                className="relative transition-all duration-300 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0.7,
                  y: 0,
                  filter: isHovered ? 'grayscale(0)' : 'grayscale(1)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    style={{ 
                      objectFit: 'contain',
                      mixBlendMode: 'normal'
                    }}
                    className="transition-all duration-300"
                  />
                </div>
                {community.name === "Climatic Change AI" && (
                  <span className="text-[#2F4F4F] font-semibold text-lg whitespace-nowrap ml-4">
                    Climatic Change.AI
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}); 