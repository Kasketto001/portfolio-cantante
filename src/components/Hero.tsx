"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Image from 'next/image';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const volumeButtonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    // Intro Animation
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        imageRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        volumeButtonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
        '-=0.5'
      );

    // Subtle floating effect for subtitle
    gsap.to(subtitleRef.current, {
      y: '+=10',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });

    // Mouse interaction for the SVG
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const xPercent = (clientX / innerWidth - 0.5) * 20;
        const yPercent = (clientY / innerHeight - 0.5) * 20;

        gsap.to(imageRef.current, {
          x: xPercent,
          y: yPercent,
          rotation: xPercent * 0.5,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
        <div ref={imageRef} className="relative">
          <Image
            src="/img/logo-gs.svg"
            alt="Giovanna Sofia"
            width={400}
            height={400}
            className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
        <p
          ref={subtitleRef}
          className="mt-2 text-xl md:text-2xl font-light italic text-opacity-80"
        >
          Pop, Soul and Jazz Singer
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
    </div>
  );
};

export default Hero;
