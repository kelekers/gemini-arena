import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PIONEERS } from './Constants';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldAlert, 
  Swords, 
  Flame, 
  Clover, 
  Wind, 
  UserRoundCheck 
} from 'lucide-react';

const CharSelection = ({ onConfirm, onBack }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const hero = PIONEERS[index];

  // Fungsi paginate diubah agar mematikan status first render setelah diklik pertama kali
  const paginate = (newDirection) => {
    if (isFirstRender) setIsFirstRender(false);
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + PIONEERS.length) % PIONEERS.length);
  };
    
  // Logika Variabel Animasi untuk Carousel yang Halus
  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      rotateY: -15,
      scale: 0.85, // Rotasi default (miring)
      transition: {
        duration: isFirstRender ? 5 : 2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 25 : -25,
      transition: {
        duration: 0.4
      }
    }),
    // Efek saat kursor diarahkan ke karakter
    hover: {
      rotateY: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const statIcons = {
    Tahan: ShieldAlert,
    Kuat: Swords,
    Mistis: Flame,
    Pulung: Clover,
    Luwes: Wind,
    Wibawa: UserRoundCheck
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] font-serif text-white">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 bg-[url('/src/assets/char_sel_bg.jpg')] bg-cover bg-center opacity-50 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] pointer-events-none" />

      {/* Header Navigation */}
      <nav className="absolute top-10 left-0 w-full px-20 flex justify-between items-center z-50">
        <h2 className="font-['Cinzel'] text-[10px] tracking-[0.6em] text-[#d4af37]/100 uppercase">Identitas Pejuang</h2>
        <button onClick={onBack} className="font-['Cinzel'] text-[10px] tracking-[0.4em] text-white/40 hover:text-white transition-colors uppercase">Kembali</button>
      </nav>

      <div className="relative h-full flex items-center px-20 lg:px-32">
        
        {/* LEFT: STATS */}
        <aside className="w-1/4 z-20 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              {Object.entries(hero.stats).map(([key, value]) => {
                const Icon = statIcons[key];
                return (
                  <div key={key} className="mb-6 group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center space-x-3">
                        <Icon size={16} className="text-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-sans font-bold">{key}</span>
                      </div>
                      <span className="text-xs font-['Cinzel'] text-[#d4af37]">{value}</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${value * 8}%` }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-[#b91c1c] via-[#d4af37] to-[#d4af37]"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </aside>

        {/* CENTER: CHARACTER DISPLAY */}
        <div className="flex-1 relative h-full flex flex-col items-center justify-center perspective-1000">
          <div className="relative h-[70%] w-full flex items-center justify-center">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                whileHover="hover" // Pemicu rotasi normal ke 0 saat hover
                className="absolute h-full w-auto cursor-pointer"
              >
                <img 
                  src={hero.imageIdle} 
                  alt={hero.name}
                  className="mt-20 h-60 w-auto object-contain drop-shadow-[0_20px_60px_rgba(185,28,28,0.4)] filter contrast-125 brightness-110 transition-all duration-500 rounded-2xl scale-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c]/20 to-transparent blur-3xl -z-10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAME & FOCUS */}
          <div className="absolute bottom-20 text-center z-[60]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={hero.name}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.5 }}
               >
                 <h1 className="font-['Cinzel'] text-8xl font-black tracking-[0.3em] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                   {hero.name}
                 </h1>
                 <div className="flex items-center justify-center space-x-6 mt-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
                    <span className="font-['Cinzel'] text-[11px] tracking-[1em] text-[#d4af37] uppercase font-bold">
                       Pewaris {hero.focus}
                    </span>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <button onClick={() => paginate(-1)} className="pointer-events-auto group p-4 transition-transform hover:scale-110 active:scale-95">
              <ChevronLeft size={64} className="text-white/10 group-hover:text-[#d4af37] transition-all stroke-[1px]" />
            </button>
            <button onClick={() => paginate(1)} className="pointer-events-auto group p-4 transition-transform hover:scale-110 active:scale-95">
              <ChevronRight size={64} className="text-white/10 group-hover:text-[#d4af37] transition-all stroke-[1px]" />
            </button>
          </div>
        </div>

        {/* RIGHT: LORE */}
        <aside className="w-1/4 z-20 flex flex-col justify-center pl-10 border-l border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="h-[1px] w-12 bg-[#b91c1c]" />
                <p className="font-['Cormorant_Garamond'] italic leading-relaxed text-gray-400">
                  "{hero.description}"
                </p>
              </div>

              <button 
                onClick={() => onConfirm(hero)}
                className="group relative w-full py-5 border border-[#d4af37]/30 bg-black overflow-hidden transition-all hover:border-[#d4af37]"
              >
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-[#d4af37] transition-transform duration-500 ease-out" />
                <span className="relative z-10 font-['Cinzel'] text-[11px] tracking-[0.6em] font-bold group-hover:text-black transition-colors">
                  KONFIRMASI
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </aside>

      </div>
    </div>
  );
};

export default CharSelection;