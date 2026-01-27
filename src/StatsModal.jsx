import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Shield, Swords, Zap, Wind, Crown, Clover, X } from 'lucide-react';

const StatsModal = ({ isOpen, stats, freePoints, level, onUpgrade, onClose }) => {
  
  // Definisi Atribut: Pastikan KEY sesuai dengan App.jsx
  const statDefinitions = {
    Kuat: { icon: <Swords size={18} />, desc: "Meningkatkan daya hancur serangan Raga." },
    Tahan: { icon: <Shield size={18} />, desc: "Mempertebal vitalitas dan pertahanan stamina." },
    Mistis: { icon: <Zap size={18} />, desc: "Memperkuat aliran Karsa dan serangan gaib." },
    Luwes: { icon: <Wind size={18} />, desc: "Memperlebar celah tangkisan (Parry) dan peluang kabur." },
    Pulung: { icon: <Clover size={18} />, desc: "Meningkatkan keberuntungan dalam takdir dan barang jarahan." },
    Wibawa: { icon: <Crown size={18} />, desc: "Mempengaruhi harga pasar dan wibawa dalam negosiasi." },
  };

  // --- KONSTANTA SISTEM BARU ---
  const MAX_STAT = 30; 

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-6 overflow-hidden font-serif"
        >
          {/* Background Atmospheric Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
          </div>

          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center">
            
            {/* 1. HEADER: LEVEL & POIN TAKDIR */}
            <header className="text-center mb-16">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[#d4af37] font-['Cinzel'] tracking-[1em] text-[10px] uppercase mb-4 opacity-60">
                  Meditasi Jiwa
                </span>
                <h1 className="font-['Cinzel'] text-5xl font-bold text-white tracking-widest uppercase drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  Tingkat {level}
                </h1>
                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mt-6" />
                
                <div className="mt-8 flex items-center space-x-4 bg-[#d4af37]/10 px-8 py-3 border border-[#d4af37]/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <Sparkles size={16} className="text-[#d4af37] animate-pulse" />
                  <span className="font-['Cinzel'] text-sm tracking-[0.3em] text-[#d4af37] font-bold uppercase">
                    {freePoints} Poin Takdir Tersedia
                  </span>
                </div>
              </motion.div>
            </header>

            {/* 2. STATS GRID: THE ASCENSION (Limit 30) */}
            <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-x-35 gap-y-10 px-35">
              {Object.entries(statDefinitions).map(([key, info], idx) => {
                const currentVal = stats[key] || 0;
                const canUpgrade = freePoints > 0 && currentVal < MAX_STAT;

                return (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex items-center justify-between"
                  >
                    <div className="flex items-start space-x-6">
                      {/* Stat Icon */}
                      <div className={`mt-1 p-3 bg-white/5 border transition-all duration-500 
                        ${canUpgrade ? 'border-white/10 group-hover:border-[#d4af37]/50 shadow-sm' : 'border-white/5 opacity-80'}`}>
                        <div className={`${canUpgrade ? 'text-white/40 group-hover:text-[#d4af37]' : 'text-white/10'} transition-colors uppercase`}>
                          {info.icon}
                        </div>
                      </div>
                      
                      {/* Stat Info */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className={`font-['Cinzel'] text-sm tracking-[0.3em] transition-all 
                            ${canUpgrade ? 'text-white/50 group-hover:text-white' : 'text-white/40'}`}>
                            {key.toUpperCase()}
                          </span>
                          <span className={`font-['Cinzel'] text-xl font-bold ${canUpgrade ? 'text-[#d4af37]' : 'text-[#d4af37]/40'}`}>
                            {currentVal}
                          </span>
                        </div>
                        
                        {/* Tapered Progress Bar (Base 30) */}
                        <div className="relative h-[3px] w-48 bg-white/5 overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]"
                            animate={{ width: `${(currentVal / MAX_STAT) * 100}%` }}
                            transition={{ type: 'spring', stiffness: 40 }}
                          />
                        </div>
                        <p className="text-xs font-['Cormorant_Garamond'] italic text-white/30 max-w-[200px] leading-relaxed">
                          {info.desc}
                        </p>
                      </div>
                    </div>

                    {/* Upgrade Action Button */}
                    <button 
                      disabled={!canUpgrade}
                      onClick={() => onUpgrade(key)}
                      className={`relative p-4 flex items-center justify-center border transition-all duration-500
                        ${canUpgrade 
                          ? 'border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black shadow-[0_0_15px_rgba(212,175,55,0.1)] cursor-pointer' 
                          : 'border-white/5 text-white/10 opacity-10 cursor-not-allowed'}`}
                    >
                      <Plus size={20} />
                      {canUpgrade && (
                        <div className="absolute inset-0 animate-ping border border-[#d4af37]/30 rounded-none pointer-events-none" />
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </main>

            {/* 3. FOOTER: KONFIRMASI */}
            <footer className="w-full mt-auto py-12 flex flex-col items-center">
              <button 
                onClick={onClose}
                className="group relative px-20 py-4 overflow-hidden border border-white/10 hover:border-[#d4af37] transition-all duration-700"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 font-['Cinzel'] text-[11px] tracking-[0.5em] font-black text-white group-hover:text-black">
                  SELESAI MEDITASI
                </span>
              </button>
            </footer>

            {/* Decorative Side Borders */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-100" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-100" />
          </div>

          {/* Close Button Top Right */}
          <button 
            onClick={onClose}
            className="absolute top-12 right-12 text-white/20 hover:text-white transition-all cursor-pointer z-[310]"
          >
            <X size={32} strokeWidth={1} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatsModal;