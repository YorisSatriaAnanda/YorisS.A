import { motion } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      {/* Slide in from bottom when exiting */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-white z-[60] origin-bottom pointer-events-none"
      />
      {/* Slide out to top when entering */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-white z-[60] origin-top pointer-events-none"
      />
    </>
  );
};

export default PageTransition;
