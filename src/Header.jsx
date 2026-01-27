import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Swords, Zap, Clover, Wind, Crown, 
  Coins, Map as MapIcon, Skull, AlertCircle, 
  Sparkles, TrendingUp, Info
} from 'lucide-react';

const Header = ({ 
  player, 
  stats, 
  level, 
  xp, 
  nextXp, 
  gulden, 
  islandName, 
  onOpenMenu, 
  activeTab, 
  freePoints, 
  statusEffects = [] 
}) => {
  const [isStatsHovered, setIsStatsHovered] = useState(false);
  
  // --- SINKRONISASI LOGIKA BASE 30 ---
  // maxHp dihitung dinamis dari stat Tahan pahlawan
  const maxHp = stats.Tahan * 10;
  const hpPercent = Math.max(0, Math.min(100, (stats.hp / maxHp) * 100));
  const xpPercent = Math.max(0, Math.min(100, (xp / nextXp) * 100));

  // Pemetaan Ikon Atribut untuk Tooltip Navigasi
  const statIcons = [
    { label: "Kuat", icon: <Swords size={12} />, value: stats.Kuat, desc: "Daya Serang Raga" },
    { label: "Tahan", icon: <Shield size={12} />, value: stats.Tahan, desc: "Vitalitas & Pertahanan" },
    { label: "Mistis", icon: <Zap size={12} />, value: stats.Mistis, desc: "Kekuatan Karsa" },
    { label: "Luwes", icon: <Wind size={12} />, value: stats.Luwes, desc: "Refleks & Kecepatan" },
    { label: "Pulung", icon: <Clover size={12} />, value: stats.Pulung, desc: "Keberuntungan Nasib" },
    { label: "Wibawa", icon: <Crown size={12} />, value: stats.Wibawa, desc: "Karisma Niaga" },
  ];

  // Helper untuk menentukan visual efek status
  const getStatusVisual = (effect) => {
    switch (effect) {
      case 'POISON':
        return { 
          icon: <Skull size={10} />, 
          color: "text-red-500", 
          bg: "bg-red-500/20", 
          border: "border-red-500/40",
          label: "Teracuni"
        };
      case 'CURSED':
        return { 
          icon: <AlertCircle size={10} />, 
          color: "text-purple-500", 
          bg: "bg-purple-500/20", 
          border: "border-purple-500/40",
          label: "Terkutuk"
        };
      default:
        return { 
          icon: <Info size={10} />, 
          color: "text-blue-400", 
          bg: "bg-blue-400/20", 
          border: "border-blue-400/40",
          label: "Aktif"
        };
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none p-10 select-none">
      {/* Cinematic Top Vignette - Memberikan kedalaman pada UI */}
      <div className="absolute inset-0 h-56 bg-gradient-to-b from-black/95 via-black/40 to-transparent pointer-events-none" />
      
      <div className="relative flex justify-between items-start pointer-events-auto">
        
        {/* --- BAGIAN KIRI: IDENTITAS, HP BAR, & STATUS EFFECTS --- */}
        <div className="flex items-start space-x-8">
          
          {/* Portrait Container dengan Indikator Tingkat */}
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="h-20 w-20 rounded-full border-2 border-[#d4af37]/20 overflow-hidden bg-black shadow-[0_0_40px_rgba(0,0,0,1)] relative z-10"
            >
              <img 
                src={player.imageIdle} 
                className="h-full w-full object-cover mt-12 scale-[3.5] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                alt="Pahlawan" 
              />
              {/* Overlay gradasi pada potret */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            
            {/* Badge Level yang menggantung */}
            <motion.div>
              <span className="font-['Cinzel'] text-md font-black text-[#d4af37] tracking-tighter px-9">
                {level}
              </span>
            </motion.div>
          </div>

          {/* Bar Statis (HP/XP) & Label Nama */}
          <div className="flex flex-col space-y-2 pt-1">
            <div className="flex items-center space-x-4">
              <h2 className="font-['Cinzel'] text-base tracking-[0.5em] text-white font-black uppercase drop-shadow-2xl">
                {player.name}
              </h2>
              
              {/* STATUS EFFECTS ROW: Menampilkan debuff/buff aktif */}
              <div className="flex space-x-2">
                <AnimatePresence>
                  {statusEffects.map((effect, idx) => {
                    const visual = getStatusVisual(effect);
                    return (
                      <motion.div
                        key={`${effect}-${idx}`}
                        initial={{ scale: 0, x: -10 }}
                        animate={{ scale: 1, x: 0 }}
                        exit={{ scale: 0 }}
                        className={`flex items-center space-x-1.5 px-2 py-0.5 border ${visual.border} ${visual.bg} rounded-sm shadow-sm`}
                      >
                        <span className={`${visual.color} animate-pulse`}>{visual.icon}</span>
                        <span className={`text-[8px] font-black uppercase tracking-widest ${visual.color}`}>
                          {visual.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

          <div className="flex flex-col space-y-4 pt-1">
            {/* HP BAR (Red Tapered) */}
            <div className="relative flex items-center group">
              <div 
                className="h-[6px] w-48 bg-white/5 relative border-l border-white/20"
                style={{ clipPath: 'polygon(100% 60%, 25% 20%, 0% 0%, 5% 80%, 80% 100%)' }}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${hpPercent}%` }}
                  className="h-full bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                />
              </div>
              <span className="ml-4 font-['Cinzel'] text-[9px] text-[#ef4444] tracking-widest font-bold opacity-80">
                {stats.hp} <span className="opacity-30 text-white">/</span> {maxHp}
              </span>
            </div>

            {/* XP BAR (Blue Tapered) */}
            <div className="relative flex items-center">
              <div 
                className="h-[3px] w-40 bg-white/5 relative border-l border-white/10"
                style={{ clipPath: 'polygon(100% 60%, 25% 20%, 0% 0%, 5% 80%, 80% 100%)' }}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${xpPercent}%` }}
                  className="h-full bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                />
              </div>
              <span className="ml-4 font-['Cinzel'] text-[8px] text-blue-400 tracking-[0.2em] font-bold opacity-70">
                {xp} <span className="opacity-30 text-white">/</span> {nextXp}
              </span>
            </div>
          </div>
        </div>
        </div>

        {/* --- BAGIAN TENGAH: NAVIGASI UTAMA & LOKASI --- */}
        <nav className="flex items-center space-x-15 pt-4">
          
          {/* TAB ATRIBUT DENGAN TOOLTIP DINAMIS */}
          <div className="relative flex flex-col items-center">
            <MenuTab 
              label="ATRIBUT" 
              active={activeTab === 'STATS'} 
              onClick={() => onOpenMenu('STATS')} 
              onMouseEnter={() => setIsStatsHovered(true)}
              onMouseLeave={() => setIsStatsHovered(false)}
              notify={freePoints > 0}
            />
            
            <AnimatePresence>
              {isStatsHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-16 bg-black/95 backdrop-blur-3xl border border-[#d4af37]/20 p-8 min-w-[200px] shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-[110]"
                >
                  {/* Judul Tooltip */}
                  <div className="mb-6 border-b border-white/5 pb-3">
                    <p className="font-['Cinzel'] text-[10px] tracking-[0.5em] text-[#d4af37] font-black uppercase">Resonansi Jiwa</p>
                  </div>

                  <div className="space-y-4">
                    {statIcons.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group/item">
                        <div className="flex items-center space-x-4">
                          <span className="text-[#d4af37]/40 group-hover/item:text-[#d4af37] transition-colors">{item.icon}</span>
                          <div className="flex flex-col">
                            <span className="font-['Cinzel'] text-[11px] font-black text-white group-hover/item:text-[#d4af37] transition-colors uppercase tracking-widest">{item.label}</span>
                            <span className="text-[7px] text-white/20 uppercase tracking-[0.2em]">{item.desc}</span>
                          </div>
                        </div>
                        <span className="font-['Cinzel'] text-lg font-black text-white drop-shadow-md">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {freePoints > 0 && (
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mt-6 pt-5 border-t border-white/10 text-center"
                    >
                      <span className="text-[9px] text-[#d4af37] tracking-[0.4em] font-black uppercase italic">
                        {freePoints} POIN TAKDIR TERSEDIA
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <MenuTab 
            label="PASAR" 
            active={activeTab === 'MARKET'} 
            onClick={() => onOpenMenu('MARKET')} 
          />
          
          {/* INDICATOR LOKASI (DYNAMIC ISLAND NAME) */}
          <div className="flex items-center space-x-5 text-white/20 border-l border-white/10 pl-24 h-6 self-center group cursor-default">
            <div className="relative">
              <MapIcon size={16} className="text-[#d4af37]/40 group-hover:text-[#d4af37] transition-all duration-500" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Cinzel'] text-xs tracking-[0.5em] uppercase text-white/50 group-hover:text-[#d4af37] transition-all duration-500">
                {islandName || "Samudra Hindia"}
              </span>
            </div>
          </div>
        </nav>

        {/* --- BAGIAN KANAN: EKONOMI (GULDEN) --- */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="pt-4 flex flex-col items-end group cursor-help"
        >
          <div className="flex items-center space-x-5 bg-white/[0.02] border border-white/5 px-6 py-2 rounded-sm group-hover:bg-white/[0.04] group-hover:border-[#d4af37]/20 transition-all duration-500">
            <div className="flex flex-col items-end">
              <span className="font-['Cinzel'] text-2xl font-black text-[#d4af37] tracking-[0.1em] leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {gulden.toLocaleString()}
              </span>
            </div>
            <div className="relative">
              <Coins size={22} className="text-[#d4af37] group-hover:rotate-[15deg] transition-transform duration-700" />
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 text-[#d4af37] blur-sm"
              >
                <Coins size={22} />
              </motion.div>
            </div>
          </div>
          <span className="mt-2 mr-2 text-[7px] text-white/30 tracking-[0.4em] uppercase font-bold italic justify-right">Gulden</span>
        </motion.div>

      </div>
    </header>
  );
};

/* --- SUB-KOMPONEN: MENU TAB (Navigasi dengan Animasi Garis) --- */
const MenuTab = ({ label, active, onClick, onMouseEnter, onMouseLeave, notify }) => (
  <button 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="relative flex flex-col items-center group outline-none cursor-pointer p-2"
  >
    {/* Label Tab */}
    <span className={`font-['Cinzel'] text-[13px] tracking-[0.8em] font-black transition-all duration-700
      ${active ? 'text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'text-white/20 group-hover:text-white/80'}
    `}>
      {label}
    </span>
    
    {/* Animasi Garis Bawah (Underline) */}
    <div className="relative h-[2px] w-full mt-4 overflow-hidden bg-white/5">
      <motion.div 
        initial={false}
        animate={{ x: active ? '0%' : '-100%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_20px_rgba(212,175,55,0.8)]"
      />
    </div>

    {/* Indikator Notifikasi (Dot Merah) */}
    {notify && (
      <div className="absolute -top-1 -right-4">
        <span className="absolute inset-0 w-2.5 h-2.5 bg-red-600 rounded-full blur-[2px] animate-ping" />
        <span className="relative block w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_10px_#dc2626]" />
      </div>
    )}
  </button>
);

export default Header;