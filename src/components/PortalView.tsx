import React from 'react';
import { motion } from 'motion/react';
import { ActivePage } from '../types';

interface PortalViewProps {
  onNavigate: (page: ActivePage) => void;
}

export default function PortalView({ onNavigate }: PortalViewProps) {
  const scenarios = [
    {
      id: 'map' as ActivePage,
      num: '01',
      title: 'EchoFilm 地图主页',
      desc: '查看伴随你脚步的音乐足迹全貌',
      icon: 'explore',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 'details' as ActivePage,
      num: '02',
      title: '地点详情 (鼓浪屿)',
      desc: '日光岩那日晴天温润的琴键与鸣声',
      icon: 'location_on',
      color: 'from-orange-500 to-amber-500',
    },
    {
      id: 'push' as ActivePage,
      num: '03',
      title: '重返位置唤醒推送',
      desc: '模拟旧地重游时接收的西湖推送体验',
      icon: 'notifications_active',
      color: 'from-violet-500 to-violet-600',
    },
    {
      id: 'postcard' as ActivePage,
      num: '04',
      title: '声音明信片生成器',
      desc: '定制回忆插画，制作可以唱出来的明信片',
      icon: 'style',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      id: 'timeline' as ActivePage,
      num: '05',
      title: 'AI 叙事旅程日记',
      desc: 'AI 谱写并缝合的厦门三日音乐慢行史',
      icon: 'auto_stories',
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 'report' as ActivePage,
      num: '06',
      title: '2026 年度 EchoFilm 报告',
      desc: '全景沉浸式一屏一卡，回顾耳朵去过的坐标',
      icon: 'analytics',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-indigo-100 to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="absolute top-48 -right-16 w-56 h-56 bg-indigo-200/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-16 -left-16 w-56 h-56 bg-emerald-100/50 rounded-full blur-3xl z-0" />

      {/* Primary Scrollable Body */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-12 pb-24 px-6 relative z-10">
        {/* Header Branding */}
        <div className="text-center mb-10 mt-4 flex flex-col items-center">
          {/* Custom Brand Logo */}
          <div className="relative mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-violet-600 shadow-lg shadow-indigo-600/20">
            <span className="material-symbols-outlined text-white text-[36px] relative z-10">
              graphic_eq
            </span>
            <div className="absolute -bottom-1 text-white/50 animate-pulse">
              <span className="material-symbols-outlined text-[14px]">
                location_on
              </span>
            </div>
            {/* Pulsing Ripple */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500 scale-110 opacity-10 animate-ping" />
          </div>

          <h1 className="font-display text-[26px] font-extrabold tracking-tight text-indigo-950 mb-2">
            EchoFilm
          </h1>
          <p className="text-[11px] font-semibold text-indigo-600/80 uppercase tracking-[0.2em] mb-3">
            普鲁斯特效应声觉引擎
          </p>
          <p className="text-xs text-slate-500/90 leading-relaxed max-w-[280px]">
            “气味能让你瞬间回到童年，我们的声音和音乐，替你记住你走过的每条路。”
          </p>
        </div>

        {/* Portal Entry List */}
        <div className="space-y-4">
          {scenarios.map((scene, idx) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 120 }}
              onClick={() => onNavigate(scene.id)}
              className="group cursor-pointer active:scale-[0.98] transition-transform duration-150 relative bg-white border border-slate-150/60 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200"
            >
              <div className="flex items-center gap-4">
                {/* Visual Pill Indicator */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${scene.color} flex items-center justify-center text-white shadow-sm`}>
                  <span className="material-symbols-outlined text-[24px]">
                    {scene.icon}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      {scene.num}
                    </span>
                    <span className="material-symbols-outlined text-slate-300 text-base group-hover:translate-x-1 group-hover:text-primary transition-all">
                      arrow_forward_ios
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-[14px] leading-tight mb-1 group-hover:text-primary transition-colors">
                    {scene.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] truncate">
                    {scene.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Footer Info */}
        <div className="text-center mt-12 text-slate-400/80 text-[11px]">
          <p className="font-semibold uppercase tracking-wider mb-1 text-slate-400">
            Blackberry Hackathon Demo
          </p>
          <p>
            点击任意模块开始您的声学之旅
          </p>
        </div>
      </div>
    </div>
  );
}
