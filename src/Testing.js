/**
 * NUSANTARA SAGA - ULTIMATE PROGRESSION SIMULATOR
 * Logic: Exponential Scaling, Gear Simulation, & Percentage Mitigation
 */

// --- 1. DATA DASAR ---
const XP_TABLE = { 1: 10, 2: 25, 3: 50, 4: 100, 5: 200, 6: 400, 7: 800 };

const PIONEERS = [
  { id: 'dipo', name: "DIPO", stats: { Kuat: 4, Tahan: 5, Mistis: 5, Pulung: 4, Luwes: 10, Wibawa: 6 } },
  { id: 'karti', name: "KARTI", stats: { Kuat: 3, Tahan: 10, Mistis: 4, Pulung: 8, Luwes: 4, Wibawa: 5 } },
  { id: 'mada', name: "MADA", stats: { Kuat: 11, Tahan: 7, Mistis: 3, Pulung: 3, Luwes: 4, Wibawa: 6 } }
];

// SILAKAN ISI DATA ENEMIES DI SINI
export const ENEMIES = {
  // =========================================================================
  // WILAYAH I: PAPUA (1910) - Target Level: 1-2
  // Rebalance: Menaikkan Atk dasar agar pemain belajar pentingnya Parry.
  // =========================================================================
  "PAP_CYB_DRONE": {
    id: "PAP_CYB_DRONE",
    name: "Mata Besi V1",
    type: "CYBER",
    hp: 100,      // Naik dari 75
    atk: 15,      // Naik dari 10
    xpGain: 15,
    goldGain: 80,
    image: "https://images.unsplash.com/photo-1535376472810-5d229c6bda89?q=80&w=1000&auto=format&fit=crop",
    desc: "Unit pengintai Neo-VOC yang mendistorsi pemandangan hutan Papua."
  },
  "PAP_HUM_KNIL": {
    id: "PAP_HUM_KNIL",
    name: "Serdadu Ekspedisi",
    type: "HUMAN",
    hp: 125,      // Naik dari 100
    atk: 18,      // Naik dari 14
    xpGain: 20,
    goldGain: 100,
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop",
    desc: "Pasukan kolonial yang pikirannya telah disinkronkan dengan frekuensi Sang Tapa."
  },
  "PAP_CRE_KASUARI": {
    id: "PAP_CRE_KASUARI",
    name: "Kasuari Glitch",
    type: "CREATURE",
    hp: 160,      // Naik dari 130
    atk: 22,      // Naik dari 18
    xpGain: 25,
    goldGain: 120,
    image: "https://images.unsplash.com/photo-1518467664548-23098f98a335?q=80&w=1000&auto=format&fit=crop",
    desc: "Burung endemik yang kakinya kini mengandung bilah logam alkimia."
  },
  "PAP_BOS_GUARDIAN": {
    id: "PAP_BOS_GUARDIAN",
    name: "The Rusted Guardian",
    type: "BOSS",
    hp: 400,      // Naik dari 250 (Harus jadi tembok pertama)
    atk: 32,      // Naik dari 25
    xpGain: 65,
    goldGain: 600,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    desc: "Manifestasi Jangkar Alkimia pertama yang melindungi gletser Jayawijaya."
  },

  // =========================================================================
  // WILAYAH II: SULAWESI (1667) - Target Level: 3-4
  // Rebalance: Menekan HP pemain dengan Atk yang lebih konsisten.
  // =========================================================================
  "SUL_HUM_MARINER": {
    id: "SUL_HUM_MARINER",
    name: "Mariner Speelman",
    type: "HUMAN",
    hp: 280,      // Naik dari 200
    atk: 35,      // Naik dari 24
    xpGain: 45,
    goldGain: 250,
    image: "https://images.unsplash.com/photo-1590214691122-80f0ed17282b?q=80&w=1000&auto=format&fit=crop",
    desc: "Awak kapal VOC Speelman yang menggunakan zirah resonansi air."
  },
  "SUL_SPI_PARAKANG": {
    id: "SUL_SPI_PARAKANG",
    name: "Parakang Terdistorsi",
    type: "SPIRIT",
    hp: 240,      // Naik dari 180
    atk: 48,      // Naik dari 32 (Sangat mematikan tapi rapuh)
    xpGain: 55,
    goldGain: 300,
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
    desc: "Manusia jadi-jadian lokal yang terjebak dalam loop waktu digital."
  },
  "SUL_CRE_ANOA": {
    id: "SUL_CRE_ANOA",
    name: "Anoa Alkimia",
    type: "CREATURE",
    hp: 320,      // Naik dari 250
    atk: 40,      // Naik dari 28
    xpGain: 65,
    goldGain: 280,
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=1000&auto=format&fit=crop",
    desc: "Anoa gunung yang tanduknya kini memancarkan laser energi Sang Tapa."
  },
  "SUL_BOS_KRAKEN": {
    id: "SUL_BOS_KRAKEN",
    name: "Kraken Protocol",
    type: "BOSS",
    hp: 850,      // Naik dari 650
    atk: 58,      // Naik dari 45
    xpGain: 180,
    goldGain: 1500,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
    desc: "Sistem pertahanan laut Neo-VOC yang melilit benteng Somba Opu."
  },

  // =========================================================================
  // WILAYAH III: KALIMANTAN (1859) - Target Level: 5-6
  // Rebalance: Fokus pada "Bulkiness" (Darah tebal) musuh.
  // =========================================================================
  "KAL_HUM_OVERSEER": {
    id: "KAL_HUM_OVERSEER",
    name: "Mandor Oranje",
    type: "HUMAN",
    hp: 450,
    atk: 55,
    xpGain: 100,
    goldGain: 500,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1000&auto=format&fit=crop",
    desc: "Pengawas tambang yang menggunakan exoskeleton uap bertenaga batu bara."
  },
  "KAL_SPI_KUYANG": {
    id: "KAL_SPI_KUYANG",
    name: "Kuyang Neon",
    type: "SPIRIT",
    hp: 400,
    atk: 70,
    xpGain: 110,
    goldGain: 450,
    image: "https://images.unsplash.com/photo-1610416390141-8e9987677983?q=80&w=1000&auto=format&fit=crop",
    desc: "Hantu pedalaman yang organ dalamnya digantikan oleh kabel optik biru."
  },
  "KAL_CYB_DRILLER": {
    id: "KAL_CYB_DRILLER",
    name: "Driller Drone V3",
    type: "CYBER",
    hp: 420,
    atk: 62,
    xpGain: 100,
    goldGain: 600,
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
    desc: "Robot penggali Neo-VOC yang mencari urat nadi energi Kalimantan."
  },
  "KAL_BOS_ANDRESEN": {
    id: "KAL_BOS_ANDRESEN",
    name: "Colonel Andresen (Tank)",
    type: "BOSS",
    hp: 1200,     // Naik dari 900
    atk: 80,      // Naik dari 65
    xpGain: 400,
    goldGain: 3000,
    image: "https://images.unsplash.com/photo-1533575677843-2615560640d2?q=80&w=1000&auto=format&fit=crop",
    desc: "Komandan KNIL yang menyatu dengan Tank Alkimia miliknya."
  },

  // =========================================================================
  // WILAYAH IV: SUMATRA (1833) - Target Level: 7
  // Rebalance: Musuh mulai bisa melakukan "Two-Shot" jika pemain tidak parry.
  // =========================================================================
  "SUM_HUM_INQUISITOR": {
    id: "SUM_HUM_INQUISITOR",
    name: "KNIL Inquisitor",
    type: "HUMAN",
    hp: 600,
    atk: 85,
    xpGain: 250,
    goldGain: 1000,
    image: "https://images.unsplash.com/photo-1550953250-7d35398684d5?q=80&w=1000&auto=format&fit=crop",
    desc: "Pasukan khusus De Kock yang dibekali pedang laser anti-gerilya."
  },
  "SUM_CRE_TIGER": {
    id: "SUM_CRE_TIGER",
    name: "Harimau Glitch",
    type: "CREATURE",
    hp: 550,
    atk: 95,
    xpGain: 280,
    goldGain: 900,
    image: "https://images.unsplash.com/photo-1501706369511-06b086053b27?q=80&w=1000&auto=format&fit=crop",
    desc: "Pemangsa puncak yang kini memiliki kemampuan teleportasi jarak pendek."
  },
  "SUM_SPI_BEGU": {
    id: "SUM_SPI_BEGU",
    name: "Begu Ganjang Alkimia",
    type: "SPIRIT",
    hp: 500,
    atk: 105,
    xpGain: 300,
    goldGain: 1100,
    image: "https://images.unsplash.com/photo-1548504770-436282915645?q=80&w=1000&auto=format&fit=crop",
    desc: "Roh bayangan yang memanjang mengikuti kabel energi Neo-VOC."
  },
  "SUM_BOS_RELIC": {
    id: "SUM_BOS_RELIC",
    name: "The Eternal Relic",
    type: "BOSS",
    hp: 1800,     // Naik dari 1400
    atk: 115,     // Naik dari 95
    xpGain: 800,
    goldGain: 5000,
    image: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=1000&auto=format&fit=crop",
    desc: "Jangkar Alkimia IV yang telah membangun katedral logam di atas bukit Bonjol."
  },

  // =========================================================================
  // WILAYAH V: JAWA (1945) - Target Level: 8 (MAX)
  // Rebalance: Final Stand. Kroco pun terasa seperti Boss Wilayah I.
  // =========================================================================
  "JAV_CYB_SENTINEL": {
    id: "JAV_CYB_SENTINEL",
    name: "Sentinel Omega",
    type: "CYBER",
    hp: 900,      // Sangat tebal
    atk: 125,     // Sangat sakit
    xpGain: 500,
    goldGain: 1500,
    image: "https://images.unsplash.com/photo-1531297461136-82lw33903847?q=80&w=1000&auto=format&fit=crop",
    desc: "Garda depan Batavia-Prime yang memiliki perisai energi absolut."
  },
  "JAV_SPI_SHADOW": {
    id: "JAV_SPI_SHADOW",
    name: "Shadow of Heroes",
    type: "SPIRIT",
    hp: 850,
    atk: 135,
    xpGain: 600,
    goldGain: 1800,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop",
    desc: "Gema dari pahlawan yang gagal di timeline Batavia-Prime."
  },
  "JAV_HUM_COMMANDO": {
    id: "JAV_HUM_COMMANDO",
    name: "Neo-KNIL Commando",
    type: "HUMAN",
    hp: 800,
    atk: 140,
    xpGain: 700,
    goldGain: 2000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    desc: "Elite Assassin milik Willem Van Aeterne."
  },
  "JAV_BOS_AETERNE": {
    id: "JAV_BOS_AETERNE",
    name: "Willem Van Aeterne",
    type: "BOSS",
    hp: 2200,     // Naik dari 1800
    atk: 155,     // Naik dari 125
    xpGain: 2000,
    goldGain: 10000,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    desc: "Sang Arsitek Batavia-Prime. Memanipulasi gravitasi dan waktu."
  },
  "JAV_BOS_SANGTAPA": {
    id: "JAV_BOS_SANGTAPA",
    name: "SANG TAPA (True Entity)",
    type: "BOSS",
    hp: 3200,     // Naik sedikit dari 3200
    atk: 150,     // Naik dari 145 (Target Win Rate: 35-45%)
    xpGain: 0,
    goldGain: 0,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    desc: "Inti dari segala anomali. Pemangsa energi kehidupan Nusantara."
  }
};

// --- 2. LOGIKA SCALING (Pahlawan) ---
const getScaledHero = (pioneer, level, regionID) => {
  const scaled = { ...pioneer.stats };
  
  // A. Poin Stat Progresif (Semakin tinggi level, semakin banyak poin didapat)
  // Lvl 1-4: +5 poin, Lvl 5-8: +10 poin
  const statPoints = level <= 4 ? (level - 1) * 5 : (4 * 5) + (level - 4) * 10;
  
  // B. Simulasi Bonus Gear per Wilayah (Penting!)
  const gearBonus = {
    'PAP': 0, 'SUL': 15, 'KAL': 35, 'SUM': 60, 'JAV': 90
  }[regionID] || 0;

  const totalBonus = statPoints + gearBonus;

  // C. Distribusi Berbasis Fokus Pioneer
  if (pioneer.id === 'mada') {
    scaled.Kuat += totalBonus;
    scaled.Tahan += Math.floor(totalBonus * 0.4);
  } else if (pioneer.id === 'karti') {
    scaled.Tahan += totalBonus;
    scaled.Kuat += Math.floor(totalBonus * 0.3);
  } else { // Dipo
    scaled.Luwes += totalBonus;
    scaled.Kuat += Math.floor(totalBonus * 0.5);
    scaled.Tahan += Math.floor(totalBonus * 0.2);
  }

  // D. Vitality Scaling (HP lebih tebal di level tinggi)
  return {
    name: pioneer.name,
    level,
    stats: scaled,
    maxHp: (scaled.Tahan * 15) + (level * 100) // Buff HP signifikan
  };
};

// --- 3. COMBAT ENGINE (D10 System) ---
const rollD10 = () => Math.floor(Math.random() * 10) + 1;

const simulateBattle = (player, enemy) => {
  let p_hp = player.maxHp;
  let e_hp = enemy.hp;
  let ultBar = 0;
  let turns = 0;

  // Formula Pertahanan Persentase (Standard RPG)
  const mitigation = 100 / (100 + player.stats.Tahan);

  while (p_hp > 0 && e_hp > 0 && turns < 150) {
    turns++;
    
    // --- Player Turn ---
    const p_roll = rollD10();
    let dmg = 0;
    
    if (ultBar >= 100) {
        dmg = (Math.floor(player.stats.Kuat / 2) + 15) * 2.5; // Ultimate!
        ultBar = 0;
    } else {
        dmg = p_roll + Math.floor(player.stats.Kuat / 2);
        ultBar += 20; // Charge per attack
    }
    
    if (p_roll > 1) e_hp -= dmg; // 90% Accuracy
    if (e_hp <= 0) return { win: true, turns };

    // --- Enemy Turn ---
    // Logika Parry: 25% base + (Luwes * 1.5)%
    const parryChance = Math.min(75, 25 + (player.stats.Luwes * 1.2));
    
    if (Math.random() * 100 > parryChance) {
        const e_dmg = (enemy.atk + rollD10()) * mitigation;
        p_hp -= Math.max(5, e_dmg); // Minimal kena 5 damage
    } else {
        ultBar += 40; // Bonus Parry
    }
    
    if (p_hp <= 0) return { win: false, turns };
  }
  return { win: false, turns };
};

// --- 4. MAIN SIMULATOR RUNNER ---
const runFullSim = (iterations = 100) => {
  console.log(`\n=== NUSANTARA SAGA: EXPEDITION SIMULATOR ===`);

  PIONEERS.forEach(basePioneer => {
    let currentLvl = 1;
    let currentXp = 0;
    const report = [];

    const enemyEntries = Object.entries(ENEMIES);

    enemyEntries.forEach(([key, enemy]) => {
      const regionPrefix = key.split('_')[0]; // Ambil 'PAP', 'SUL', dst.
      const player = getScaledHero(basePioneer, currentLvl, regionPrefix);
      
      let wins = 0;
      let totalTurns = 0;

      for (let i = 0; i < iterations; i++) {
        const res = simulateBattle(player, enemy);
        if (res.win) {
            wins++;
            totalTurns += res.turns;
        }
      }

      const winRate = (wins / iterations * 100).toFixed(1);
      report.push({
        "Pioneer": player.name,
        "Lvl": currentLvl,
        "Musuh": enemy.name,
        "Win Rate": winRate + "%",
        "Avg Turns": wins > 0 ? (totalTurns / wins).toFixed(1) : "-",
        "Status": winRate > 50 ? "LANJUT" : "TEWAS"
      });

      // Update XP & Level
      if (winRate > 50) {
        currentXp += enemy.xpGain;
        while (XP_TABLE[currentLvl] && currentXp >= XP_TABLE[currentLvl]) {
          currentXp -= XP_TABLE[currentLvl];
          currentLvl++;
        }
      }
    });
    console.table(report);
  });
};

runFullSim(2000); // 500 iterasi agar lebih akurat