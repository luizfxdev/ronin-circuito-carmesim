import { useState, useRef } from 'react';
import themeMusic from '../assets/theme.mp3';

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={themeMusic} type="audio/mpeg" />
      </audio>

      <div className="audio-controls">
        <button className="audio-btn" onClick={togglePlay} title={isPlaying ? 'Pausar música' : 'Tocar música'}>
          {isPlaying ? '⏸️' : '🎵'}
        </button>
      </div>
    </>
  );
};

export default AudioControl;
