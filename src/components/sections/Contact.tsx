import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xl tracking-widest font-medium uppercase text-primary-400">
              [ Contact ]
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-syne font-bold leading-tight mb-12 uppercase break-words">
              Let's create something <span className="text-stroke hover-target text-transparent">unforgettable</span>.
            </h3>
            
            <form className="space-y-8 mt-16" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-white/30 pb-4">
                <input 
                  type="text" 
                  placeholder="WHAT'S YOUR NAME?" 
                  className="w-full bg-transparent text-2xl md:text-4xl font-syne uppercase focus:outline-none placeholder:text-primary-800 hover-target text-white"
                />
              </div>
              <div className="border-b border-white/30 pb-4">
                <input 
                  type="email" 
                  placeholder="WHAT'S YOUR EMAIL?" 
                  className="w-full bg-transparent text-2xl md:text-4xl font-syne uppercase focus:outline-none placeholder:text-primary-800 hover-target text-white"
                />
              </div>
              <div className="border-b border-white/30 pb-4">
                <textarea 
                  placeholder="TELL ME ABOUT YOUR PROJECT" 
                  rows={3}
                  className="w-full bg-transparent text-2xl md:text-4xl font-syne uppercase focus:outline-none placeholder:text-primary-800 hover-target resize-none text-white"
                ></textarea>
              </div>
              
              <button className="text-xl border border-white px-12 py-6 uppercase tracking-widest hover:bg-white hover:text-black transition-colors hover-target mt-8 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
