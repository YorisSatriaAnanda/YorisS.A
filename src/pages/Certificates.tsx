import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/assets/cert1.jpg",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=AWS+Developer+Certificate"
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    image: "/assets/cert2.jpg",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Meta+Front-End"
  },
  {
    id: 3,
    title: "Full Stack JavaScript Developer",
    issuer: "Dicoding Indonesia",
    date: "2023",
    image: "/assets/cert3.jpg",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Full+Stack"
  }
];

const Certificates = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Certificates.</h1>
          <p className="text-primary-400 text-lg max-w-2xl">
            My professional certifications and educational achievements in software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-2 rounded-2xl border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-primary-900/50">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = cert.fallbackImage || "https://via.placeholder.com/800x600/1a1a1a/ffffff";
                  }}
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-primary-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-xs text-primary-500 font-mono">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
