import React, { useRef, useState, useEffect } from 'react';
import { IconButton, Slider, Box } from '@mui/material';
import novios from '../../../assets/img/novios.jpg'
import { Pause, Play } from 'iconsax-react';



interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [allowClick, setAllowClick] = useState<boolean>(true);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateCurrentTime = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      audio.addEventListener('timeupdate', updateCurrentTime);
      return () => {
        audio.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = () => {
      if (allowClick && audioRef.current && !isPlaying) {
        audioRef.current.play().catch((error) => console.error('Error playing audio:', error));
        setIsPlaying(true);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [allowClick, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => console.error('Error playing audio:', error));
        setIsPlaying(true);
      }
      setAllowClick(false); // Desactiva el clic en el documento
    }
  };


  const handleProgressChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number' && audioRef.current) {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };
  return (
    <Box className="flex flex-col w-full justify-center p-2 rounded-lg gap-1" sx={{ background: "linear-gradient(90deg,#86977E,#495245)" }}>
      <Box className="flex justify-between gap-16" onClick={(e) => e.stopPropagation()}>
        <div className='flex gap-2'>
          <img src={novios} className='w-[32px] h-[32px] object-cover rounded-sm' alt="" />
          <div className='flex flex-col'>
            <span className='treeFont text-sm font-medium text-white'>Así es nuestro amor</span>
            <p className='treeFont text-xs text-white'>Jhon & Carmen</p>
          </div>
        </div>
        <audio ref={audioRef} src={src} />
        <Box display="flex" alignItems="center" >
          <IconButton onClick={togglePlay}>
            {isPlaying ? <Pause size="20" color="#FFFFFF" /> : <Play size="20" color="#FFFFFF" />}
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" >

        <Slider
          value={currentTime}
          max={duration}
          onChange={handleProgressChange}
          aria-labelledby="progress-slider"
          size="small"
          sx={{
            padding: "0 !important",
            width: "100%",
            '& .MuiSlider-thumb': {
              display: 'none', // Oculta el círculo del slider
            },
            '& .MuiSlider-track': {
              background: 'white', // Color de la pista del slider
            },
            '& .MuiSlider-rail': {
              bgcolor: 'background.paper', // Color del riel del slider
            },
          }}
        />
      </Box>

    </Box>
  );
};

export default MusicPlayer;
