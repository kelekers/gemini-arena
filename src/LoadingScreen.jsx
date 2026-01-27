import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADING_TIPS } from './Constants'; // Pastikan data ini ada di Constants nanti

const LoadingScreen = ({ onFinished, targetIslandId = 'general' }) => {
  const [progress, setProgress] = useState(0);
  
  // Memilih Tip berdasarkan ID Pulau atau Default ke General
  const [tip] = useState(() => {
    const category = LOADING_TIPS[targetIslandId] || LOADING_TIPS['general'];
    return category[Math.floor(Math.random() * category.length)];
  });

  const isComplete = progress >= 100;

  // Simulasi Loading Speed yang dinamis (khas AAA)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Kecepatan loading random agar terasa 'memproses' data berat
        const diff = Math.random() * 30; 
        return Math.min(oldProgress + diff, 100);
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[#050505] overflow-hidden flex items-center text-white font-serif">
      
      {/* 1. CINEMATIC BACKGROUND (Desaturated & Depth) */}
      <AnimatePresence>
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tip.image})` }}
        />
      </AnimatePresence>
      
      {/* Vignette Overlay & Scanlines */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      {/* 2. NARRATIVE CONTENT (Island Context) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-32 px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Subtitle / Category */}
          <span className="font-['Cinzel'] text-[10px] tracking-[0.8em] text-[#d4af37] opacity-60 uppercase mb-4 block">
            {targetIslandId === 'general' ? 'Fragmen Nusantara' : `Arsip ${targetIslandId}`}
          </span>
          
          {/* Main Title */}
          <h1 className="font-['Cinzel'] text-5xl font-bold tracking-tighter leading-none mb-8 uppercase drop-shadow-2xl">
            {tip.title}
          </h1>
          
          <div className="h-[1px] w-20 bg-[#d4af37]/30 mb-8" />
          
          {/* Tip/Lore Text */}
          <p className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl italic leading-relaxed text-gray-400 font-light max-w-xl">
            "{tip.text}"
          </p>
        </motion.div>
      </div>

      {/* 3. PROGRESS SYSTEM (Bottom Right) */}
      <div className="absolute bottom-20 right-20 lg:right-32 z-20 flex flex-col items-end w-72 lg:w-96">
        
        {/* Percentage */}
        <div className="mb-4 flex items-baseline space-x-2">
          <span className="font-['Cinzel'] text-xs tracking-[0.2em] text-white/20 uppercase">Sinkronisasi Karsa</span>
          <span className="font-['Cinzel'] text-xl font-bold text-[#d4af37]">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Minimalist Gold Progress Bar */}
        <div className="w-full h-[1px] bg-white/5 relative mb-10 overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-[#d4af37] shadow-[0_0_15px_#d4af37]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "circOut" }}
          />
        </div>
        
        {/* Interaction Button (AAA feedback) */}
        <AnimatePresence>
          {isComplete && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ x: 10 }}
              onClick={onFinished}
              className="group flex items-center space-x-6 outline-none cursor-pointer"
            >
              <div className="flex flex-col items-end">
                <span className="font-['Cinzel'] text-[11px] tracking-[0.6em] text-white group-hover:text-[#d4af37] transition-colors font-black uppercase">
                  Masuki Realitas
                </span>
                <span className="text-[7px] tracking-[0.3em] text-white/20 uppercase mt-1">Tekan untuk melanjutkan</span>
              </div>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-all">
                 <span className="text-[#d4af37] text-xl group-hover:scale-125 transition-transform">›</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Loading Pulse */}
        {!isComplete && (
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping" />
            <p className="font-['Cinzel'] text-[9px] tracking-[0.5em] text-white/20 uppercase">
              Menjalin Benang Takdir...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;