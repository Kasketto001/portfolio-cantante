import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contatti" className="relative py-20 px-6 bg-black text-gray-200 flex flex-col items-center overflow-hidden">
      {/* Gradient superiore e inferiore */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-0"></div>

      {/* Titolo della sezione */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-10 z-10">
        Contattami
      </h2>
      <p className="mb-12 text-center max-w-xl z-10 text-gray-400">
        Per informazioni, collaborazioni o semplicemente per dire ciao, compila il modulo qui sotto o contattami direttamente tramite i miei social!
      </p>

      {/* Form di contatto con gradient sottile */}
      <div className="w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r bg-zinc-900 p-8 rounded-3xl shadow-2xl z-10 relative overflow-hidden">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-3 w-full rounded-lg bg-zinc-800 border border-zinc-600 focus:border-orange-500 focus:ring-orange-500 text-gray-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-3 w-full rounded-lg bg-zinc-800 border border-zinc-600 focus:border-orange-500 focus:ring-orange-500 text-gray-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Messaggio</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 p-3 w-full rounded-lg bg-zinc-800 border border-zinc-600 focus:border-orange-500 focus:ring-orange-500 text-gray-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Invia Messaggio
          </button>
        </form>
      </div>

      {/* Dettagli di contatto */}
      <div className="mt-12 text-center space-y-4 z-10">
        <p className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-fuchsia-500" />
          <span>info@giovannasofia.com</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaPhoneAlt className="text-fuchsia-500" />
          <span>+39 388 811 3798</span>
        </p>
      </div>

      {/* Icone social media */}
      <div className="flex space-x-6 mt-6 z-10">
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
          <FaYoutube size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
