import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Biography from '../components/Biography';
import Music from '../components/Music';
import Gallery from '../components/Gallery';
import Tour from '../components/Tour';
import Contact from '../components/Contacts';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Biography />
      <Music />
      <Gallery />
      <Tour />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;