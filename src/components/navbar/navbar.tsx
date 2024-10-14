"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { ComplexNavbar } from "./complexNavbar";

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
          <NavbarFixed isScrolling={isScrolling} />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed({ isScrolling }:{isScrolling:boolean}) {
  return (
    <nav className="sticky top-[72px] z-10 flex justify-between w-full bg-[#737373]">
      <ComplexNavbar isScroll={isScrolling} />
    </nav>
  );
}

function NavbarScroll({ isScrolling }:{isScrolling:boolean}) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between w-full main_nav"
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
