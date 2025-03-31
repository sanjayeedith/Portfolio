import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Arduino', src: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg', link: 'https://www.arduino.cc/' },
  { name: 'AWS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', link: 'https://aws.amazon.com' },
  { name: 'Azure', src: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg', link: 'https://azure.microsoft.com/en-in/' },
  { name: 'C', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', link: 'https://www.cprogramming.com/' },
  { name: 'Cassandra', src: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg', link: 'https://cassandra.apache.org/' },
  { name: 'C++', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', link: 'https://www.w3schools.com/cpp/' },
  { name: 'Docker', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', link: 'https://www.docker.com/' },
  { name: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', link: 'https://firebase.google.com/' },
  { name: 'GCP', src: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', link: 'https://cloud.google.com' },
  { name: 'Git', src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', link: 'https://git-scm.com/' },
  { name: 'Grafana', src: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg', link: 'https://grafana.com' },
  { name: 'Heroku', src: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg', link: 'https://heroku.com' },
  { name: 'HTML5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', link: 'https://www.w3.org/html/' },
  { name: 'Linux', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', link: 'https://www.linux.org/' },
  { name: 'MATLAB', src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png', link: 'https://www.mathworks.com/' },
  { name: 'MySQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', link: 'https://www.mysql.com/' },
  { name: 'Nginx', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg', link: 'https://www.nginx.com' },
  { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', link: 'https://nodejs.org' },
  { name: 'OpenCV', src: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg', link: 'https://opencv.org/' },
  { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', link: 'https://postman.com' },
  { name: 'Python', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', link: 'https://www.python.org' },
  { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', link: 'https://reactjs.org/' },
  { name: 'Scikit-learn', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', link: 'https://scikit-learn.org/' },
  { name: 'Seaborn', src: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg', link: 'https://seaborn.pydata.org/' },
  { name: 'Tailwind CSS', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', link: 'https://tailwindcss.com/' },
  { name: 'TensorFlow', src: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', link: 'https://www.tensorflow.org' },
  { name: 'Prometheus', src: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg', link: 'https://prometheus.io/' },
  { name: 'VS Code', src: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg', link: 'https://code.visualstudio.com/' }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-12 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-4 bg-[#000212]/50 rounded-lg border border-[#5B4DFB]/20 hover:border-[#8F7BF7]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="relative w-10 h-10 mb-2">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-sm text-gray-400 text-center group-hover:text-white transition-colors duration-300">{tech.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 