import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Sun, 
  Clock, 
  Music, 
  Thermometer, 
  Sparkles, 
  Sliders, 
  ChevronRight, 
  Play, 
  Pause, 
  Mail, 
  Compass, 
  BookOpen, 
  User 
} from 'lucide-react';
import { detailSongs } from '../data';
import { ActivePage, DetailSong } from '../types';

interface DetailsViewProps {
  onNavigate: (page: ActivePage) => void;
  onPlayMemory: (songs: DetailSong[]) => void;
}

export default function DetailsView({ onNavigate, onPlayMemory }: DetailsViewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSong, setPlayingSong] = useState<string | null>(null);

  const handlePlayRecap = () => {
    setIsPlaying(!isPlaying);
    onPlayMemory(detailSongs);
  };

  const handleSongPlay = (song: DetailSong) => {
    if (playingSong === song.title) {
      setPlayingSong(null);
    } else {
      setPlayingSong(song.title);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Top Header */}
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-white/80 backdrop-blur-md flex justify-between items-center px-5 border-b border-slate-100">
        <button
          onClick={() => onNavigate('map')}
          className="text-slate-800 hover:opacity-85 transition-opacity active:scale-95 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80"
          aria-label="返回"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="font-display text-[15px] font-extrabold text-slate-900 tracking-tight">
          地点详情
        </h1>
        <button
          onClick={() => alert('🔗 明信片分享链接已生成！可以发送给时空旅友。')}
          className="text-slate-800 hover:opacity-85 transition-opacity active:scale-95 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80"
          aria-label="分享"
        >
          <Share2 size={16} />
        </button>
      </header>

      {/* Main scroll body */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-16 pb-36">
        {/* Banner with gradient sunset */}
        <section className="relative w-full h-[180px] overflow-hidden flex flex-col justify-end p-5">
          <img 
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=600" 
            alt="Xiamen sunset beach" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[10px] font-bold text-slate-200 tracking-widest uppercase mb-1 drop-shadow-sm">厦门 · 鼓浪屿 · 日光岩</p>
            <div className="bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full flex items-center gap-1.5 border border-white/30 shadow-sm">
              <Sun size={12} className="text-amber-300 animate-spin-slow" />
              <span className="text-[10px] font-bold text-white tracking-wider">
                2026.04.03 · 晴 26°C
              </span>
            </div>
          </div>
        </section>

        {/* Stats Grid banner */}
        <section className="px-5 -mt-5 relative z-10 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md shadow-indigo-900/5 border border-slate-100/80 text-center">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
              <Clock size={16} />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              停留时长
            </span>
            <p className="font-display font-black text-slate-850 text-[12px]">
              3时42分
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md shadow-indigo-900/5 border border-slate-100/80 text-center">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5">
              <Music size={16} />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              播放歌曲
            </span>
            <p className="font-display font-black text-slate-850 text-[12px]">
              8 首
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md shadow-indigo-900/5 border border-slate-100/80 text-center">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-1.5">
              <Thermometer size={16} />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              当时天气
            </span>
            <p className="font-display font-black text-slate-850 text-[12px]">
              晴 26°C
            </p>
          </div>
        </section>

        {/* AI Story Section (Proust trigger phrase) */}
        <section className="mt-6 px-5">
          <div className="bg-white border border-slate-100 rounded-3xl p-5 relative overflow-hidden shadow-sm flex flex-col gap-3">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center">
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[10px] flex items-center gap-1.5 font-bold">
                <Sparkles size={11} className="text-indigo-600" />
                那天的故事
              </span>
            </div>
            
            <p className="font-serif text-[13.5px] italic text-slate-600 leading-relaxed">
              “四月的鼓浪屿，阳光穿透榕树叶缝……你坐在日光岩的顶峰，耳边循环播放着《晴天》。”
            </p>
          </div>
        </section>

        {/* Songs List */}
        <section className="mt-6 px-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-extrabold text-[13.5px] text-slate-800">
              在这里听过的歌
            </h3>
            <button className="text-slate-400 hover:text-slate-600 active:scale-95 transition-all">
              <Sliders size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {detailSongs.map((song) => {
              const isSongActive = playingSong === song.title;
              return (
                <div
                  key={song.title}
                  onClick={() => handleSongPlay(song)}
                  className="flex items-center h-16 bg-white border border-slate-100 rounded-2xl p-2 pr-4 hover:bg-slate-50 transition-all cursor-pointer active:scale-[0.99] shadow-sm"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-200 shadow-sm">
                    <img
                      alt={song.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform ${isSongActive ? 'animate-spin-slow' : ''}`}
                      src={song.coverUrl}
                    />
                    {isSongActive && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Pause size={14} className="text-white" />
                      </div>
                    )}
                  </div>

                  <div className="ml-3 flex-1 overflow-hidden">
                    <p className="font-bold text-slate-800 text-[13px] truncate">
                      {song.title}
                    </p>
                    <p className="text-[10px] text-slate-400 font-semibold font-sans">
                      {song.artist}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-indigo-600 font-bold text-[11px] bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    <span className="text-slate-400 font-normal">🔁</span>
                    <span>x{song.repeats}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Persistent Bottom Action panel */}
      <div className="absolute bottom-22 left-5 right-5 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100/80 z-40 flex gap-2">
        <button
          onClick={handlePlayRecap}
          className="flex-1 h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/15"
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          <span>播放这段回忆</span>
        </button>

        <button
          onClick={() => onNavigate('postcard')}
          className="flex-1 h-11 border border-slate-200 text-slate-700 hover:bg-slate-50 bg-white font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5"
        >
          <Mail size={13} />
          <span>生成明信片</span>
        </button>
      </div>
    </div>
  );
}
