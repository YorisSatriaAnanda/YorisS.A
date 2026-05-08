import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-xl tracking-widest font-medium uppercase text-primary-400">
              [ About Me ]
            </h2>
            <div className="w-full aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto">
              <img 
                src="/assets/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-syne font-bold leading-tight mb-12">
              STUDENT BY DAY, <span className="text-stroke hover-target">FRONTEND DEVELOPER</span>.
            </h3>
            
            <div className="text-lg font-sans text-primary-300 leading-relaxed max-w-3xl">
              <p>
                I'm an 11th-grade Software Engineering (PPLG) student at SMKN 1 Ciomas. I specialize in building sleek, high-performing websites and user interfaces. While still in school, I treat every project as a professional craft and constantly explore new technologies to push my boundaries as a developer.
              </p>
            </div>
            
            <div className="mt-16 flex gap-4">
              <a href="#" className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors hover-target">
                Full Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
