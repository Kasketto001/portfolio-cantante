import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Calcola l'anno corrente

  return (
    <footer className="bg-black text-gray-200 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo e Descrizione */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
          <Image src="/img/gs-logo.svg" alt="Giovanna Sofia Logo" width={150} height={150} />
          <p className="text-gray-400 text-sm max-w-xs">
            Cantante e performer, portando la sua voce e passione in tutto il mondo con un mix di pop, jazz e R&B.
          </p>
        </div>
        
        {/* Link di Navigazione */}
        <div className="flex space-x-6">
          <Link href="#biografia" className="hover:text-pink-500">Biografia</Link>
          <Link href="#musica" className="hover:text-pink-500">Musica</Link>
          <Link href="#galleria" className="hover:text-pink-500">Galleria</Link>
          <Link href="#tour" className="hover:text-pink-500">Tour</Link>
          <Link href="#contatti" className="hover:text-pink-500">Contatti</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Copyright e Credit */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-6 space-y-2">
        <div>© {currentYear} Giovanna Sofia. All rights reserved.</div>
        <div className="flex items-center justify-center space-x-1">
          <span>Made with</span>
          <FaHeart className="text-[#f97316]" />
          <span>by</span>
          <a className="text-[#f97316] hover:underline" target="_blank" href="http://kask1.it" rel="noopener noreferrer">
            KASK1_
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
