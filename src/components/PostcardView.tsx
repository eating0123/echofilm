import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Compass, 
  BookOpen, 
  Mail, 
  User, 
  MapPin, 
  Calendar, 
  Sun, 
  Music, 
  ChevronRight 
} from 'lucide-react';
import { postcardTemplates } from '../data';
import { ActivePage, PostcardTemplate } from '../types';

interface PostcardViewProps {
  onNavigate: (page: ActivePage) => void;
}

const mockSongsOfPostcard = [
  { title: "晴天", artist: "周杰伦" },
  { title: "七里香", artist: "周杰伦" },
  { title: "旅行的意义", artist: "陈绮贞" },
  { title: "平凡之路", artist: "朴树" },
  { title: "Midnight City", artist: "M83" }
];

export default function PostcardView({ onNavigate }: PostcardViewProps) {
  const [activeTemplate, setActiveTemplate] = useState<PostcardTemplate>(postcardTemplates[0]);
  const [typedQuote, setTypedQuote] = useState<string>("那天的阳光很好，就像这首歌一样");
  const [activeSongIndex, setActiveSongIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeSong = mockSongsOfPostcard[activeSongIndex];

  const handleNextSong = () => {
    setActiveSongIndex((prev) => (prev + 1) % mockSongsOfPostcard.length);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 z-50 py-3 px-4 rounded-xl shadow-lg border border-slate-150 bg-white text-slate-800 text-xs font-semibold flex items-center gap-2"
          >
            <CheckCircle size={15} className="text-emerald-500" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-white/85 backdrop-blur-md flex justify-between items-center px-4 shadow-sm border-b border-slate-100">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('map')}
            className="text-slate-800 hover:opacity-85 transition-opacity flex items-center justify-center w-8 h-8 rounded-full bg-slate-100/80"
          >
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-display text-[15px] font-extrabold text-slate-900 tracking-tight">
            声音明信片生成器
          </h1>
        </div>
        <div className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-bold">手绘制作</div>
      </header>

      {/* Main Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-16 pb-44 px-5">
        {/* Postcard Preview Area with 3D shadow style */}
        <section className="h-[360px] flex items-center justify-center relative mt-3 mb-5">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-slate-100/60 rounded-2xl border border-slate-100" />

          {/* Postcard Card Wrapper */}
          <div
            id="postcard"
            className="w-full max-w-[280px] aspect-[3/4] bg-white rounded-2xl shadow-xl p-4.5 transition-all duration-300 relative border border-slate-150"
          >
            {/* Template dynamic image based on selected Template */}
            <div className="w-full h-[45%] rounded-lg overflow-hidden relative mb-3 bg-slate-100 shadow-inner">
              <img
                alt="明信片风景"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
                src={activeTemplate.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Song title bubble & animated sound wave indicators */}
            <div className="flex items-center justify-between mb-3 bg-indigo-50/40 p-2 rounded-xl border border-indigo-150/20">
              <div className="flex flex-col min-w-0 pr-2">
                <span className="text-[7.5px] font-bold text-indigo-500 uppercase tracking-widest font-mono">
                  封存的主题音乐
                </span>
                <h3 className="font-display font-bold text-slate-800 text-[11.5px] truncate">
                  《{activeSong.title}》- {activeSong.artist}
                </h3>
              </div>

              {/* sound wave bars equalizer */}
              <div className="flex items-end gap-[1.5px] h-3 shrink-0">
                <div className="soundwave-bar w-[2px] bg-indigo-600 rounded-full h-2 animate-[pulse_0.8s_infinite]" />
                <div className="soundwave-bar w-[2px] bg-indigo-600 rounded-full h-3 animate-[pulse_0.6s_infinite]" />
                <div className="soundwave-bar w-[2px] bg-indigo-600 rounded-full h-1 animate-[pulse_1.1s_infinite]" />
                <div className="soundwave-bar w-[2px] bg-indigo-600 rounded-full h-2.5 animate-[pulse_0.7s_infinite]" />
              </div>
            </div>

            {/* Simulated progress wire */}
            <div className="w-full h-[3px] bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="w-[30%] h-full bg-indigo-600 rounded-full" />
            </div>

            {/* Handwritten Quote */}
            <div className="mb-4">
              <p className="font-serif text-[13.5px] italic text-slate-600 leading-relaxed font-story-serif break-words line-clamp-3">
                “ {typedQuote || "此时无声，却有弦律。"} ”
              </p>
            </div>

            {/* Dynamic Bottom statistics footer tag */}
            <div className="absolute bottom-5 left-4.5 right-4.5 flex justify-between border-t border-slate-100 pt-3 text-[8px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              <div className="flex items-center gap-0.5">
                <MapPin size={10} className="text-indigo-500" />
                <span>鼓浪屿</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Calendar size={10} className="text-indigo-500" />
                <span>2026.04.03</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Sun size={10} className="text-indigo-500" />
                <span>26°C</span>
              </div>
            </div>

            <span className="absolute bottom-1 right-3 text-[7px] text-slate-300 font-bold tracking-widest uppercase">
              EchoFilm Echo
            </span>
          </div>
        </section>

        {/* Inputs and Controls Segment */}
        <section className="space-y-4">
          
          {/* Template selection list */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
              画风氛围模板
            </label>
            <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
              {postcardTemplates.map((temp) => (
                <button
                  key={temp.id}
                  onClick={() => setActiveTemplate(temp)}
                  className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden relative transition-all duration-300 ${activeTemplate.id === temp.id ? 'ring-2 ring-indigo-600 ring-offset-2 scale-102 shadow-md' : 'opacity-85 hover:opacity-100 scale-98'}`}
                  title={temp.name}
                >
                  <img
                    alt={temp.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none"
                    src={temp.imageUrl}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white tracking-widest">{temp.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Edit Custom Quote Field */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
              定制手写心语
            </label>
            <input
              type="text"
              value={typedQuote}
              onChange={(e) => setTypedQuote(e.target.value.substring(0, 48))}
              maxLength={48}
              className="w-full bg-white border border-slate-200 focus:border-indigo-400 rounded-xl px-4 py-2.5 text-slate-800 text-[13px] transition-all outline-none font-serif italic"
              placeholder="那天阳光很好，就像这首歌一样"
            />
            <span className="text-[9px] text-slate-400 font-semibold flex justify-end mt-1 font-mono">
              {typedQuote.length}/48 字
            </span>
          </div>

          {/* Change Album Song Capsule Trigger */}
          <button
            onClick={handleNextSong}
            className="w-full flex items-center justify-between bg-white border border-slate-200 px-4 py-3 rounded-xl hover:bg-slate-50 active:scale-[0.99] transition-transform"
          >
            <div className="flex items-center gap-2 text-slate-700">
              <Music size={15} className="text-indigo-600" />
              <span className="text-[12.5px] font-semibold">更换唱诵主题曲</span>
              <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-bold">
                {activeSong.title}
              </span>
            </div>
            <ChevronRight size={15} className="text-slate-450" />
          </button>
        </section>

        {/* Operational buttons */}
        <section className="grid grid-cols-2 gap-4 mt-6">
          <button
            onClick={() => triggerToast('💾 明信片已成功生成渲染图，正保存至本地相册！')}
            className="py-2.5 px-4 rounded-xl border border-indigo-600 text-indigo-600 font-bold text-xs active:scale-95 transition-all hover:bg-indigo-50/40"
          >
            保存至相册
          </button>
          
          <button
            onClick={() => triggerToast('🦄 声音包及明信片已发给朋友！')}
            className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs active:scale-95 transition-all shadow-md"
          >
            发出分享
          </button>
        </section>
      </div>
    </div>
  );
}
