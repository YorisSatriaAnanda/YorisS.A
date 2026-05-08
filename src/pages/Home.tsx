import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <About />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </PageTransition>
  );
};

export default Home;
