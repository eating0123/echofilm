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
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-white/80 backdrop-blur-md flex justify-between items-center px-5 shadow-sm border-b border-slate-100">
        <button
          onClick={() => onNavigate('map')}
          className="text-slate-800 hover:opacity-85 transition-opacity active:scale-95 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80"
          aria-label="返回"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-display text-[16px] font-extrabold text-slate-900 tracking-tight">
          地点详情 (厦门 · 鼓浪屿)
        </h1>
        <button
          onClick={() => alert('🔗 明信片分享链接已生成！可以发送给时空旅友。')}
          className="text-slate-800 hover:opacity-85 transition-opacity active:scale-95 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80"
          aria-label="分享"
        >
          <Share2 size={18} />
        </button>
      </header>

      {/* Main scroll body */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-16 pb-48">
        {/* Banner with gradient sunset */}
        <section className="relative w-full h-[180px] overflow-hidden bg-gradient-to-b from-orange-400 to-indigo-600 flex flex-col justify-end p-5">
          {/* Natural texture paper map overlay code */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-white text-[19px] font-extrabold drop-shadow-md tracking-tight mb-2">
              厦门 · 鼓浪屿 · 日光岩
            </h2>
            <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30">
              <Sun size={14} className="text-amber-300 animate-spin-slow" />
              <span className="text-[10px] font-bold text-white tracking-wider">
                2026.04.03 · 晴 26°C
              </span>
            </div>
          </div>
        </section>

        {/* Stats Grid banner */}
        <section className="px-5 -mt-6 relative z-10 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md border border-slate-100 text-center">
            <Clock size={20} className="text-indigo-600 mb-1" />
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              停留时长
            </span>
            <p className="font-display font-black text-slate-800 text-[12.5px]">
              3时42分
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md border border-slate-100 text-center">
            <Music size={20} className="text-indigo-600 mb-1" />
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              播放歌曲
            </span>
            <p className="font-display font-black text-slate-800 text-[12.5px]">
              8首记忆
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-md border border-slate-100 text-center">
            <Thermometer size={20} className="text-indigo-600 mb-1" />
            <span className="text-[9px] font-bold text-slate-400 block mb-0.5">
              当时温度
            </span>
            <p className="font-display font-black text-slate-800 text-[12.5px]">
              晴 26°C
            </p>
          </div>
        </section>

        {/* AI Story Section (Proust trigger phrase) */}
        <section className="mt-6 px-5">
          <div className="bg-gradient-to-tr from-indigo-50/70 to-violet-50/70 border border-indigo-100 rounded-3xl p-5 relative overflow-hidden shadow-sm">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-1.5 mb-2.5">
              <Sparkles size={14} className="text-indigo-600" />
              <h2 className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase font-mono">
                那天的物理回溯
              </h2>
            </div>
            
            <p className="font-serif text-[14.5px] italic text-slate-700 leading-relaxed">
              “四月的鼓浪屿，海盐味和刚咬下的玛德琳交叠。阳光穿透老榕树叶的缝隙斑驳洒落在古老的青石板路……你坐在日光岩的顶峰，迎着26度不燥不热的海风，耳挂耳机里循环播放着《晴天》——那一天的你，也许只是纯粹喜欢在没有镜头的日光下发呆。”
            </p>
          </div>
        </section>

        {/* Songs List */}
        <section className="mt-6 px-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-extrabold text-[14px] text-slate-800">
              在这里听过的回忆
            </h3>
            <span className="text-xs text-indigo-600 font-bold">按热度降序</span>
          </div>

          <div className="space-y-3">
            {detailSongs.map((song) => {
              const isSongActive = playingSong === song.title;
              return (
                <div
                  key={song.title}
                  onClick={() => handleSongPlay(song)}
                  className="flex items-center h-16 bg-white border border-slate-150 rounded-xl p-2 pr-4 hover:bg-slate-50 transition-all cursor-pointer active:scale-[0.99] shadow-sm"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-200">
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
                    <p className="text-[10px] text-slate-400 font-bold font-sans">
                      {song.artist}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-indigo-600 font-bold text-xs bg-indigo-50/50 px-2 py-1 rounded-full">
                    <Music size={11} />
                    <span>x{song.repeats}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Persistent Bottom Action panel */}
      <div className="absolute bottom-22 left-5 right-5 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 z-40 flex gap-2">
        <button
          onClick={handlePlayRecap}
          className="flex-1 h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/10"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isPlaying ? '暂停广播' : '播放广播'}</span>
        </button>

        <button
          onClick={() => onNavigate('postcard')}
          className="flex-1 h-11 border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5"
        >
          <Mail size={14} />
          <span>生成明信片</span>
        </button>
      </div>
    </div>
  );
}
