import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[30vw] md:text-[20vw] leading-none font-syne font-extrabold tracking-tighter text-white/10 select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase mt-[-8vw] md:mt-[-4vw] mb-6">
            LOST IN SPACE?
          </h2>
          <p className="text-primary-400 text-lg max-w-md mb-12 font-sans">
            The page you are looking for doesn't exist or has been moved to another universe.
          </p>
          
          <Link 
            to="/" 
            className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors hover-target font-medium"
          >
            Return Home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
