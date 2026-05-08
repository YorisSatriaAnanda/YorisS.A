import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Format the path for display
  const pathName = location.pathname === '/' 
    ? 'HOME' 
    : location.pathname.substring(1).toUpperCase();

  return (
    <>
      {children}
      
      {/* Slide in from bottom when exiting current page (No text, just white cover) */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-white z-[60] pointer-events-none"
      />

      {/* Slide out to top when entering new page (Contains text of the new page) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-white z-[60] flex items-center justify-center pointer-events-none"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-black text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase"
        >
          {pathName}
        </motion.h2>
      </motion.div>
    </>
  );
};

export default PageTransition;
