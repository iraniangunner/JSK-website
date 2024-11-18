"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComplexNavbar } from "./complexNavbar";
import { useScroll } from "@/hooks/useScroll";

const NavAnimations = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease-in-out",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export default function Navbar() {
  const [isScrolling] = useScroll(70);
  return (
    <>
      {isScrolling ? (
        <AnimatePresence>
          <motion.nav
            key={1}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={NavAnimations}
            className="fixed z-10 flex justify-between w-full main_nav"
          >
            <ComplexNavbar isScroll={true} />
          </motion.nav>
        </AnimatePresence>
      ) : (
        <nav className="sticky top-[72px] z-10 flex justify-between w-full bg-[#737373]">
          <ComplexNavbar isScroll={false} />
        </nav>
      )}
    </>
  );
}
