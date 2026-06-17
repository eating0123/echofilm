import React from 'react';
import { useAudioPlayer } from '../AudioContext';
import { Pause, Play, X, Music } from 'lucide-react';

export default function MiniPlayer() {
  const { currentSong, isPlaying, progress, duration, pause, play, stop } = useAudioPlayer();

  if (!currentSong) return null;

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="absolute bottom-[100px] left-3 right-3 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 p-2.5 flex items-center gap-2.5">
      {/* Cover */}
      <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-200 shrink-0 shadow-sm relative">
        {currentSong.coverUrl ? (
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className={`w-full h-full object-cover ${isPlaying ? 'animate-spin-slow' : ''}`}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
            <Music size={16} className="text-indigo-500" />
          </div>
        )}
      </div>

      {/* Song info + progress */}
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-bold text-slate-800 truncate">{currentSong.title}</p>
        <p className="text-[10px] text-slate-400 truncate">{currentSong.artist}</p>
        {/* Progress bar */}
        <div className="mt-1 h-[3px] bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => isPlaying ? pause() : play(currentSong)}
        className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center active:scale-90 transition-transform shadow-sm"
      >
        {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
      </button>

      <button
        onClick={stop}
        className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center active:scale-90 transition-transform"
      >
        <X size={12} />
      </button>
    </div>
  );
}
