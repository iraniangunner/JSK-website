"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, px } from "framer-motion";
import { ComplexNavbar } from "./navbar1";
import TopNav from "./top-nav";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 72) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed({ isScrolling }) {
  return (
    <nav className="sticky top-[72px] z-10 flex justify-between w-full bg-[#ccc]">
      <ComplexNavbar isScroll={isScrolling} />
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between w-full bg-[#ccc]"
    >
      <ComplexNavbar isScroll={isScrolling} />
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    // x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    // x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
