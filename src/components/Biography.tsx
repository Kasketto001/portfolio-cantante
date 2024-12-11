"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const Biography: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animazione immagine
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animazioni di entrata per il testo
    gsap.fromTo(
      [textRef1.current, textRef2.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef1.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="biografia"
      className="relative flex items-center justify-center py-20 px-6 bg-black text-gray-200 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 max-w-4xl z-10">
        {/* Immagine di Giovanna Sofia */}
        <div
          ref={imageRef}
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 z-10 group cursor-pointer"
        >
          <Image
            src="/img/giovanna-sofia.jpg"
            alt="Giovanna Sofia"
            width={300}
            height={400}
            className="rounded-lg shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Testo della Biografia */}
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-4">
            Giovanna Sofia Principi
          </h2>
          <p ref={textRef1} className="text-lg leading-relaxed">
            Giovanna Sofia, figlia d’arte, si avvicina alla musica fin da piccola, studiando canto,
            pianoforte, chitarra e violino. Appassionata di pop, soul e R&B internazionale, ha studiato canto lirico al Liceo Musicale di Ancona e ha conseguito una laurea in Canto Jazz al Conservatorio “G. Rossini” di Pesaro.
          </p>
          <p ref={textRef2} className="text-lg leading-relaxed">
            Grazie alla guida della Vocal Coach Martina Jozwiak e al contatto con docenti di rilievo
            come Laura Avanzolini e Gian Marco Gualandi, Giovanna Sofia ha perfezionato le proprie abilità, partecipando a eventi come “Arcevia Jazz Fest”.
          </p>
        </div>
      </div>

      {/* Decorazioni */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-full z-0"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-orange-400 opacity-30 rounded-full z-0"></div>
      <div className="absolute top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-fuchsia-500 opacity-10 transform rotate-12 scale-125"></div>
      <div className="absolute top-10 right-0 w-32 h-32 border-t-2 border-l-2 border-pink-500 rounded-full opacity-20 transform rotate-45 z-0"></div>
      <div className="absolute bottom-10 left-0 w-32 h-32 border-b-2 border-r-2 border-orange-400 rounded-full opacity-20 transform -rotate-45 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black z-0"></div>
    </section>
  );
};

export default Biography;
