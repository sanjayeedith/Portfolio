"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  size?: number;
}

export function BorderBeam({ className, duration = 8, size = 100 }: BorderBeamProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(91, 77, 251, 0.1) 0%, transparent ${size}%)`,
          animation: `border-beam ${duration}s linear infinite`,
        }}
      />
      <style jsx>{`
        @keyframes border-beam {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
} 