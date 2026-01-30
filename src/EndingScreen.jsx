import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Award, 
  Sparkles, 
  BookOpen, 
  RefreshCw,
  Star
} from 'lucide-react';

const EndingScreen = ({ endingNode, onRestart }) => {
  // 1. Definisikan Tema Visual Berdasarkan Kategori
  const getTheme = () => {
    switch (endingNode?.category) {
      case 'SAD':
        return {
          bg: 'bg-[#0a0a0a]',
          accent: 'text-gray-500',
          border: 'border-white/10',
          glow: 'rgba(255, 255, 255, 0.05)',
          label: 'TAKDIR KELAM',
          icon: <Award className="text-gray-600" size={40} />
        };
      case 'HAPPY':
        return {
          bg: 'bg-[#050a05]',
          accent: 'text-[#d4af37]',
          border: 'border-[#d4af37]/30',
          glow: 'rgba(212, 175, 55, 0.2)',
          label: 'TAKDIR MULIA',
          icon: <Sparkles className="text-[#d4af37]" size={40} />
        };
      case 'SECRET':
      case 'GOLDEN':
        return {
          bg: 'bg-[#0a050a]',
          accent: 'text-purple-400',
          border: 'border-purple-500/30',
          glow: 'rgba(168, 85, 247, 0.2)',
          label: 'TAKDIR ABADI',
          icon: <Star className="text-purple-500" size={40} />
        };
      default:
        return {
          bg: 'bg-[#050505]',
          accent: 'text-red-600',
          border: 'border-red-900/30',
          glow: 'rgba(185, 28, 28, 0.2)',
          label: 'TAKDIR NUSANTARA',
          icon: <BookOpen className="text-red-600" size={40} />
        };
    }
  };

  const theme = getTheme();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[1000] ${theme.bg} flex flex-col items-center justify-center p-6 lg:p-20 overflow-hidden`}
    >
      {/* 2. BACKGROUND AMBIENCE (Cinematic Filter) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 5 }}
          className="w-full h-full bg-cover bg-center grayscale blur-sm"
          style={{ backgroundImage: `url(${endingNode?.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black`} />
      </div>

      {/* 3. CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        
        {/* Badge Kategori Ending */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`flex items-center space-x-3 mb-12 px-6 py-2 border ${theme.border} bg-white/[0.02] backdrop-blur-md`}
        >
          {theme.icon}
          <span className={`font-['Cinzel'] text-[10px] tracking-[1em] uppercase font-black ${theme.accent}`}>
            {theme.label}
          </span>
        </motion.div>

        {/* Judul Ending */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`font-['Cinzel'] text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-none text-white drop-shadow-[0_0_30px_${theme.glow}]`}
        >
          {endingNode?.title || "Satu Babak Berakhir"}
        </motion.h1>

        {/* Teks Epilog */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-['Cormorant_Garamond'] text-xl lg:text-3xl italic text-gray-300 leading-relaxed">
            "{endingNode?.text || "Tak ada lagi kata yang tersisa. Sejarah telah mencatat namamu dengan caranya sendiri."}"
          </p>
        </motion.div>

        {/* 4. ACTIONS */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8"
        >
          <button 
            onClick={onRestart}
            className={`group flex items-center space-x-4 px-12 py-5 border ${theme.border} hover:bg-white/[0.05] transition-all duration-500`}
          >
            <RefreshCw size={20} className={`${theme.accent} group-hover:rotate-180 transition-transform duration-700`} />
            <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-white font-bold uppercase">Ulangi Karsa</span>
          </button>

          <button 
            onClick={() => window.location.reload()}
            className="group flex items-center space-x-4 px-12 py-5 border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <Home size={20} className="text-gray-500" />
            <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-gray-400 font-bold uppercase">Kembali ke Sauh</span>
          </button>
        </motion.div>
      </div>

      {/* 5. ARSIP FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <div className="h-[1px] w-48 bg-white/20 mb-4" />
        <p className="font-['Cinzel'] text-[9px] tracking-[1.5em] text-white uppercase font-black">
          Arsip Memori Nusantara • 2026-2120
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EndingScreen;