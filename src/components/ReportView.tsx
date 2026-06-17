import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronDown, 
  Store, 
  MapPin, 
  Compass, 
  BookOpen, 
  Mail, 
  User, 
  Sparkles, 
  ChevronUp, 
  Star 
} from 'lucide-react';
import { reportSlides } from '../data';
import { ActivePage, ReportSlide } from '../types';

interface ReportViewProps {
  onNavigate: (page: ActivePage) => void;
}

export default function ReportView({ onNavigate }: ReportViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const slides = scrollContainerRef.current.querySelectorAll('.snap-section');
      if (slides[index]) {
        slides[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const height = container.offsetHeight;
    if (height > 0) {
      const index = Math.round(container.scrollTop / height);
      if (index !== activeSlide && index < reportSlides.length && index >= 0) {
        setActiveSlide(index);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 relative overflow-hidden text-white font-sans">
      
      {/* Starry Ambient Aura Glowing Orbs background across slides */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Top navbar */}
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-black/40 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('map')}
            className="text-white hover:opacity-80 transition-opacity w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="font-display font-black text-white text-[14.5px] tracking-tight">
            我的 2026 年度报告
          </span>
        </div>
        <div className="text-[10px] bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 px-2 py-1 rounded-md font-bold">听见时间</div>
      </header>

      {/* Snap Scrolling Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 snap-container snap-y snap-mandatory no-scrollbar relative z-10 overflow-y-auto w-full h-full"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {reportSlides.map((slide, index) => {
          const isCurrent = activeSlide === index;

          return (
            <div
              key={slide.id}
              className="snap-section w-full h-full flex flex-col justify-center px-6 pt-20 pb-28 relative shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Star Prelude Slide */}
              {slide.id === 1 && (
                <div className="max-w-xs mx-auto text-center space-y-4 flex-1 flex flex-col justify-center items-center">
                  <span className="text-[10px] font-bold text-indigo-400 tracking-[0.25em] font-mono block">
                    2026 ANNUAL SUMMARY REPORT
                  </span>
                  
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-extrabold text-[21px] tracking-tight text-white leading-snug drop-shadow-md"
                  >
                    小王，247次的触地温存里，耳朵替你走过了许多路
                  </motion.h2>

                  <div className="w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />

                  <p className="font-serif italic text-slate-300 text-sm leading-relaxed">
                    “ 每一个细微的琴音音符，都是一段归宿。”
                  </p>

                  <div className="pt-4 flex flex-col items-center opacity-45">
                    <ChevronDown size={14} className="text-indigo-400 animate-bounce" />
                  </div>
                </div>
              )}

              {/* City footprints slide */}
              {slide.id === 2 && (
                <div className="max-w-md mx-auto w-full space-y-3.5 flex-1 flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-md">
                    <span className="text-[10px] font-bold text-teal-400 font-mono tracking-widest uppercase block mb-1">
                      时空足迹 (Cities Traversed)
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-display font-black text-3xl text-teal-300 leading-none">
                        12
                      </span>
                      <span className="text-xs font-semibold text-slate-300">个城市坐标</span>
                    </div>
                  </div>

                  {/* Panoramic city photo and description */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-4 space-y-3 shadow-md relative overflow-hidden">
                    <div className="h-28 rounded-xl overflow-hidden relative">
                      <img
                        alt="城市街景"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        src={slide.imageUrl}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[9px] font-bold tracking-widest text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded-full uppercase">
                        Metropolis Soundwaves
                      </span>
                    </div>
                    
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      这一年, 你的耳朵走过了深圳、厦门、杭州、北京、成都、大理、重庆、丽江、上海、长沙、北海道、首尔等群生坐标。你的脚步没有停下，耳机中的波形也是。
                    </p>
                  </div>
                </div>
              )}

              {/* Farthest Otaru memory slide */}
              {slide.id === 3 && (
                <div className="max-w-md mx-auto w-full space-y-3 flex-1 flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-4 shadow-lg flex flex-col items-center text-center">
                    <span className="text-[9.5px] font-bold text-blue-400 font-mono tracking-wider uppercase block mb-1.5">
                      Farthest Listening (最远的回声)
                    </span>
                    
                    <div className="relative my-2.5 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border border-dashed border-sky-400/50 animate-[spin_15s_linear_infinite]" />
                      <div className="absolute inset-2 rounded-full overflow-hidden shadow-md bg-slate-800">
                        <img
                          alt="小樽桥运河"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                          src={slide.imageUrl}
                        />
                      </div>
                    </div>

                    <h4 className="font-display font-black text-xl text-sky-300 tracking-tighter mt-1 leading-none">
                      4,218 公里
                    </h4>
                    <p className="text-xs text-sky-100 font-semibold mt-0.5">
                      北海道 · 小樽 
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed max-w-[245px]">
                      在零下4度的雪夜运河边, 伴着《夜に駆ける》, 你在白芒的冰块夜景里完成了89次声波回卷。
                    </p>
                  </div>
                </div>
              )}

              {/* Convenience store slide */}
              {slide.id === 4 && (
                <div className="max-w-md mx-auto w-full space-y-3.5 flex-1 flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-4.5 shadow-lg relative overflow-hidden flex flex-col">
                    <div className="flex items-start gap-3 mb-3 shrink-0">
                      <div className="w-9 h-9 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/35">
                        <Store size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-400 font-mono tracking-wider block">
                          微尘中的浪漫常驻地
                        </span>
                        <h4 className="font-display font-extrabold text-[13.5px] text-slate-100 mt-0.5">
                          公司楼下的全家便利店
                        </h4>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center mb-2.5 shrink-0">
                      <span className="font-display font-black text-3xl text-amber-300 leading-none">
                        187<span className="text-xs font-semibold ml-0.5 text-slate-300">次唤起</span>
                      </span>
                      <p className="text-[8.5px] text-slate-400 font-bold uppercase tracking-widest font-mono mt-1">
                        Utopia in Shelves
                      </p>
                    </div>

                    <p className="font-serif italic text-slate-300 text-[12px] leading-relaxed text-center">
                      “在冰柜拐角的货架旁，挑一杯冷萃咖啡，等待结账刷卡。在这个长达187分钟的静止区间里，其实全家的店员，可能都已经听得见你的歌单了。”
                    </p>
                  </div>
                </div>
              )}

              {/* Emotion polarity slide */}
              {slide.id === 5 && (
                <div className="max-w-md mx-auto w-full space-y-3.5 flex-1 flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-4 space-y-4">
                    <span className="text-[9.5px] font-bold text-rose-400 font-mono tracking-widest block uppercase text-center">
                      Emotional 極座标 (Polar Coordinate)
                    </span>

                    {/* Progress bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-[11px] font-semibold text-slate-200">启航出游时：高昂活力旋律</span>
                          <span className="font-display font-bold text-base text-amber-300">78%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full animate-pulse" style={{ width: '78%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-[11px] font-semibold text-slate-200">深夜倦航时：和雅轻慢琴乐</span>
                          <span className="font-display font-bold text-base text-sky-400">64%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-sky-400 rounded-full animate-pulse" style={{ width: '64%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-[11px] leading-relaxed text-center px-4 font-sans">
                    出门慢行时，你喜欢让78%高昂快节奏打气；深夜倦航时，由64%静淌温舒的琴曲托护你平安收港。
                  </p>
                </div>
              )}

              {/* Ending block slides */}
              {slide.id === 6 && (
                <div className="max-w-xs mx-auto text-center space-y-4.5 flex-1 flex flex-col justify-center items-center">
                  <div className="space-y-1">
                    <h2 className="font-display font-extrabold text-[17px] tracking-tight leading-snug">
                      EchoFilm, <br />
                      替你记住每一段路的温度
                    </h2>
                    <p className="text-[9.5px] tracking-widest uppercase font-mono text-indigo-300 font-bold">
                      2027年 · 继续出发，继续聆听
                    </p>
                  </div>

                  {/* Spinning Vinyl illustration */}
                  <div className="relative pt-0.5 pointer-events-none">
                    <img
                      alt="黑胶唱机"
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full border border-white/20 shadow-xl animate-[spin_12s_linear_infinite]"
                      src={slide.imageUrl}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <button
                      onClick={() => alert('🎨 已成功收集所有的足迹及旋律！年度海报海量音画要素合成成功！已存至相册中。')}
                      className="w-full h-10 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg active:scale-95 transition-all outline-none"
                    >
                      生成我的年度海报
                    </button>
                    <button
                      onClick={() => handleDotClick(0)}
                      className="w-full h-10 border border-white/15 hover:bg-white/5 text-white font-bold text-xs rounded-xl active:scale-95 transition-all outline-none"
                    >
                      重新回顾
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom pagination stamp footer label (Only shown on non-end slides to avoid button collision) */}
              {slide.id !== 6 && slide.footerTag && (
                <div className="absolute bottom-21 left-0 right-0 text-center pointer-events-none">
                  <span className="text-[9px] font-bold tracking-[0.2em] font-mono text-slate-500 uppercase">
                    {slide.footerTag}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right side navigation page dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-20 z-40">
        <div className="flex flex-col gap-2.5">
          {reportSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 outline-none ${activeSlide === index ? 'bg-indigo-500 h-5' : 'bg-slate-700/60'}`}
              title={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
