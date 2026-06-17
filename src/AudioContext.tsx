import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

export interface PlayableSong {
  title: string;
  artist: string;
  coverUrl?: string;
  previewUrl: string;
}

interface AudioContextType {
  currentSong: PlayableSong | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  play: (song: PlayableSong) => void;
  pause: () => void;
  toggle: (song: PlayableSong) => void;
  stop: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  currentSong: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  play: () => {},
  pause: () => {},
  toggle: () => {},
  stop: () => {},
});

export function useAudioPlayer() {
  return useContext(AudioCtx);
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<PlayableSong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.8;
    audioRef.current = audio;

    const updateDuration = () => {
      if (audio.duration && isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener('timeupdate', () => {
      setProgress(audio.currentTime);
      updateDuration();
    });
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('canplay', updateDuration);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
    });
    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });
    audio.addEventListener('play', () => {
      setIsPlaying(true);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = useCallback((song: PlayableSong) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentSong?.previewUrl === song.previewUrl && audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.src = song.previewUrl;
      audio.load();
      audio.play().catch(() => {});
    }
    setCurrentSong(song);
  }, [currentSong]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback((song: PlayableSong) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentSong?.previewUrl === song.previewUrl && !audio.paused) {
      audio.pause();
    } else {
      play(song);
    }
  }, [currentSong, play]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentSong(null);
    setIsPlaying(false);
    setProgress(0);
  }, []);

  return (
    <AudioCtx.Provider value={{ currentSong, isPlaying, progress, duration, play, pause, toggle, stop }}>
      {children}
    </AudioCtx.Provider>
  );
}
