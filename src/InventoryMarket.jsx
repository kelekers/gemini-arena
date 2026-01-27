import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coins, Sparkles, TrendingUp, ShieldCheck, Zap, Sword, Package, Trash2, Lock } from 'lucide-react';
import { ITEMS, MARKET_CATALOG } from './Constants';

const InventoryMarket = ({ 
  isOpen, 
  onClose, 
  playerInventory, 
  equippedItems, 
  gulden, 
  playerStats, 
  currentIslandId, 
  onBuy, 
  onSell, 
  onUseItem 
}) => {
  const [tab, setTab] = useState('MARKET'); 
  const [selectedItem, setSelectedItem] = useState(null);

  // --- LOGIKA EKONOMI WIBAWA (Base 30) ---
  const getDiscountedPrice = (basePrice) => {
    const discountRate = playerStats.Wibawa * 0.01; 
    const finalDiscount = Math.min(0.3, discountRate); 
    return Math.round(basePrice * (1 - finalDiscount));
  };

  const getSellingPrice = (basePrice) => {
    const baseSell = basePrice * 0.5;
    const bonusRate = playerStats.Wibawa * 0.005;
    const finalBonus = Math.min(0.15, bonusRate);
    return Math.round(baseSell * (1 + finalBonus));
  };

  const availableItems = MARKET_CATALOG[currentIslandId] || [];

  // --- LOGIKA KEPEMILIKAN (Limit Buy Once) ---
  const isAlreadyOwned = useMemo(() => {
    if (!selectedItem || selectedItem.type === 'CONSUMABLE') return false;
    
    const inInventory = playerInventory.some(item => item.id === selectedItem.id);
    const isEquipped = equippedItems && Object.values(equippedItems).some(eq => eq?.id === selectedItem.id);
    
    return inInventory || isEquipped;
  }, [selectedItem, playerInventory, equippedItems]);

  // Helper Warna Kelangkaan
  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case 'Legendary': return { color: '#ef4444', glow: 'rgba(239, 68, 68, 0.4)', bg: 'rgba(239, 68, 68, 0.05)' };
      case 'Epic': return { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', bg: 'rgba(168, 85, 247, 0.05)' };
      case 'Rare': return { color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)', bg: 'rgba(59, 130, 246, 0.05)' };
      case 'Uncommon': return { color: '#22c55e', glow: 'rgba(34, 197, 94, 0.4)', bg: 'rgba(34, 197, 94, 0.05)' };
      default: return { color: '#94a3b8', glow: 'rgba(148, 163, 184, 0.2)', bg: 'rgba(148, 163, 184, 0.05)' };
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12 lg:p-20 font-serif"
        >
          <div className="relative w-full h-full max-w-7xl flex flex-col bg-[#050505] shadow-[0_0_150px_rgba(0,0,0,1)] border border-white/5 overflow-hidden rounded-sm">
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

            {/* 1. TOP NAVIGATION & ECONOMY */}
            <header className="relative p-1 flex justify-between items-center border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent z-10">
              <div className="flex space-x-12">
                <NavTab label="Pasar Wilayah" active={tab === 'MARKET'} onClick={() => {setTab('MARKET'); setSelectedItem(null);}} icon={<Package size={16} />} />
                <NavTab label="Tas Perbekalan" active={tab === 'INVENTORY'} onClick={() => {setTab('INVENTORY'); setSelectedItem(null);}} icon={<Sword size={16} />} />
              </div>

              <div className="flex items-center space-x-10">
                <div className="flex flex-col items-end">
                  <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-2">Simpanan Gulden</p>
                  <div className="flex items-center space-x-4 bg-white/[0.03] px-6 py-2 rounded-full border border-white/5">
                    <span className="font-['Cinzel'] text-2xl font-bold text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                      {gulden.toLocaleString()}
                    </span>
                    <Coins size={20} className="text-[#d4af37]" />
                  </div>
                </div>
                <button onClick={onClose} className="group p-3 hover:bg-red-950/20 transition-all text-white/20 hover:text-red-500 border border-transparent hover:border-red-900/30 cursor-pointer">
                  <X size={36} strokeWidth={1} />
                </button>
              </div>
            </header>

            {/* 2. CORE CONTENT */}
            <main className="relative flex-1 flex overflow-hidden z-10 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] bg-repeat shadow-inner">
              
              {/* LEFT: GRID AREA */}
              <section className="w-[60%] overflow-y-auto p-12 custom-scrollbar border-r border-white/5 bg-black/40">
                <div className="grid grid-cols-4 gap-6 pb-20">
                  {tab === 'MARKET' ? (
                    availableItems.map((id) => (
                      <ItemSlot 
                        key={id} 
                        item={ITEMS[id]} 
                        isSelected={selectedItem?.id === id}
                        onClick={() => setSelectedItem(ITEMS[id])}
                        rarityStyle={getRarityStyle(ITEMS[id]?.rarity)}
                      />
                    ))
                  ) : (
                    playerInventory.map((item, i) => (
                      <ItemSlot 
                        key={`${item.id}-${i}`} 
                        item={item} 
                        isSelected={selectedItem === item}
                        onClick={() => setSelectedItem(item)}
                        rarityStyle={getRarityStyle(item.rarity)}
                      />
                    ))
                  )}
                  {/* Empty Slots Fillers */}
                  {[...Array(Math.max(0, 16 - (tab === 'MARKET' ? availableItems.length : playerInventory.length)))].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square border border-white/[0.02] bg-white/[0.01] rounded-sm" />
                  ))}
                </div>
              </section>

                {/* RIGHT: DETAIL PANEL */}
                <section className="w-[40%] bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col h-full border-l border-white/5 overflow-hidden">
                <AnimatePresence mode="wait">
                    {selectedItem ? (
                    <motion.div 
                        key={selectedItem.id}
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full overflow-hidden"
                    >
                        {/* 1. IDENTITY HEADER (CLEAN & SLENDER) */}
                        <div className="p-8 pb-4">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="h-[2px] w-10" style={{ backgroundColor: getRarityStyle(selectedItem.rarity).color }} />
                            <span className="text-[10px] tracking-[0.4em] uppercase font-black" style={{ color: getRarityStyle(selectedItem.rarity).color }}>
                            {selectedItem.rarity} {selectedItem.type}
                            </span>
                        </div>
                        <h2 className="font-['Cinzel'] text-2xl font-bold text-white tracking-widest uppercase leading-tight">
                            {selectedItem.name}
                        </h2>
                        </div>

                        {/* 2. DESCRIPTION FRAME (REPLACING PHOTO) */}
                        <div className="px-8 space-y-4">
                        <div className="w-full bg-black/40 border border-white/5 p-6 relative overflow-hidden rounded-sm shadow-xl min-h-[120px] flex items-center">
                            <div 
                            className="absolute inset-0 opacity-10" 
                            style={{ background: `radial-gradient(circle at top left, ${getRarityStyle(selectedItem.rarity).color} 0%, transparent 70%)` }} 
                            />
                            <p className="font-['Cormorant_Garamond'] text-md leading-relaxed italic text-gray-300 relative z-10 drop-shadow-sm">
                            "{selectedItem.description}"
                            </p>
                        </div>

                        {/* 3. COMPACT STATS GRID (NO SCROLL) */}
                        <div className="grid grid-cols-2 gap-2">
                            {selectedItem.stats && Object.entries(selectedItem.stats).map(([stat, val]) => (
                            <div key={stat} className="flex justify-between items-center bg-white/[0.02] p-3 border border-white/5">
                                <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">{stat}</span>
                                <span className="font-['Cinzel'] text-base text-[#d4af37] font-bold">+{val}</span>
                            </div>
                            ))}

                            {selectedItem.effect?.hp && (
                            <div className="col-span-2 flex justify-between items-center bg-green-500/5 p-3 border border-green-500/20">
                                <span className="text-[9px] text-green-500/60 uppercase tracking-widest flex items-center font-bold">
                                <ShieldCheck size={12} className="mr-2"/> Pemulihan Raga
                                </span>
                                <span className="font-['Cinzel'] text-base text-green-500 font-bold">+{selectedItem.effect.hp} HP</span>
                            </div>
                            )}

                            {selectedItem.effect?.status && (
                            <div className="col-span-2 flex justify-between items-center bg-blue-500/5 p-3 border border-blue-500/20">
                                <span className="text-[9px] text-blue-400 uppercase tracking-widest flex items-center font-bold">
                                <Sparkles size={12} className="mr-2"/> Penawar
                                </span>
                                <span className="font-['Cinzel'] text-[10px] text-blue-400 font-black uppercase tracking-widest text-right">
                                {selectedItem.effect.status.replace('_', ' ')}
                                </span>
                            </div>
                            )}

                            {selectedItem.effect && Object.entries(selectedItem.effect).map(([key, val]) => {
                            if (key === 'hp' || key === 'status') return null;
                            return (
                                <div key={key} className="col-span-2 flex justify-between items-center bg-[#d4af37]/5 p-3 border border-[#d4af37]/20">
                                <span className="text-[9px] text-[#d4af37]/60 uppercase tracking-widest flex items-center font-bold">
                                    <Zap size={12} className="mr-2"/> Buff {key === 'All_Stats' ? 'Atribut' : key}
                                </span>
                                <span className="font-['Cinzel'] text-base text-[#d4af37] font-bold">+{val}</span>
                                </div>
                            );
                            })}
                        </div>
                        </div>

                        {/* 4. ACTION BUTTONS (LOCKED TO BOTTOM) */}
                        <div className="mt-auto p-8 bg-black/40 border-t border-white/5 space-y-3">
                        {tab === 'MARKET' ? (
                            <div className="space-y-2">
                            {playerStats.Wibawa > 0 && !isAlreadyOwned && (
                                <div className="flex justify-between items-center px-1">
                                <span className="text-[8px] tracking-[0.2em] text-white/20 uppercase font-black">Kewibawaan Niaga</span>
                                <span className="text-[9px] text-green-500 font-black tracking-widest">
                                    -{Math.min(30, playerStats.Wibawa)}% DISKON
                                </span>
                                </div>
                            )}

                            <button 
                                onClick={() => onBuy(selectedItem, getDiscountedPrice(selectedItem.price))}
                                disabled={gulden < getDiscountedPrice(selectedItem.price) || isAlreadyOwned}
                                className={`w-full py-3 flex items-center justify-between px-10 border transition-all duration-500 group relative
                                ${isAlreadyOwned 
                                    ? 'border-white/5 text-white/10 grayscale cursor-not-allowed' 
                                    : gulden >= getDiscountedPrice(selectedItem.price) 
                                    ? 'border-[#d4af37]/40 hover:bg-[#d4af37] text-[#d4af37] hover:text-black cursor-pointer' 
                                    : 'border-white/5 text-white/10 grayscale cursor-not-allowed'}`}
                            >
                                <div className="flex flex-col items-start">
                                <span className="font-['Cinzel'] text-xs font-black tracking-[0.5em] uppercase">
                                    {isAlreadyOwned ? 'DIMILIKI' : 'AKUISISI'}
                                </span>
                                </div>
                                {!isAlreadyOwned && (
                                <div className="flex items-center space-x-3">
                                    <span className="font-['Cinzel'] text-2xl font-bold text-current">
                                    {getDiscountedPrice(selectedItem.price).toLocaleString()}
                                    </span>
                                    <Coins size={18} />
                                </div>
                                )}
                                {isAlreadyOwned && <Lock size={20} className="opacity-20" />}
                            </button>
                            </div>
                        ) : (
                            <div className="space-y-3">
                            <button 
                                onClick={() => { onUseItem(selectedItem, playerInventory.indexOf(selectedItem)); setSelectedItem(null); }}
                                className="w-full py-3 flex items-center justify-center space-x-4 border border-[#d4af37] bg-[#d4af37]/5 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer shadow-lg"
                            >
                                <Zap size={18} />
                                <span className="font-['Cinzel'] text-xs font-black tracking-[0.6em] uppercase">
                                {selectedItem.type === 'CONSUMABLE' ? 'GUNAKAN' : 'PASANG'}
                                </span>
                            </button>

                            <button 
                                onClick={() => onSell(selectedItem, getSellingPrice(selectedItem.price))}
                                className="w-full py-3 flex items-center justify-between px-10 border border-white/5 text-white/20 hover:text-red-500 hover:bg-red-950/10 transition-all cursor-pointer"
                            >
                                <span className="font-['Cinzel'] text-[9px] font-black tracking-[0.3em] uppercase">Lepas Hak</span>
                                <div className="flex items-center space-x-2">
                                <span className="font-['Cinzel'] text-lg font-bold">{getSellingPrice(selectedItem.price).toLocaleString()}</span>
                                <Coins size={14} />
                                </div>
                            </button>
                            </div>
                        )}
                        </div>
                    </motion.div>
                    ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-10">
                        <Sparkles size={80} strokeWidth={0.5} className="mb-4 animate-pulse" />
                        <p className="font-['Cinzel'] text-[10px] tracking-[1em] uppercase leading-loose text-white">
                        Tinjau Fragmen
                        </p>
                    </div>
                    )}
                </AnimatePresence>
                </section>
            </main>

            {/* Footer Status Bar */}
            <footer className="p-2 bg-black flex justify-between items-center border-t border-white/5 z-20">
                <div className="flex items-center space-x-12 px-4">
                  <StatInfo label="WIBAWA" val={playerStats.Wibawa} max={30} />
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div className="flex items-center space-x-4 group">
                    <TrendingUp size={16} className="text-green-500 transition-transform group-hover:scale-125" />
                    <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-black">
                      Efisiensi Niaga: <span className="text-green-500">+{Math.min(30, playerStats.Wibawa)}%</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-6 px-4">
                  <p className="text-[10px] tracking-[0.6em] text-white/10 uppercase font-black italic">
                    Fragment Pasar Nusantara v2.7 • 2120-1945 Synchronized
                  </p>
                </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* --- SUB-COMPONENTS --- */

const NavTab = ({ label, active, onClick, icon }) => (
  <button onClick={onClick} className="relative py-4 px-2 group cursor-pointer outline-none flex items-center space-x-4">
    <div className={`transition-all duration-700 ${active ? 'text-[#d4af37]' : 'text-white/20 group-hover:text-white/60'}`}>
      {icon}
    </div>
    <span className={`font-['Cinzel'] text-[13px] tracking-[0.7em] font-black transition-all duration-500 
      ${active ? 'text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'text-white/20 group-hover:text-white/60'}`}>
      {label}
    </span>
    {active && (
      <motion.div 
        layoutId="activeTabUnderline" 
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37] shadow-[0_0_25px_#d4af37]" 
      />
    )}
  </button>
);

const ItemSlot = ({ item, isSelected, onClick, rarityStyle }) => (
  <motion.button
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`aspect-square border transition-all duration-700 relative group flex items-center justify-center p-8 cursor-pointer rounded-sm
      ${isSelected 
        ? 'bg-white/[0.08] border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.15)] z-20' 
        : 'bg-black/60 border-white/[0.04] hover:border-white/20 hover:bg-white/[0.02]'}`}
  >
    {/* Rarity Indicator (Corner Notch) */}
    <div className="absolute top-0 left-0 w-full h-[4px] transition-opacity duration-700" 
         style={{ backgroundColor: rarityStyle.color, opacity: isSelected ? 1 : 0.2 }} />
    
    {/* Dynamic Background Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
         style={{ background: `radial-gradient(circle, ${rarityStyle.color} 0%, transparent 70%)` }} />

    <img 
      src={item.image || item.imageIdle} 
      alt={item.name} 
      className={`w-full h-full object-contain transition-all duration-1000 
        ${isSelected ? 'brightness-125 scale-110 rotate-2' : 'brightness-[0.35] opacity-50 group-hover:brightness-90 group-hover:opacity-100'}`} 
    />
    
    {item.type === 'WEAPON' && (
      <div className="absolute bottom-4 right-4 text-[#d4af37]/20 group-hover:text-[#d4af37]/80 transition-all">
        <Sword size={12} strokeWidth={3} />
      </div>
    )}

    {isSelected && (
      <motion.div 
        layoutId="slotGlowActive" 
        className="absolute -inset-1 border border-[#d4af37]/30 blur-[2px] pointer-events-none" 
      />
    )}
  </motion.button>
);

const StatInfo = ({ label, val, max }) => (
  <div className="flex items-center space-x-6">
    <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-black">{label}</span>
    <div className="flex space-x-2">
      {[...Array(6)].map((_, i) => (
        <motion.div 
          key={i} 
          initial={false}
          animate={{ 
            backgroundColor: i < (val / 5) ? '#d4af37' : '#ffffff05',
            boxShadow: i < (val / 5) ? '0 0 10px rgba(212,175,55,0.4)' : 'none'
          }}
          className="h-1.5 w-4 rounded-full" 
        />
      ))}
    </div>
    <span className="font-['Cinzel'] text-sm text-white/50 font-bold tabular-nums">{val} <span className="text-white/10">/ {max}</span></span>
  </div>
);

export default InventoryMarket;