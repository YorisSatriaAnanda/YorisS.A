import { motion } from 'framer-motion';

const skills = [
  "React", "TypeScript", "Node.js", "Next.js", 
  "Tailwind CSS", "Framer Motion", "Git", "Figma", 
  "PostgreSQL", "REST APIs", "GraphQL", "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-primary-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter">Skills & Tools.</h2>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 glass rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
              >
                <span className="text-primary-100 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
