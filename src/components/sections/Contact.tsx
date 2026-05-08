import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Get in Touch.</h2>
          <p className="text-primary-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I'll try my best to get back to you! My inbox is always open.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-primary-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-primary-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
            />
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full bg-primary-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
            ></textarea>
            
            <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-4 py-3 hover:bg-primary-200 transition-colors">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
