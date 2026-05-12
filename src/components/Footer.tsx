import { useState, useEffect } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('yorissatriaananda@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="pt-32 pb-8 bg-primary-950 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 tracking-tighter">HAVE AN IDEA?</h2>
            <p className="text-primary-400 text-lg md:text-xl font-sans">
              I'm currently available for freelance work. Let's build something extraordinary together.
            </p>
          </div>
          
          <div>
            <button 
              onClick={handleCopy}
              className="group flex items-center gap-4 md:gap-6 text-xl sm:text-3xl md:text-5xl font-syne font-bold transition-colors hover-target leading-normal py-2 text-left w-full"
            >
              <span className="hover:text-transparent hover:[-webkit-text-stroke:1px_white] transition-all duration-300 pb-2 inline-block break-all">
                yorissatriaananda@gmail.com
              </span>
              <span className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-full border border-white/20 transition-all ${copied ? 'bg-white text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <FaCheck size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-8">
            <a href="https://github.com/YorisSatriaAnanda" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">Github</a>
            <a href="https://www.linkedin.com/in/yoris-satria-ananda-664735334/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">LinkedIn</a>
            <a href="https://www.instagram.com/fhuzin_/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">Instagram</a>
          </div>
          <div className="text-left md:text-right text-primary-500 font-mono text-xs uppercase tracking-widest flex flex-col gap-2">
            <p>LOCAL TIME: {time.toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' })}</p>
            <p>&copy; {new Date().getFullYear()} YORIS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
