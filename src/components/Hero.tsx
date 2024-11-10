import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://helmet-agency.it/external-assets/gs-beyonce.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Hero Text with Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <Image src="/img/gs-logo.svg" alt="Giovanna Sofia Logo" width={600} height={400} />
        <p className="mt-4 text-xl md:text-2xl font-light italic text-opacity-20">
          Singer - Songwriter - Performer
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black z-0"></div>
    </div>
  );
};

export default Hero;
