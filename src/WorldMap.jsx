import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MAP_ASSETS, ISLANDS } from './Constants';
import { Lock, ChevronRight, Info, ShieldAlert, ShieldCheck } from 'lucide-react';

const WorldMap = ({ onSelectIsland, storyFlags = {} }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [lockedId, setLockedId] = useState(null);

  // LOGIKA AKTIF: Klik (Locked) selalu menang atas Hover, 
  // tapi jika tidak ada klik, baru gunakan Hover.
  const activeId = lockedId || hoveredId || ISLANDS[0].id;
  const activeIsland = ISLANDS.find(is => is.id === activeId);
  const activeStatus = useMemo(() => {
    if (storyFlags[`${activeId}_FINISHED` || activeIsland?.isFinished]) return 'finished';
    if (activeId === 'papua' || storyFlags[`${activeId}_UNLOCKED` || activeIsland?.isUnlocked]) return 'unlocked';
    return 'locked';
  }, [activeId, storyFlags, activeIsland]);

  const isDisabled = activeStatus === 'locked' || activeStatus === 'finished';
  const assets = MAP_ASSETS[activeId] || {};
  const isLocked = activeStatus === 'locked';


  return (
    <div 
      className="relative h-screen w-screen bg-[#050505] overflow-hidden flex"
      // KLIK BACKGROUND: Jika klik di luar pulau, lepas fokus
      onClick={() => setLockedId(null)}
    >
      
      {/* 1. MAIN MAP AREA */}
      <main className="relative w-[75%] h-full border-r border-white/5 overflow-hidden">
        {/* OCEAN BASE ANIMATION */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.05, 1] // Efek bernapas/gelombang pelan
          }}
          transition={{ 
            duration: 120, // Sangat lambat agar tidak membuat pusing
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ 
            backgroundImage: `url('/src/assets/ocean.png')`,
            backgroundSize: '140% 140%', // Ukuran dilebihkan agar bisa "bergeser"
          }}
        />

        {/* AMBIENT FOG (Opsional: Memberikan kedalaman) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none z-10" />

        {ISLANDS.map((island) => {
          // Logika Penentu Status Pulau
          const islandStatus = useMemo(() => {
            const finished = storyFlags[`${island.id}_FINISHED` || island.isFinished];
            const unlocked = island.id === 'papua' || storyFlags[`${island.id}_UNLOCKED` || island.isUnlocked];
            
            if (finished) return 'finished';
            if (unlocked) return 'unlocked';
            return 'locked';
          }, [island.id, storyFlags]);
          const isThisHovered = hoveredId === island.id;
          const isThisLocked = lockedId === island.id;
          const islandAssets = MAP_ASSETS[island.id] || {};

          // A. Tentukan Gambar Dasar berdasarkan status dan interaksi
          // --- LOGIKA TERBARU: ASET VS STATUS ---
          const isInteractive = isThisHovered || isThisLocked;
          let currentImg;

          if (islandStatus === 'finished') {
            // SUDAH BEBAS: Gunakan aset Hijau/Restored (Panggil key 'unlocked' di Constants)
            currentImg = isInteractive ? islandAssets.hoverUnlocked : islandAssets.idleUnlocked;
          } else {
            // LOCKED atau UNLOCKED (SEDANG DIMINKAN): Gunakan aset Dystopian/Neo-VOC (Panggil key 'locked' di Constants)
            currentImg = isInteractive ? islandAssets.hoverLocked : islandAssets.idleLocked;
          }

          // B. Tentukan Efek Visual (Tailwind Class)
          const statusClasses = useMemo(() => {
            if (islandStatus === 'locked') return 'grayscale opacity-50 contrast-75';
            if (islandStatus === 'finished') return 'sepia-[0.4] saturate-150 brightness-110 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]';
            return 'drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]';
          }, [islandStatus]);

          return (
            <motion.div
              key={island.id}
              className="absolute cursor-pointer group z-30"
              style={{ top: island.coordinates.top, left: island.coordinates.left }}
              // Mencegah klik pulau memicu onClick background
              onClick={(e) => {
                e.stopPropagation(); 
                setLockedId(island.id);
              }}
              onMouseEnter={() => !lockedId && setHoveredId(island.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {islandStatus === 'locked' && (
                <motion.div
                  animate={{ x: [-20, 20], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/10 blur-2xl rounded-full pointer-events-none"
                />
              )}

              <motion.img
                src={currentImg}
                alt={island.name}
                // Animate mengontrol interaksi (hover/click)
                animate={{ 
                  scale: isThisHovered || isThisLocked ? 1.15 : 1,
                  // Menambahkan sedikit efek 'lift' saat dipilih
                  y: isThisLocked ? -10 : 0,
                  // Filter di sini fokus pada feedback interaksi
                  filter: isThisLocked 
                    ? 'brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(212,175,55,0.4))' 
                    : 'brightness(1) contrast(1)'
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                // className mengontrol aura status wilayah (Locked/Unlocked/Finished)
                className={`w-48 h-auto transition-all duration-700 pointer-events-none ${statusClasses} scale-150`}
              />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {islandStatus === 'locked' && <Lock className="text-white/40" size={20} />}
                {islandStatus === 'unlocked' && <div className={`h-3 w-3 rounded-full ${isThisLocked ? 'bg-white' : 'bg-[#d4af37] animate-ping'}`} />}
                {islandStatus === 'finished' && <ShieldCheck className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" size={22} />}
              </div>
            </motion.div>
          );
        })}
      </main>

      {/* 2. RIGHT SIDEBAR */}
      <aside className="w-[25%] h-full bg-gradient-to-l from-black via-[#0a0a0a] to-transparent p-12 flex flex-col justify-center z-50 pointer-events-auto mt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.5em] text-[#d4af37] font-bold uppercase">
                {isLocked ? 'Wilayah Terkunci' : 'Target Ekspedisi'}
              </p>
              <h1 className="font-['Cinzel'] text-3xl font-bold uppercase tracking-tighter">
                {isLocked ? '???' : activeIsland?.name}
              </h1>
            </div>

            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
              <img 
                src={assets.landmark} 
                className={`w-full h-full object-cover transition-all duration-700 ${isLocked ? 'blur-2xl opacity-30 grayscale' : 'blur-0 opacity-80'}`} 
                alt="Landmark"
              />
              {isLocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/40">
                  <ShieldAlert className="text-white/20" size={40} />
                  <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-bold">Data Terenskripsi</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Info size={14} className="text-[#d4af37]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Lore & Informasi</span>
              </div>
              <p className="font-['Cormorant_Garamond'] text-lg text-gray-400 leading-relaxed italic border-l-2 border-[#d4af37]/20 pl-4">
                {isLocked ? 'Wilayah ini masih berada di bawah kontrol ketat otoritas kolonial. Selesaikan misi sebelumnya untuk memetakan rute.' : assets.lore}
              </p>
            </div>

            <div className="pt-8">
              <button
                disabled={isLocked}
                onClick={() => onSelectIsland(activeIsland)}
                className={`w-full py-5 flex items-center justify-center space-x-4 border transition-all duration-500
                  ${isLocked 
                    ? 'border-white/5 text-white/10 bg-transparent' 
                    : 'border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-black shadow-[0_0_30px_rgba(212,175,55,0.15)]'
                  }`}
              >
              <span className="font-['Cinzel'] text-[11px] font-black tracking-[0.4em]">
                {activeStatus === 'locked' ? 'AKSES TERBATAS' : 
                activeStatus === 'finished' ? 'WILAYAH DAMAI' : 'MULAI EKSPEDISI'}
              </span>
                {!isLocked && <ChevronRight size={16} />}
              </button>
              
              <p className="text-center mt-6 text-[8px] text-white/20 tracking-[0.2em] uppercase italic">
                {lockedId ? "Fokus Terkunci (Klik area kosong untuk melepas)" : "Arahkan Kompas ke Pulau Tujuan"}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />
    </div>
  );
};

export default WorldMap;