import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Compass, 
  BookOpen, 
  Mail, 
  User, 
  Mic, 
  Square, 
  Train, 
  Ship, 
  CloudRain, 
  Calendar, 
  Sparkles, 
  Music, 
  Play, 
  RefreshCw 
} from 'lucide-react';
import { timelineNodes } from '../data';
import { ActivePage, TimelineNode } from '../types';

interface TimelineViewProps {
  onNavigate: (page: ActivePage) => void;
}

export default function TimelineView({ onNavigate }: TimelineViewProps) {
  const [activeSong, setActiveSong] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordTimer, setRecordTimer] = useState<any>(null);

  const handleMicClick = () => {
    if (isRecording) {
      clearInterval(recordTimer);
      setIsRecording(false);
      alert('🎙️ 声音印记录制成功！已将“厦门市曾厝垵”这一秒的声音样本与你耳机中的《后来的我们》进行声纹融合绑定。');
    } else {
      setIsRecording(true);
      setRecordingSeconds(0);
      const interval = setInterval(() => {
        setRecordingSeconds(s => s + 1);
      }, 1000);
      setRecordTimer(interval);
    }
  };

  const handleSongClick = (songName: string) => {
    if (activeSong === songName) {
      setActiveSong(null);
    } else {
      setActiveSong(songName);
      const audioTip = document.createElement('div');
      audioTip.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 py-2.5 px-5 bg-indigo-950 text-white rounded-full text-xs shadow-xl flex items-center gap-2 border border-indigo-700/50 max-w-xs text-center";
      audioTip.innerHTML = `<span>🔊 正在时空调频唤醒 《${songName}》...</span>`;
      document.body.appendChild(audioTip);
      setTimeout(() => audioTip.remove(), 2500);
    }
  };

  const renderNodeIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'train':
        return <Train size={18} style={{ color }} />;
      case 'sailing':
        return <Ship size={18} style={{ color }} />;
      case 'rainy':
        return <CloudRain size={18} style={{ color }} />;
      default:
        return <Calendar size={18} style={{ color }} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Voice Recorder Overlay Modal */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-indigo-950/95 z-50 flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="relative mb-8 flex items-center justify-center w-28 h-28 bg-indigo-500/20 rounded-full border border-indigo-500/40">
              <Mic size={42} className="text-white animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-indigo-500 scale-125 opacity-10 animate-ping" />
            </div>

            <h3 className="font-display font-black text-[18px] mb-2 tracking-wide text-center">
              正在采集现场环境声纹...
            </h3>
            <p className="text-slate-300 text-xs text-center max-w-[240px] leading-relaxed mb-6">
              EchoFilm 将采集这一刻的微弱风声、海岛浪鸣及风声，与你此时此刻播放的音乐融为一体……
            </p>

            <div className="font-mono text-2xl font-bold bg-white/10 px-4 py-1 rounded-full mb-8">
              00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
            </div>

            <button
              onClick={handleMicClick}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-600/30 active:scale-95 transition-all text-white flex items-center gap-2"
            >
              <Square size={12} className="fill-current text-white" />
              停止并上传绑定
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary header navbar */}
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-white/85 backdrop-blur-md border-b border-slate-100 flex justify-between items-center px-4 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('map')}
            className="text-slate-800 hover:opacity-80 transition-opacity w-8 h-8 flex items-center justify-center rounded-full bg-slate-100/80"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="font-display font-black text-slate-800 text-[15px] tracking-tight">
            厦门三日 · 旅程日记
          </span>
        </div>
        <div className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-bold">已同步</div>
      </header>

      {/* Main scrolling wrapper */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-16 pb-44">
        {/* Parallax shoreline sunset background */}
        <section className="relative h-[200px] w-full flex flex-col justify-end p-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-indigo-900 to-amber-700 z-0">
            <img
              alt="鼓浪屿海边夕阳"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-50 select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtibjsROeUnP4NGjTfHsyOVKYj9967v18Wg1hthylt73d4JP7BNDEXpC-UxADMokhd3X0ySriSEz6fCH8ESyHZU3pdaTQqSz2aU0INnbE0m9j0NxCtLkgxzBqW19zUj9XTZqpSojcRwPDtaoCRHgQeX18lZghB2BDwAOHJ4F_1bPCZG-KcHomRuVJRsBoTF35dfgu9gwUJiV9EtXoKMIQwCJDZldTkNe5bCQ46NwKLODBduswol_GuaR1iBVSYdy8zgy9PNNVCkhR"
            />
          </div>
          
          <div className="relative z-10 text-white space-y-1">
            <h2 className="font-display font-black text-[22px] tracking-tight leading-none text-white drop-shadow-md">
              厦门三日 · 声音记忆
            </h2>
            <p className="text-[9px] font-bold text-slate-200 font-mono tracking-widest uppercase">
              2026.04.02 - 04.04 · 3天 · 12个坐标 · 18首曲
            </p>
          </div>
        </section>

        {/* Narrative core block quotes */}
        <section className="px-5 mt-4 mb-5">
          <div className="bg-white rounded-2xl p-4 border border-slate-150 border-l-4 border-l-indigo-600 shadow-sm">
            <p className="font-serif italic text-slate-700 text-[13.5px] leading-relaxed">
              “有些事情你会拍照留念，但那些你忘记拿起手机的温柔瞬间，声音已替你悄悄记住。”
            </p>
          </div>
        </section>

        {/* Vertical Timeline logs */}
        <section className="px-5 relative">
          {/* Continuous left border line */}
          <div className="absolute left-[26px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-amber-400 to-slate-200 rounded-full opacity-40" />

          {timelineNodes.map((node) => (
            <div key={node.day} className="relative pl-9 mb-7">
              {/* Timeline active sphere dot */}
              <div
                className="absolute left-[19px] top-1.5 w-[14px] h-[14px] rounded-full ring-4 ring-white shadow-md z-10"
                style={{ backgroundColor: node.colorHex }}
              />

              <div
                className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm flex flex-col gap-3"
              >
                {/* Header segment */}
                <div className="flex justify-between items-start">
                  <div>
                    <span
                      className="text-[9.5px] font-bold uppercase tracking-wider font-mono block mb-0.5"
                      style={{ color: node.colorHex }}
                    >
                      第{node.day}天 · {node.stageName}
                    </span>
                    <h3 className="font-display font-extrabold text-[14px] text-slate-800 leading-none">
                      {node.title}
                    </h3>
                  </div>
                  <div>
                    {renderNodeIcon(node.icon, node.colorHex)}
                  </div>
                </div>

                {/* Sub info progress panel inside Day 2 */}
                {node.infoLabel && (
                  <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-100 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-amber-800 text-[10px] font-bold">
                      <span>累计听歌 3小时42分钟</span>
                      <span className="font-mono">进度 78%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden animate-pulse">
                      <div className="h-full bg-amber-400 rounded-full w-[78%]" />
                    </div>
                  </div>
                )}

                {/* Description texts */}
                <p className="text-slate-600 text-[12px] leading-relaxed">
                  {node.aiDescription}
                </p>

                {/* Songs caps sliders list */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {node.songs.map((song) => {
                    const isSongActive = activeSong === song;
                    return (
                      <button
                        key={song}
                        onClick={() => handleSongClick(song)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10.5px] font-semibold transition-all outline-none ${isSongActive ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-102' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-200'}`}
                      >
                        {isSongActive ? (
                          <RefreshCw size={11} className="animate-spin text-white" />
                        ) : (
                          <Music size={11} className="text-indigo-600" />
                        )}
                        <span>{song}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Global travel sync buttons actions */}
        <section className="px-5 mt-4 space-y-2.5">
          <button
            onClick={() => alert('🎵 正在为你缓存并生成“厦门三日·18首音乐回忆歌单”...')}
            className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <Play size={13} />
            <span>开启旅程广播</span>
          </button>
          
          <button
            onClick={() => onNavigate('postcard')}
            className="w-full h-11 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-xs active:scale-95 transition-all bg-white flex items-center justify-center gap-1.5"
          >
            <Mail size={13} />
            <span>定制声音明信片</span>
          </button>
        </section>
      </div>

      {/* Floating Audio Micro Trigger button - Styled beautifully and cleanly */}
      <div className="absolute bottom-24 right-5 z-40">
        <button
          onClick={handleMicClick}
          className="relative w-12 h-12 rounded-full bg-indigo-600 text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border-2 border-white"
          title="录制现场环境微弱风声"
        >
          <Mic size={20} />
        </button>
      </div>
    </div>
  );
}
