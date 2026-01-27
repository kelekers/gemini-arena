import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Skull, 
  RefreshCw, 
  Home, 
  AlertTriangle, 
  Heart, 
  Zap, 
  Shield, 
  TrendingUp, 
  Sword 
} from 'lucide-react';

// --- PENTING: Pastikan Constants.js sudah meng-export ENEMIES ---
import { STORY_NODES, ISLANDS, ITEMS, ENEMIES, XP_TABLE } from './Constants';

// Import Komponen UI
import MainMenu from './MainMenu';
import CharSelection from './CharSelection';
import Prologue from './Prologue';
import LoadingScreen from './LoadingScreen';
import WorldMap from './WorldMap';
import NarrativeEngine from './NarrativeEngine';
import CombatEngine from './CombatEngine';
import Header from './Header';
import StatsModal from './StatsModal';
import InventoryMarket from './InventoryMarket';

const App = () => {
  // --- KONSTANTA SISTEM (Base 30 Calibration) ---
  const MAX_STAT = 30;
  const MAX_LEVEL = 8;
  const POINTS_PER_LEVEL = 4;

  // --- STATE NAVIGASI & UI ---
  const [currentScene, setCurrentScene] = useState('MAIN_MENU');
  const [openModal, setOpenModal] = useState(null); 
  const [showLevelUp, setShowLevelUp] = useState(false);

  // --- STATE DATA PEMAIN ---
  const [selectedHero, setSelectedHero] = useState(null);
  
  // baseStats: Nilai murni dari pahlawan (internal growth)
  const [baseStats, setBaseStats] = useState({
    Tahan: 5, Kuat: 5, Mistis: 5, Pulung: 5, Luwes: 5, Wibawa: 5
  });

  // currentHp: Vitalitas permanen (Long-term health)
  const [currentHp, setCurrentHp] = useState(50);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [playerXp, setPlayerXp] = useState(0);
  const [freePoints, setFreePoints] = useState(0);
  
  const [inventory, setInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState({ weapon: null, armor: null });
  const [activeBuffs, setActiveBuffs] = useState([]); // { stat, val, duration }
  const [statusEffects, setStatusEffects] = useState([]); // ['POISON', 'CURSED', etc]

  const [gulden, setGulden] = useState(500);
  const [storyFlags, setStoryFlags] = useState({});
  const [activeIsland, setActiveIsland] = useState(ISLANDS[0]);
  const [activeEnemy, setActiveEnemy] = useState(null);

  // State untuk menangani percabangan setelah Combat
  const [lastNarrativeNode, setLastNarrativeNode] = useState(null);

  // --- 1. LOGIKA CALCULATED STATS (EFFECTIVE CALIBRATION) ---
  // Menghitung stats akhir berdasarkan Base + Equipment + Buffs
  // Inilah stat yang akan dikirim ke CombatEngine untuk Scaling Damage
  const effectiveStats = useMemo(() => {
    const stats = { ...baseStats };
    
    // A. Bonus dari Equipment (Pusaka)
    Object.values(equippedItems).forEach(item => {
      if (item && item.stats) {
        Object.entries(item.stats).forEach(([s, v]) => {
          if (stats[s] !== undefined) stats[s] += v;
        });
      }
    });

    // B. Bonus dari Buffs Sementara (Consumables)
    activeBuffs.forEach(buff => {
      if (buff.stat === 'All_Stats') {
        Object.keys(baseStats).forEach(s => { stats[s] += buff.val; });
      } else if (stats[buff.stat] !== undefined) {
        stats[buff.stat] += buff.val;
      }
    });

    // C. Hard Cap Stat ke MAX_STAT (30) - Menjaga keseimbangan game
    Object.keys(baseStats).forEach(s => {
      stats[s] = Math.min(MAX_STAT, stats[s]);
    });
    
    // D. Hitung Max HP (Base 10x Tahan)
    stats.maxHp = stats.Tahan * 10;
    
    return stats;
  }, [baseStats, equippedItems, activeBuffs]);

  // Sinkronisasi Vitalitas saat pertama kali memilih Hero
  useEffect(() => {
    if (selectedHero && currentHp === 50 && playerLevel === 1) {
      setCurrentHp(effectiveStats.maxHp);
    }
  }, [selectedHero]);

  // Logika Kematian (Death Logic)
  useEffect(() => {
    if (currentHp <= 0 && selectedHero && currentScene !== 'MAIN_MENU') {
      setCurrentScene('DEATH_SCENE');
    }
  }, [currentHp, selectedHero, currentScene]);

  // --- 2. LOGIKA LEVEL UP ---
  useEffect(() => {
    const xpNeeded = XP_TABLE[playerLevel] || 9999;
    if (playerXp >= xpNeeded && playerLevel < MAX_LEVEL) {
      const overflowXp = playerXp - xpNeeded;
      setPlayerLevel(prev => prev + 1);
      setPlayerXp(overflowXp);
      setFreePoints(prev => prev + POINTS_PER_LEVEL);
      setShowLevelUp(true);
      // Level Up memberikan pemulihan raga penuh
      setCurrentHp(effectiveStats.maxHp);
    }
  }, [playerXp, playerLevel, effectiveStats.maxHp]);

  // --- 3. HANDLERS UTAMA ---

  const handleUseItem = (item, index) => {
    if (!item) return;

    if (item.type === 'CONSUMABLE') {
      const effect = item.effect || {};
      
      if (effect.hp) {
        setCurrentHp(prev => Math.min(effectiveStats.maxHp, prev + effect.hp));
      }

      Object.entries(effect).forEach(([key, val]) => {
        if (key !== 'hp' && key !== 'status') {
          setActiveBuffs(prev => [...prev, { stat: key, val, duration: 2 }]);
        }
      });

      if (effect.status?.includes('Cure')) {
        if (effect.status === 'Cure_All') setStatusEffects([]);
        if (effect.status === 'Cure_Poison') setStatusEffects(prev => prev.filter(s => s !== 'POISON'));
      }

      setInventory(prev => prev.filter((_, i) => i !== index));

    } else if (item.type === 'WEAPON' || item.type === 'ARMORY') {
      const slot = item.type === 'WEAPON' ? 'weapon' : 'armor';
      setEquippedItems(prev => ({ ...prev, [slot]: item }));
    }
  };

  const handleUpgradeStat = (statName) => {
    if (freePoints <= 0 || baseStats[statName] >= MAX_STAT) return;
    setBaseStats(prev => ({ ...prev, [statName]: prev[statName] + 1 }));
    setFreePoints(prev => prev - 1);
  };

  const handleStatChange = (statBonuses) => {
    setBaseStats(prev => {
      const updated = { ...prev };
      Object.entries(statBonuses).forEach(([key, val]) => {
        if (updated[key] !== undefined) {
          updated[key] = Math.min(MAX_STAT, updated[key] + val);
        }
      });
      return updated;
    });
  };

  const handleConfirmHero = (hero) => {
    setSelectedHero(hero);
    setBaseStats(hero.stats);
    setCurrentHp(hero.stats.Tahan * 10);
    setCurrentScene('PROLOGUE');
  };

  const handleTravelToIsland = (island) => {
    setActiveIsland(island);
    setCurrentScene('LOADING_SCREEN'); 
  };

  // --- 4. COMBAT OUTCOME HANDLERS (BRANCHING LOGIC) ---
  
  const handleCombatVictory = (xpGain = 5, goldGain = 200) => {
    setPlayerXp(prev => prev + xpGain);
    setGulden(prev => prev + goldGain);
    
    // Kurangi durasi buff
    setActiveBuffs(prev => 
      prev.map(b => ({ ...b, duration: b.duration - 1 })).filter(b => b.duration > 0)
    );

    // Cek apakah ada branching node setelah menang
    const currentNode = STORY_NODES[lastNarrativeNode];
    if (currentNode && currentNode.winNode) {
      setStoryFlags(prev => ({ ...prev, [`DEFEATED_${activeEnemy.id}`]: true }));
      // Kirim balik ke NarrativeEngine dengan node baru
      setCurrentScene('NARRATIVE_ENGINE');
    } else {
      setCurrentScene('WORLD_MAP');
    }
  };

  const handleCombatDefeat = () => {
    // Jika ada node khusus saat kalah (Misal: Ditangkap Serdadu)
    const currentNode = STORY_NODES[lastNarrativeNode];
    if (currentNode && currentNode.loseNode) {
      setCurrentScene('NARRATIVE_ENGINE');
    } else {
      // Jika tidak ada, pahlawan mati
      setCurrentScene('DEATH_SCENE');
    }
  };

  const restartGame = () => {
    setCurrentHp(50);
    setPlayerLevel(1);
    setPlayerXp(0);
    setInventory([]);
    setEquippedItems({ weapon: null, armor: null });
    setStoryFlags({});
    setCurrentScene('MAIN_MENU');
  };

  const showHUD = ['WORLD_MAP', 'NARRATIVE_ENGINE'].includes(currentScene);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37]/30 font-serif overflow-hidden">
      
      {/* HUD HEADER */}
      {showHUD && selectedHero && (
        <Header 
          player={selectedHero}
          stats={{ ...effectiveStats, hp: currentHp }}
          level={playerLevel}
          xp={playerXp}
          nextXp={XP_TABLE[playerLevel]}
          gulden={gulden}
          islandName={activeIsland?.name}
          onOpenMenu={(menuType) => setOpenModal(menuType)}
          freePoints={freePoints}
          statusEffects={statusEffects}
        />
      )}

      {/* MODAL: STATS */}
      <StatsModal 
        isOpen={openModal === 'STATS'}
        stats={effectiveStats}
        baseStats={baseStats}
        freePoints={freePoints}
        level={playerLevel}
        onUpgrade={handleUpgradeStat}
        onClose={() => setOpenModal(null)}
      />

      {/* MODAL: MARKET & INVENTORY */}
      <InventoryMarket 
        isOpen={openModal === 'MARKET'}
        playerInventory={inventory}
        equippedItems={equippedItems}
        gulden={gulden}
        playerStats={effectiveStats}
        currentIslandId={activeIsland?.id}
        onClose={() => setOpenModal(null)}
        onBuy={(item, price) => {
          if (inventory.length >= 10) return alert("Tas perbekalan penuh!");
          setGulden(g => g - price);
          setInventory(inv => [...inv, item]);
        }}
        onSell={(item, price) => {
          setGulden(g => g + price);
          setInventory(inv => inv.filter(i => i.id !== item.id));
        }}
        onUseItem={handleUseItem}
      />

      <LevelUpOverlay isOpen={showLevelUp} level={playerLevel} onClose={() => setShowLevelUp(false)} />

      {/* SCENE MANAGER */}
      <AnimatePresence mode="wait">
        {currentScene === 'MAIN_MENU' && (
          <MainMenu key="menu" onStart={() => setCurrentScene('CHAR_SELECTION')} />
        )}
        
        {currentScene === 'CHAR_SELECTION' && (
          <CharSelection key="char" onConfirm={handleConfirmHero} onBack={() => setCurrentScene('MAIN_MENU')} />
        )}

        {currentScene === 'PROLOGUE' && (
          <Prologue key="prologue" onFinished={() => setCurrentScene('WORLD_MAP')} />
        )}
        
        {currentScene === 'LOADING_SCREEN' && (
          <LoadingScreen 
            key="load" 
            targetIslandId={activeIsland?.id || 'general'} 
            onFinished={() => setCurrentScene('NARRATIVE_ENGINE')} 
          />
        )}

        {currentScene === 'WORLD_MAP' && (
          <WorldMap 
            key="map" 
            selectedHero={selectedHero} 
            onSelectIsland={handleTravelToIsland} 
          />
        )}

        {currentScene === 'NARRATIVE_ENGINE' && (
          <NarrativeEngine 
            key={`narration-${lastNarrativeNode}`}
            playerStats={{ ...effectiveStats, hp: currentHp }}
            playerInventory={inventory}
            storyNodes={STORY_NODES}
            startNodeId={lastNarrativeNode || activeIsland?.startNode} 
            onStatChange={handleStatChange}
            onFlagUpdate={(flags) => setStoryFlags(prev => ({ ...prev, ...flags }))}
            onEventEnd={() => { 
              setPlayerXp(p => p + 2); 
              setLastNarrativeNode(null);
              setCurrentScene('WORLD_MAP'); 
            }}
            onBattleTrigger={(enemyId, nodeId) => { 
              if (ENEMIES && ENEMIES[enemyId]) {
                setLastNarrativeNode(nodeId); // Simpan node pemicu pertempuran
                setActiveEnemy(ENEMIES[enemyId]); 
                setCurrentScene('COMBAT_SCENE'); 
              } else {
                console.error("Kitab Sejarah tidak mencatat musuh:", enemyId);
              }
            }} 
          />
        )}

        {currentScene === 'COMBAT_SCENE' && (
          <CombatEngine 
            key="combat"
            player={selectedHero}
            playerStats={{ ...effectiveStats, hp: currentHp }} 
            playerInventory={inventory}
            enemyData={activeEnemy}
            statusEffects={statusEffects}
            onStatusChange={setStatusEffects}
            onHpChange={setCurrentHp}
            onVictory={handleCombatVictory}
            onDefeat={handleCombatDefeat}
            onFlee={() => setCurrentScene('WORLD_MAP')}
            onItemUsed={(index) => {
              setInventory(prev => prev.filter((_, i) => i !== index));
            }}
          />
        )}

        {currentScene === 'DEATH_SCENE' && (
          <motion.div 
            key="death"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              className="mb-12"
            >
              <Skull size={120} className="text-red-900 mb-8 mx-auto filter blur-[2px]" />
              <h1 className="font-['Cinzel'] text-6xl font-black text-red-700 tracking-[0.3em] mb-4 drop-shadow-[0_0_20px_rgba(185,28,28,0.5)]">TAKDIR TERPUTUS</h1>
              <p className="font-['Cormorant_Garamond'] text-2xl italic text-gray-500 max-w-2xl mx-auto">
                "Raga boleh hancur dimakan zaman, namun karsa yang kau tinggalkan akan membeku dalam pusaran sejarah."
              </p>
            </motion.div>

            <div className="flex space-x-8">
              <button 
                onClick={restartGame}
                className="group flex items-center space-x-4 px-10 py-4 border border-red-900/30 hover:border-red-600 transition-all bg-red-950/10"
              >
                <RefreshCw size={20} className="text-red-600 group-hover:rotate-180 transition-transform duration-700" />
                <span className="font-['Cinzel'] text-xs tracking-widest text-red-500 font-bold uppercase">Ulangi Karsa</span>
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="flex items-center space-x-4 px-10 py-4 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02]"
              >
                <Home size={20} className="text-gray-600" />
                <span className="font-['Cinzel'] text-xs tracking-widest text-gray-400 font-bold uppercase">Kembali ke Sauh</span>
              </button>
            </div>

            <div className="absolute bottom-10 opacity-10">
              <p className="font-['Cinzel'] text-[10px] tracking-[1em] uppercase">Nusantara Saga • Alkimia Jiwa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const LevelUpOverlay = ({ level, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[500] flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1.5, opacity: 0.3 }} 
            className="absolute w-[500px] h-[500px] bg-[#d4af37] blur-[120px] rounded-full" 
          />
          <motion.h1 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="font-['Cinzel'] text-8xl font-black text-white tracking-widest drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            TINGKAT NAIK
          </motion.h1>
          <div className="flex items-center space-x-8 mt-10">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="font-['Cinzel'] text-3xl text-[#d4af37] font-bold tracking-[0.5em] uppercase">Level {level}</span>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/40 font-['Cinzel'] text-[10px] tracking-[0.8em] uppercase"
          >
            Klik di mana saja untuk melanjutkan ekspedisi
          </motion.p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default App;