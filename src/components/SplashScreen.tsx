import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'quote' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('quote'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 3200);
    const t3 = setTimeout(() => onFinish(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          onClick={() => onFinish()}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-black" />
          
          {/* Floating ambient orbs */}
          <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[5%] w-48 h-48 bg-violet-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[40%] right-[20%] w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Gentle particle dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-8 max-w-sm">
            {/* Logo / Brand mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-10"
            >
              {/* Vinyl record icon */}
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 shadow-2xl shadow-indigo-500/30" />
                <div className="absolute inset-[6px] rounded-full bg-slate-900" />
                <div className="absolute inset-[28px] rounded-full bg-gradient-to-br from-indigo-300 to-violet-400" />
                <div className="absolute inset-[34px] rounded-full bg-slate-900" />
                {/* Spinning grooves */}
                <div className="absolute inset-[8px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-[14px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-[20px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
            </motion.div>

            {/* Quote text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={phase === 'quote' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-4"
            >
              <p className="text-[16px] text-white/90 leading-relaxed tracking-wide font-light" style={{ fontFamily: '"Noto Serif SC", serif' }}>
                普鲁斯特用一口蛋糕唤醒了童年。
              </p>
              <p className="text-[16px] text-indigo-200 leading-relaxed tracking-wide font-light" style={{ fontFamily: '"Noto Serif SC", serif' }}>
                EchoFilm 用一首歌唤醒你的每一段路。
              </p>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase === 'quote' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col items-center gap-2"
            >
              <span className="text-[22px] font-black text-white tracking-tight font-display">
                EchoFilm
              </span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">
                音乐 × 地点 × 记忆
              </span>
            </motion.div>
          </div>

          {/* Bottom hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={phase === 'quote' ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 text-[10px] text-white/25 tracking-widest uppercase"
          >
            轻触进入
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
