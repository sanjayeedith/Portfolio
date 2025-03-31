"use client";

import React, { Suspense, lazy } from 'react';
import localFont from "next/font/local";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { DeveloperCommunity } from "./components/DeveloperCommunity";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Expertise } from "./components/Expertise";
import TerminalCard from "./components/TerminalCard";
import dynamic from 'next/dynamic';

// Define types for component props
interface DeveloperCommunityProps {
  communities: Array<{
    name: string;
    image: string;
  }>;
}

// Dynamically import components that are not immediately visible
const DynamicDeveloperCommunity = dynamic<DeveloperCommunityProps>(() => import('./components/DeveloperCommunity').then(mod => mod.DeveloperCommunity), {
  loading: () => <div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const DynamicAboutMe = dynamic(() => import('./components/AboutMe').then(mod => mod.AboutMe), {
  loading: () => <div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const DynamicExperience = dynamic(() => import('./components/Experience').then(mod => mod.Experience), {
  loading: () => <div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const DynamicExpertise = dynamic(() => import('./components/Expertise').then(mod => mod.Expertise), {
  loading: () => <div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const DynamicProjects = dynamic(() => import('./components/Projects').then(mod => mod.Projects), {
  loading: () => <div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const DynamicTerminalCard = dynamic(() => import('./components/TerminalCard').then(mod => mod.default), {
  loading: () => <div className="h-[300px] w-[400px] animate-pulse bg-[#0A0A0A]/50 rounded-lg" />
});

const moonBold = localFont({ 
  src: "./fonts/Moon Bold.otf", 
  variable: "--font-moon",
  preload: true,
  display: 'swap'
});

const moonLight = localFont({ 
  src: "./fonts/Moon Light.otf", 
  variable: "--font-moon-light",
  preload: true,
  display: 'swap'
});

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" } as any 
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    } as any
  }
};

const hoverScale: Variants = {
  hover: { scale: 1.02 },
  transition: { duration: 0.2, ease: "easeOut" } as any
};

// Memoize the communities array
const communities = [
  { name: "DeepLearning.AI", image: "/logos/DeepLearning.AI.png" },
  { name: "Google Cloud Community", image: "/logos/Google Cloud Community.png" },
  { name: "Google Developer Group", image: "/logos/Google_Developers_logo.svg" },
  { name: "Google Map Developer Community", image: "/logos/Google_Maps-Logo.wine.svg" },
  { name: "Python Developer Group", image: "/logos/Python-logo-generic.svg" },
  { name: "Climatic Change AI", image: "/logos/ccai_logo_white.png" },
  { name: "AWS Cloud Community", image: "/logos/Amazon_Web_Services_Logo.svg" }
];

// Page Components
export default function Home() {
  return (
    <main className={`bg-[#000212] text-white w-full min-h-screen ${moonBold.variable} font-moon relative overflow-hidden`}>
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
            "stroke-[#5B4DFB]/50"
          )}
        />
        <Meteors number={20} />
      </div>
      <div className="relative z-10 flex flex-col">
        <Header />
        <Hero />
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
          <DynamicDeveloperCommunity communities={communities} />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
          <DynamicAboutMe />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
          <DynamicExperience />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
          <DynamicExpertise />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
          <DynamicProjects />
        </Suspense>
        <div className="flex justify-center items-center py-20">
          <Suspense fallback={<div className="h-[300px] w-[400px] animate-pulse bg-[#0A0A0A]/50 rounded-lg" />}>
            <DynamicTerminalCard />
          </Suspense>
        </div>
      </div>
    </main>
  );
}