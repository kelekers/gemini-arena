import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Lock } from 'lucide-react';

const MainMenu = ({ onStart, unlockedEndings = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showArsipModal, setShowArsipModal] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  // Sesuaikan dengan total rencana ending (misal 20)
  const TOTAL_ENDINGS = 4;

  const menuItems = [
    { label: 'MULAI', action: onStart },
    { label: 'ARSIP', action: () => setShowArsipModal(true) }, // Menu Baru
    { label: 'PENGATURAN', action: () => {} },
    { label: 'KREDIT', action: () => setShowCredits(true) },
  ];

  // --- Komponen Garis Pemindai (Background) ---
  const ScanningLines = () => (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
      {/* Garis Horizontal yang Berjalan */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent shadow-[0_0_15px_#d4af37]"
      />
      {/* Efek Garis Statis (Scanlines halus) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );

  // --- Komponen Logo SANG SAKA dengan Shimmer ---
  const SangSakaLogo = () => (
    <div className="relative mb-6 group">
      {/* Shadow Glow di belakang teks untuk memberikan aura */}
      <div className="absolute inset-0 blur-2xl bg-[#d4af37]/10 scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

      <motion.h1 
        className="relative font-['Cinzel'] text-8xl font-black uppercase pointer-events-none select-none
                  bg-gradient-to-b from-[#ffffff] via-[#d4af37] to-[#8a6d3b] bg-clip-text text-transparent
                  drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        style={{
          WebkitTextStroke: "0.5px rgba(212, 175, 55, 0.3)", // Memberikan outline tipis emas
        }}
      >
        SANG SAKA

      {/* Efek Kilatan Cahaya (Shimmer) yang lebih halus */}
      <motion.div
        initial={{ left: "-150%" }}
        animate={{ left: "150%" }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
        className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none mix-blend-overlay"
      />
      </motion.h1>

      {/* Dekorasi Garis Bawah - Menyeimbangkan besar teks */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "50%", opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="h-[2px] bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/50 to-[#d4af37]/0 mt-2"
      />
    </div>
  );

  const AtmosphericFX = () => {
    // Membuat 20 butir debu secara acak
    const dustParticles = useMemo(() => [...Array(20)], []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* 2. Floating Dust (Partikel Debu/Bara) */}
        {dustParticles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 1920, 
              y: Math.random() * 1080, 
              opacity: Math.random() * 0.5 
            }}
            animate={{
              y: [null, Math.random() * -200], // Bergerak ke atas
              x: [null, (Math.random() - 0.5) * 100], // Goyang kiri-kanan
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full blur-[1px]"
          />
        ))}

      </div>
    );
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] font-serif text-white selection:bg-[#d4af37]/30">
      

      {/* 1. Background Layer (Tetap Sama) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-95"
        style={{ backgroundImage: `url('https://raw.githubusercontent.com/kelekers/gemini-arena/refs/heads/main/src/assets/main_menu_bg.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* 2. LAYER TENGAH: Atmospheric Effects (Sekarang di atas Background) */}


      {/* 3. Main UI Container */}
      <div className="relative z-10 flex h-full flex-col justify-center px-20 lg:px-32">
        {/* 1. Logo Header dengan Shimmer */}
        <SangSakaLogo />
        <AtmosphericFX />
        <ScanningLines />

        {/* PROGRESS ARSIP (Bumbu Baru) */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center space-x-4 opacity-50 group hover:opacity-100 transition-opacity duration-700 cursor-default">
            <BookOpen size={14} className="text-[#d4af37]" />
            <span className="font-['Cinzel'] text-[10px] tracking-[0.6em] uppercase font-black text-[#d4af37]">
              Arsip Takdir Terjamah
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="h-[2px] w-64 bg-white/5 border border-white/5 relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(unlockedEndings.length / TOTAL_ENDINGS) * 100}%` }}
                className="h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
              />
            </div>
            <span className="font-['Cinzel'] text-xs text-white/30 tracking-widest font-bold">
              {unlockedEndings.length} / {TOTAL_ENDINGS}
            </span>
          </div>
        </div>

        {/* MENU NAVIGATION (UI Utuh) */}
        <nav className="flex flex-col space-y-8">
          {menuItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <button
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={item.action}
                className="group relative flex items-center w-fit outline-none"
              >
                {/* Gold Vertical Bar Effect */}
                <div 
                  className={`absolute -left-6 h-8 w-[3px] bg-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_15px_rgba(212,175,55,0.6)]
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                />

                {/* Menu Text */}
                <span 
                  className={`font-['Cinzel'] text-3xl tracking-[0.3em] transition-all duration-700 ease-in-out
                    ${isHovered ? 'text-white translate-x-2' : 'text-[#4a4a4a]'}`}
                >
                  {item.label}
                </span>

                {/* Subtle Glow Text */}
                {isHovered && (
                  <span className="absolute left-2 font-['Cinzel'] text-3xl tracking-[0.3em] text-white blur-md opacity-30 animate-pulse">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* 3. Footer Branding (UTUH) */}
        <footer className="absolute bottom-12 left-20 lg:left-32">
          <div className="flex items-center space-x-4 opacity-30 transition-opacity hover:opacity-100 duration-1000">
            <div className="h-[1px] w-8 bg-white" />
            <p className="text-[9px] tracking-[0.4em] uppercase font-light">
              Built for the Brave • Indonesia 2026
            </p>
          </div>
        </footer>
      </div>

      {/* MODAL ARSIP SEDERHANA (Dapat dikembangkan lebih lanjut) */}
      <AnimatePresence>
        {showArsipModal && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-20 backdrop-blur-3xl"
            onClick={() => setShowArsipModal(false)}
          >
            <div className="w-full max-w-2xl border border-white/5 bg-[#050505] p-16 shadow-[0_0_100px_rgba(0,0,0,1)]">
              <h2 className="font-['Cinzel'] text-4xl text-[#d4af37] mb-12 tracking-widest uppercase italic">Fragmen Sejarah</h2>
              <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-auto pr-6 custom-scrollbar">
                {/* Kamu bisa me-map unlockedEndings di sini nanti */}
                {unlockedEndings.length === 0 ? (
                  <div className="flex flex-col items-center py-20 opacity-20">
                    <Lock size={48} className="mb-6" />
                    <p className="font-['Cinzel'] text-[10px] tracking-[0.5em] uppercase">Belum ada takdir yang terjamah</p>
                  </div>
                ) : (
                  unlockedEndings.map((endId, i) => (
                    <div key={i} className="p-4 border border-white/5 bg-white/[0.01] flex items-center space-x-6">
                       <div className="h-10 w-10 bg-[#d4af37]/20 flex items-center justify-center">
                          <span className="font-['Cinzel'] text-xs text-[#d4af37]">{i + 1}</span>
                       </div>
                       <span className="font-['Cinzel'] text-sm tracking-widest text-white/60">{endId.replace(/_/g, ' ')}</span>
                    </div>
                  ))
                )}
              </div>
              <p className="mt-12 text-center font-['Cinzel'] text-[8px] tracking-[1em] text-white/10 uppercase">
                Klik di mana saja untuk menutup
              </p>
            </div>
          </div>
        )}

        {showCredits && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-20 backdrop-blur-3xl"
            onClick={() => setShowCredits(false)}
          >
            <div className="w-full max-w-2xl border border-white/5 bg-[#050505] p-16 shadow-[0_0_100px_rgba(0,0,0,1)]">
              <h2 className="font-['Cinzel'] text-4xl text-[#d4af37] mb-12 tracking-widest uppercase italic">KREDIT</h2>
              <div className="space-y-4">
                <p className="font-['Cinzel'] text-sm tracking-widest text-white/80">@kelekerss</p>
                <p className="font-['Cinzel'] text-sm tracking-widest text-white/80">Gemini</p>
              </div>
              <p className="mt-12 text-center font-['Cinzel'] text-[8px] tracking-[1em] text-white/10 uppercase">
                Klik di mana saja untuk menutup
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Visual Effects Layer (UTUH) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
    </div>
  );
};

export default MainMenu;