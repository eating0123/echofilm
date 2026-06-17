import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Wifi, 
  Battery, 
  Clock, 
  Sparkles, 
  Sun, 
  MapPin, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Sliders, 
  SlidersHorizontal,
  Mail,
  Lock,
  Compass
} from 'lucide-react';
import { ActivePage } from '../types';
import { useAudioPlayer } from '../AudioContext';
import { songPreviewMap } from '../data';

interface PushViewProps {
  onNavigate: (page: ActivePage) => void;
}

export default function PushView({ onNavigate }: PushViewProps) {
  const [phase, setPhase] = useState<'lock' | 'app'>('lock');
  const { currentSong, isPlaying, toggle } = useAudioPlayer();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const xihuSong = songPreviewMap["西湖"];
  const handlePlayXihu = () => {
    if (xihuSong) {
      toggle({ title: "西湖", artist: xihuSong.artist, previewUrl: xihuSong.previewUrl, coverUrl: xihuSong.coverUrl });
    }
  };

  useEffect(() => {
    // Automatically trigger notification reveal animation
    const timer = setTimeout(() => {
      setNotificationVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleNotificationClick = () => {
    setPhase('app');
    // 点击通知后自动播放《西湖》
    if (xihuSong) {
      setTimeout(() => {
        toggle({ title: "西湖", artist: xihuSong.artist, previewUrl: xihuSong.previewUrl, coverUrl: xihuSong.coverUrl });
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 relative overflow-hidden font-sans">
      
      {/* Floating Home Escape Capsule */}
      <div className="absolute top-4 left-4 z-40">
        <button
          onClick={() => onNavigate('map')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[11px] font-black text-slate-900 shadow-md border border-slate-100 active:scale-95 transition-all"
          title="返回地图主屏"
        >
          <ArrowLeft size={12} className="text-indigo-600" />
          <span>返回地图</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {phase === 'lock' ? (
          <motion.div
            key="lockscreen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col justify-between py-14 px-6 select-none"
          >
            {/* Dark twilight landscape background */}
            <div className="absolute inset-0 z-0">
              <img
                alt="锁屏背景"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[82%] select-none pointer-events-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcuj14a-eagORSOhA0xH6s8iW01me5jUCQ8DJX-eCr00ALfLxEiZrwk0U0ZbUQfNUoa8L9pmDYdmyxMkbj-uJHuV8yKTAsnAspqocux4w50CbSCW8SqtD4qVP5JAhcVWooeTpAuCucyYzp1HEoZhZLcIHJo_v2kEIV1W0_d09zHYt9qZv3sL4DOm9JrTMUa57h6j6DwxU8FpoIkbdO4tPoqKskR2naxx12NAZPmh5F-lo00UaoYljSGA"
              />
              <div className="absolute inset-0 bg-indigo-950/20 mix-blend-color" />
            </div>

            {/* iOS Status bar metrics simulated */}
            <div className="z-10 w-full flex justify-end gap-1.5 text-white/90 font-mono text-xs px-2 mt-2">
              <Wifi size={12} />
              <Battery size={12} />
            </div>

            {/* Time / Date */}
            <div className="z-10 text-center text-white/95 mt-4 space-y-1">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-[64px] font-extrabold tracking-tight leading-none text-white drop-shadow-md"
              >
                19:41
              </motion.h2>
              <p className="text-[11px] font-black tracking-widest uppercase text-slate-100">
                9月24日 星期二
              </p>
            </div>

            {/* Elastic Sliding Push Notification */}
            <div className="z-10 w-full flex justify-center mb-16">
              <AnimatePresence>
                {notificationVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                    onClick={handleNotificationClick}
                    className="w-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-2xl rounded-[28px] p-4 flex gap-3 h-28 cursor-pointer animate-[pulse_3s_infinite]"
                  >
                    {/* App icon avatar */}
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-indigo-600/20">
                      <Sliders size={20} />
                    </div>

                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[9.5px] font-bold text-indigo-600 uppercase tracking-widest font-mono">
                          EchoFilm · 现在
                        </span>
                      </div>
                      <p className="text-slate-900 font-extrabold text-[12.5px] mb-0.5 leading-tight">
                        重回旧地，唤醒那一秒！
                      </p>
                      <p className="text-slate-600 text-[10.5px] leading-snug break-words">
                        上次在西湖苏堤，你慢跑了47公里，《西湖》伴你度过了23个金辉傍晚 🌅
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom info banner */}
            <div className="z-10 flex flex-col items-center">
              <Lock size={12} className="text-white/60 animate-bounce" />
              <p className="text-[9px] text-white/50 tracking-widest uppercase font-mono mt-1 mb-2">点击通知解锁声脉共鸣</p>
              <div className="w-24 h-1 bg-white/35 rounded-full" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="appscreen"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-slate-50 flex flex-col justify-between"
          >
            {/* Header */}
            <header className="h-16 shrink-0 bg-white border-b border-slate-150 flex justify-between items-center px-4 relative z-30 shadow-sm">
              <div className="flex items-center gap-2">
                <Sliders size={18} className="text-indigo-600" />
                <span className="font-display font-black text-slate-800 text-[14px] tracking-tight">西湖 · 普鲁斯特效应引擎</span>
              </div>
              <div className="flex gap-1.5">
                <button 
                  onClick={() => setPhase('lock')}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:scale-95 transition-all"
                  title="回假想锁屏"
                >
                  <Lock size={16} />
                </button>
              </div>
            </header>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto no-scrollbar pt-4 pb-32 px-5 space-y-5">
              {/* Westlake Cover */}
              <section className="relative h-44 rounded-3xl overflow-hidden shadow-lg border border-slate-205">
                <img
                  alt="西湖落日"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu_s3ZZjfMAQZ72riA-aAx7fLD_sw6Vqsfd3YGCbeRCwQLhIjum0knQ9JOKCdbjc9ntz659IyjGBqJT96YoCijAyc832DFhBbA2Nbn2G56LpORuNu0Pc6L3eEg5pJBatbinx0cjWftr0oW3ZTW-NaDVlVLRi4hAGL4cRZ9c0Ks94lh0qZ8iB4Qyw0neAaa68PMPmB-oYUrYtLQUFVTCNqk95etA37icpkx-QR7sLeZA0wccvWGC01E0A"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-display font-black text-[17px] text-white tracking-tight">
                    欢迎重返杭州 · 杭州西湖
                  </h3>
                  <p className="text-white/80 text-[10px] uppercase tracking-widest font-mono">
                    你上次在此被声音镌记：2024.08 暮暑
                  </p>
                </div>
              </section>

              {/* Bento statistical columns */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-slate-150 rounded-2xl p-4 flex flex-col justify-between h-28 shadow-sm">
                  <Sparkles size={20} className="text-indigo-600" />
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-lg leading-none">
                      47<span className="text-xs font-semibold ml-0.5">km</span>
                    </h4>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">当时周跑量</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-150 rounded-2xl p-4 flex flex-col justify-between h-28 shadow-sm">
                  <Sun size={20} className="text-amber-500 animate-spin-slow" />
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-lg leading-none">
                      23<span className="text-xs font-semibold ml-0.5">个</span>
                    </h4>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">落日共赏时刻</p>
                  </div>
                </div>
              </div>

              {/* Companion Album details card */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-3xl p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow bg-slate-200 shrink-0 select-none">
                    <img
                      alt="专辑封面"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDboT2YBrjyRg4oa5XzT1PikLWMjQyhCaFy8v-zjYYAtp2HrvqQQRiJieCIsST1rhXshSgeQV0jMCOJy7Qn8CpIXZZqf7_cxlT8do3b8Q_6p3OR1ZYzpc5hDK6q8WcZ24exJsyur_sjrFvEHnsUuhRldBZPGXHmgOMMpNWsYP9tWT0d7JWmP-ZB3AP02sAtD_o1ghm52sOa4-uvgUhBZY1MplNlFteU3ebE4DMlWn5_SMoG6qZBFJo_9Q"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[8px] font-bold text-indigo-200 uppercase tracking-widest">
                      陪你最久的时空曲
                    </span>
                    <h4 className="font-display font-black text-[14px] truncate text-white">
                      西湖
                    </h4>
                    <p className="text-[10px] text-slate-200 truncate">
                      痛仰乐队 · 摇滚民谣
                    </p>
                  </div>
                </div>

                <button 
                  onClick={handlePlayXihu}
                  className="w-9 h-9 rounded-full bg-white text-indigo-600 flex items-center justify-center active:scale-90 transition-all shadow shrink-0 ml-2"
                >
                  {(isPlaying && currentSong?.title === "西湖") ? <Pause size={15} /> : <Play size={15} />}
                </button>
              </div>

              {/* Quotes story section */}
              <div className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm">
                <p className="font-serif italic text-slate-700 text-[13px] leading-relaxed mb-3">
                  "西湖落日熔金，苏堤上跑步的人渐渐少了。耳机里痛仰唱'再也没有留恋的斜阳'——你放慢脚步，觉得自己真的可以就这样沉进湖底的晚霞里。"
                </p>
                <div className="flex items-center gap-1.5 text-indigo-600">
                  <MapPin size={11} />
                  <span className="text-[10px] font-bold font-mono">断桥残雪 · 西湖 · 杭州</span>
                </div>
              </div>
            </div>

            {/* Immersive Bottom Music Player bar */}
            <footer className="absolute bottom-6 left-5 right-5 z-40 bg-white/95 backdrop-blur-md p-3 shadow-xl rounded-2xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 shrink-0 flex items-center justify-center overflow-hidden border border-indigo-100">
                <div className="flex items-end gap-[2px] h-5">
                  <div 
                    className={`w-[2.5px] bg-indigo-600 rounded-full transition-all ${isPlaying ? 'animate-[pulse_1.2s_infinite]' : 'h-1'}`} 
                    style={{ height: '100%' }} 
                  />
                  <div 
                    className={`w-[2.5px] bg-indigo-600 rounded-full transition-all ${isPlaying ? 'animate-[pulse_0.9s_infinite]' : 'h-15'}`} 
                    style={{ height: '60%' }} 
                  />
                  <div 
                    className={`w-[2.5px] bg-indigo-600 rounded-full transition-all ${isPlaying ? 'animate-[pulse_1.5s_infinite]' : 'h-1'}`} 
                    style={{ height: '80%' }} 
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-[12px] font-bold text-slate-805 truncate">
                  西湖
                </h4>
                <p className="text-[9.5px] text-slate-400 font-bold font-mono uppercase">
                  痛仰乐队 - {isPlaying ? '正在深浸回放' : '已暂停'}
                </p>
              </div>

              {/* Media controls */}
              <div className="flex items-center gap-2 text-indigo-600 shrink-0">
                <button className="text-slate-400 p-1 active:scale-95">
                  <SkipBack size={14} />
                </button>
                <button 
                  onClick={handlePlayXihu}
                  className="p-1 active:scale-95 text-indigo-600"
                >
                  {(isPlaying && currentSong?.title === "西湖") ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button className="text-slate-400 p-1 active:scale-95">
                  <SkipForward size={14} />
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
