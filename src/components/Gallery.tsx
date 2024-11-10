"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/img/foto1.jpg",
  "/img/foto2.jpg",
  "/img/foto3.jpg",
  "/img/foto0.jpg",
  "/img/foto01.jpg",
  "/img/foto02.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const openModal = (image: string) => {
    setSelectedImage(image);
    gsap.fromTo(
      ".modal-content",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    // Animazione delle immagini quando entrano in vista
    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: index * 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={galleryRef}
      id="galleria"
      className="py-20 px-6 bg-black text-gray-200 flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-10">
        Galleria
      </h2>
      <p className="mb-8 text-center max-w-xl">
        Esplora alcuni dei momenti più memorabili di Giovanna Sofia, catturati in questa galleria esclusiva.
      </p>

      {/* Griglia di Immagini */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-3/4 lg:w-2/3">
  {images.map((image, index) => (
    <div
      key={index}
      ref={(el) => {
        if (el && !imageRefs.current.includes(el)) {
          imageRefs.current.push(el);
        }
      }}
      className="flex align-middle justify-center relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => openModal(image)}
    >
      <Image
        src={image}
        alt={`Gallery image ${index + 1}`}
        width={400}
        height={400}
        className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  ))}
</div>

      {/* Modal Interattiva */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative p-4 modal-content">
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
