"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animazione iniziale della navbar
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
    );

    // Gestione dello scroll per cambiare lo sfondo della navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuLinksRef.current) {
      // Animazione per l’apertura dei link del menu mobile
      gsap.fromTo(
        Array.from(menuLinksRef.current.children),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black backdrop-blur-md bg-opacity-50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold flex items-center">
          <Image
            src="/img/logo-gs.svg"
            alt="Giovanna Sofia"
            width={80}
            height={80}
            className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Menu Items per desktop */}
        <div className="hidden md:flex space-x-8 text-white">
          {['Biografia', 'Musica', 'Galleria', 'Contatti'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-gray-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#f97316] to-[#ec4899] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Pulsante CTA per desktop */}
        <Link
          href="#contatti"
          className="font-semibold hidden md:block bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300"
        >
          Contattami
        </Link>

        {/* Icona hamburger per mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Overlay per il menu mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu}></div>
        )}

        {/* Menu mobile */}
        <div
          ref={menuLinksRef}
          className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-lg mt-12">
            {['Biografia', 'Musica', 'Galleria', 'Tour', 'Contatti'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-pink-500"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#prenota"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-4 py-2 rounded-full mt-4 hover:scale-110 transition-transform duration-300"
            >
              Contattami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
