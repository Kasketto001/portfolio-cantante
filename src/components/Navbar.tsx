"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animazione navbar all'apertura della pagina
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animazione scroll per cambiare lo sfondo della navbar
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
      // Animazione per l’apertura dei link del menu laterale
      gsap.fromTo(
        Array.from(menuLinksRef.current.children),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
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
        <span
          className="text-md font-bold"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Giovanna Sofia
        </span>
        </div>

        {/* Menu Items for Larger Screens */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="#biografia" className="relative hover:text-gray-300">
            Biografia
          </Link>
          <Link href="#musica" className="relative hover:text-gray-300">
            Musica
          </Link>
          <Link href="#galleria" className="relative hover:text-gray-300">
            Galleria
          </Link>
          <Link href="#tour" className="relative hover:text-gray-300">
            Tour
          </Link>
          <Link href="#contatti" className="relative hover:text-gray-300">
            Contatti
          </Link>
        </div>

        {/* CTA Button for Larger Screens */}
        <Link href="#prenota" className="font-semibold hidden md:block bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-4 py-2 rounded-full hover:animate-pulse transition duration-300">
          Contattami
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Overlay per la Sidebar Mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu}></div>
        )}

        {/* Sidebar Menu for Mobile */}
        <div
          ref={menuLinksRef}
          className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button in Sidebar */}
          <button
            className="text-white text-3xl absolute top-5 right-5 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-lg mt-12">
            <Link href="#biografia" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500">
              Biografia
            </Link>
            <Link href="#musica" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500">
              Musica
            </Link>
            <Link href="#galleria" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500">
              Galleria
            </Link>
            <Link href="#tour" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500">
              Tour
            </Link>
            <Link href="#contatti" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500">
              Contatti
            </Link>
            <Link
              href="#prenota"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-4 py-2 rounded-full mt-4 hover:animate-pulse transition duration-300"
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
