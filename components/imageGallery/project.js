import { motion } from "framer-motion";

export function Project({ projectDetails }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + projectDetails.backdrop_path}
        className="h-auto max-w-full rounded-lg"
        alt=""
      />
    </motion.div>
  );
}
