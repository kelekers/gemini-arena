import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROLOGUE_SCENES } from './Constants'; // Data akan kita isi setelah ini
import { ChevronRight, Sparkles } from 'lucide-react';

const Prologue = ({ onFinished }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const scene = PROLOGUE_SCENES[currentStep];

  // Efek Glitch Visual untuk vibe distopia 2120
  useEffect(() => {
    if (scene?.glitch) {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentStep, scene?.glitch]);

  const handleNext = () => {
    if (currentStep < PROLOGUE_SCENES.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onFinished();
    }
  };

  if (!scene) return null;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] font-serif text-white">
      
      {/* 1. LAYERING BACKGROUND (Cinematic Depth) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 0.5, 
            scale: 1, 
            filter: isGlitching ? 'invert(0.8) sepia(1) hue-rotate(180deg) blur(2px)' : 'blur(0px)' 
          }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${scene.image})` }}
        />
      </AnimatePresence>

      {/* 2. ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      {/* 3. LOCATION & YEAR INDICATOR (Top Left) */}
      <div className="absolute top-24 left-24 z-50">
        <motion.div 
          key={`header-${currentStep}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col"
        >
          <span className="font-['Cinzel'] text-[#d4af37] tracking-[1em] text-[10px] uppercase mb-2 opacity-60">
            Arsip Memori
          </span>
          <h2 className="font-['Cinzel'] text-5xl font-black tracking-widest text-white/90 uppercase drop-shadow-2xl">
            {scene.year}
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <div className="h-[1px] w-12 bg-[#d4af37]/40" />
            <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase font-sans font-bold">
              {scene.location}
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. STORYTELLING AREA (Center Bottom) */}
      <div className="absolute bottom-20 left-0 w-full flex flex-col items-center px-24 lg:px-72 z-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentStep}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center relative"
          >
            <p className="font-['Cormorant_Garamond'] text-2xl lg:text-4xl italic leading-relaxed text-gray-200 drop-shadow-2xl">
              "{scene.text}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* 5. INTERACTION BUTTON (The Choice) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="mt-12 group relative flex flex-col items-center outline-none"
        >
          <div className="relative px-16 py-5 border border-[#d4af37]/20 group-hover:border-[#d4af37] transition-all duration-700 bg-black/40 backdrop-blur-md">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-[#d4af37]/5 transition-transform duration-700" />
            <div className="flex items-center space-x-6 relative z-10">
              <span className="font-['Cinzel'] text-[11px] tracking-[0.6em] text-[#d4af37] font-black uppercase">
                {currentStep === PROLOGUE_SCENES.length - 1 ? "Putuskan Rantai" : "Mendalami Karsa"}
              </span>
              <ChevronRight size={16} className="text-[#d4af37] group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          
          <div className="mt-6 flex flex-col items-center opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="h-12 w-[1px] bg-gradient-to-b from-[#d4af37] to-transparent" />
             <span className="text-[7px] tracking-[0.5em] text-white/40 mt-3 uppercase italic">
               Tahun 2026: Awal dari Akhir
             </span>
          </div>
        </motion.button>
      </div>

      {/* 6. CINEMATIC SCANLINES (Dystopia Filter) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_250px_rgba(0,0,0,1)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_4px,4px_100%] pointer-events-none" />
    </div>
  );
};

export default Prologue;