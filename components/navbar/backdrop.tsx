import { motion } from "framer-motion";
import React, { ReactElement } from "react";

const Backdrop = ({ children, onClick }:{children:ReactElement , onClick:() => void}) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 z-[10000] w-full h-[100vh] bg-[#000000e1] overflow-y-hidden lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
