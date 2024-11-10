"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Music: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const particlesRefs = useRef<HTMLDivElement[]>([]);

  // Funzione per aggiungere riferimenti alle particelle
  const addToParticlesRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !particlesRefs.current.includes(el)) {
      particlesRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    // Animazioni delle particelle sfumate
    particlesRefs.current.forEach((particle, index) => {
      gsap.fromTo(
        particle,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.5,
          scale: 1,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    // Animazioni per titolo e testo
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="musica"
      className="relative py-20 px-6 bg-black text-gray-200 flex flex-col items-center overflow-hidden"
    >
      {/* Particelle sfumate animate */}
      <div
        ref={addToParticlesRefs}
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-500 to-transparent opacity-40 rounded-full blur-2xl z-0 animate-pulse-soft"
      ></div>
      <div
        ref={addToParticlesRefs}
        className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-r from-fuchsia-500 to-transparent opacity-55 rounded-full blur-2xl z-0 animate-pulse-soft"
      ></div>
      <div
        ref={addToParticlesRefs}
        className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-500 to-transparent opacity-40 rounded-full blur-3xl z-0 animate-pulse-soft"
      ></div>
      {/* Altre particelle */}

      {/* Onde di sfondo sopra le particelle */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-80 z-1"></div>
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-80 z-1"></div>

      {/* Contenuto della sezione */}
      <h2
        ref={titleRef}
        className="relative text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-10 z-10"
      >
        Musica
      </h2>
      <p ref={textRef} className="relative mb-8 text-center max-w-xl z-10">
        Ascolta le canzoni di Giovanna Sofia direttamente su Spotify. Scopri i suoi brani più recenti e immergiti nel suo stile musicale unico.
      </p>

      {/* Embed Spotify Playlist o Album */}
      <div className="relative w-full md:w-2/3 lg:w-1/2 z-10">
        <iframe
          src="https://open.spotify.com/embed/playlist/09Qnb4CLq6yxakdwnAJEGO?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
