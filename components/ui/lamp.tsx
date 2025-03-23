"use client";
import React from "react";
import { motion } from "framer-motion";

export const LampEffect = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none z-50">
      <motion.div
        initial={{ opacity: 0.3, width: "12rem" }}
        animate={{ opacity: 0.7, width: "30rem" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute h-40 w-96 bg-primary/25 opacity-40 blur-[400px] rounded-full"
      />
    </div>
  );
};
