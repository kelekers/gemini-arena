/**
 * TAHAP 1: DATABASE MUSUH (BESTIARY) LENGKAP
 * Klasifikasi: HUMAN, CREATURE, SPIRIT, CYBER, BOSS
 * Tingkat kesulitan meningkat secara progresif dari Papua hingga Jawa.
 */

export const ENEMIES = {
  // =========================================================================
  // WILAYAH I: PAPUA (1910) - Tingkat Kesulitan: Pemula (Easy)
  // =========================================================================
  "PAP_CYB_DRONE": {
    id: "PAP_CYB_DRONE",
    name: "Mata Besi V1",
    type: "CYBER",
    hp: 80,
    atk: 12,
    image: "https://images.unsplash.com/photo-1535376472810-5d229c6bda89?q=80&w=1000&auto=format&fit=crop",
    desc: "Unit pengintai Neo-VOC yang mendistorsi pemandangan hutan Papua."
  },
  "PAP_HUM_KNIL": {
    id: "PAP_HUM_KNIL",
    name: "Serdadu Ekspedisi",
    type: "HUMAN",
    hp: 110,
    atk: 15,
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop",
    desc: "Pasukan kolonial yang pikirannya telah disinkronkan dengan frekuensi Sang Tapa."
  },
  "PAP_CRE_KASUARI": {
    id: "PAP_CRE_KASUARI",
    name: "Kasuari Glitch",
    type: "CREATURE",
    hp: 140,
    atk: 20,
    image: "https://images.unsplash.com/photo-1518467664548-23098f98a335?q=80&w=1000&auto=format&fit=crop",
    desc: "Burung endemik yang kakinya kini mengandung bilah logam alkimia."
  },
  "PAP_BOS_GUARDIAN": {
    id: "PAP_BOS_GUARDIAN",
    name: "The Rusted Guardian",
    type: "BOSS",
    hp: 450,
    atk: 35,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    desc: "Manifestasi Jangkar Alkimia pertama yang melindungi gletser Jayawijaya."
  },

  // =========================================================================
  // WILAYAH II: SULAWESI (1667) - Tingkat Kesulitan: Menengah (Medium)
  // =========================================================================
  "SUL_HUM_MARINER": {
    id: "SUL_HUM_MARINER",
    name: "Mariner Speelman",
    type: "HUMAN",
    hp: 180,
    atk: 28,
    image: "https://images.unsplash.com/photo-1590214691122-80f0ed17282b?q=80&w=1000&auto=format&fit=crop",
    desc: "Awak kapal VOC Speelman yang menggunakan zirah resonansi air."
  },
  "SUL_SPI_PARAKANG": {
    id: "SUL_SPI_PARAKANG",
    name: "Parakang Terdistorsi",
    type: "SPIRIT",
    hp: 150,
    atk: 45,
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
    desc: "Manusia jadi-jadian lokal yang terjebak dalam loop waktu digital."
  },
  "SUL_CRE_ANOA": {
    id: "SUL_CRE_ANOA",
    name: "Anoa Alkimia",
    type: "CREATURE",
    hp: 220,
    atk: 32,
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=1000&auto=format&fit=crop",
    desc: "Anoa gunung yang tanduknya kini memancarkan laser energi Sang Tapa."
  },
  "SUL_BOS_KRAKEN": {
    id: "SUL_BOS_KRAKEN",
    name: "Kraken Protocol",
    type: "BOSS",
    hp: 950,
    atk: 60,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
    desc: "Sistem pertahanan laut Neo-VOC yang melilit benteng Somba Opu."
  },

  // =========================================================================
  // WILAYAH III: KALIMANTAN (1859) - Tingkat Kesulitan: Sulit (Hard)
  // =========================================================================
  "KAL_HUM_OVERSEER": {
    id: "KAL_HUM_OVERSEER",
    name: "Mandor Oranje",
    type: "HUMAN",
    hp: 280,
    atk: 48,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1000&auto=format&fit=crop",
    desc: "Pengawas tambang yang menggunakan exoskeleton uap bertenaga batu bara."
  },
  "KAL_SPI_KUYANG": {
    id: "KAL_SPI_KUYANG",
    name: "Kuyang Neon",
    type: "SPIRIT",
    hp: 200,
    atk: 65,
    image: "https://images.unsplash.com/photo-1610416390141-8e9987677983?q=80&w=1000&auto=format&fit=crop",
    desc: "Hantu pedalaman yang organ dalamnya digantikan oleh kabel optik biru."
  },
  "KAL_CYB_DRILLER": {
    id: "KAL_CYB_DRILLER",
    name: "Driller Drone V3",
    type: "CYBER",
    hp: 250,
    atk: 40,
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
    desc: "Robot penggali Neo-VOC yang mencari urat nadi energi Kalimantan."
  },
  "KAL_BOS_ANDRESEN": {
    id: "KAL_BOS_ANDRESEN",
    name: "Colonel Andresen (Tank Form)",
    type: "BOSS",
    hp: 1600,
    atk: 85,
    image: "https://images.unsplash.com/photo-1533575677843-2615560640d2?q=80&w=1000&auto=format&fit=crop",
    desc: "Komandan KNIL yang menyatu dengan Tank Alkimia miliknya."
  },

  // =========================================================================
  // WILAYAH IV: SUMATRA (1833) - Tingkat Kesulitan: Sangat Sulit (Expert)
  // =========================================================================
  "SUM_HUM_INQUISITOR": {
    id: "SUM_HUM_INQUISITOR",
    name: "KNIL Inquisitor",
    type: "HUMAN",
    hp: 400,
    atk: 65,
    image: "https://images.unsplash.com/photo-1550953250-7d35398684d5?q=80&w=1000&auto=format&fit=crop",
    desc: "Pasukan khusus De Kock yang dibekali pedang laser anti-gerilya."
  },
  "SUM_CRE_TIGER": {
    id: "SUM_CRE_TIGER",
    name: "Harimau Glitch",
    type: "CREATURE",
    hp: 350,
    atk: 80,
    image: "https://images.unsplash.com/photo-1501706369511-06b086053b27?q=80&w=1000&auto=format&fit=crop",
    desc: "Pemangsa puncak yang kini memiliki kemampuan teleportasi jarak pendek."
  },
  "SUM_SPI_BEGU": {
    id: "SUM_SPI_BEGU",
    name: "Begu Ganjang Alkimia",
    type: "SPIRIT",
    hp: 300,
    atk: 90,
    image: "https://images.unsplash.com/photo-1548504770-436282915645?q=80&w=1000&auto=format&fit=crop",
    desc: "Roh bayangan yang memanjang mengikuti kabel energi Neo-VOC."
  },
  "SUM_BOS_RELIC": {
    id: "SUM_BOS_RELIC",
    name: "The Eternal Relic",
    type: "BOSS",
    hp: 2500,
    atk: 120,
    image: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=1000&auto=format&fit=crop",
    desc: "Jangkar Alkimia IV yang telah membangun katedral logam di atas bukit Bonjol."
  },

  // =========================================================================
  // WILAYAH V: JAWA (1945) - Tingkat Kesulitan: Mustahil (Nightmare)
  // =========================================================================
  "JAV_CYB_SENTINEL": {
    id: "JAV_CYB_SENTINEL",
    name: "Sentinel Omega",
    type: "CYBER",
    hp: 600,
    atk: 100,
    image: "https://images.unsplash.com/photo-1531297461136-82lw33903847?q=80&w=1000&auto=format&fit=crop",
    desc: "Garda depan Batavia-Prime yang memiliki perisai energi absolut."
  },
  "JAV_SPI_SHADOW": {
    id: "JAV_SPI_SHADOW",
    name: "Shadow of Heroes",
    type: "SPIRIT",
    hp: 550,
    atk: 120,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop",
    desc: "Gema dari pahlawan yang gagal di timeline Batavia-Prime."
  },
  "JAV_HUM_COMMANDO": {
    id: "JAV_HUM_COMMANDO",
    name: "Neo-KNIL Commando",
    type: "HUMAN",
    hp: 500,
    atk: 130,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    desc: "Elite Assassin milik Willem Van Aeterne."
  },
  "JAV_BOS_AETERNE": {
    id: "JAV_BOS_AETERNE",
    name: "Willem Van Aeterne",
    type: "BOSS",
    hp: 4000,
    atk: 160,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    desc: "Sang Arsitek Batavia-Prime. Memanipulasi gravitasi dan waktu."
  },
  "JAV_BOS_SANGTAPA": {
    id: "JAV_BOS_SANGTAPA",
    name: "SANG TAPA (True Entity)",
    type: "BOSS",
    hp: 8000,
    atk: 200,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    desc: "Inti dari segala anomali. Pemangsa energi kehidupan Nusantara."
  }
};