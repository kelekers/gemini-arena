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
  Sword,
  BookOpen
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
import EndingScreen from './EndingScreen';

/**
 * APP CENTRAL COMMAND V5 - NUSANTARA SAGA
 * REVISI: Implementasi Akumulasi Alignment & Jati Diri Pahlawan.
 */
const App = () => {
  // --- KONSTANTA SISTEM (Base 30 Calibration) ---
  const MAX_STAT = 60;
  const MAX_LEVEL = 8;

  // --- STATE NAVIGASI & UI ---
  const [currentScene, setCurrentScene] = useState('PRE_START');
  const [openModal, setOpenModal] = useState(null); 
  const [showLevelUp, setShowLevelUp] = useState(false);

  // --- SCALING LOGIC (1920x1080) ---
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const updateScale = () => {
      const targetW = 1920;
      const targetH = 1080;
      const sw = window.innerWidth / targetW;
      const sh = window.innerHeight / targetH;
      setScale(Math.min(sw, sh));
    };
    window.addEventListener('resize', updateScale);
    updateScale();
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // --- STATE DATA PEMAIN ---
  const [unlockedEndings, setUnlockedEndings] = useState(() => {
    const saved = localStorage.getItem('sang_saka_arsip');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedHero, setSelectedHero] = useState(null);
  
  const [baseStats, setBaseStats] = useState({
    Tahan: 5, Kuat: 5, Mistis: 5, Pulung: 5, Luwes: 5, Wibawa: 5
  });

  const [currentHp, setCurrentHp] = useState(50);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [playerXp, setPlayerXp] = useState(0);
  const [freePoints, setFreePoints] = useState(0);
  
  const [inventory, setInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState({ weapon: null, armor: null });
  const [activeBuffs, setActiveBuffs] = useState([]); 
  const [statusEffects, setStatusEffects] = useState([]); 

  const [gulden, setGulden] = useState(500);
  const [storyFlags, setStoryFlags] = useState({});
  const [activeIsland, setActiveIsland] = useState(ISLANDS[0]);
  const [activeEnemy, setActiveEnemy] = useState(null);

  const [lastNarrativeNode, setLastNarrativeNode] = useState(null);

// --- DI DALAM APP.JS ---

const PlatformWarning = ({ onEnter }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={onEnter}
      className="absolute inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center cursor-pointer p-10 text-center"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 space-y-12"
      >
        <div className="flex flex-col items-center">
          <AlertTriangle size={48} className="text-[#d4af37] mb-6 animate-pulse" />
          <h1 className="font-['Cinzel'] text-3xl tracking-[0.6em] text-white font-bold uppercase">
            Optimasi Sistem
          </h1>
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mt-4" />
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="font-['Cormorant_Garamond'] text-2xl text-gray-400 leading-relaxed">
            Ekspedisi <span className="text-white italic">Nusantara Saga</span> dirancang khusus untuk pengalaman visual maksimal pada perangkat 
            <span className="text-[#d4af37] font-bold"> Desktop / PC</span>.
          </p>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-500 italic">
            Gunakan mode <span className="text-white">Window Fullscreen (F11)</span> untuk sinkronisasi Karsa yang sempurna.
          </p>
        </div>

        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-24"
        >
          <p className="font-['Cinzel'] text-[10px] tracking-[0.8em] text-[#d4af37] uppercase font-black">
            Ketuk di mana saja untuk menyelaraskan takdir
          </p>
        </motion.div>
      </motion.div>

      {/* Border Frame */}
      <div className="absolute inset-10 border border-[#d4af37]/10 pointer-events-none" />
    </motion.div>
  );
};

// 1. Ubah effectiveStats agar menghitung Scaling Progresif & Gear Otomatis
const effectiveStats = useMemo(() => {
  // A. Hitung Poin Stat Progresif (Scaling Otomatis)
  // Lvl 1-4: +5 poin, Lvl 5-8: +10 poin
  const autoStatPoints = playerLevel <= 4 
    ? (playerLevel - 1) * 5 
    : (4 * 5) + (playerLevel - 4) * 10;

  const stats = { ...baseStats };

  // B. Hitung Equipment (dari Inventory)
  Object.values(equippedItems).forEach(item => {
    if (item && item.stats) {
      Object.entries(item.stats).forEach(([s, v]) => {
        if (stats[s] !== undefined) stats[s] += v;
      });
    }
  });

  // C. FORMULA HP BARU (Vitality Buff)
  // Hasil Simulasi: (Tahan * 15) + (Lvl * 100) agar tidak one-shot
  stats.maxHp = (stats.Tahan * 15) + (playerLevel * 50);
  stats.name = selectedHero?.name || "Pahlawan";
  
  return stats;
}, [baseStats, equippedItems, activeBuffs, selectedHero, playerLevel, activeIsland]);
  // Kalkulasi Skor Alignment (Jati Diri) dari Story Flags
  const alignmentScores = useMemo(() => {
    return {
      PRESERVATION: storyFlags.PRESERVATION || 0,
      DOMINATION: storyFlags.DOMINATION || 0,
      CORRUPTION: storyFlags.CORRUPTION || 0
    };
  }, [storyFlags]);

  useEffect(() => {
    if (selectedHero && currentHp === 50 && playerLevel === 1) {
      setCurrentHp(effectiveStats.maxHp);
    }
  }, [selectedHero, effectiveStats.maxHp, currentHp, playerLevel]);

  useEffect(() => {
    if (currentHp <= 0 && selectedHero && currentScene !== 'MAIN_MENU' && currentScene !== 'DEATH_SCENE') {
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
      const autoStatPoints = playerLevel <= 4 ? 4 * playerLevel : 8 * playerLevel;
      setFreePoints(prev => prev + autoStatPoints);
      setShowLevelUp(true);
      setCurrentHp(effectiveStats.maxHp);
    }
  }, [playerXp, playerLevel, effectiveStats.maxHp, XP_TABLE]);

  // --- 3. CENTRAL TRAFFIC CONTROLLER ---
  const handleNodeTransition = (nodeId) => {
    const targetNode = STORY_NODES[nodeId];
    if (!targetNode) {
      console.error("Garis waktu terputus! Node tidak ditemukan:", nodeId);
      return;
    }

    setLastNarrativeNode(nodeId);

    switch (targetNode.type) {
      case 'BATTLE_TRIGGER':
        if (ENEMIES[targetNode.enemyId]) {
          setActiveEnemy(ENEMIES[targetNode.enemyId]);
          setCurrentScene('COMBAT_SCENE');
        }
        break;
      case 'ENDING':
        handleUnlockEnding(nodeId);
        setCurrentScene('ENDING_SCENE');
        break;
      case 'GAME_OVER':
        setCurrentScene('DEATH_SCENE');
        break;
      case 'STORY':
      default:
        setCurrentScene('NARRATIVE_ENGINE');
        break;
    }
  };

  const handleUnlockEnding = (endingId) => {
    if (!unlockedEndings.includes(endingId)) {
      const newList = [...unlockedEndings, endingId];
      setUnlockedEndings(newList);
      localStorage.setItem('sang_saka_arsip', JSON.stringify(newList));
    }
  };

  // --- 4. HANDLERS UTAMA ---
  const handleEnterGame = () => {
    // Memicu Fullscreen API
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch(err => {
        console.warn(`Gagal Fullscreen: ${err.message}`);
      });
    } else if (element.webkitRequestFullscreen) { // Safari
      element.webkitRequestFullscreen();
    }

    setCurrentScene('MAIN_MENU');
  };

  const handleUseItem = (item, index) => {
    if (!item) return;

    if (item.type === 'CONSUMABLE') {
      const effect = item.effect || {};
      if (effect.hp) setCurrentHp(prev => Math.min(effectiveStats.maxHp, prev + effect.hp));
      
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

  const handleGuldenChange = (amount) => {
    setGulden(prev => prev + amount);
  };

  const handleXpChange = (amount) => {
    setPlayerXp(prev => prev + amount);
  };

  // REVISI: Handler Flag yang mendukung akumulasi skor alignment secara numerik
  const handleFlagUpdate = (newFlags) => {
    setStoryFlags(prev => {
      const updated = { ...prev };
      Object.entries(newFlags).forEach(([key, value]) => {
        if (typeof value === 'number') {
          // Jika nilai baru berupa angka, lakukan penjumlahan (untuk Alignment)
          updated[key] = (updated[key] || 0) + value;
        } else {
          // Jika nilai baru berupa boolean/string, lakukan override (untuk Story Flags)
          updated[key] = value;
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
    // A. Cek apakah pulau sudah selesai (Anti-Exploit)
    if (storyFlags[`${island.id}_FINISHED` || island.isFinished]) {
      alert("Wilayah ini telah damai. Fokuslah pada sisa takdirmu di arah barat.");
      return;
    }

    // B. Cek apakah pulau sudah terbuka (Kecuali Papua yang terbuka otomatis di awal)
    const isUnlocked = island.id === 'papua' || storyFlags[`${island.id}_UNLOCKED`];
    if (!isUnlocked) {
      alert("Jalur menuju wilayah ini masih tertutup oleh kabut alkimia Neo-VOC.");
      return;
    }
    
    setActiveIsland(island);
    setCurrentScene('LOADING_SCREEN'); 
  };

  // --- 5. COMBAT OUTCOME HANDLERS ---
  const handleCombatVictory = (xpGain, goldGain) => {
    setPlayerXp(prev => prev + xpGain);
    setGulden(prev => prev + goldGain);
    setActiveBuffs(prev => prev.map(b => ({ ...b, duration: b.duration - 1 })).filter(b => b.duration > 0));

    const currentNode = STORY_NODES[lastNarrativeNode];
    if (currentNode && currentNode.winNode) {
      handleFlagUpdate({ [`DEFEATED_${activeEnemy?.id}`]: true });
      handleNodeTransition(currentNode.winNode);
    } else {
      setCurrentScene('WORLD_MAP');
    }
  };

  const handleCombatDefeat = () => {
    const currentNode = STORY_NODES[lastNarrativeNode];
    if (currentNode && currentNode.loseNode) {
      handleNodeTransition(currentNode.loseNode);
    } else {
      setCurrentScene('DEATH_SCENE');
    }
  };

  const restartGame = () => {
    setCurrentHp(50);
    setPlayerLevel(1);
    setPlayerXp(0);
    setFreePoints(0);
    setGulden(500);
    setInventory([]);
    setEquippedItems({ weapon: null, armor: null });
    setActiveBuffs([]);
    setStatusEffects([]);
    setStoryFlags({});
    setLastNarrativeNode(null);
    setSelectedHero(null);
    setCurrentScene('MAIN_MENU');
  };

  const showHUD = ['WORLD_MAP', 'NARRATIVE_ENGINE'].includes(currentScene);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden font-serif selection:bg-[#d4af37]/30 text-white">
      <div 
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
        className="relative bg-[#050505] overflow-hidden shadow-2xl shadow-black"
      >
        
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

        <StatsModal 
          isOpen={openModal === 'STATS'}
          stats={effectiveStats}
          baseStats={baseStats}
          freePoints={freePoints}
          level={playerLevel}
          onUpgrade={handleUpgradeStat}
          onClose={() => setOpenModal(null)}
        />

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

        <AnimatePresence mode="wait">
          {currentScene === 'PRE_START' && (
            <PlatformWarning key="warning" onEnter={handleEnterGame} />
          )}

          {currentScene === 'MAIN_MENU' && (
            <MainMenu key="menu" onStart={() => setCurrentScene('CHAR_SELECTION')} unlockedEndings={unlockedEndings} />
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
              onFinished={() => handleNodeTransition(activeIsland?.startNode || 'TEST_GATEWAY')} 
            />
          )}

          {currentScene === 'WORLD_MAP' && (
            <WorldMap 
              key="map" 
              selectedHero={selectedHero} 
              storyFlags={storyFlags} // Kirimkan flag ke WorldMap
              onSelectIsland={handleTravelToIsland} 
            />
          )}

          {currentScene === 'NARRATIVE_ENGINE' && (
            <NarrativeEngine 
              key={`narration-${lastNarrativeNode}`}
              playerStats={{ ...effectiveStats, hp: currentHp }}
              playerInventory={inventory}
              alignmentScores={alignmentScores}
              storyNodes={STORY_NODES}
              startNodeId={lastNarrativeNode || activeIsland?.startNode} 
              onStatChange={handleStatChange}
              onGuldenChange={handleGuldenChange}
              onXpChange={handleXpChange}
              onFlagUpdate={handleFlagUpdate}
              onEventEnd={(targetIslandId) => { 
                // 1. Ambil ID pulau saat ini (misal: 'papua')
                const currentIslandId = activeIsland.id;
                
                // 2. Cari data pulau berikutnya di Constants.js berdasarkan targetId (misal: 'sulawesi')
                const nextIsland = ISLANDS.find(isl => isl.id === targetIslandId);

                if (nextIsland) {
                  // 3. Update Flag: Papua Selesai, Sulawesi Terbuka
                  handleFlagUpdate({ 
                    [`${currentIslandId}_FINISHED`]: true, 
                    [`${targetIslandId}_UNLOCKED`]: true 
                  });
                  
                  // 4. Pindahkan Fokus: Ini yang akan mengubah Header & Market secara otomatis
                  setActiveIsland(nextIsland);
                }

                // Bonus XP besar karena berhasil membebaskan satu wilayah
                setPlayerXp(p => p + 15); 
                setLastNarrativeNode(null);
                setCurrentScene('WORLD_MAP'); 
              }}
              onBattleTrigger={(enemyId, nodeId) => handleNodeTransition(nodeId)} 
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

          {currentScene === 'ENDING_SCENE' && (
            <EndingScreen 
              endingNode={STORY_NODES[lastNarrativeNode]} 
              onRestart={restartGame} 
            />
          )}

          {currentScene === 'DEATH_SCENE' && (
            <motion.div 
              key="death"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-10 text-center"
            >
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} className="mb-12">
                <Skull size={120} className="text-red-900 mb-8 mx-auto filter blur-[2px]" />
                <h1 className="font-['Cinzel'] text-6xl font-black text-red-700 tracking-[0.3em] mb-4 drop-shadow-[0_0_20px_rgba(185,28,28,0.5)] uppercase">Takdir Terputus</h1>
                <p className="font-['Cormorant_Garamond'] text-2xl italic text-gray-500 max-w-2xl mx-auto">
                  "Raga boleh hancur dimakan zaman, namun karsa yang kau tinggalkan akan membeku dalam pusaran sejarah."
                </p>
              </motion.div>
              <div className="flex space-x-8">
                <button onClick={restartGame} className="group flex items-center space-x-4 px-10 py-4 border border-red-900/30 hover:border-red-600 transition-all bg-red-950/10">
                  <RefreshCw size={20} className="text-red-600 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="font-['Cinzel'] text-xs tracking-widest text-red-500 font-bold uppercase">Ulangi Karsa</span>
                </button>
                <button onClick={() => window.location.reload()} className="flex items-center space-x-4 px-10 py-4 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02]">
                  <Home size={20} className="text-gray-600" />
                  <span className="font-['Cinzel'] text-xs tracking-widest text-gray-400 font-bold uppercase">Kembali ke Sauh</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const LevelUpOverlay = ({ level, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 z-[500] flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1.5, opacity: 0.3 }} className="absolute w-[500px] h-[500px] bg-[#d4af37] blur-[120px] rounded-full" />
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-['Cinzel'] text-8xl font-black text-white tracking-widest drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]">TINGKAT NAIK</motion.h1>
          <div className="flex items-center space-x-8 mt-10">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="font-['Cinzel'] text-3xl text-[#d4af37] font-bold tracking-[0.5em] uppercase">Level {level}</span>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-white/40 font-['Cinzel'] text-[10px] tracking-[0.8em] uppercase">Klik di mana saja untuk melanjutkan ekspedisi</motion.p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default App;