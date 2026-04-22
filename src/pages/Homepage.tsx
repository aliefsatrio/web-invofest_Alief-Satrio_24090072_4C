import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Competition from './components/sections/Competition';
import Seminar from './components/sections/Seminar';
import Talkshow from './components/sections/Talkshow';
import Workshop from './components/sections/Workshop';
import FAQ from './components/sections/FAQ'; 
import Sponsor from './components/sections/Sponsor';
import Footer from './components/layout/Footer';
import ScrollTop from './components/layout/ScrollTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Seminar />
      <Talkshow />
      <Workshop />
      <Competition />
      <FAQ />
      <Sponsor />
      <Footer />
      <ScrollTop />

    </>
  );
};

export default App;