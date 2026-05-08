import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-4 md:px-12">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col uppercase"
        >
          <div className="overflow-hidden pb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-[8.5vw] md:text-[9vw] leading-[0.8] font-syne font-extrabold tracking-tighter"
            >
              FRONTEND
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-center gap-6 pb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="h-1 bg-white hidden md:block"
            ></motion.div>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-[8.5vw] md:text-[9vw] leading-[0.8] font-syne font-extrabold tracking-tighter"
            >
              DEVELOPER
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8"
        >
          <p className="max-w-sm text-primary-400 font-sans text-sm md:text-base leading-relaxed">
            I craft digital experiences with a focus on typography, motion, and brutalist aesthetics.
            Pushing the boundaries of the web.
          </p>

          <div className="text-right">
            <p className="text-xs tracking-widest text-primary-500 mb-1">AVAILABLE FOR HIRE</p>
            <p className="font-syne font-bold">BASED IN INDONESIA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
