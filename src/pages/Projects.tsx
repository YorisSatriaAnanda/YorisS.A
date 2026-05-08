import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-COMMERCE",
    category: "Development / Design",
    year: "2024",
    image: "/assets/project1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1481481322814-3d6412795c15?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "TASKFLOW",
    category: "Web Application",
    year: "2023",
    image: "/assets/project2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "NEURO ART",
    category: "AI / Creative",
    year: "2023",
    image: "/assets/project3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "MINIMAL",
    category: "Template",
    year: "2022",
    image: "/assets/project4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase">Selected Works</h1>
        </motion.div>

        <div className="border-t border-white/20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group border-b border-white/20 py-8 md:py-12 relative flex flex-col md:flex-row md:items-center justify-between hover-target cursor-none transition-colors hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 z-10 relative pointer-events-none">
                <span className="text-primary-500 font-mono text-sm hidden md:block">0{index + 1}</span>
                <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase transition-transform duration-500 group-hover:translate-x-4">
                  {project.title}
                </h2>
              </div>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0 z-10 relative pointer-events-auto">
                <span className="text-primary-400 font-sans tracking-widest text-sm uppercase hidden lg:block">
                  {project.category}
                </span>
                <span className="text-white font-mono">{project.year}</span>
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-primary-400 transition-colors hover-target"><FaGithub size={24} /></a>
                  <a href={project.link} className="hover:text-primary-400 transition-colors hover-target"><ExternalLink size={24} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal on Hover (Desktop Only) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
        {projects.map((project) => (
          <motion.img
            key={project.id}
            src={project.image}
            alt={project.title}
            className="absolute w-80 h-96 object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = project.fallbackImage || "https://images.unsplash.com/photo-1481481322814-3d6412795c15?auto=format&fit=crop&q=80&w=800";
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredProject === project.id ? 1 : 0,
              scale: hoveredProject === project.id ? 1 : 0.8,
              x: mousePos.x - 160, // Center image on cursor
              y: mousePos.y - 192,
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
