import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const certificates = [
  {
    id: 1,
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Academy",
    date: "May 2025",
    image: "/assets/cert1.jpg",
    link: "dicoding.com/certificates/07Z674EY2PQR",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Academy",
    date: "May 2025",
    image: "/assets/cert2.jpg",
    link: "dicoding.com/certificates/1OP823LO1PQK",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Academy",
    date: "May 2025",
    image: "/assets/cert3.jpg",
    link: "dicoding.com/certificates/ERZREO4VWXYV",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  },
  {
    id: 4,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Academy",
    date: "May 2025",
    image: "/assets/cert4.jpg",
    link: "dicoding.com/certificates/RVZKW31YQZD5",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  },
  {
    id: 5,
    title: "Financial Literacy 101",
    issuer: "Dicoding Academy",
    date: "July 2025",
    image: "/assets/cert5.jpg",
    link: "dicoding.com/certificates/KEXL2EQ7RZG2",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  },
  {
    id: 6,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Academy",
    date: "April 2026",
    image: "/assets/cert6.jpg",
    link: "dicoding.com/certificates/JMZVO4GGRXN9",
    fallbackImage: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dicoding+Certificate"
  }
];

const Certificates = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Certificates.</h1>
          <p className="text-primary-400 text-lg max-w-2xl mb-8">
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
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-primary-500 font-mono">{cert.date}</p>
                  <a 
                    href={`https://${cert.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono uppercase border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://drive.google.com/drive/folders/1mxn3mNGLYYMFI1qqpL4Wr2n1E34hGqf3?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Google Drive Folder
          </a>
        </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certificates;
