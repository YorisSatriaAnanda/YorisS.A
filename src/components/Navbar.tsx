import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'INDEX', path: '/' },
    { name: 'WORK', path: '/projects' },
    { name: 'AWARDS', path: '/certificates' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 mix-blend-difference p-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-syne font-bold tracking-tighter text-white hover-target">
            YORIS©
          </Link>

          <button
            className="text-sm font-medium tracking-widest text-white hover-target"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-primary-50 text-primary-950 z-40 flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-6xl md:text-8xl font-syne font-bold tracking-tighter hover:text-transparent hover:[-webkit-text-stroke:2px_black] transition-all hover-target uppercase"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              <div className="overflow-hidden mt-8">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.5, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  <a href="mailto:hello@yoris.com" className="text-xl md:text-2xl font-medium border-b border-black pb-1 hover-target">
                    hello@yoris.com
                  </a>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
