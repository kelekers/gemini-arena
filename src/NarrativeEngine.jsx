import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dices, ChevronRight, Zap, Plus, Equal, ScrollText, 
  Sparkles, Lock, Backpack, Swords, Ghost, History,
  Skull, Heart, AlertTriangle, ShieldCheck, Star, Map as MapIcon
} from 'lucide-react';

/**
 * NARRATIVE ENGINE V5 - SINERGI TAKDIR, KARMA & TRANSISI WILAYAH
 * Engine ini mengelola dialog, pengecekan stat (Base 30), Hidden Karma, dan transisi antar pulau.
 * REVISI: Implementasi Leader-Based Alignment Filtering untuk Ending.
 */
const NarrativeEngine = ({ 
  playerStats, 
  playerInventory = [],
  alignmentScore = { PRESERVATION: 0, DOMINATION: 0, CORRUPTION: 0 },
  storyNodes, 
  startNodeId, 
  onEventEnd, 
  onStatChange,
  onGuldenChange,
  onXpChange,
  onFlagUpdate, 
  onBattleTrigger 
}) => {
  // --- STATE INTERNAL ENGINE ---
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [isRolling, setIsRolling] = useState(false);
  const [rollData, setRollData] = useState({ roll: 0, bonus: 0, luck: 0, total: 0, dc: 0, statName: '' });
  const [showMath, setShowMath] = useState(false);
  const [checkOutcome, setCheckOutcome] = useState(null); 
  const [showHistory, setShowHistory] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const scrollRef = useRef(null);
  const node = storyNodes[currentNodeId] || { text: "Fragmen waktu tidak ditemukan...", options: [], image: "" };

  useEffect(() => {
    if (startNodeId) setCurrentNodeId(startNodeId);
  }, [startNodeId]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    
    if (node?.glitch) {
      setIsGlitching(true);
      const timer = setTimeout(() => setIsGlitching(false), 800);
      return () => clearTimeout(timer);
    }
  }, [currentNodeId, node]);

  // --- 1. SISTEM PENGECEKAN PERSYARATAN (ITEM, STAT, & KARMA) ---
  const checkOptionAvailability = (option) => {
    // A. HIDDEN KARMA CHECK
    if (option.minAlignment) {
      const isKarmaEnough = Object.entries(option.minAlignment).every(([key, value]) => {
        return (alignmentScore[key] || 0) >= value;
      });
      if (!isKarmaEnough) return { available: false, hidden: true, reason: 'KARMA_INSUFFICIENT' };
    }

    // B. Item Requirement
    if (option.itemRequirement) {
      const hasItem = playerInventory.some(item => item.id === option.itemRequirement.id);
      if (!hasItem) return { available: false, reason: 'ITEM_MISSING' };
    }

    // C. Hard Stat Requirement
    if (option.minStat) {
      const { stat, value } = option.minStat;
      if (playerStats[stat] < value) return { available: false, reason: 'STAT_LOW' };
    }

    // D. Kondisi HP
    if (option.requireHealthy && playerStats.hp < 15) {
      return { available: false, reason: 'WOUNDED' };
    }

    return { available: true, hidden: false };
  };

  // --- 2. SISTEM KALKULASI TAKDIR (BASE 30 CALIBRATION) ---
  const handleChoice = (choice) => {
    const status = checkOptionAvailability(choice);
    if (!status.available) return;

    if (choice.requirement) {
      setIsRolling(true);
      setShowMath(false);
      setCheckOutcome(null);
      
      const statName = choice.requirement.stat;
      const statValue = playerStats[statName] || 0;
      const dcGoal = choice.requirement.dc || 10;
      
      const statBonus = Math.floor(statValue / 2);
      const luckBonus = Math.floor((playerStats.Pulung || 0) / 6); 

      setTimeout(() => {
        const roll = Math.floor(Math.random() * 10) + 1;
        const total = roll + statBonus + luckBonus;
        
        let isSuccess = roll === 10 ? true : (roll === 1 ? false : total >= dcGoal);

        setRollData({ roll, bonus: statBonus, luck: luckBonus, total, dc: dcGoal, statName });

        setTimeout(() => setShowMath(true), 600);
        setTimeout(() => {
          setCheckOutcome(isSuccess ? 'success' : 'fail');
          
          setTimeout(() => {
            resolveChoice(choice, isSuccess);
            setIsRolling(false);
            setRollData({ roll: 0, bonus: 0, luck: 0, total: 0, dc: 0, statName: '' });
          }, 2500);
        }, 1200);
      }, 1500);
    } else {
      resolveChoice(choice, true);
    }
  };

// --- 3. RESOLUSI TAKDIR (REVISI: Transition Lock) ---
  const resolveChoice = (choice, isSuccess) => {
    const nextNodeId = isSuccess ? choice.nextNode : (choice.failNode || choice.nextNode);
    const targetNode = storyNodes[nextNodeId];

    // Eksekusi Side-Effects
    if (choice.damage && !isSuccess) onStatChange({ hp: -choice.damage });
    if (choice.rewardStat) onStatChange(choice.rewardStat);
    if (choice.rewardGulden) onGuldenChange(choice.rewardGulden);
    if (choice.alignment) onFlagUpdate(choice.alignment);
    if (choice.rewardXp) onXpChange(choice.rewardXp);

    // Filter Transisi: Jangan langsung panggil onEventEnd agar node sempat dirender
    if (targetNode?.type && targetNode.type !== 'STORY') {
      if (targetNode.type === 'BATTLE_TRIGGER') {
        onBattleTrigger(targetNode.enemyId || null, nextNodeId); 
        return;
      }
      if (targetNode.type === 'ENDING') {
        onBattleTrigger(null, nextNodeId); 
        return;
      }
      // Khusus REGION_TRANSITION, kita biarkan setCurrentNodeId berjalan
      // agar pemain bisa membaca teks "End Region" tersebut.
    }

    setCurrentNodeId(nextNodeId);
  };

  // --- 4. RENDERER FILTERING (LOGIKA JATI DIRI / HIGHEST ALIGNMENT) ---
  const visibleOptions = useMemo(() => {
    const options = node.options || [];
    // Deteksi jika node ini mengandung pilihan berbasis Jati Diri (Alignment)
    const hasAlignmentBranch = options.some(opt => opt.minAlignment);

    if (hasAlignmentBranch) {
      // Cari nilai tertinggi di antara ketiga kategori alignment
      const maxVal = Math.max(
        alignmentScore.PRESERVATION, 
        alignmentScore.DOMINATION, 
        alignmentScore.CORRUPTION
      );

      return options.filter(opt => {
        const status = checkOptionAvailability(opt);
        if (status.hidden) return false;

        // Jika opsi ini adalah jalur alignment, tampilkan hanya jika nilainya adalah yang tertinggi (Leader)
        if (opt.minAlignment) {
          const alignmentKey = Object.keys(opt.minAlignment)[0];
          return (alignmentScore[alignmentKey] || 0) === maxVal;
        }
        return true;
      });
    }

    // Filter standar jika bukan node ending/alignment check
    return options.filter(opt => !checkOptionAvailability(opt).hidden);
  }, [node.options, alignmentScore, playerInventory, playerStats.hp]);

  if (!node) return (
    <div className="h-screen bg-black flex flex-col items-center justify-center space-y-6">
      <Sparkles className="text-[#d4af37] animate-spin" size={64} />
      <span className="font-['Cinzel'] text-[#d4af37] tracking-[1em] uppercase text-sm">Menyusun Fragmen Waktu...</span>
    </div>
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] text-white">
      
      {/* BACKGROUND AMBIENCE & CINEMATIC BLUR */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNodeId}
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 0.2, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.95 }}
          className={`absolute inset-0 bg-cover bg-center grayscale blur-xs transition-all duration-1000 ${isGlitching ? 'invert brightness-150 saturate-200' : ''}`}
          style={{ backgroundImage: `url(${node.image})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

      {/* --- SPLIT SCREEN LAYOUT --- */}
      <div className="relative flex h-full w-full z-10 pt-20">
        
        {/* KIRI: PANEL INTERAKSI (45%) */}
        <section className="w-[45%] h-full flex flex-col p-12 lg:p-20 bg-gradient-to-r from-black via-black/60 to-transparent">
          
          <div className="relative w-[50%] aspect-[16/9] mb-4 group shadow-2xl">
            <div className="absolute inset-0 border border-[#d4af37]/20 z-20 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentNodeId}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                src={node.image} 
                className={`w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 ${isGlitching ? 'grayscale' : ''}`}
                alt="Scene" 
              />
            </AnimatePresence>
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] z-30" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] z-30" />
          </div>

          <div ref={scrollRef} className="flex-1 flex flex-col space-y-4 overflow-y-auto custom-scrollbar pr-6 pb-10">
            {!isRolling && visibleOptions.map((opt, i) => {
              const status = checkOptionAvailability(opt);
              return (
                <button
                  key={i}
                  disabled={!status.available}
                  onClick={() => handleChoice(opt)}
                  className={`group relative w-full text-left p-3 border transition-all duration-500 flex items-center justify-between
                    ${status.available 
                      ? 'bg-white/[0.02] border-white/5 hover:border-[#d4af37] hover:bg-[#d4af37]/5 cursor-pointer' 
                      : 'bg-white/[0.01] border-white/5 opacity-40 cursor-not-allowed grayscale'}`}
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-4">
                      {opt.requirement && (
                        <div className="flex items-center space-x-2 text-[#d4af37]">
                          <Zap size={10} className="animate-pulse" />
                          <span className="text-[9px] tracking-[0.2em] uppercase font-black">{opt.requirement.stat} Check (DC {opt.requirement.dc})</span>
                        </div>
                      )}
                      {opt.itemRequirement && (
                        <div className="flex items-center space-x-2 text-blue-400">
                          <Backpack size={10} />
                          <span className="text-[9px] tracking-[0.2em] uppercase font-black">Butuh: {opt.itemRequirement.id.replace('_', ' ')}</span>
                        </div>
                      )}
                      {opt.minAlignment && (
                        <div className="flex items-center space-x-2 text-[#d4af37]">
                          <Star size={10} className="animate-pulse" />
                          <span className="text-[9px] tracking-[0.2em] uppercase font-black">Jalur Jati Diri Terbuka</span>
                        </div>
                      )}
                    </div>

                    <span className={`font-['Cinzel'] text-sm tracking-widest leading-relaxed transition-colors
                      ${status.available ? 'text-white/60 group-hover:text-white' : 'text-white/20'}`}>
                      {opt.text}
                    </span>
                  </div>

                  {status.available ? (
                    <ChevronRight size={18} className="text-white/10 group-hover:text-[#d4af37] transition-all transform group-hover:translate-x-1" />
                  ) : (
                    <div className="flex flex-col items-end">
                       <Lock size={14} className="text-white/10" />
                       <span className="text-[7px] text-red-500/40 uppercase mt-1 tracking-tighter">{status.reason}</span>
                    </div>
                  )}

                  {status.available && (
                    <motion.div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-hover:w-full transition-all duration-700" />
                  )}
                </button>
              );
            })}

            {/* REVISI: Tombol Khusus untuk Transisi Wilayah */}
            {!isRolling && (node.type === 'REGION_TRANSITION' || node.type === 'END_REGION') && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => onEventEnd(node.targetIsland)}
                className="group relative w-full p-6 border-2 border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all flex items-center justify-center space-x-4 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <MapIcon size={24} className="text-[#d4af37] group-hover:rotate-12 transition-transform" />
                <span className="font-['Cinzel'] text-lg tracking-[0.4em] font-black text-white uppercase">Lanjutkan Perjalanan</span>
                <ChevronRight size={24} className="text-[#d4af37] animate-bounce-x" />
              </motion.button>
            )}
          </div>
        </section>

        {/* KANAN: PANEL NARASI (55%) */}
        <section className="w-[55%] h-full flex flex-col p-20 lg:p-32 bg-gradient-to-l from-black via-transparent to-transparent">
          <div className="mt-auto max-w-2xl relative">
            <div className="mb-12 relative">
              <span className="text-[10px] tracking-[0.8em] text-[#d4af37] font-black uppercase opacity-60 flex items-center mb-4">
                <History size={14} className="mr-4" /> Babad Nusantara
              </span>
              <h3 className="font-['Cinzel'] text-2xl font-black tracking-[0.2em] text-white/95 uppercase drop-shadow-2xl">
                {node.year || "RAHASIA"}
              </h3>
            </div>

            <div className="inline-block px-10 py-3 bg-[#5a0c0c] border-l-4 border-[#d4af37] mb-10 shadow-2xl relative">
              <div className="absolute -inset-1 bg-[#d4af37]/5 blur-sm" />
              <span className="font-['Cinzel'] text-[11px] tracking-[0.6em] font-black text-white relative z-10 uppercase">
                {node.speaker || "NARASI"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentNodeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <p className="font-['Cormorant_Garamond'] text-3xl lg:text-2xl leading-tight text-gray-100 italic font-light drop-shadow-2xl mb-8">
                  "{node.text}"
                </p>
                
                {playerStats.hp < 20 && (
                  <div className="flex items-center space-x-3 text-red-500/60 animate-pulse">
                    <Heart size={14} />
                    <span className="text-[9px] font-black tracking-[0.4em] uppercase">Raga Terluka Parah</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-20">
              <button 
                onClick={() => setShowHistory(true)}
                className="flex items-center space-x-6 text-white/20 hover:text-[#d4af37] transition-all group cursor-pointer"
              >
                <div className="h-[1px] w-16 bg-white/10 group-hover:w-28 group-hover:bg-[#d4af37] transition-all duration-700" />
                <span className="font-['Cinzel'] text-[10px] tracking-[0.5em] uppercase font-black">Buka Kitab Sejarah</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* --- MODAL: DICE ROLL OVERLAY --- */}
      <AnimatePresence>
        {isRolling && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-10"
          >
            <div className="flex flex-col items-center w-full max-w-4xl">
              <span className="text-[#d4af37] font-['Cinzel'] tracking-[2em] text-[10px] mb-6 uppercase opacity-40 ml-8 text-center">Menimbang Suratan Takdir</span>
              
              <div className="relative h-80 w-80 flex items-center justify-center">
                <motion.div
                  animate={!showMath ? { 
                    rotateY: [0, 1080], rotateX: [0, 360], scale: [1, 1.2, 1]
                  } : { rotateY: 0, rotateX: 0 }}
                  transition={{ duration: 1.5, ease: "circInOut" }}
                >
                  <AnimatePresence mode="wait">
                    {rollData.roll > 0 ? (
                      <motion.span 
                        key="val" initial={{ scale: 0, filter: 'blur(10px)' }} animate={{ scale: 1, filter: 'blur(0px)' }}
                        className="font-['Cinzel'] text-[6rem] font-black text-white drop-shadow-[0_0_80px_rgba(212,175,55,0.7)]"
                      >
                        {rollData.roll}
                      </motion.span>
                    ) : (
                      <Dices size={160} strokeWidth={0.5} className="text-white/60 animate-bounce" />
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className="absolute inset-0 border-2 border-[#d4af37]/10 rounded-full animate-ping" />
              </div>

              <div className="mt-4 min-h-[180px] flex flex-col items-center">
                {showMath && (
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center space-y-10">
                    <div className="flex items-center space-x-12 text-4xl font-['Cinzel'] font-black">
                      <div className="text-center group">
                        <span className="block text-[10px] text-white/30 tracking-widest mb-3 uppercase">Dadu</span>
                        <span className="text-white/90">{rollData.roll}</span>
                      </div>
                      <Plus size={24} className="text-[#d4af37] mt-8" />
                      <div className="text-center">
                        <span className="block text-[10px] text-[#d4af37]/60 tracking-widest mb-3 uppercase">Bonus {rollData.statName}</span>
                        <span className="text-[#d4af37]">{rollData.bonus}</span>
                      </div>
                      <Plus size={24} className="text-green-500 mt-8" />
                      <div className="text-center">
                        <span className="block text-[10px] text-green-500/60 tracking-widest mb-3 uppercase">Keberuntungan</span>
                        <span className="text-green-500">{rollData.luck}</span>
                      </div>
                      <Equal size={24} className="text-white/10 mt-8" />
                      <div className={`text-center px-10 border-b-4 ${checkOutcome === 'success' ? 'border-green-500 text-green-500 shadow-[0_15px_30px_rgba(34,197,94,0.2)]' : 'border-red-600 text-red-600 shadow-[0_15px_30px_rgba(220,38,38,0.2)]'}`}>
                        <span className="block text-[10px] text-white/30 tracking-widest mb-3 uppercase">Total</span>
                        <span className="text-white/90">{rollData.total}</span>
                      </div>
                    </div>
                    <span className="text-[11px] tracking-[0.8em] text-white/20 uppercase font-bold">Ambang Takdir (DC): {rollData.dc}</span>
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {checkOutcome && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className={`mt-4 font-['Cinzel'] text-4xl tracking-[1.5em] font-black uppercase text-center ml-12
                      ${checkOutcome === 'success' ? 'text-green-500' : 'text-red-700'}
                    `}
                  >
                    {checkOutcome === 'success' ? "TAKDIR TERJALIN" : "TAKDIR TERPUTUS"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SLIDE-IN PANEL: ARSIP SEJARAH --- */}
      <AnimatePresence>
        {showHistory && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-full max-w-md bg-[#080808] border-l border-[#d4af37]/20 z-[600] shadow-[-100px_0_150px_rgba(0,0,0,1)] flex flex-col"
          >
            <div className="p-16 lg:p-24 flex-1 overflow-y-auto custom-scrollbar">
              <button 
                onClick={() => setShowHistory(false)} 
                className="mb-10 text-[#d4af37] font-['Cinzel'] text-[11px] tracking-[0.5em] uppercase hover:text-white transition-colors flex items-center group cursor-pointer"
              >
                <ChevronRight size={14} className="rotate-180 mr-4 group-hover:-translate-x-3 transition-transform" /> Kembali ke Karsa
              </button>
              
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="text-[8px] tracking-[0.8em] text-[#d4af37] font-black uppercase opacity-40 italic flex items-center">
                    <ScrollText size={16} className="mr-4" /> Fragmen Memori Nusantara
                  </span>
                  <h2 className="font-['Cinzel'] text-xl font-black uppercase tracking-tighter leading-[0.85] text-white/95 drop-shadow-lg">
                     {node.historyTitle || "Fragmen Tanpa Judul"}
                  </h2>
                  <div className="h-[4px] w-32 bg-red-900 shadow-[0_0_15px_rgba(127,29,29,0.5)]" />
                </div>

                <div className="relative w-full aspect-video bg-black border border-white/10 group overflow-hidden shadow-2xl">
                  <img 
                    src={node.historyImage || node.image} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2.5s] ease-out" 
                    alt="Relik Sejarah" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck size={16} className="text-[#d4af37]" />
                    <span className="text-[10px] font-black text-[#d4af37] tracking-[0.2em] uppercase">Arsip Terverifikasi</span>
                  </div>
                </div>

                <div className="relative">
                  <p className="font-['Cormorant_Garamond'] text-md text-justify leading-relaxed text-gray-400 italic first-letter:text-4xl first-letter:text-[#d4af37] first-letter:float-left first-letter:mr-4 first-letter:font-['Cinzel'] first-letter:font-black first-letter:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                    {node.historyText || "Halaman ini telah dimakan oleh rayap waktu..."}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-black/80 border-t border-white/5 backdrop-blur-xl">
              <p className="font-['Cinzel'] text-[10px] tracking-[1em] text-white/10 uppercase text-center font-black">
                Membaca Sejarah Adalah Menggenggam Takdir
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NarrativeEngine;