import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold tracking-tighter">YORIS.</span>
          <p className="text-primary-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-primary-400">
          <a href="#" className="hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
