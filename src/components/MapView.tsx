import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  BookOpen, 
  Mail, 
  User, 
  Plus, 
  Bell, 
  Home, 
  MapPin, 
  Music, 
  Theater, 
  Waves, 
  Soup, 
  Sliders, 
  Sun, 
  Moon, 
  CloudSun, 
  CloudRain, 
  ChevronRight,
  Sparkles,
  Menu
} from 'lucide-react';
import { locationBubbles, recentMemories } from '../data';
import { ActivePage, LocationBubble, MemoryCard } from '../types';

interface MapViewProps {
  onNavigate: (page: ActivePage) => void;
  onSelectMemory: (memory: MemoryCard) => void;
  onAddMemory: () => void;
}

export default function MapView({ onNavigate, onSelectMemory, onAddMemory }: MapViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const renderBubbleIcon = (iconName: string, size = 16) => {
    switch (iconName) {
      case 'theater_comedy':
        return <Theater size={size} />;
      case 'music_note':
        return <Music size={size} />;
      case 'waves':
        return <Waves size={size} />;
      case 'restaurant':
        return <Soup size={size} />;
      case 'graphic_eq':
        return <Sliders size={size} />;
      default:
        return <MapPin size={size} />;
    }
  };

  const renderWeatherIcon = (weatherName: string, size = 14) => {
    switch (weatherName) {
      case 'wb_sunny':
        return <Sun size={size} className="text-amber-500 animate-pulse" />;
      case 'nights_stay':
        return <Moon size={size} className="text-blue-400" />;
      case 'wb_twilight':
        return <CloudSun size={size} className="text-orange-400" />;
      case 'rainy':
      case 'cloudy':
        return <CloudRain size={size} className="text-slate-400" />;
      default:
        return <Sun size={size} />;
    }
  };

  const handleBubbleClick = (bubble: LocationBubble) => {
    if (bubble.city === '厦门') {
      onNavigate('details');
    } else {
      const foundMemory = recentMemories.find(m => m.city === bubble.city);
      if (foundMemory) {
        onSelectMemory(foundMemory);
      } else {
        alert(`🎙️ EchoFilm - ${bubble.city}\n正在载入 "${bubble.city}" 电台的 ${bubble.count} 首时空记忆声音包...`);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Top App Bar */}
      <header className="absolute top-0 left-0 right-0 h-16 z-30 bg-transparent flex justify-between items-center px-5">
        <button 
          onClick={() => alert('菜单功能正在开发中')}
          className="w-10 h-10 flex items-center justify-center text-indigo-600 active:scale-95 transition-all"
          title="菜单"
        >
          <Menu size={24} className="stroke-[2.5px]" />
        </button>
        
        <div className="flex flex-col items-center">
          <h1 className="font-display text-[19px] font-black text-indigo-700 tracking-tight flex items-center justify-center">
            我的 EchoFilm
          </h1>
        </div>

        <button 
          onClick={() => onNavigate('push')}
          className="w-10 h-10 flex items-center justify-center text-indigo-600 active:scale-95 transition-all relative" 
          title="消息"
        >
          <Bell size={22} className="stroke-[2.5px]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-[2.5px] ring-white animate-pulse" />
        </button>
      </header>

      {/* Map Region (56% height wrapper) */}
      <div className="h-[52%] w-full relative overflow-hidden bg-slate-100">
        {/* Detailed street detailed map style image */}
        <img
          alt="中国音乐足迹城市地图"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 select-none grayscale-[15%] brightness-[98%]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvl0tlLIb5a9SkWFmtKQ2EEf4FRA5xT99YhHTsgRDZ_IlCdabZjOVWKIbB3_JU7Omurkiu_Qli87pdGWwB-GHu04S1TJs7PV7P6ysb40V0lItfEl6UrIjJ9T_I26SNk3QZyL0chpaiSAE46EKsZQZXaWE8IOlb44iPVlqI9woyqVnbWQgRixds3gHWTEBuzTTLKQuoiZeKn7PrmDSjl4ep7CUWJtHE_YcP8g04lOd4rPgGyfuV-je66Q"
        />
        <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none" />

        {/* Breathing Audio Bubble markers */}
        {locationBubbles.map((bubble) => (
          <div
            key={bubble.city}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group active:scale-95 transition-transform"
            style={{
              top: bubble.top,
              left: bubble.left,
              zIndex: bubble.city === '厦门' ? 25 : 20
            }}
            onClick={() => handleBubbleClick(bubble)}
          >
            {/* Pulsing Outer Orbit */}
            <div
              className={`rounded-full flex items-center justify-center animate-pulse border border-white/80 shadow-lg`}
              style={{
                width: `${bubble.bubblesize}px`,
                height: `${bubble.bubblesize}px`,
                backgroundColor: bubble.city === '厦门' ? 'rgba(59,130,246,0.3)' : 'rgba(99,102,241,0.25)',
                color: bubble.city === '厦门' ? '#2563eb' : '#6366f1'
              }}
            >
              {/* Core Solid Icon bubble */}
              <div
                className={`rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 overflow-hidden`}
                style={{
                  width: `${bubble.bubblesize * 0.72}px`,
                  height: `${bubble.bubblesize * 0.72}px`,
                  backgroundColor: bubble.city === '厦门' ? '#2563eb' : bubble.city === '深圳' ? '#f97316' : bubble.city === '北京' ? '#a855f7' : bubble.city === '成都' ? '#ec4899' : '#10b981',
                }}
              >
                {bubble.cityImageUrl ? (
                  <img
                    src={bubble.cityImageUrl}
                    alt={bubble.city}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  renderBubbleIcon(bubble.icon, 16)
                )}
              </div>
            </div>

            {/* Label box */}
            <div className="mt-1.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full shadow-sm border border-slate-100 transform group-hover:scale-105 transition-all">
              <p className="text-[10px] font-bold text-slate-800 whitespace-nowrap">
                {bubble.city} · {bubble.count}首
              </p>
            </div>
          </div>
        ))}

        {/* Floating Add Memory Button */}
        <button
          onClick={onAddMemory}
          className="absolute bottom-4 right-4 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-all z-20 border-2 border-white"
          title="录制当下记忆"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Bottom sliding memories block */}
      <div className="flex-1 px-5 pt-4 pb-24 relative z-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-150/50 -mt-2 rounded-t-[28px] shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-[15px] font-black text-slate-900 tracking-tight">
              最近的声纹记忆
            </h2>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Recent EchoFilm
            </p>
          </div>
          <button 
            onClick={() => onNavigate('timeline')}
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600 active:scale-90 transition-transform hover:bg-slate-250"
            title="更多足迹日记"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Horizontal sliding roll */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-2 px-0.5"
        >
          {recentMemories.map((memo) => (
            <div
              key={memo.id}
              onClick={() => {
                if (memo.city === '厦门') {
                  onNavigate('details');
                } else {
                  onSelectMemory(memo);
                }
              }}
              className="flex-none w-52 bg-white rounded-2xl p-2.5 flex flex-col gap-2 cursor-pointer hover:border-slate-300 hover:shadow-md active:scale-[0.98] transition-all border border-slate-100 shadow-sm"
            >
              {/* Photo top area with badge */}
              <div className="relative w-full h-24 rounded-xl overflow-hidden bg-slate-100">
                <img
                  alt={memo.location}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={memo.coverUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white">
                  <MapPin size={10} className="text-indigo-400" />
                  <span className="text-[9.5px] font-semibold truncate max-w-[150px] tracking-wide">
                    {memo.location}
                  </span>
                </div>
              </div>

              {/* Story summary row */}
              <div className="flex flex-col px-0.5">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-slate-800 text-[12.5px] truncate max-w-[110px]">
                    {memo.song_title}
                  </h3>
                  <span className="text-[9px] text-slate-400 font-mono font-bold">
                    {memo.date}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 font-semibold">
                    <User size={10} className="text-slate-400" />
                    {memo.artist}
                  </p>
                  <div>
                    {renderWeatherIcon(memo.weather, 12)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
