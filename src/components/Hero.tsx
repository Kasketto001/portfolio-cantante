"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // Default volume
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const volumeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  useEffect(() => {
    // Animazioni iniziali con GSAP
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      volumeButtonRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white font-['Work Sans']">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://helmet-agency.it/external-assets/gs-sai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Hero Text with Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Giovanna Sofia
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-xl md:text-2xl font-light italic text-opacity-20"
        >
          Pop, soul and Jazz Singer
        </p>
      </div>

      {/* Mute/Unmute Button with Volume Control */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-center space-y-2 group">
        <button
          ref={volumeButtonRef}
          onClick={toggleMute}
          className="text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition"
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>

        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 appearance-none h-1 bg-gray-300 rounded-full outline-none"
          style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(to right, #f97316, #ec4899)' }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black z-0"></div>

      <style jsx>{`
        /* Custom styling for the slider thumb */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #f97316;
          cursor: pointer;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ec4899;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Hero;
