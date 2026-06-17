import React, { useState } from 'react';
import { ActivePage } from './types';
import { AudioProvider } from './AudioContext';
import MapView from './components/MapView';
import DetailsView from './components/DetailsView';
import PushView from './components/PushView';
import PostcardView from './components/PostcardView';
import TimelineView from './components/TimelineView';
import ReportView from './components/ReportView';
import MiniPlayer from './components/MiniPlayer';
import { Compass, BookOpen, Mail, User } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('map');
  const [timelineTripCity, setTimelineTripCity] = useState<string | null>(null);

  // Multi-route rendering selector
  const renderPage = () => {
    switch (currentPage) {
      case 'map':
        return (
          <MapView
            onNavigate={setCurrentPage}
            onSelectMemory={(m) => {
              setTimelineTripCity(m.city);
              setCurrentPage('timeline');
            }}
            onAddMemory={() => {
              alert('🎙️ 时空音频寻轨成功！根据此地声波环境特征与经纬度共振，已成功为你绑定当前播放的音乐，封存为一帧新 EchoFilm！');
            }}
          />
        );
      case 'details':
        return (
          <DetailsView
            onNavigate={setCurrentPage}
            onPlayMemory={(songs) => {
              // Show notification on successful simulation trigger
              const recapTip = document.createElement('div');
              recapTip.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 py-3 px-6 bg-indigo-950/95 text-white rounded-2xl text-xs shadow-2xl flex items-center gap-2 border border-indigo-700/50 backdrop-blur-md max-w-sm text-center";
              recapTip.innerHTML = `
                <span class="font-semibold text-[11px] font-sans">🔊 正在调取鼓浪屿 2026.04.03 午后 26°C 历史声纹环境并广播《晴天》琴弦...</span>
              `;
              document.body.appendChild(recapTip);
              setTimeout(() => {
                recapTip.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                setTimeout(() => recapTip.remove(), 500);
              }, 4000);
            }}
          />
        );
      case 'push':
        return <PushView onNavigate={setCurrentPage} />;
      case 'postcard':
        return <PostcardView onNavigate={setCurrentPage} />;
      case 'timeline':
        return <TimelineView onNavigate={setCurrentPage} initialCity={timelineTripCity} />;
      case 'report':
        return <ReportView onNavigate={setCurrentPage} />;
      default:
        return (
          <MapView
            onNavigate={setCurrentPage}
            onSelectMemory={(m) => setCurrentPage('details')}
            onAddMemory={() => {
              alert('🎙️ 时空音频寻轨成功！');
            }}
          />
        );
    }
  };

  return (
    <AudioProvider>
    <div className="w-screen h-screen h-[100dvh] max-h-screen bg-slate-900 flex flex-col items-center justify-center select-none relative overflow-hidden">
      {/* Abstract background ambient glowing decorations to enrich the design */}
      <div className="absolute top-[10%] left-[8%] w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-80 h-80 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Directly render the application centered shell, natively scaling on both modern mobile screens and desktop monitors */}
      <main className="w-full max-w-lg h-screen h-[100dvh] md:h-[800px] md:max-h-[92vh] md:my-4 md:rounded-[36px] bg-white shadow-2xl overflow-hidden flex flex-col relative border border-slate-100/60">
        <div className="flex-1 w-full h-full relative z-10 bg-white overflow-hidden">
          {renderPage()}
        </div>

        {/* Global Mini Player */}
        <MiniPlayer />

        {currentPage !== 'push' && (
          <nav 
            id="app-navigation-bar"
            className={`absolute bottom-5 left-5 right-5 h-16 z-30 rounded-full shadow-lg px-4 flex justify-around items-center border transition-all duration-300 ${
              currentPage === 'report' 
                ? 'bg-black/80 backdrop-blur-md border-white/10 text-white shadow-black/40' 
                : 'bg-white/90 backdrop-blur-md border-slate-100 text-slate-400'
            }`}
          >
            {/* Map tab */}
            <button 
              id="nav-tab-map"
              onClick={() => setCurrentPage('map')}
              className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
                (currentPage === 'map' || currentPage === 'details')
                  ? (currentPage === 'report' ? 'text-indigo-400 scale-105 font-bold' : 'text-indigo-600 scale-105 font-bold')
                  : (currentPage === 'report' ? 'text-slate-500 hover:text-slate-200' : 'text-slate-400 hover:text-indigo-600')
              }`}
            >
              <Compass size={19} className={(currentPage === 'map' || currentPage === 'details') ? "stroke-[2.5px]" : ""} />
              <span className="text-[10px] font-bold mt-0.5">地图</span>
            </button>

            {/* Timeline tab */}
            <button 
              id="nav-tab-timeline"
              onClick={() => setCurrentPage('timeline')}
              className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
                currentPage === 'timeline'
                  ? (currentPage === 'report' ? 'text-indigo-400 scale-105 font-bold' : 'text-indigo-600 scale-105 font-bold')
                  : (currentPage === 'report' ? 'text-slate-500 hover:text-slate-200' : 'text-slate-400 hover:text-indigo-600')
              }`}
            >
              <BookOpen size={19} className={currentPage === 'timeline' ? "stroke-[2.5px]" : ""} />
              <span className="text-[10px] font-bold mt-0.5">足迹</span>
            </button>

            {/* Postcard tab */}
            <button 
              id="nav-tab-postcard"
              onClick={() => setCurrentPage('postcard')}
              className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
                currentPage === 'postcard'
                  ? (currentPage === 'report' ? 'text-indigo-400 scale-105 font-bold' : 'text-indigo-600 scale-105 font-bold')
                  : (currentPage === 'report' ? 'text-slate-500 hover:text-slate-200' : 'text-slate-400 hover:text-indigo-600')
              }`}
            >
              <Mail size={19} className={currentPage === 'postcard' ? "stroke-[2.5px]" : ""} />
              <span className="text-[10px] font-bold mt-0.5">明信片</span>
            </button>

            {/* Report tab */}
            <button 
              id="nav-tab-report"
              onClick={() => setCurrentPage('report')}
              className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
                currentPage === 'report'
                  ? 'text-indigo-400 scale-105 font-bold'
                  : 'text-slate-400 hover:text-indigo-600'
              }`}
            >
              <User size={19} className={currentPage === 'report' ? "stroke-[2.5px]" : ""} />
              <span className="text-[10px] font-bold mt-0.5">我的</span>
            </button>
          </nav>
        )}
      </main>
    </div>
    </AudioProvider>
  );
}
