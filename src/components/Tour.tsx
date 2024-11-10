import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const tours = [
  {
    date: '15 Dicembre 2024',
    location: 'Milano, Italia',
    venue: 'Teatro degli Arcimboldi',
  },
  {
    date: '20 Gennaio 2025',
    location: 'Roma, Italia',
    venue: 'Auditorium Parco della Musica',
  },
  {
    date: '5 Febbraio 2025',
    location: 'Napoli, Italia',
    venue: 'Teatro San Carlo',
  },
  {
    date: '18 Marzo 2025',
    location: 'Firenze, Italia',
    venue: 'Teatro Verdi',
  },
  {
    date: '10 Aprile 2025',
    location: 'Torino, Italia',
    venue: 'Teatro Regio',
  },
];

const Tour: React.FC = () => {
  return (
    <section id="tour" className="relative py-20 px-6 bg-black text-gray-200 flex flex-col items-center overflow-hidden">

      {/* Decorazioni di sfondo */}
      <div className="absolute top-24 left-0 w-48 h-48 bg-gradient-to-br from-fuchsia-500 to-orange-500 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-24 right-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-full blur-2xl z-0"></div>

      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-10 z-10">
        Prossimi Tour
      </h2>
      <p className="mb-12 text-center max-w-xl z-10 text-gray-400">
        Vivi l&apos;emozione della musica dal vivo! Scopri le date e i luoghi dove Giovanna Sofia si esibirà. Un’esperienza unica ti aspetta!
      </p>

      {/* Lista dei Tour */}
      <div className="w-full md:w-3/4 lg:w-2/3 space-y-6 z-10">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center justify-between bg-zinc-900 p-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            {/* Icona e Data */}
            <div className="flex items-center text-lg font-semibold text-orange-400 mb-4 md:mb-0 md:mr-6">
              <FaCalendarAlt className="text-fuchsia-500 mr-2" />
              {tour.date}
            </div>

            {/* Località e Luogo */}
            <div className="flex flex-col text-center md:text-left space-y-1">
              <p className="flex items-center text-xl font-bold">
                <FaMapMarkerAlt className="text-fuchsia-500 mr-2" />
                {tour.location}
              </p>
              <p className="text-gray-400 text-sm">{tour.venue}</p>
            </div>

            {/* Pulsante Acquista Biglietti, posizionato sotto il testo */}
            <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
              <a
                href="#"
                className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-110"
              >
                Acquista Biglietti
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tour;
