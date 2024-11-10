import React from 'react';

const Music: React.FC = () => {
  return (
    <section id="musica" className="relative py-20 px-6 bg-black text-gray-200 flex flex-col items-center overflow-hidden">
      {/* Decorazioni particelle sfumate e respiranti più grandi */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-500 to-transparent opacity-40 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-r from-fuchsia-500 to-transparent opacity-55 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-500 to-transparent opacity-40 rounded-full blur-3xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-r from-orange-400 to-transparent opacity-25 rounded-full blur-xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-orange-500 to-transparent opacity-40 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-2/4 right-1/3 w-44 h-44 bg-gradient-to-r from-fuchsia-500 to-transparent opacity-45 rounded-full blur-2xl z-0 animate-pulse-soft"></div>
      <div className="absolute top-3/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-transparent opacity-40 rounded-full blur-xl z-0 animate-pulse-soft"></div>

      {/* Onde di sfondo sopra le particelle sfumate */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-80 z-1"></div>
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-80 z-1"></div>

      {/* Contenuto della sezione */}
      <h2 className="relative text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-10 z-10">
        Musica
      </h2>
      <p className="relative mb-8 text-center max-w-xl z-10">
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
