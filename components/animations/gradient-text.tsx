"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-linear-to-r from-emerald-600 via-cyan-600 to-neutral-600 bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ["0%", "100%", "0%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.span>
  );
}
