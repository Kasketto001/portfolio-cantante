"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaMinus } from 'react-icons/fa';
import { BiExpandAlt } from "react-icons/bi";

const songs = [
  { title: "caffè in sospeso", artist: "Giovanna Sofia, KASK1", src: "https://www.helmet-agency.it/external-assets/caffeinsospeso.wav" },
  { title: "Canzone 2", artist: "Giovanna Sofia Principi", src: "/songs/canzone2.mp3" },
  { title: "Canzone 3", artist: "Giovanna Sofia Principi", src: "/songs/canzone3.mp3" },
];

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMinimized, setIsMinimized] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div
      className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg p-4 flex flex-col items-center justify-between shadow-lg rounded-2xl z-50 border border-white border-opacity-20 backdrop-blur-lg bg-opacity-30 bg-black ${isMinimized ? 'h-16' : 'h-auto'}`}
    >
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].src}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Bottone Minimizza / Espandi */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute top-2 right-2 text-gray-300 hover:text-white"
      >
        {isMinimized ? <BiExpandAlt  className='hidden'/> : <FaMinus />}
      </button>

      {/* Modalità minimizzata */}
      {isMinimized ? (
        <div className="flex items-center justify-between w-full text-white cursor-pointer" onClick={() => setIsMinimized(false)}>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{songs[currentSongIndex].title}</span>
            <span className="text-xs text-gray-300 opacity-80">{songs[currentSongIndex].artist}</span>
          </div>
        </div>
        <button onClick={(e) => { e.stopPropagation(); togglePlayPause(); }} className="text-gray-300 hover:text-white text-lg">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      
      ) : (
        <>
          {/* Informazioni Canzone */}
          <div className="flex items-center justify-center w-full mb-2">
            <div className="text-center">
              <h4 className="font-semibold text-lg text-white opacity-90">{songs[currentSongIndex].title}</h4>
              <p className="text-sm text-gray-300 opacity-80">{songs[currentSongIndex].artist}</p>
            </div>
          </div>

          {/* Controlli Lettore */}
          <div className="flex items-center justify-center space-x-6 my-2">
            <button onClick={playPrevious} className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
              <FaBackward size={20} />
            </button>
            <button onClick={togglePlayPause} className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 text-2xl">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={playNext} className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
              <FaForward size={20} />
            </button>
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-4 w-full">
            <span className="text-gray-300 text-xs">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration.toString()}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="timeline-range flex-1 appearance-none h-1 rounded-full outline-none"
            />
            <span className="text-gray-300 text-xs">{formatTime(duration)}</span>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2 mt-2">
            <FaVolumeUp className="text-gray-300" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-range w-24 appearance-none h-1 rounded-full outline-none"
            />
          </div>
        </>
      )}

      <style jsx>{`
        .timeline-range::-webkit-slider-thumb,
        .volume-range::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #f97316;
          cursor: pointer;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        }

        .timeline-range::-moz-range-thumb,
        .volume-range::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ec4899;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

// Funzione per formattare i secondi in mm:ss
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;
