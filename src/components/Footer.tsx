import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
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
            <a 
              href="mailto:yorissatriaananda@gmail.com" 
              className="group flex items-center gap-6 text-3xl md:text-5xl font-syne font-bold transition-colors hover-target leading-normal py-2"
            >
              <span className="hover:text-transparent hover:[-webkit-text-stroke:1px_white] transition-all duration-300 pb-2 inline-block">
                yorissatriaananda@gmail.com 
              </span>
              <span className="p-4 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" size={24} />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-8">
            <a href="https://github.com/YorisSatriaAnanda" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">Github</a>
            <a href="https://www.linkedin.com/in/yoris-satria-ananda-664735334/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">LinkedIn</a>
            <a href="https://www.instagram.com/fhuzin_/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-400 transition-colors hover-target uppercase tracking-widest">Instagram</a>
          </div>
          <div className="text-left md:text-right text-primary-500 font-mono text-xs uppercase tracking-widest flex flex-col gap-2">
            <p>LOCAL TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' })}</p>
            <p>&copy; {new Date().getFullYear()} YORIS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
