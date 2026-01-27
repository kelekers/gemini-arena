import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Swords, Zap, Flame, ShieldAlert, Heart, 
  Wind, Skull, Sparkles, TrendingUp, X 
} from 'lucide-react';

const CombatEngine = ({
  player, 
  playerStats, 
  playerInventory, 
  enemyData, 
  statusEffects, 
  onStatusChange, 
  onHpChange, 
  onItemUsed, // Callback baru untuk menghapus item di App.jsx
  onVictory, 
  onDefeat, 
  onFlee 
}) => {
  // --- STATE PERTEMPURAN ---
  const [battleHp, setBattleHp] = useState(playerStats.hp);
  const [ultimateBar, setUltimateBar] = useState(0); // Bar Saka (0-100)
  const [enemyHp, setEnemyHp] = useState(enemyData.hp);
  const [turnState, setTurnState] = useState('PLAYER_TURN');
  const [actionState, setActionState] = useState('IDLE'); 
  const [combatLog, setCombatLog] = useState("Genggam senjatamu... Takdir menanti.");
  const [showInventory, setShowInventory] = useState(false);
  const [cameraShake, setCameraShake] = useState(0);

  const isParryWindowOpen = useRef(false);
  const parryTimerRef = useRef(null);
  const maxBattleHp = playerStats.Tahan * 10;

  // Sinkronisasi HP ke Global State
  useEffect(() => { onHpChange(battleHp); }, [battleHp]);

  // --- 1. KALKULASI DAMAGE ---
  const getPlayerDmg = (stat) => {
    const base = playerStats[stat] * 1.8;
    const roll = Math.floor(Math.random() * 10) + 1;
    return Math.round(base + (roll * 1.5));
  };

  const getEnemyDmg = () => {
    const def = playerStats.Tahan / 1.2;
    const base = enemyData.atk - def;
    return Math.max(12, Math.round(base + (Math.random() * 8)));
  };

  // --- 2. MEKANIK PERTAHANAN (PARRY) ---
  const applyEnemyDamage = useCallback((isParried = false) => {
    isParryWindowOpen.current = false;
    if (parryTimerRef.current) clearTimeout(parryTimerRef.current);

    if (isParried) {
      setTurnState('ANIMATING');
      // REWARD: Berhasil Parry memberikan +35 energi Saka
      setUltimateBar(prev => Math.min(100, prev + 35));
      setCombatLog("TANGKISAN SEMPURNA! Aliran takdir berbalik.");
      setCameraShake(15);
      setTimeout(() => {
        setCameraShake(0);
        setTurnState('PLAYER_TURN');
      }, 800);
    } else {
      const dmg = getEnemyDmg();
      setActionState('HURT');
      setBattleHp(prev => Math.max(0, prev - dmg));
      setCombatLog(`Gagal menangkis! Musuh menghantam -${dmg} HP.`);
      setCameraShake(10);
      
      if (battleHp - dmg <= 0) {
        setTimeout(() => onDefeat(), 1000);
      } else {
        setTimeout(() => {
          setActionState('IDLE');
          setCameraShake(0);
          setTurnState('PLAYER_TURN');
        }, 800);
      }
    }
  }, [battleHp, enemyData]);

  const handleKeyDown = useCallback((e) => {
    if (e.code === 'Space' && isParryWindowOpen.current) {
      applyEnemyDamage(true);
    }
  }, [applyEnemyDamage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // --- 3. SIKLUS GILIRAN MUSUH ---
  useEffect(() => {
    if (turnState === 'ENEMY_TURN') {
      setCombatLog(`${enemyData.name} mengincar titik lemahmu...`);
      
      const timer = setTimeout(() => {
        const parryChance = 25 + (playerStats.Luwes * 2);
        const canAttemptParry = (Math.random() * 100) <= parryChance;

        if (canAttemptParry) {
          setTurnState('PARRY_WINDOW');
          isParryWindowOpen.current = true;
          const windowTime = 400 + (playerStats.Luwes * 15);
          
          parryTimerRef.current = setTimeout(() => {
            if (isParryWindowOpen.current) applyEnemyDamage(false);
          }, windowTime);
        } else {
          setCombatLog(`${enemyData.name} menyerang secepat kilat!`);
          setTimeout(() => applyEnemyDamage(false), 600);
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [turnState, playerStats.Luwes, applyEnemyDamage, enemyData.name]);

  // --- 4. AKSI PEMAIN (TURN ENDING LOGIC) ---
  const handleAction = (type, item = null, itemIndex = null) => {
    if (turnState !== 'PLAYER_TURN' || actionState !== 'IDLE') return;
    
    setTurnState('ANIMATING');
    let dmg = 0;

    if (type === 'RAGA') {
      setActionState('ATTACK');
      dmg = getPlayerDmg('Kuat');
      setUltimateBar(prev => Math.min(100, prev + 15)); // Serangan Raga menambah Saka
      setCombatLog(`Serangan Raga menghunjam! -${dmg} HP.`);
    } 
    else if (type === 'KARSA') {
      setActionState('ATTACK');
      dmg = getPlayerDmg('Mistis');
      setUltimateBar(prev => Math.min(100, prev + 20)); // Karsa menambah Saka lebih banyak
      setCombatLog(`Karsa murni membakar sukma! -${dmg} HP.`);
    } 
    else if (type === 'ULTIMATE') {
      setActionState('ULTIMATE');
      dmg = Math.round((playerStats.Kuat + playerStats.Mistis) * 2.8);
      setUltimateBar(0);
      setCameraShake(50);
      setCombatLog("PAMUNGKAS: SAKA MEMBELAH TAKDIR!");
    } 
    else if (type === 'ITEM' && item) {
      // PENGGUNAAN ITEM: Mengakhiri giliran seperti Pokemon
      if (item.effect.hp) setBattleHp(p => Math.min(maxBattleHp, p + item.effect.hp));
      
      // Hapus item dari inventory global (App.jsx)
      if (onItemUsed) onItemUsed(itemIndex);
      
      setCombatLog(`Menggunakan ${item.name}. Vitalitas pulih.`);
      setShowInventory(false);
      
      // Transisi langsung ke giliran musuh tanpa memberi damage
      setTimeout(() => {
        setTurnState('ENEMY_TURN');
      }, 1000);
      return; 
    }

    // Eksekusi Damage & Transisi Giliran untuk Serangan
    setTimeout(() => {
      if (dmg > 0) setEnemyHp(prev => Math.max(0, prev - dmg));
      setTimeout(() => {
        setActionState('IDLE');
        if (enemyHp - dmg <= 0) onVictory();
        else setTurnState('ENEMY_TURN');
      }, 600);
    }, 600);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#020202] font-serif text-white">
      {/* Visual Shaker */}
      <div className="absolute inset-0 transition-transform duration-75" style={{ transform: `translate(${Math.random() * cameraShake}px, ${Math.random() * cameraShake}px)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
      </div>

{/* HEADER HUD: VITALITAS & SAKA */}
      <div className="absolute top-12 left-0 w-full px-20 flex justify-between z-50">
        
        {/* PLAYER SIDE (LEFT) */}
        <div className="space-y-4">
          <div className="flex items-end space-x-4">
            <h2 className="font-['Cinzel'] text-2xl tracking-[0.4em] text-[#d4af37] font-black uppercase">
              {player.name || "Pahlawan"}
            </h2>
            {/* HP Numbers Player */}
            <span className="mb-1 font-['Cinzel'] text-[14px] text-[#ef4444] tracking-widest font-bold opacity-80">
              {Math.ceil(battleHp)} <span className="opacity-30 text-white">/</span> {maxBattleHp}
            </span>
          </div>

          <div className="relative">
            {/* Bar Vitalitas Player */} 
            <div 
                className="h-[14px] w-120 bg-white/5 relative border-l border-white/20"
                style={{ clipPath: 'polygon(100% 60%, 25% 20%, 0% 0%, 5% 80%, 80% 100%)' }}
            >
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(battleHp / maxBattleHp) * 100}%` }}
                    className="h-full bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                />
            </div>

            {/* BAR SAKA (ENERGY ULTIMATE) */}
            <div                 
                className="h-[5px] w-60 bg-white/5 relative border-l border-white/20 mt-2"
                style={{ clipPath: 'polygon(100% 60%, 25% 20%, 0% 0%, 5% 80%, 80% 100%)' }}
            >
                <motion.div 
                    className="h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" 
                    animate={{ width: `${ultimateBar}%` }} 
                />
            </div>
          </div>
        </div>

        {/* ENEMY SIDE (RIGHT) */}
        <div className="text-right space-y-4">
          <div className="flex items-end justify-end space-x-4">
            {/* HP Numbers Enemy */}
            <span className="mb-1 font-['Cinzel'] text-[14px] text-white/40 tracking-widest font-bold">
              {Math.ceil(enemyHp)} <span className="opacity-20 text-white">/</span> {enemyData.hp}
            </span>
            <h2 className="font-['Cinzel'] text-2xl tracking-[0.4em] text-white/50 uppercase">{enemyData.name}</h2>
          </div>

          <div 
            className="h-[14px] w-120 bg-white/5 relative border-l border-white/20 ml-auto"
            style={{ clipPath: 'polygon(0% 60%, 75% 20%, 100% 0%, 95% 80%, 20% 100%)' }}
          >
            <motion.div 
              className="h-full bg-white opacity-40 shadow-[0_0_15px_white] absolute right-0" 
              animate={{ width: `${((enemyHp / enemyData.hp) * 100)}%` }} 
            />
          </div>
          
          {/* Label Tipe Musuh (Opsional untuk estetika) */}
          <div className="text-[9px] tracking-[0.6em] text-white/30 font-black uppercase">
            {enemyData.type || "Entitas Asing"}
          </div>
        </div>
      </div>

      {/* MEDAN TEMPUR: SPRITES */}
      <div className="relative h-full flex items-center justify-center pointer-events-none">
        <motion.div animate={{ x: turnState === 'ENEMY_TURN' || turnState === 'PARRY_WINDOW' ? -80 : 0 }} className="ml-64 relative">
          <img src={enemyData.image} className="h-[550px] object-contain brightness-75 contrast-125" alt="Enemy" />
          <AnimatePresence>
            {turnState === 'PARRY_WINDOW' && (
              <motion.div 
                initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[10px] border-[#d4af37] rounded-full flex items-center justify-center shadow-[0_0_50px_#d4af37]"
              >
                <div className="absolute inset-0 animate-ping bg-[#d4af37]/20 rounded-full" />
                <span className="font-['Cinzel'] text-sm text-[#d4af37] tracking-[0.5em] font-black">TANGKIS [SPACE]</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="absolute bottom-[-100px] left-[5%]"
          animate={{ 
            x: actionState === 'ATTACK' ? 220 : 0, 
            y: actionState === 'HURT' ? 30 : 0,
            scale: actionState === 'ULTIMATE' ? 1.35 : 1,
            rotate: actionState === 'HURT' ? -10 : 0,
            filter: actionState === 'ULTIMATE' ? 'brightness(1.5) drop-shadow(0 0 30px #d4af37)' : 'none'
          }}
        >
          <img src={actionState === 'ULTIMATE' ? playerStats.imgUlt : actionState === 'ATTACK' ? playerStats.imgAtk : playerStats.imgIdle} className="h-[950px] object-contain" alt="Hero" />
        </motion.div>
      </div>

      {/* PUSAT KOMANDO */}
      <div className="absolute bottom-0 w-full p-12 bg-gradient-to-t from-black flex justify-between items-end z-[70]">
        <div className="max-w-xl border-l-4 border-[#d4af37]/20 pl-10">
          <AnimatePresence mode="wait">
            <motion.p key={combatLog} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-['Cormorant_Garamond'] text-2xl italic leading-tight text-gray-200 mb-10">
              "{combatLog}"
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex space-x-6 bg-black/60 p-6 border border-white/5 backdrop-blur-md shadow-2xl">
          <BattleBtn icon={<Swords size={32}/>} label="Raga" onClick={() => handleAction('RAGA')} active={turnState === 'PLAYER_TURN'} />
          <BattleBtn icon={<Zap size={32}/>} label="Karsa" onClick={() => handleAction('KARSA')} active={turnState === 'PLAYER_TURN'} />
          <BattleBtn icon={<Heart size={32}/>} label="Bekal" onClick={() => setShowInventory(true)} active={turnState === 'PLAYER_TURN'} />
          
          {/* TOMBOL SAKA (ULTIMATE) */}
          <BattleBtn 
            icon={<Flame size={32}/>} 
            label="Sakti" 
            active={turnState === 'PLAYER_TURN' && ultimateBar >= 100} 
            onClick={() => handleAction('ULTIMATE')} 
            isSakti
          />
          
          <BattleBtn icon={<Wind size={32}/>} label="Kabur" onClick={onFlee} active={turnState === 'PLAYER_TURN'} danger />
        </div>
      </div>

      {/* MODAL INVENTORY */}
      <AnimatePresence>
        {showInventory && (
          <div className="fixed inset-0 z-[500] bg-black/98 flex items-center justify-center p-20 backdrop-blur-3xl">
            <div className="w-full max-w-4xl border border-white/5 p-16 relative bg-[#050505] shadow-[0_0_100px_rgba(0,0,0,1)]">
              <button onClick={() => setShowInventory(false)} className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"><X size={40}/></button>
              <h2 className="font-['Cinzel'] text-4xl text-[#d4af37] mb-12 tracking-widest uppercase italic">Pundi Perbekalan</h2>
              <div className="grid grid-cols-2 gap-8 max-h-[400px] overflow-auto pr-4 custom-scrollbar">
                {playerInventory.filter(i => i.type === 'CONSUMABLE').map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAction('ITEM', item, i)} 
                    className="p-8 border border-white/5 hover:border-[#d4af37]/50 text-left bg-white/[0.01] hover:bg-[#d4af37]/5 transition-all group"
                  >
                    <h3 className="font-['Cinzel'] text-2xl text-white group-hover:text-[#d4af37] mb-2">{item.name}</h3>
                    <p className="font-serif text-white/30 italic text-sm leading-relaxed">"{item.description}"</p>
                    <div className="mt-4 text-[10px] text-[#d4af37] font-black tracking-widest uppercase">Pilih untuk menggunakan</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BattleBtn = ({ icon, label, onClick, active = true, danger = false, isSakti = false }) => (
  <button 
    onClick={onClick} disabled={!active}
    className={`group relative flex flex-col items-center justify-center w-28 h-28 border transition-all duration-500
      ${!active ? 'opacity-10 grayscale border-white/5 cursor-not-allowed' : 
        danger ? 'border-red-900/40 hover:border-red-500 text-red-900/50 hover:text-red-500 hover:bg-red-500/5' :
        isSakti ? 'border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse' :
        'border-white/10 hover:border-[#d4af37] text-white/30 hover:text-[#d4af37] hover:bg-[#d4af37]/5'}
    `}
  >
    <div className="mb-3 transition-transform group-hover:scale-110">{icon}</div>
    <span className="text-[10px] font-['Cinzel'] tracking-[0.4em] font-black uppercase">{label}</span>
    {active && !danger && <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#d4af37]" />}
  </button>
);

export default CombatEngine;