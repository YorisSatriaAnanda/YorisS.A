import { motion } from 'framer-motion';

const skills = [
  "React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Node.js", "PostgreSQL", "Creative Coding", "WebGL"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          className="mb-16"
        >
          <h2 className="text-xl tracking-widest font-medium uppercase text-primary-400">
            [ Capabilities ]
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-t border-white/10 py-6 pr-6 hover:bg-white hover:text-black transition-colors hover-target group cursor-none"
            >
              <h3 className="text-3xl md:text-5xl font-syne font-bold uppercase transition-transform group-hover:translate-x-4">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
