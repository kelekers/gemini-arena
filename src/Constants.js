// --- 1. TABEL PENGALAMAN (XP TABLE) ---
export const XP_TABLE = {
  1: 10,  // Menuju Lvl 2
  2: 25,  // Menuju Lvl 3
  3: 50,  // Menuju Lvl 4
  4: 100, // Menuju Lvl 5
  5: 200, // Menuju Lvl 6
  6: 400, // Menuju Lvl 7
  7: 800, // Menuju Lvl 8 (Batas Akhir Takdir)
};

// --- 2. PARA PERINTIS (PIONEERS) ---
export const PIONEERS = [
  {
    id: 'dipo',
    name: "DIPO",
    focus: "Keluwesan Strategi",
    description: "Terinspirasi dari Sang Pangeran Goa Selarong. Ia bertarung layaknya angin; sulit ditangkap, namun serangannya mematikan di celah yang tepat. Mengandalkan taktik parry dan serangan balasan cepat.",
    stats: {
      Kuat: 4,
      Tahan: 5,   // HP Awal: 50
      Mistis: 5,
      Pulung: 4,
      Luwes: 10,  // Spesialis: Parry & Evasion
      Wibawa: 6
    },
    imageIdle: "/src/assets/dipo_idle.png", 
    imgAtk: "/src/assets/dipo_atk.png",
    imgUlt: "/src/assets/dipo_ult.png",
  },
  {
    id: 'karti',
    name: "KARTI",
    focus: "Ketahanan Jiwa",
    description: "Terinspirasi dari Sang Pembawa Cahaya. Meski nampak anggun, ia memiliki daya tahan mental dan fisik yang luar biasa. Ia adalah batu karang yang tak goyah oleh ombak serangan musuh.",
    stats: {
      Kuat: 3,
      Tahan: 10,  // Spesialis: HP Awal 100 (Tanker)
      Mistis: 4,
      Pulung: 8,  // Beruntung dalam Takdir
      Luwes: 4,
      Wibawa: 5
    },
    imageIdle: "/src/assets/karti_idle.png",
    imgAtk: "/src/assets/karti_atk.png",
    imgUlt: "/src/assets/karti_ult.png",
  },
  {
    id: 'mada',
    name: "MADA",
    focus: "Kekuatan Raga",
    description: "Terinspirasi dari Sang Pemersatu Nusantara. Kekuatannya mampu meruntuhkan benteng dan menggetarkan nyali musuh hanya dengan kehadirannya. Fokus pada daya hancur murni.",
    stats: {
      Kuat: 11,   // Spesialis: Damage Fisik Masif
      Tahan: 7,   // HP Awal: 70
      Mistis: 3,
      Pulung: 3,
      Luwes: 4,
      Wibawa: 6
    },
    imageIdle: "/src/assets/mada_idle.png",
    imgAtk: "/src/assets/mada_atk.png",
    imgUlt: "/src/assets/mada_ult.png",
  }
];

// --- 3. DATA WILAYAH (ISLANDS) ---
// Sinkronisasi dengan WorldMap.jsx: Menggunakan 'status' dan 'coordinates.top/left'
export const ISLANDS = [
  { 
    id: 'papua', 
    name: 'PESISIR PAPUA', 
    status: 'unlocked', // Diubah dari isUnlocked agar sesuai komponen
    coordinates: { top: '48%', left: '76%' }, 
    startNode: 'TEST_GATEWAY'
  },
  { 
    id: 'sulawesi', 
    name: 'PEGUNUNGAN SULAWESI', 
    status: 'locked', 
    coordinates: { top: '30%', left: '58%' },
    startNode: 'SULAWESI_01_ARRIVAL'
  },
  { 
    id: 'kalimantan', 
    name: 'RIMBA KALIMANTAN', 
    status: 'locked', 
    coordinates: { top: '28%', left: '32%' },
    startNode: 'KALIMANTAN_01_ARRIVAL'
  },
  { 
    id: 'sumatra', 
    name: 'PESISIR ANDALAS', 
    status: 'locked', 
    coordinates: { top: '40%', left: '10%' },
    startNode: 'SUMATRA_01_ARRIVAL'
  },
  { 
    id: 'jawa', 
    name: 'PUSAT KARSA JAWA', 
    status: 'locked', 
    coordinates: { top: '60%', left: '40%' },
    startNode: 'JAWA_01_ARRIVAL'
  }
];

// --- 4. ASET VISUAL PETA (MAP_ASSETS) ---
// Menampung gambar pulau dan informasi detail sidebar
export const MAP_ASSETS = {
  'papua': {
    idleUnlocked: "/src/assets/pap_unlocked.png",
    hoverUnlocked: "/src/assets/pap_unlocked.png",
    idleLocked: "/src/assets/pap_locked.png",
    hoverLocked: "/src/assets/pap_locked.png",
    landmark: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    lore: "Titik di mana fajar Nusantara pertama kali menyentuh tanah. Jangkar alkimia di sini terkubur jauh di bawah akar pohon bakau purba yang bermutasi."
  },
  'sulawesi': {
    idleUnlocked: "/src/assets/sul_unlocked.png",
    hoverUnlocked: "/src/assets/sul_unlocked.png",
    idleLocked: "/src/assets/sul_locked.png",
    hoverLocked: "/src/assets/sul_locked.png",
    landmark: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
    lore: "Gunung-gunung di sini bukan terbuat dari batu, melainkan logam alkimia VOC masa depan yang mulai mengonsumsi alam sekitarnya."
  },
  'kalimantan': {
    landmark: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=1000",
    idleUnlocked: "/src/assets/kal_unlocked.png",
    hoverUnlocked: "/src/assets/kal_unlocked.png",
    idleLocked: "/src/assets/kal_locked.png",
    hoverLocked: "/src/assets/kal_locked.png",
    lore: "Hutan yang menyesatkan arah bagi mereka yang tidak memiliki Karsa murni. Sinyal dari tahun 2120 paling kuat terdeteksi di sini."
  },
  'sumatra': {
    landmark: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1000",
    idleUnlocked: "/src/assets/sum_unlocked.png",
    hoverUnlocked: "/src/assets/sum_unlocked.png",
    idleLocked: "/src/assets/sum_locked.png",
    hoverLocked: "/src/assets/sum_locked.png",
    lore: "Sisa-sisa kejayaan maritim yang kini dihuni oleh Iron Sentinels penjaga gerbang barat."
  },
  'jawa': {
    landmark: "https://images.unsplash.com/photo-1625472304192-3a56c078028f?q=80&w=1000",
    idleUnlocked: "/src/assets/jaw_unlocked.png",
    hoverUnlocked: "/src/assets/jaw_unlocked.png",
    idleLocked: "/src/assets/jaw_locked.png",
    hoverLocked: "/src/assets/jaw_locked.png",
    lore: "Tempat di mana Sang Tapa Utama berada. Ini adalah jantung dari paradoks waktu yang harus dihancurkan."
  }
};

// --- 4. TIPE WILAYAH (REGION THEMES) ---
export const REGION_THEMES = {
  'papua': { color: '#0f2a1f', accent: '#d4af37' },
  'sulawesi': { color: '#2a2a2a', accent: '#94a3b8' },
  'kalimantan': { color: '#064e3b', accent: '#10b981' },
  'sumatra': { color: '#1e3a8a', accent: '#60a5fa' },
  'jawa': { color: '#450a0a', accent: '#ef4444' }
};

// --- 5. DATA SINEMATIK PROLOGUE ---
// Menggunakan alur: 2120 -> 2026 -> Discovery -> Expedition
export const PROLOGUE_SCENES = [
  {
    id: 1,
    year: "2120 M",
    location: "BATAVIA-PRIME (DISTRIK PUSAT)",
    text: "Nusantara tidak pernah merdeka. Di bawah langit ungu neon yang statis, Neo-VOC memerintah dengan tangan besi. Keabadian telah ditemukan, namun harganya adalah jiwa. Rakyat hidup selamanya sebagai 'Raga Tanpa Karsa'—sekadar baterai penyokong megastruktur kolonial.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000", 
    glitch: true
  },
  {
    id: 2,
    year: "RETAK_WAKTU",
    location: "RENGASDENGKLOK (GAGAL)",
    text: "Semua bermula dari retakan di tahun 1945. Peristiwa Rengasdengklok tidak pernah terjadi. Para pemuda tertangkap, Soekarno-Hatta terisolasi, dan Proklamasi tertunda 5 tahun. Butterfly effect ini memberi celah bagi Entitas X—Sang Tapa—untuk meracuni sejarah Indonesia.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000", 
    glitch: true
  },
  {
    id: 3,
    year: "2120 M",
    location: "SITUS ARSIP NASIONAL",
    text: "Di tengah reruntuhan ingatan bangsa, jemarimu menyentuh sehelai kain merah-putih yang berdenyut. Sang Saka. Ia adalah sisa kejayaan yang tidak mampu dihapus oleh algoritma Sang Tapa. Melalui kain ini, Nusantara memanggil pahlawannya.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000",
    glitch: false
  },
  {
    id: 4,
    year: "TRANSISI",
    location: "AMBANG REALITAS",
    text: "Sang Saka membisikkan satu perintah: 'Jahit kembali benang waktu.' Kamu dikirim ke masa lalu yang asli, ke era di mana budaya masih murni namun anomali Neo-VOC mulai bermunculan. Hancurkan Jangkar Alkimia, atau Batavia-Prime akan menjadi takdir abadi kita.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    glitch: true
  },
  {
    id: 5,
    year: "1910 M",
    location: "PESISIR LORENTZ, PAPUA",
    text: "Lompatan waktu berhasil. Udara segar 1910 masuk ke paru-parumu, namun dengung statis di kejauhan menandakan Neo-VOC sudah mulai menjangkarkan pengaruhnya di sini. Ekspedisi dimulai.",
    image: "https://images.unsplash.com/photo-1597892657493-4848d5c02914?q=80&w=2000",
    glitch: false
  }
];

// --- 6. FRAGMEN LORE (LOADING TIPS PER WILAYAH) ---
export const LOADING_TIPS = {
  general: [
    {
      title: "Hukum Karsa",
      text: "Karsa bukan sekadar energi, ia adalah manifestasi dari kehendak merdeka. Tanpa Karsa, raga hanyalah mesin tak bernyawa.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000"
    },
    {
      title: "Ambang Takdir (DC)",
      text: "Setiap pilihan besar menuntut cek Takdir. Semakin tinggi stat terkait, semakin besar bonus yang kau dapatkan dari lemparan dadu pahlawan.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000"
    }
  ],
  papua: [
    {
      title: "Misteri Megalitikum",
      text: "Hutan Papua menyimpan Jangkar Alkimia tertua. Kabut di sini tidak hanya membutakan mata, tapi juga mengaburkan ingatan pahlawan.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000"
    },
    {
      title: "Kekuatan Raga Mada",
      text: "Di medan Papua yang berat, serangan fisik Mada adalah kunci. Manfaatkan stat Kuat untuk menembus pertahanan musuh di awal perjalanan.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000"
    }
  ],
  sulawesi: [
    {
      title: "Logam Terkutuk",
      text: "Besi Sulawesi adalah material terbaik untuk membelah armor Iron Sentinels dari masa depan. Pastikan senjatamu telah ditempa dengan karsa murni.",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2000"
    }
  ],
  kalimantan: [
    {
      title: "Jantung Zamrud",
      text: "Hutan Kalimantan adalah labirin yang hidup. Gunakan stat Luwes untuk menemukan jalan keluar dari jerat akar alkimia yang mencekik.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000"
    }
  ],
  sumatra: [
    {
      title: "Suara Andalas",
      text: "Pesisir Sumatra menyimpan memori kerajaan maritim. Stat Wibawa sangat krusial untuk mengumpulkan sisa-sisa armada yang masih setia pada merah-putih.",
      image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2000"
    }
  ],
  jawa: [
    {
      title: "Titik Nadir",
      text: "Jawa adalah tempat di mana Sang Saka dan Sang Tapa akan beradu untuk terakhir kalinya. Pastikan seluruh poin takdirmu telah dialokasikan dengan bijak.",
      image: "https://images.unsplash.com/photo-1625472304192-3a56c078028f?q=80&w=2000"
    }
  ]
};

// --- 8. ITEMS: PAPUA REGION ---
export const ITEMS_PAPUA = {
  // --- CONSUMABLES (Pemulihan & Buff Sementara) ---
  'p1_papeda_karsa': {
    id: 'p1_papeda_karsa',
    name: "Papeda Gumpal Karsa",
    type: 'CONSUMABLE',
    price: 50,
    effect: { hp: 30 },
    description: "Sagu yang dimasak dengan tetesan embun alkimia. Memulihkan raga yang lelah dengan cepat.",
    rarity: 'Common'
  },
  'p1_pinang_alkimia': {
    id: 'p1_pinang_alkimia',
    name: "Buah Pinang Alkimia",
    type: 'CONSUMABLE',
    price: 120,
    effect: { Kuat: 2 }, // Buff untuk 1 battle berikutnya
    description: "Memberikan sensasi panas di dada dan meningkatkan kekuatan otot secara instan.",
    rarity: 'Uncommon'
  },
  'p1_air_penawar_bakau': {
    id: 'p1_air_penawar_bakau',
    name: "Air Penawar Bakau",
    type: 'CONSUMABLE',
    price: 80,
    effect: { status: 'Cure_Poison' },
    description: "Sangat efektif untuk menetralisir racun dari gigitan Kasuari Belati.",
    rarity: 'Common'
  },

  // --- ARMORY (Pertahanan & Aksesoris) ---
  'p1_noken_takdir': {
    id: 'p1_noken_takdir',
    name: "Noken Rajutan Takdir",
    type: 'ARMORY',
    price: 350,
    stats: { Tahan: 2 }, 
    description: "Tas tradisional yang dirajut menggunakan serat pohon yang terpapar karsa biru. Menambah ketahanan mental.",
    rarity: 'Uncommon'
  },
  'p1_gelang_akar_bahar': {
    id: 'p1_gelang_akar_bahar',
    name: "Gelang Akar Bahar Hitam",
    type: 'ARMORY',
    price: 500,
    stats: { Tahan: 3, Mistis: 1 },
    description: "Akar laut yang mengeras secara tidak alami. Memberikan perlindungan dari serangan mahluk halus.",
    rarity: 'Rare'
  },

  // --- WEAPONS (Serangan & Karsa) ---
  'p1_kapak_batu_plasma': {
    id: 'p1_kapak_batu_plasma',
    name: "Kapak Batu Plasma",
    type: 'WEAPON',
    price: 750,
    stats: { Kuat: 5 },
    description: "Kapak batu megalitikum yang dipasangi sirkuit pemanas dari drone VOC 2120 yang hancur.",
    rarity: 'Rare'
  },
  'p1_tombak_ikan_biak': {
    id: 'p1_tombak_ikan_biak',
    name: "Tombak Ikan Karsa",
    type: 'WEAPON',
    price: 600,
    stats: { Luwes: 4 },
    description: "Tombak ringan yang sangat seimbang. Ujungnya terbuat dari tulang hiu yang telah melalui proses alkimia.",
    rarity: 'Uncommon'
  },
  'p1_belati_tulang_kasuari': {
    id: 'p1_belati_tulang_kasuari',
    name: "Belati Kasuari Hitam",
    type: 'WEAPON',
    price: 550,
    stats: { Kuat: 2, Luwes: 2 },
    description: "Senjata cepat untuk pahlawan yang mengandalkan serangan bertubi-tubi di balik kabut rawa.",
    rarity: 'Uncommon'
  }
};

// --- 10. ITEMS: SULAWESI REGION ---
export const ITEMS_SULAWESI = {
  // --- CONSUMABLES (Pemulihan & Penguatan Alkimia) ---
  's2_saraba_cair_karsa': {
    id: 's2_saraba_cair_karsa',
    name: "Saraba Cairan Karsa",
    type: 'CONSUMABLE',
    price: 150,
    effect: { hp: 80 },
    description: "Jahe hangat yang diekstrak dengan uap Sang Tapa. Memulihkan HP secara masif dan memberikan rasa hangat di tengah dinginnya tambang Sulawesi.",
    rarity: 'Common'
  },
  's2_kopi_toraja_neon': {
    id: 's2_kopi_toraja_neon',
    name: "Kopi Toraja Neon",
    type: 'CONSUMABLE',
    price: 250,
    effect: { Luwes: 4 }, // Buff durasi 1 battle
    description: "Biji kopi yang tumbuh di dekat reaktor 2120. Meningkatkan kecepatan saraf dan refleks pahlawan secara drastis.",
    rarity: 'Uncommon'
  },
  's2_dangke_alkimia': {
    id: 's2_dangke_alkimia',
    name: "Dangke Alkimia",
    type: 'CONSUMABLE',
    price: 200,
    effect: { Tahan: 3 }, // Buff durasi 1 battle
    description: "Keju tradisional Sulawesi yang telah diproses secara kimia untuk mengeraskan kepadatan tulang pahlawan.",
    rarity: 'Uncommon'
  },

  // --- ARMORY (Zirah Lapis Besi) ---
  's2_zirah_rantai_luwu': {
    id: 's2_zirah_rantai_luwu',
    name: "Zirah Rantai Besi Luwu",
    type: 'ARMORY',
    price: 1200,
    stats: { Tahan: 8 }, 
    description: "Ditempa oleh para maestro Luwu. Rantai besinya mampu meredam benturan dari gada raksasa maupun peluru VOC.",
    rarity: 'Rare'
  },
  's2_lipa_sabbe_karsa': {
    id: 's2_lipa_sabbe_karsa',
    name: "Lipa' Sabbe Tenun Karsa",
    type: 'ARMORY',
    price: 900,
    stats: { Mistis: 5, Wibawa: 3 },
    description: "Sarung sutra Bugis yang ditenun dengan benang serat optik. Melindungi pemakainya dari gangguan roh Tau-tau.",
    rarity: 'Rare'
  },

  // --- WEAPONS (Baja & Meteorit) ---
  's2_badik_meteorit_2120': {
    id: 's2_badik_meteorit_2120',
    name: "Badik Meteorit 2120",
    type: 'WEAPON',
    price: 1800,
    stats: { Kuat: 10, Luwes: 2 },
    description: "Senjata tradisional yang ditempa ulang menggunakan inti reaktor drone VOC. Tajamnya mampu membelah realitas yang glitching.",
    rarity: 'Epic'
  },
  's2_parang_salu_putih': {
    id: 's2_parang_salu_putih',
    name: "Parang Salu-Putih Plasma",
    type: 'WEAPON',
    price: 1500,
    stats: { Kuat: 7, Luwes: 5 },
    description: "Pedang panjang yang sangat seimbang. Bilahnya memancarkan cahaya biru saat mendeteksi keberadaan musuh tipe Cyber.",
    rarity: 'Rare'
  },
  's2_tombak_pajonge': {
    id: 's2_tombak_pajonge',
    name: "Tombak Pajonge Karat",
    type: 'WEAPON',
    price: 1300,
    stats: { Kuat: 8 },
    description: "Tombak berat yang digunakan untuk menembus zirah Anoa Besi. Sangat efektif untuk serangan jarak jauh.",
    rarity: 'Uncommon'
  }
};

// --- 11. ITEMS: KALIMANTAN REGION ---
export const ITEMS_KALIMANTAN = {
  // --- CONSUMABLES (Hayati & Penawar) ---
  'k3_madu_kelulut_hitam': {
    id: 'k3_madu_kelulut_hitam',
    name: "Madu Kelulut Hitam",
    type: 'CONSUMABLE',
    price: 300,
    effect: { hp: 150 },
    description: "Madu dari lebah yang menghisap sari bunga alkimia. Memulihkan luka dalam dan memberikan energi instan.",
    rarity: 'Common'
  },
  'k3_akar_kuning_plasma': {
    id: 'k3_akar_kuning_plasma',
    name: "Akar Kuning Plasma",
    type: 'CONSUMABLE',
    price: 450,
    effect: { status: 'Cure_All' },
    description: "Ekstrak tanaman langka yang mampu membersihkan virus digital dan racun biologis dari sistem saraf pahlawan.",
    rarity: 'Uncommon'
  },
  'k3_buah_paken_neon': {
    id: 'k3_buah_paken_neon',
    name: "Buah Paken Neon",
    type: 'CONSUMABLE',
    price: 500,
    effect: { Luwes: 6 }, // Buff durasi 1 battle
    description: "Buah durian liar yang bersinar hijau. Meningkatkan adrenalin dan kecepatan gerak hingga batas maksimal.",
    rarity: 'Uncommon'
  },

  // --- ARMORY (Organik & Kamuflase) ---
  'k3_zirah_kulit_trenggiling': {
    id: 'k3_zirah_kulit_trenggiling',
    name: "Zirah Kulit Trenggiling",
    type: 'ARMORY',
    price: 2200,
    stats: { Tahan: 12, Luwes: -2 }, 
    description: "Sisik trenggiling raksasa yang diperkuat dengan lapisan polimer 2120. Sangat tebal namun sedikit berat.",
    rarity: 'Rare'
  },
  'k3_topeng_hudoq_karsa': {
    id: 'k3_topeng_hudoq_karsa',
    name: "Topeng Hudoq Karsa",
    type: 'ARMORY',
    price: 1800,
    stats: { Mistis: 8, Wibawa: 4 },
    description: "Topeng ritual yang telah dipasangi neuro-transmitter. Menakuti musuh tipe Spirit dan meningkatkan fokus kebatinan.",
    rarity: 'Rare'
  },

  // --- WEAPONS (Mandau & Sumpit) ---
  'k3_mandau_plasma_dayak': {
    id: 'k3_mandau_plasma_dayak',
    name: "Mandau Plasma Dayak",
    type: 'WEAPON',
    price: 3500,
    stats: { Kuat: 12, Luwes: 5 },
    description: "Bilah Mandau legendaris yang tepiannya dialiri plasma hijau. Mampu memotong baja dan akar alkimia dalam satu tebasan.",
    rarity: 'Epic'
  },
  'k3_sumpit_senyap_2120': {
    id: 'k3_sumpit_senyap_2120',
    name: "Sumpit Senyap VOC-2120",
    type: 'WEAPON',
    price: 2800,
    stats: { Luwes: 10 },
    description: "Senjata jarak jauh yang menggunakan tekanan uap alkimia. Jarumnya mengandung kode perusak sirkuit untuk musuh tipe Cyber.",
    rarity: 'Rare'
  },
  'k3_gada_ulin_alkimia': {
    id: 'k3_gada_ulin_alkimia',
    name: "Gada Kayu Ulin Alkimia",
    type: 'WEAPON',
    price: 2500,
    stats: { Kuat: 15, Luwes: -4 },
    description: "Kayu besi Kalimantan yang telah direndam cairan Sang Tapa selama puluhan tahun. Beratnya luar biasa, hantamannya mematikan.",
    rarity: 'Rare'
  }
};

// --- 12. ITEMS: SUMATRA REGION ---
export const ITEMS_SUMATRA = {
  // --- CONSUMABLES (Pusaka Rasa & Stamina) ---
  's4_kopi_gayo_alkimia': {
    id: 's4_kopi_gayo_alkimia',
    name: "Kopi Gayo Hitam 2120",
    type: 'CONSUMABLE',
    price: 600,
    effect: { Luwes: 8, Wibawa: 2 }, // Fokus tinggi untuk manuver laut
    description: "Ekstrak kopi Gayo yang difermentasi dengan uap inti karsa. Memberikan fokus tajam layaknya mata elang di tengah badai.",
    rarity: 'Rare'
  },
  's4_rendang_karsa_hitam': {
    id: 's4_rendang_karsa_hitam',
    name: "Rendang Karsa Hitam",
    type: 'CONSUMABLE',
    price: 850,
    effect: { hp: 350 }, // Pemulihan masif untuk pahlawan level tinggi
    description: "Daging pilihan yang dimasak selama 7 hari 7 malam dengan rempah-rempah yang telah terpapar radiasi Sang Tapa.",
    rarity: 'Rare'
  },
  's4_parfum_gaharu_mistis': {
    id: 's4_parfum_gaharu_mistis',
    name: "Minyak Gaharu Mistis",
    type: 'CONSUMABLE',
    price: 700,
    effect: { Mistis: 10 }, 
    description: "Wewangian dari kayu gaharu purba yang mampu memanggil perlindungan roh bunian untuk satu pertempuran.",
    rarity: 'Epic'
  },

  // --- ARMORY (Zirah Kedaulatan & Pelindung Laut) ---
  's4_zirah_perunggu_sriwijaya': {
    id: 's4_zirah_perunggu_sriwijaya',
    name: "Zirah Perunggu Sriwijaya",
    type: 'ARMORY',
    price: 5500,
    stats: { Tahan: 15, Wibawa: 5 }, 
    description: "Pelindung dada dari perunggu berlapis emas yang telah dirajah mantra kedaulatan laut. Sangat berat namun tak tergoyahkan.",
    rarity: 'Epic'
  },
  's4_tanjak_sang_pendekar': {
    id: 's4_tanjak_sang_pendekar',
    name: "Tanjak Karsa Sang Prabu",
    type: 'ARMORY',
    price: 4200,
    stats: { Wibawa: 8, Mistis: 4 },
    description: "Penutup kepala bangsawan yang ditenun dengan benang logam dari masa depan. Memancarkan aura otoritas yang mengintimidasi musuh.",
    rarity: 'Rare'
  },
  's4_jubah_maritim_malahayati': {
    id: 's4_jubah_maritim_malahayati',
    name: "Jubah Maritim Malahayati",
    type: 'ARMORY',
    price: 4800,
    stats: { Luwes: 12, Tahan: 4 },
    description: "Jubah tahan air yang ringan, digunakan oleh komandan laut. Memberikan mobilitas luar biasa di medan yang sulit.",
    rarity: 'Epic'
  },

  // --- WEAPONS (Rencong Plasma & Harpun Naga) ---
  's4_rencong_plasma_aceh': {
    id: 's4_rencong_plasma_aceh',
    name: "Rencong Plasma: Takdir Aceh",
    type: 'WEAPON',
    price: 8500,
    stats: { Kuat: 18, Luwes: 10 },
    description: "Bilah Rencong legendaris yang memancarkan api biru stabil. Senjata ini adalah simbol perlawanan yang tak pernah padam oleh waktu.",
    rarity: 'Legendary'
  },
  's4_harpun_naga_musi': {
    id: 's4_harpun_naga_musi',
    name: "Harpun Naga Musi",
    type: 'WEAPON',
    price: 6800,
    stats: { Kuat: 22, Luwes: -5 },
    description: "Tombak harpun raksasa yang ujungnya bergetar dengan frekuensi tinggi. Mampu menembus zirah baja Gajah Perang VOC.",
    rarity: 'Epic'
  },
  's4_keris_andalan_minang': {
    id: 's4_keris_andalan_minang',
    name: "Keris Minang: Patah Sembilan",
    type: 'WEAPON',
    price: 7200,
    stats: { Mistis: 15, Kuat: 5 },
    description: "Keris dengan lekuk sembilan yang setiap ujungnya menyimpan data virus digital untuk melumpuhkan musuh tipe Cyber.",
    rarity: 'Epic'
  }
};

// --- 13. ITEMS: JAWA REGION ---
export const ITEMS_JAWA = {
  // --- CONSUMABLES (Energi Primordial) ---
  's5_tumpeng_karsa_agung': {
    id: 's5_tumpeng_karsa_agung',
    name: "Tumpeng Karsa Agung",
    type: 'CONSUMABLE',
    price: 2500,
    effect: { hp: 9999 }, // Full Heal
    description: "Sajian ritual terakhir. Memulihkan seluruh raga dan menghapus semua status glitch secara instan.",
    rarity: 'Legendary'
  },
  's5_jamu_sapujagad_2120': {
    id: 's5_jamu_sapujagad_2120',
    name: "Jamu Sapujagad 2120",
    type: 'CONSUMABLE',
    price: 1800,
    effect: { All_Stats: 5 }, // Buff masif untuk 1 battle
    description: "Cairan emas hasil distilasi Sang Tapa. Memaksa potensi manusia keluar hingga ke titik nadir.",
    rarity: 'Epic'
  },
  's5_teh_melati_selarong': {
    id: 's5_teh_melati_selarong',
    name: "Teh Melati Selarong",
    type: 'CONSUMABLE',
    price: 1200,
    effect: { Mistis: 15 }, 
    description: "Aroma melati yang menenangkan jiwa di tengah badai waktu. Meningkatkan ketahanan terhadap manipulasi pikiran Van Aeterne.",
    rarity: 'Rare'
  },

  // --- ARMORY (Zirah Legenda & Perwujudan Takdir) ---
  's5_zirah_nogo_siluman': {
    id: 's5_zirah_nogo_siluman',
    name: "Zirah Nogo Siluman",
    type: 'ARMORY',
    price: 15000,
    stats: { Tahan: 20, Mistis: 10 }, 
    description: "Zirah yang terbuat dari sisik naga yang hidup di antara lipatan waktu. Pemakainya akan sulit terlihat oleh radar 2120.",
    rarity: 'Legendary'
  },
  's5_kebaya_baja_karti': {
    id: 's5_kebaya_baja_karti',
    name: "Kebaya Baja Karsa Karti",
    type: 'ARMORY',
    price: 12000,
    stats: { Tahan: 25 }, 
    description: "Tenunan kawat nano-baja yang mampu menahan ledakan anti-materi. Berat namun memberikan perlindungan absolut.",
    rarity: 'Legendary'
  },
  's5_mahkota_karsa_abadi': {
    id: 's5_mahkota_karsa_abadi',
    name: "Mahkota Karsa Abadi",
    type: 'ARMORY',
    price: 10000,
    stats: { Wibawa: 20 },
    description: "Simbol penguasa Nusantara yang merdeka. Menurunkan ATK semua musuh di sekitar secara otomatis.",
    rarity: 'Epic'
  },

  // --- WEAPONS (Pusaka Pamungkas) ---
  's5_keris_nogo_siluman_2120': {
    id: 's5_keris_nogo_siluman_2120',
    name: "Keris Kiai Nogo Siluman 2120",
    type: 'WEAPON',
    price: 25000,
    stats: { Kuat: 25, Mistis: 15 },
    description: "Pusaka Sang Pangeran yang telah berevolusi. Bilahnya tidak lagi terbuat dari besi, melainkan dari data murni yang membeku.",
    rarity: 'Legendary'
  },
  's5_gada_kyai_pleret_plasma': {
    id: 's5_gada_kyai_pleret_plasma',
    name: "Gada Kyai Pleret Plasma",
    type: 'WEAPON',
    price: 22000,
    stats: { Kuat: 35, Luwes: -10 },
    description: "Senjata penghancur masif. Satu hantaman mampu meruntuhkan Titan Extractor maupun benteng Batavia-Prime.",
    rarity: 'Legendary'
  },
  's5_bambu_runcing_alkimia': {
    id: 's5_bambu_runcing_alkimia',
    name: "Bambu Runcing: Penembus Takdir",
    type: 'WEAPON',
    price: 18000,
    stats: { Luwes: 20, Pulung: 10 },
    description: "Bambu yang direndam dalam darah para martir dan energi Sang Saka. Senjata tercepat yang mampu menusuk celah waktu Van Aeterne.",
    rarity: 'Epic'
  }
};

// --- UPDATE MARKET CATALOG ---
export const MARKET_CATALOG = {
  'papua': [
    'p1_papeda_karsa', 'p1_pinang_alkimia', 'p1_air_penawar_bakau', 
    'p1_noken_takdir', 'p1_gelang_akar_bahar', 'p1_kapak_batu_plasma', 'p1_tombak_ikan_biak', 'p1_belati_tulang_kasuari'
  ],
  'sulawesi': [
    's2_saraba_cair_karsa', 's2_kopi_toraja_neon', 's2_zirah_rantai_luwu', 
    's2_badik_meteorit_2120', 's2_parang_salu_putih', 's2_tombak_pajonge', 's2_dangke_alkimia', 's2_lipa_sabbe_karsa'
  ],
  'kalimantan': [
    'k3_madu_kelulut_hitam',
    'k3_akar_kuning_plasma',
    'k3_buah_paken_neon',
    'k3_zirah_kulit_trenggiling',
    'k3_topeng_hudoq_karsa',
    'k3_mandau_plasma_dayak',
    'k3_sumpit_senyap_2120',
    'k3_gada_ulin_alkimia'
  ],
    'sumatra': [
    's4_kopi_gayo_alkimia',
    's4_rendang_karsa_hitam',
    's4_parfum_gaharu_mistis',
    's4_zirah_perunggu_sriwijaya',
    's4_tanjak_sang_pendekar',
    's4_jubah_maritim_malahayati',
    's4_rencong_plasma_aceh',
    's4_harpun_naga_musi',
    's4_keris_andalan_minang'
  ],
    'jawa': [
    's5_tumpeng_karsa_agung',
    's5_jamu_sapujagad_2120',
    's5_teh_melati_selarong',
    's5_zirah_nogo_siluman',
    's5_kebaya_baja_karti',
    's5_mahkota_karsa_abadi',
    's5_keris_nogo_siluman_2120',
    's5_gada_kyai_pleret_plasma',
    's5_bambu_runcing_alkimia'
  ]
};

// --- 14. ENEMIES: PAPUA REGION ---
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
  "SUL_SEA_SENTRY": {
    id: "SUL_SEA_SENTRY",
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
  "KAL_CRE_ENGGANG": {
    id: "KAL_CRE_ENGGANG",
    name: "Enggang Kristal",
    type: "CREATURE", hp: 380, atk: 50, xpGain: 80, goldGain: 400,
    image: "https://images.unsplash.com/photo-1555169062-013468b47731",
    desc: "Burung suci yang bulunya berubah menjadi kaca tajam akibat radiasi alkimia."
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
  "KAL_BOS_CORE": {
    id: "KAL_BOS_CORE",
    name: "The Driller Core",
    type: "BOSS", hp: 1500, atk: 90, xpGain: 500, goldGain: 4000,
    image: "https://images.unsplash.com/photo-1518544806308-8737b475420f",
    desc: "Inti mesin bor Neo-VOC yang mengekstraksi Karsa langsung dari perut bumi."
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
  "JAV_BOS_SANG_TAPA": {
    id: "JAV_BOS_SANG_TAPA",
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

export const STORY_NODES = {
  // === GERBANG AWAL ===
  "TEST_GATEWAY": {
    id: "TEST_GATEWAY",
    type: "STORY",
    speaker: "SISTEM ARSIP",
    year: "2026 - MODE DEBUG",
    text: "Selamat datang, Penjelajah Waktu. Sistem Arsip Takdir aktif. Ke mana karsamu akan melangkah?",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    options: [
      { text: "Memulai Ekspedisi: Papua (1910)", nextNode: "PAPUA_01_ARRIVAL" }
    ]
  },

  // =========================================================================
  // WILAYAH I: PAPUA (1910) - AKAR BUDAYA
  // =========================================================================

  // --- PILAR 1: KEDATANGAN & GLITCH ---
  "PAPUA_01_ARRIVAL": {
    id: "PAPUA_01_ARRIVAL",
    type: "STORY",
    year: "Pesisir Lorentz, 1910",
    speaker: "NARASI",
    text: "Kesadaranmu ditarik paksa melewati ruang waktu. Bau garam dan ozon menyengat hidung. Kau terbangun di pasir putih pantai utara Papua. Di hadapanmu, hutan hujan purba menjulang, namun... ada sesuatu yang salah. Pohon-pohon itu berkedip.",
    image: "https://images.unsplash.com/photo-1597892657493-4848d5c02914?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Periksa kondisi tubuh (Cek Status)", nextNode: "PAPUA_02_BODY_CHECK" },
      { text: "Analisis lingkungan sekitar (Cek Glitch)", nextNode: "PAPUA_03_GLITCH_ANALYSIS" }
    ]
  },

  "PAPUA_02_BODY_CHECK": {
    id: "PAPUA_02_BODY_CHECK",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Tanganku gemetar, tapi masih utuh. Sang Saka berdenyut hangat di dadaku, melindungiku dari paradoks waktu. Di kejauhan, Puncak Jayawijaya terlihat tertutup salju... dan logam.",
    image: "https://images.unsplash.com/photo-1544965850-6f8a627a8c7f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Bergerak masuk ke hutan", nextNode: "PAPUA_04_JUNGLE_ENTRY" }
    ]
  },

  "PAPUA_03_GLITCH_ANALYSIS": {
    id: "PAPUA_03_GLITCH_ANALYSIS",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau menyentuh batang pohon kelapa. Teksturnya bukan kayu, melainkan polimer dingin. 'Jangkar Alkimia' di pulau ini pasti sudah mulai mengubah materi organik menjadi data mati.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Fokus pada misi utama", nextNode: "PAPUA_04_JUNGLE_ENTRY" }
    ]
  },

  "PAPUA_04_JUNGLE_ENTRY": {
    id: "PAPUA_04_JUNGLE_ENTRY",
    type: "STORY",
    year: "Hutan Hujan Lorentz, 1910",
    speaker: "NARASI",
    text: "Kau melangkah masuk ke dalam rimbanya hutan Lorentz. Suara serangga hutan bersahutan dengan dengung statis listrik. Ini adalah tahun di mana ekspedisi Belanda pertama kali mencoba memetakan 'Terra Incognita' ini.",
    image: "https://images.unsplash.com/photo-1518182170546-07fa6eb28555?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Ekspedisi Lorentz (1909-1910)",
    historyText: "Dipimpin oleh Hendrikus Albertus Lorentz, ekspedisi ini bertujuan mencapai Puncak Wilhelmina (Trikora) yang bersalju. Mereka adalah orang asing pertama yang melakukan kontak mendalam dengan suku-suku pedalaman Papua, mendokumentasikan flora dan fauna yang belum pernah dilihat dunia.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lorentz_Expedition_1909.jpg",
    options: [
      { text: "Waspada terhadap jejak kaki", nextNode: "PAPUA_05_TRACKING" }
    ]
  },

  "PAPUA_05_TRACKING": {
    id: "PAPUA_05_TRACKING",
    type: "STORY",
    speaker: "NARASI",
    text: "Ada dua jenis jejak di tanah lumpur ini. Satu jejak kaki telanjang manusia yang lincah. Satu lagi... jejak kaki persegi yang berat dan meninggalkan bekas hangus. Suku lokal sedang diburu.",
    image: "https://images.unsplash.com/photo-1476231682828-37edb48176dc?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[MISTIS] Rasakan aura sekitar (DC 10)", 
        requirement: { stat: "Mistis", dc: 10 },
        nextNode: "PAPUA_06_SPIRIT_SENSE",
        failNode: "PAPUA_07_AMBUSH"
      },
      { 
        text: "[LUWES] Bergerak tanpa suara (DC 10)", 
        requirement: { stat: "Luwes", dc: 10 },
        nextNode: "PAPUA_08_VANTAGE_POINT",
        failNode: "PAPUA_07_AMBUSH"
      }
    ]
  },

  // --- CABANG KEGAGALAN TRACKING ---
  "PAPUA_07_AMBUSH": {
    id: "PAPUA_07_AMBUSH",
    type: "STORY",
    speaker: "NARASI",
    text: "KRAK! Ranting patah di bawah kakimu. Dari balik semak, tombak melayang nyaris mengenai kepalamu. Sekelompok prajurit adat dengan hiasan kepala Kasuari mengepungmu.",
    image: "https://images.unsplash.com/photo-1533575677843-2615560640d2?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Angkat tangan perlahan", nextNode: "PAPUA_09_TRIBE_ENCOUNTER" }
    ]
  },

  // --- CABANG SUKSES TRACKING ---
  "PAPUA_06_SPIRIT_SENSE": {
    id: "PAPUA_06_SPIRIT_SENSE",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Aku merasakan ketakutan mereka. Bukan padaku, tapi pada 'Burung Besi'. Aku keluar dari persembunyian dengan tangan terbuka, memancarkan aura damai.",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Sapa mereka dengan hormat", rewardStat: { Pulung: 1 }, nextNode: "PAPUA_09_TRIBE_ENCOUNTER" }
    ]
  },

  "PAPUA_08_VANTAGE_POINT": {
    id: "PAPUA_08_VANTAGE_POINT",
    type: "STORY",
    speaker: "NARASI",
    text: "Dari atas dahan pohon, kau melihat prajurit suku sedang bersembunyi dari patroli Drone. Kau melompat turun tepat di depan pemimpin mereka, mengejutkan namun membuktikan kau bukan musuh.",
    image: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Tawarkan bantuan", rewardStat: { Luwes: 1 }, nextNode: "PAPUA_09_TRIBE_ENCOUNTER" }
    ]
  },

  // --- PILAR 2: DIPLOMASI SUKU ---
  "PAPUA_09_TRIBE_ENCOUNTER": {
    id: "PAPUA_09_TRIBE_ENCOUNTER",
    type: "STORY",
    speaker: "TETUA ADAT",
    text: "Kau... Kulitmu pucat seperti mereka yang datang membawa bendera tiga warna. Tapi matamu menyimpan cahaya bintang tua. Apakah kau datang untuk mengambil emas kami, atau mengusir 'Dewa Logam' yang marah?",
    image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[WIBAWA] Aku musuh dari Dewa Logam itu (DC 12)", 
        requirement: { stat: "Wibawa", dc: 12 },
        nextNode: "PAPUA_10_TRUST_GAINED",
        failNode: "PAPUA_11_TRUST_LOST"
      },
      { 
        text: "[DOMINATION] Minggir, aku yang akan membunuh monster itu.", 
        alignment: { DOMINATION: 1 },
        nextNode: "PAPUA_11_TRUST_LOST"
      },
      { 
        text: "[PRESERVATION] Leluhur mengirimku untuk menjaga hutan ini.", 
        alignment: { PRESERVATION: 1 },
        nextNode: "PAPUA_10_TRUST_GAINED"
      }
    ]
  },

  "PAPUA_10_TRUST_GAINED": {
    id: "PAPUA_10_TRUST_GAINED",
    type: "STORY",
    speaker: "TETUA ADAT",
    text: "Kata-katamu berat seperti batu sungai. Kami percaya. Ambillah 'Noken' ini. Di dalamnya ada ramuan akar untuk memulihkan tenagamu saat mendaki gunung sakral.",
    image: "https://images.unsplash.com/photo-1621876594248-285640324225?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Terima Noken (+5 Tahan)", 
        rewardStat: { Tahan: 5 },
        nextNode: "PAPUA_12_DRONE_ATTACK" 
      }
    ]
  },

  "PAPUA_11_TRUST_LOST": {
    id: "PAPUA_11_TRUST_LOST",
    type: "STORY",
    speaker: "TETUA ADAT",
    text: "Arogansi adalah awal dari kehancuran. Kami tidak akan menghalangimu, tapi kami juga tidak akan membantumu. Hutan ini tidak ramah pada orang asing yang sombong.",
    image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Aku tidak butuh bantuan", nextNode: "PAPUA_12_DRONE_ATTACK" }
    ]
  },

  // --- PILAR 3: PERTEMPURAN PERTAMA ---
  "PAPUA_12_DRONE_ATTACK": {
    id: "PAPUA_12_DRONE_ATTACK",
    type: "STORY",
    speaker: "NARASI",
    text: "Pembicaraan terhenti. Suara berdenging tajam memecah udara. Dari balik kanopi, seekor Burung Kasuari yang berbentuk robot turun. Ia melihat Tetua Adat sebagai target eliminasi.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Burung Kasuari",
    historyText: "Burung kasuari atau dalam bahasa latin disebut Casuarius. Dikenal sebagai burung terbesar di dunia yang tidak bisa terbang, kasuari memiliki bulu hitam yang berkilauan dan cakar tajam.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Casuarius_casuarius_-_Australia_Zoo.jpg",
    glitch: true,
    options: [
      { text: "Lindungi Tetua! (Mulai Pertempuran)", nextNode: "PAPUA_BATTLE_DRONE_01" }
    ]
  },

  "PAPUA_BATTLE_DRONE_01": {
    id: "PAPUA_BATTLE_DRONE_01",
    type: "BATTLE_TRIGGER",
    enemyId: "PAP_CRE_KASUARI",
    winNode: "PAPUA_13_POST_BATTLE",
    loseNode: "DEATH_SCENE"
  },

  "PAPUA_13_POST_BATTLE": {
    id: "PAPUA_13_POST_BATTLE",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Bangkai Kasuari itu berasap. Di badannya terdapat serabut fiber optik. Neo-VOC mencoba memengaruhi makhluk di sini seabad lebih awal.",
    image: "https://images.unsplash.com/photo-1616858204618-9c17df20b003?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Lanjutkan perjalanan ke kaki gunung", nextNode: "PAPUA_14_JUNGLE_EXPLORE" }
    ]
  },

  // --- PILAR 4: EKSPLORASI & FLORA FAUNA ---
  "PAPUA_14_JUNGLE_EXPLORE": {
    id: "PAPUA_14_JUNGLE_EXPLORE",
    type: "STORY",
    year: "Kaki Gunung Jayawijaya",
    speaker: "NARASI",
    text: "Jalur semakin menanjak. Udara semakin dingin. Tiba-tiba, seekor Burung Cendrawasih melintas. Ekornya yang indah tidak terbuat dari bulu, melainkan serat optik yang berpendar.",
    image: "https://images.unsplash.com/photo-1608226079979-503433544a49?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Burung Surga (Cendrawasih)",
    historyText: "Paradisaeidae, atau Cendrawasih, dikenal sebagai 'Bird of Paradise'. Bulunya menjadi komoditas berharga di pasar Eropa awal abad ke-20, memicu perburuan liar. Di timeline ini, Neo-VOC mengubah mereka menjadi drone pengintai organik.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/2/29/Paradisaea_raggiana_2.jpg",
    glitch: true,
    options: [
      { 
        text: "[MISTIS] Coba pulihkan wujud aslinya (DC 14)", 
        requirement: { stat: "Mistis", dc: 14 },
        nextNode: "PAPUA_15_HEAL_BIRD",
        failNode: "PAPUA_16_IGNORE_BIRD"
      },
      { text: "Abaikan, itu hanya gangguan sinyal", nextNode: "PAPUA_16_IGNORE_BIRD" }
    ]
  },

  "PAPUA_15_HEAL_BIRD": {
    id: "PAPUA_15_HEAL_BIRD",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau menyalurkan energi Sang Saka. Cahaya keemasan menyelimuti burung itu. Logam di sayapnya rontok, digantikan bulu merah-kuning yang asli. Ia berkicau, menjatuhkan sebuah buah beri merah sebelum terbang.",
    image: "https://images.unsplash.com/photo-1549221539-74e17812f275?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Makan Buah (+20 HP)", 
        rewardStat: { hp: 20 },
        alignment: { PRESERVATION: 1 },
        nextNode: "PAPUA_17_SOLDIER_ENCOUNTER"
      }
    ]
  },

  "PAPUA_16_IGNORE_BIRD": {
    id: "PAPUA_16_IGNORE_BIRD",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau membiarkan burung malang itu terbang dengan beban sirkuit di sayapnya. Waktu adalah kemewahan yang tidak kau miliki.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Fokus pada misi", nextNode: "PAPUA_17_SOLDIER_ENCOUNTER" }
    ]
  },

  // --- PILAR 5: DILEMA SERDADU ---
  "PAPUA_17_SOLDIER_ENCOUNTER": {
    id: "PAPUA_17_SOLDIER_ENCOUNTER",
    type: "STORY",
    speaker: "NARASI",
    text: "Di tepi sungai berbatu, kau menemukan seorang serdadu Belanda berseragam KNIL. Kakinya terjepit di antara bebatuan yang dialiri listrik statis. Dia mengerang kesakitan, matanya setengah menguning (tanda pengaruh Sang Tapa).",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[PRESERVATION] Tolong dia. Dia korban manipulasi.", 
        alignment: { PRESERVATION: 1 },
        nextNode: "PAPUA_18_HELP_SOLDIER"
      },
      { 
        text: "[DOMINATION] Habisi dia selagi lemah.", 
        alignment: { DOMINATION: 1 },
        nextNode: "PAPUA_19_KILL_SOLDIER"
      },
      { 
        text: "[CORRUPTION] Biarkan dia, tapi curi amunisinya.", 
        alignment: { CORRUPTION: 1 },
        nextNode: "PAPUA_20_LOOT_SOLDIER"
      }
    ]
  },

  "PAPUA_18_HELP_SOLDIER": {
    id: "PAPUA_18_HELP_SOLDIER",
    type: "STORY",
    speaker: "SERDADU BELANDA",
    text: "Ugh... Dank u... Aku tidak tahu apa yang terjadi. Komandan kami... dia berubah menjadi monster besi di atas sana. Hati-hati, ada celah di armor punggungnya.",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Terima info kelemahan Boss", rewardStat: { Pulung: 2 }, nextNode: "PAPUA_21_MOUNTAIN_CLIMB" }
    ]
  },

  "PAPUA_19_KILL_SOLDIER": {
    id: "PAPUA_19_KILL_SOLDIER",
    type: "STORY",
    speaker: "NARASI",
    text: "Tanpa ragu, kau mengakhiri penderitaannya. Kau merasa lebih kuat, energi Sang Saka menyerap sisa kehidupan prajurit itu. Kejam, tapi efektif.",
    image: "https://images.unsplash.com/photo-1610337673044-720471f83677?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Raga terasa lebih kuat (+2 Kuat)", rewardStat: { Kuat: 2 }, nextNode: "PAPUA_21_MOUNTAIN_CLIMB" }
    ]
  },

  "PAPUA_20_LOOT_SOLDIER": {
    id: "PAPUA_20_LOOT_SOLDIER",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau mengambil tas perbekalannya dan meninggalkannya merintih. 'Bertahanlah sendiri,' bisikmu. Kau menemukan beberapa Gulden kuno.",
    image: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Ambil Gulden (+100G)", rewardGulden: 100, nextNode: "PAPUA_21_MOUNTAIN_CLIMB" }
    ]
  },

  // --- PILAR 6: INFILTRASI KAMP ALKIMIA ---
  "PAPUA_21_MOUNTAIN_CLIMB": {
    id: "PAPUA_21_MOUNTAIN_CLIMB",
    type: "STORY",
    year: "Zona Salju Abadi, 1910",
    speaker: "NARASI",
    text: "Udara menipis. Salju mulai turun, namun warnanya abu-abu. Di depanmu, kamp ekspedisi Lorentz telah diubah menjadi pabrik ekstraksi energi. Pipa-pipa besar menancap ke gletser.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[KUAT] Panjat tebing es untuk serangan kejutan (DC 13)", 
        requirement: { stat: "Kuat", dc: 13 },
        nextNode: "PAPUA_22_STEALTH_ENTRY",
        failNode: "PAPUA_23_FALL_DAMAGE"
      },
      { 
        text: "Jalan terus melalui gerbang utama", 
        nextNode: "PAPUA_24_GATE_BATTLE"
      }
    ]
  },

  "PAPUA_22_STEALTH_ENTRY": {
    id: "PAPUA_22_STEALTH_ENTRY",
    type: "STORY",
    speaker: "NARASI",
    text: "Ototmu menegang menahan dingin, tapi kau berhasil mencapai atap fasilitas tanpa terdeteksi. Kau melihat 'Jangkar Alkimia' berpendar di tengah lapangan.",
    image: "https://images.unsplash.com/photo-1505566373868-b7a42168c17b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Siapkan serangan dadakan", nextNode: "PAPUA_25_BOSS_INTRO" }
    ]
  },

  "PAPUA_23_FALL_DAMAGE": {
    id: "PAPUA_23_FALL_DAMAGE",
    type: "STORY",
    speaker: "NARASI",
    text: "Es di pegangan tanganmu rapuh! Kau tergelincir jatuh menghantam bebatuan tajam. Sakitnya luar biasa, dan suara jatuhnya memicu alarm.",
    image: "https://images.unsplash.com/photo-1623164923485-645391d44c92?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Bangkit dengan luka (-15 HP)", damage: 15, nextNode: "PAPUA_24_GATE_BATTLE" }
    ]
  },

  "PAPUA_24_GATE_BATTLE": {
    id: "PAPUA_24_GATE_BATTLE",
    type: "BATTLE_TRIGGER",
    enemyId: "PAP_HUM_KNIL",
    winNode: "PAPUA_25_BOSS_INTRO",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 7: THE RUSTED GUARDIAN ---
  "PAPUA_25_BOSS_INTRO": {
    id: "PAPUA_25_BOSS_INTRO",
    type: "STORY",
    speaker: "THE RUSTED GUARDIAN",
    text: ">> TARGET DETECTED >> ANOMALY ID: SANG_SAKA >> ELIMINATE.\n\nSebuah menara logam setinggi 4 meter bergerak. Itu bukan patung. Itu adalah Golem yang terbuat dari sisa alat berat ekspedisi yang menyatu dengan es.",
    image: "https://images.unsplash.com/photo-1533575677843-2615560640d2?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Hancurkan Penjaga Jangkar!", nextNode: "PAPUA_BOSS_FIGHT" }
    ]
  },

  "PAPUA_BOSS_FIGHT": {
    id: "PAPUA_BOSS_FIGHT",
    type: "BATTLE_TRIGGER",
    enemyId: "PAP_BOS_GUARDIAN",
    winNode: "PAPUA_26_VICTORY",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 8: TRANSISI & VAN AETERNE ---
  "PAPUA_26_VICTORY": {
    id: "PAPUA_26_VICTORY",
    type: "STORY",
    speaker: "NARASI",
    text: "Dengan hancurnya Golem itu, menara Jangkar di belakangnya meledak dalam cahaya putih. Glitch di hutan perlahan memudar. Warna hijau daun kembali alami. Udara terasa lebih ringan.",
    image: "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Ambil inti energi (+XP)", rewardXp: 10, nextNode: "PAPUA_27_VAN_AETERNE" }
    ]
  },

  "PAPUA_27_VAN_AETERNE": {
    id: "PAPUA_27_VAN_AETERNE",
    type: "STORY",
    speaker: "WILLEM VAN AETERNE (PROYEKSI)",
    text: "Hologram seorang pria Belanda dengan pakaian bangsawan futuristik muncul dari puing-puing.\n\n'Menarik. Ada tikus kecil yang mencoba menggerogoti kabel sejarahku. Nikmatilah kemenangan kecil ini di tanah primitif. Di Sulawesi, laut akan menjadi kuburanmu.'",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Aku akan menghentikanmu, Van Aeterne.", nextNode: "PAPUA_END_TRANSITION" },
      { text: "Kita lihat siapa yang tenggelam.", nextNode: "PAPUA_END_TRANSITION" }
    ]
  },

  "PAPUA_END_TRANSITION": {
    id: "PAPUA_END_TRANSITION",
    type: "END_REGION", // Tipe khusus untuk pindah pulau
    targetIsland: "sulawesi",
    speaker: "SISTEM ARSIP",
    text: "Jangkar Papua Hancur. Koordinat selanjutnya terdeteksi: Benteng Somba Opu, 1667. Bersiap untuk lompatan waktu...",
    image: "https://images.unsplash.com/photo-1565619624098-e659b52a5538?q=80&w=2000&auto=format&fit=crop",
    options: [
    ]
  },

  // =========================================================================
  // WILAYAH II: SULAWESI (1667) - GEMA ARUS
  // =========================================================================

  // --- PILAR 1: PELABUHAN YANG MEMBEKU ---
  "SULAWESI_01_ARRIVAL": {
    id: "SULAWESI_01_ARRIVAL",
    type: "STORY",
    year: "Makassar, 1667",
    speaker: "NARASI",
    text: "Transisi ruang waktu melemparmu ke dermaga kayu yang berderit. Di hadapanmu, Benteng Somba Opu berdiri megah dengan bata merahnya. Namun, lautan di sekelilingnya tidak berombak. Air laut membeku menjadi kristal data berwarna biru tua. Kapal-kapal Pinisi terperangkap dalam stasis.",
    image: "https://images.unsplash.com/photo-1569254995221-c1ce19574e46?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Analisis situasi pelabuhan", nextNode: "SUL_02_PORT_ANALYSIS" },
      { text: "Cari jalan masuk ke benteng", nextNode: "SUL_03_GATE_APPROACH" }
    ]
  },

  "SUL_02_PORT_ANALYSIS": {
    id: "SUL_02_PORT_ANALYSIS",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Ini bukan es. Ini adalah 'Hard-Light Construct' dari tahun 2120. Neo-VOC memblokade jalur rempah dengan membekukan lautan secara harfiah. Di kejauhan, terlihat patroli 'Sea-Sentry' (Drone Laut) melayang di atas permukaan beku.",
    image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Kejayaan Somba Opu",
    historyText: "Pada abad ke-17, Somba Opu adalah salah satu pelabuhan tersibuk di Nusantara. Pedagang dari Denmark, Inggris, Portugis, dan Cina bertransaksi bebas di sini, menjadikan Gowa-Tallo ancaman utama bagi monopoli VOC.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Fort_Somba_Opu.jpg",
    options: [
      { text: "Bergerak sembunyi-sembunyi", nextNode: "SUL_03_GATE_APPROACH" }
    ]
  },

  "SUL_03_GATE_APPROACH": {
    id: "SUL_03_GATE_APPROACH",
    type: "STORY",
    speaker: "NARASI",
    text: "Gerbang pelabuhan dijaga ketat. Bukan oleh manusia, tapi oleh 'Mariner Speelman'—serdadu dengan baju zirah yang terhubung kabel ke laut beku. Ada dua cara untuk masuk.",
    image: "https://images.unsplash.com/photo-1590214691122-80f0ed17282b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[LUWES] Menyuap pedagang asing untuk menyelinap (DC 11)", 
        requirement: { stat: "Luwes", dc: 11 },
        nextNode: "SUL_04_SNEAK_SUCCESS",
        failNode: "SUL_04_SNEAK_FAIL"
      },
      { 
        text: "[MISTIS] Bicara pada roh pelaut yang terperangkap di es (DC 12)", 
        requirement: { stat: "Mistis", dc: 12 },
        nextNode: "SUL_05_SPIRIT_PATH",
        failNode: "SUL_04_SNEAK_FAIL"
      }
    ]
  },

  "SUL_04_SNEAK_SUCCESS": {
    id: "SUL_04_SNEAK_SUCCESS",
    type: "STORY",
    speaker: "PEDAGANG DENMARK",
    text: "'Sstt! Lewat peti rempah ini. Jangan sentuh airnya, atau kau akan jadi data seperti mereka.' Dia membukakan jalan rahasia menuju selokan benteng.",
    image: "https://images.unsplash.com/photo-1533601017-dc61895e03c0?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Masuk ke dalam benteng", rewardStat: { Luwes: 2 }, nextNode: "SUL_06_HASANUDDIN_MEET" }
    ]
  },

  "SUL_04_SNEAK_FAIL": {
    id: "SUL_04_SNEAK_FAIL",
    type: "STORY",
    speaker: "NARASI",
    text: "Langkahmu memecahkan kristal es. Suara retakan menggema. Sensor Sea-Sentry berwarna merah menyorot wajahmu. 'INTRUDER DETECTED'.",
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Bersiap bertempur!", nextNode: "SUL_BATTLE_SENTRY" }
    ]
  },

  "SUL_BATTLE_SENTRY": {
    id: "SUL_BATTLE_SENTRY",
    type: "BATTLE_TRIGGER",
    enemyId: "SUL_SEA_SENTRY",
    winNode: "SUL_06_HASANUDDIN_MEET",
    loseNode: "DEATH_SCENE"
  },

  "SUL_05_SPIRIT_PATH": {
    id: "SUL_05_SPIRIT_PATH",
    type: "STORY",
    speaker: "ROH PELAUT BUGIS",
    text: "Suaramu... terdengar. Tolong kami... Raga kami ditahan di dalam server Jangkar. Lewat sini, ada celah di dinding pertahanan yang tidak dijaga oleh mata besi.",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Ikuti petunjuk roh (+Mistis)", rewardStat: { Mistis: 2 }, nextNode: "SUL_06_HASANUDDIN_MEET" }
    ]
  },

  // --- PILAR 2: AYAM JANTAN DARI TIMUR ---
  "SUL_06_HASANUDDIN_MEET": {
    id: "SUL_06_HASANUDDIN_MEET",
    type: "STORY",
    year: "Ruang Strategi Somba Opu, 1667",
    speaker: "SULTAN HASANUDDIN",
    text: "Seorang pria dengan sorban merah berdiri di depan peta laut yang bergetar. Dia menoleh, tatapannya tajam setajam badik. 'Siapa kau yang berani masuk ke sarang Ayam Jantan saat badai sedang mengamuk?'",
    image: "https://images.unsplash.com/photo-1605218427368-35b80a312d1c?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "I Mallombasi Daeng Mattawang",
    historyText: "Lebih dikenal sebagai Sultan Hasanuddin. Keberaniannya melawan VOC membuatnya dijuluki 'De Haantjes van Het Oosten' oleh Belanda. Ia menolak monopoli perdagangan rempah yang mematikan ekonomi rakyatnya.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sultan_Hasanuddin.jpg",
    options: [
      { 
        text: "[PRESERVATION] Hamba datang membawa kabar tentang taktik licik Speelman (DC 12)", 
        requirement: { stat: "Wibawa", dc: 12 },
        nextNode: "SUL_07_ALLIANCE",
        failNode: "SUL_08_DUEL"
      },
      { 
        text: "[DOMINATION] Strategi Tuanku kuno. Biar hamba yang selesaikan.", 
        alignment: { DOMINATION: 1 },
        nextNode: "SUL_08_DUEL"
      }
    ]
  },

  "SUL_07_ALLIANCE": {
    id: "SUL_07_ALLIANCE",
    type: "STORY",
    speaker: "SULTAN HASANUDDIN",
    text: "'Speelman menggunakan sihir hitam dari masa depan? Ewako! Kita tidak akan gentar.' Sultan memberikanmu 'Badik Gecong' pusaka. 'Gunakan ini untuk memutus rantai kapal mereka.'",
    image: "https://images.unsplash.com/photo-1598556801389-7058d880775d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Terima Badik (+5 Kuat)", 
        rewardStat: { Kuat: 5 }, 
        alignment: { PRESERVATION: 1 },
        nextNode: "SUL_09_VILLAGE_TERROR" 
      }
    ]
  },

  "SUL_08_DUEL": {
    id: "SUL_08_DUEL",
    type: "STORY",
    speaker: "SULTAN HASANUDDIN",
    text: "'Lancang! Buktikan kata-katamu dengan besi!' Sultan mencabut kerisnya. Kau harus bertahan hidup, bukan membunuhnya.",
    image: "https://images.unsplash.com/photo-1629814484834-08f654039129?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Bertahan dari serangan Sultan", nextNode: "SUL_09_VILLAGE_TERROR" } // Non-lethal skip
    ]
  },

  // --- PILAR 3: TEROR PARAKANG ---
  "SUL_09_VILLAGE_TERROR": {
    id: "SUL_09_VILLAGE_TERROR",
    type: "STORY",
    speaker: "NARASI",
    text: "Saat kau keluar benteng menuju desa penyangga, suasana mencekam. Penduduk tidak ada di rumah. Di jalanan, sosok-sosok bungkuk dengan mata menyala biru sedang memakan bangkai kabel. Parakang!",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    historyTitle: "Mitos Parakang",
    historyText: "Dalam kepercayaan Sulawesi Selatan, Parakang adalah manusia jadi-jadian yang gagal dalam ilmu hitam. Mereka bisa berubah wujud dan memangsa organ dalam. Di sini, glitch Neo-VOC mengubah mereka menjadi pemangsa data biometrik.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/0/07/Makassar_warrior.jpg",
    options: [
      { 
        text: "[MISTIS] Lakukan ritual pembersihan area (DC 13)", 
        requirement: { stat: "Mistis", dc: 13 },
        nextNode: "SUL_10_CLEANSED",
        failNode: "SUL_11_PARAKANG_FIGHT"
      },
      { 
        text: "Serang makhluk itu sebelum mereka sadar!", 
        nextNode: "SUL_11_PARAKANG_FIGHT" 
      }
    ]
  },

  "SUL_10_CLEANSED": {
    id: "SUL_10_CLEANSED",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau memancarkan frekuensi Sang Saka. Parakang itu menjerit, tubuh digital mereka terurai kembali menjadi manusia biasa yang pingsan. Kau menyelamatkan jiwa mereka.",
    image: "https://images.unsplash.com/photo-1518182170546-07fa6eb28555?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Lanjut ke pelabuhan musuh", 
        alignment: { PRESERVATION: 1 }, 
        nextNode: "SUL_12_INFILTRATION" 
      }
    ]
  },

  "SUL_11_PARAKANG_FIGHT": {
    id: "SUL_11_PARAKANG_FIGHT",
    type: "BATTLE_TRIGGER",
    enemyId: "SUL_SPI_PARAKANG",
    winNode: "SUL_12_INFILTRATION",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 4: INFILTRASI KAPAL SPEELMAN ---
  "SUL_12_INFILTRATION": {
    id: "SUL_12_INFILTRATION",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau berhasil menyusup ke geladak kapal utama VOC, 'De Walvis'. Tapi ini bukan kapal kayu biasa. Tiang layarnya adalah menara transmisi. Di kabin kapten, kau menemukan dokumen hologram.",
    image: "https://images.unsplash.com/photo-1500043204644-768d20653f32?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Baca dokumen rahasia", nextNode: "SUL_13_THE_REVEAL" }
    ]
  },

  "SUL_13_THE_REVEAL": {
    id: "SUL_13_THE_REVEAL",
    type: "STORY",
    speaker: "DOKUMEN NEO-VOC",
    text: "'TARGET: Perjanjian Bongaya. STATUS: Percepat. TUJUAN: Hancurkan kemandirian maritim Nusantara agar rute energi Sang Tapa di 2120 aman.' Ternyata kekalahan Makassar adalah kunci bagi Neo-VOC.",
    image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Sabotase mesin kapal", nextNode: "SUL_14_SABOTAGE" }
    ]
  },

  "SUL_14_SABOTAGE": {
    id: "SUL_14_SABOTAGE",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau meledakkan generator kapal. Alarm berbunyi. Di tengah kekacauan, sebuah proyeksi glitch muncul di ruang makan kapal yang mewah.",
    image: "https://images.unsplash.com/photo-1518544806308-8737b475420f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Hadapi proyeksi itu", nextNode: "SUL_15_GLITCH_FEAST" }
    ]
  },

  // --- PILAR 5: PERJAMUAN GLITCH (VAN AETERNE) ---
  "SUL_15_GLITCH_FEAST": {
    id: "SUL_15_GLITCH_FEAST",
    type: "STORY",
    speaker: "WILLEM VAN AETERNE",
    text: "Meja makan penuh dengan makanan busuk yang dilapisi emas digital. 'Kau gigih juga. Tidakkah kau lelah? Di duniaku, pelaut tidak perlu mati tenggelam. Lautan kami jinakkan. Bergabunglah, aku beri kau 'Napas Abadi'.'",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[CORRUPTION] Terima tawaran kekuatan (+5 Kuat)", 
        rewardStat: { Kuat: 5 },
        alignment: { CORRUPTION: 1 },
        nextNode: "SUL_16_DIVE_PREP"
      },
      { 
        text: "[WIBAWA] Lautan bukan untuk dijinakkan, tapi dihormati!", 
        requirement: { stat: "Wibawa", dc: 14 },
        alignment: { PRESERVATION: 1 },
        nextNode: "SUL_16_DIVE_PREP",
        failNode: "SUL_16_DIVE_PREP" // Fail forward
      }
    ]
  },

  // --- PILAR 6: MENYELAM KE DASAR ---
  "SUL_16_DIVE_PREP": {
    id: "SUL_16_DIVE_PREP",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Jangkar Alkimia II ada di dasar laut, tepat di bawah benteng. Aku harus menyelam. Sang Saka membentuk gelembung energi di sekitar kepalaku.",
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Lompat ke dalam laut beku", nextNode: "SUL_17_UNDERWATER" }
    ]
  },

  "SUL_17_UNDERWATER": {
    id: "SUL_17_UNDERWATER",
    type: "STORY",
    speaker: "NARASI",
    text: "Pemandangan yang mengerikan sekaligus indah. Terumbu karang telah berubah menjadi kabel serat optik yang berdenyut. Ikan-ikan berenang dengan sirip logam. Di tengah kegelapan, mata merah menyala.",
    image: "https://images.unsplash.com/photo-1580019542155-247062e19ce4?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Waspada serangan!", nextNode: "SUL_BATTLE_ANOA" } // Placeholder fight for Anoa Laut/Creature
    ]
  },

  "SUL_BATTLE_ANOA": {
    id: "SUL_BATTLE_ANOA",
    type: "BATTLE_TRIGGER",
    enemyId: "SUL_CRE_ANOA", // Menggunakan Anoa Glitch sebagai penjaga
    winNode: "SUL_18_THE_KRAKEN_GATE",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 7: THE KRAKEN PROTOCOL ---
  "SUL_18_THE_KRAKEN_GATE": {
    id: "SUL_18_THE_KRAKEN_GATE",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau mencapai dasar. Sebuah mesin raksasa berbentuk gurita melilit pondasi Benteng Somba Opu. Tentakelnya adalah pipa penyedot energi. Ini dia, 'The Kraken Protocol'.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Putuskan tentakel utamanya! (BOSS FIGHT)", nextNode: "SUL_BOSS_FIGHT" }
    ]
  },

  "SUL_BOSS_FIGHT": {
    id: "SUL_BOSS_FIGHT",
    type: "BATTLE_TRIGGER",
    enemyId: "SUL_BOS_KRAKEN",
    winNode: "SUL_19_VICTORY",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 8: RESOLUSI & TRANSISI ---
  "SUL_19_VICTORY": {
    id: "SUL_19_VICTORY",
    type: "STORY",
    speaker: "NARASI",
    text: "Mesin itu meledak dalam gelembung udara raksasa. Es di permukaan pecah seketika. Ombak kembali berdebur. Kau berenang naik ke permukaan, disambut sorak sorai prajurit Makassar.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Kembali ke dermaga", nextNode: "SUL_20_FAREWELL" }
    ]
  },

  "SUL_20_FAREWELL": {
    id: "SUL_20_FAREWELL",
    type: "STORY",
    speaker: "SULTAN HASANUDDIN",
    text: "'Badai sudah reda. Walau takdir berkata kami mungkin kalah di kertas perjanjian, semangat kami tidak akan pernah padam. Terima kasih, Saudaraku.' Beliau menunjuk sebuah Pinisi kecil yang siap berlayar.",
    image: "https://images.unsplash.com/photo-1598556801389-7058d880775d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Berlayar ke Barat (Kalimantan)", nextNode: "SUL_END_TRANSITION" }
    ]
  },

  "SUL_END_TRANSITION": {
    id: "SUL_END_TRANSITION",
    type: "END_REGION",
    targetIsland: "kalimantan",
    speaker: "SISTEM ARSIP",
    text: "Jangkar II Hancur. Sejarah Maritim dipulihkan. Koordinat selanjutnya: Hutan Banjarmasin, 1859. Perang Banjar menanti.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    options: [
    ]
  },

// =========================================================================
  // WILAYAH III: KALIMANTAN (1859) - BARA DI JANTUNG BORNEO
  // =========================================================================

  // --- PILAR 1: ARUS BARITO YANG GELAP ---
  "KALIMANTAN_01_ARRIVAL": {
    id: "KALIMANTAN_01_ARRIVAL",
    type: "STORY",
    year: "Hulu Sungai Barito, 1859",
    speaker: "NARASI",
    text: "Kabut tebal menyelimuti sungai raksasa. Airnya tidak lagi cokelat, melainkan hitam pekat seperti oli, tercemar limbah industri yang belum seharusnya ada di abad 19. Dari kejauhan, terdengar suara mesin uap raksasa yang membelah keheningan hutan.",
    image: "https://images.unsplash.com/photo-1440342359743-84fcb8b21f21?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Cek kondisi rakit & sekitar", nextNode: "KAL_02_RIVER_CHECK" }
    ]
  },

  "KAL_02_RIVER_CHECK": {
    id: "KAL_02_RIVER_CHECK",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Jangkar Alkimia III ada di dalam tanah. Neo-VOC telah mengambil alih Tambang Oranje-Nassau. Mereka menghisap 'darah hitam' bumi Kalimantan untuk bahan bakar Sang Tapa. Rakitku dicegat oleh blokade sungai.",
    image: "https://images.unsplash.com/photo-1544961371-516a5043be1c?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Tambang Oranje-Nassau",
    historyText: "Dibuka pada 1849 di Pengaron, ini adalah tambang batu bara pertama di Indonesia yang dioperasikan Belanda. Konflik di sekitar tambang ini menjadi salah satu pemicu meletusnya Perang Banjar yang dipimpin Pangeran Antasari.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Coal_mine_Oedjoeng_Pangkah_Borneo.jpg",
    options: [
      { 
        text: "[LUWES] Negosiasi dengan penjaga sungai (DC 13)", 
        requirement: { stat: "Luwes", dc: 13 },
        nextNode: "KAL_03_SAFE_PASSAGE",
        failNode: "KAL_04_RIVER_AMBUSH"
      },
      { 
        text: "Terobos blokade dengan paksa!", 
        nextNode: "KAL_04_RIVER_AMBUSH" 
      }
    ]
  },

  "KAL_03_SAFE_PASSAGE": {
    id: "KAL_03_SAFE_PASSAGE",
    type: "STORY",
    speaker: "PENJAGA SUNGAI",
    text: "Kau bicara dengan logat yang aneh, tapi kau membawa emas (Gulden). Baiklah, lewatlah jalur tikus di balik bakau. Hati-hati, 'Burung Kaca' sedang berpatroli.",
    image: "https://images.unsplash.com/photo-1596796696705-095562143714?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Lanjut ke hulu sungai", rewardStat: { Luwes: 2 }, nextNode: "KAL_05_JUNGLE_LANDING" }
    ]
  },

  "KAL_04_RIVER_AMBUSH": {
    id: "KAL_04_RIVER_AMBUSH",
    type: "STORY",
    speaker: "NARASI",
    text: "Blokade itu ternyata jebakan! Dari langit, seekor burung Enggang raksasa menukik. Bulunya bukan keratin, tapi pecahan kaca hitam tajam yang berdenting. Enggang Kristal (Glitch) menyerang!",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Bertarung di atas rakit!", nextNode: "KAL_BATTLE_ENGGANG" }
    ]
  },

  "KAL_BATTLE_ENGGANG": {
    id: "KAL_BATTLE_ENGGANG",
    type: "BATTLE_TRIGGER",
    enemyId: "KAL_CRE_ENGGANG",
    winNode: "KAL_05_JUNGLE_LANDING",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 2: SUMPAH HARAM MANYERAH ---
  "KAL_05_JUNGLE_LANDING": {
    id: "KAL_05_JUNGLE_LANDING",
    type: "STORY",
    year: "Markas Gerilya Hutan, 1859",
    speaker: "NARASI",
    text: "Kau mendarat di tepian hutan yang lembab. Prajurit Banjar dengan pakaian serba putih mengepungmu. Mereka membawa parang dan tombak. Di tengah mereka, berdiri sosok berwibawa dengan tatapan nyalang.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Hadapi pemimpin mereka", nextNode: "KAL_06_ANTASARI_MEET" }
    ]
  },

  "KAL_06_ANTASARI_MEET": {
    id: "KAL_06_ANTASARI_MEET",
    type: "STORY",
    speaker: "PANGERAN ANTASARI",
    text: "'Haram Manyerah! Waja Sampai Kaputing!' Teriakannya menggetarkan hutan. 'Belanda mengirim setan besi dari perut bumi untuk mengusir kami. Kau... kawan atau lawan?'",
    image: "https://images.unsplash.com/photo-1599579042456-e918b958c233?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Pangeran Antasari",
    historyText: "Sultan Banjar yang memimpin perlawanan rakyat terhadap Belanda. Semboyannya 'Haram Manyerah' (Pantang Menyerah) dan 'Waja Sampai Kaputing' (Baja Sampai Ujungnya/Tetap Semangat sampai Akhir) menjadi roh perjuangan Kalimantan.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Pangeran_Antasari.jpg",
    options: [
      { 
        text: "[PRESERVATION] Saya datang membantu menghancurkan sumber kekuatan Belanda (DC 15)", 
        requirement: { stat: "Wibawa", dc: 15 },
        alignment: { PRESERVATION: 1 },
        nextNode: "KAL_07_ANTASARI_ALLY",
        failNode: "KAL_08_ANTASARI_DOUBT"
      },
      { 
        text: "[DOMINATION] Taktik Pangeran kuno. Ikuti perintahku jika ingin menang.", 
        alignment: { DOMINATION: 1 },
        nextNode: "KAL_08_ANTASARI_DOUBT"
      }
    ]
  },

  "KAL_07_ANTASARI_ALLY": {
    id: "KAL_07_ANTASARI_ALLY",
    type: "STORY",
    speaker: "PANGERAN ANTASARI",
    text: "'Matamu menyimpan api yang sama dengan kami.' Antasari menyerahkan sebuah peta tua. 'Ini jalan rahasia menuju tambang. Dan ambillah minyak 'Bintang Borneo' ini untuk senjatamu.'",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Terima Bantuan (+5 Kuat)", 
        rewardStat: { Kuat: 5 }, 
        nextNode: "KAL_09_NIGHT_TERROR" 
      }
    ]
  },

  "KAL_08_ANTASARI_DOUBT": {
    id: "KAL_08_ANTASARI_DOUBT",
    type: "STORY",
    speaker: "PANGERAN ANTASARI",
    text: "'Kami berjuang dengan darah, bukan dengan kesombongan.' Pangeran berpaling. 'Pergilah. Jika kau mati di tambang itu, kami tidak akan menguburmu.'",
    image: "https://images.unsplash.com/photo-1518182170546-07fa6eb28555?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Berjalan sendiri ke dalam hutan", nextNode: "KAL_09_NIGHT_TERROR" }
    ]
  },

  // --- PILAR 3: TEROR MALAM (KUYANG) ---
  "KAL_09_NIGHT_TERROR": {
    id: "KAL_09_NIGHT_TERROR",
    type: "STORY",
    year: "Hutan Kalimantan, Malam Hari",
    speaker: "NARASI",
    text: "Malam jatuh dengan cepat. Suara mesin tambang di kejauhan bercampur dengan desis aneh. Cahaya biru berkedip di antara pepohonan. Bukan kunang-kunang. Itu adalah kepala manusia yang melayang dengan organ tubuh menyala neon.",
    image: "https://images.unsplash.com/photo-1516573428751-2d7c5f5904aa?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    historyTitle: "Legenda Kuyang",
    historyText: "Siluman berwujud kepala wanita dengan organ dalam yang terurai. Di timeline ini, organ Kuyang telah digantikan oleh kabel serat optik dan lampu LED biru, menjadikannya drone pengintai biologis yang mengerikan.",
    historyImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
    options: [
      { 
        text: "[MISTIS] Gunakan energi Sang Saka untuk mengusirnya (DC 16)", 
        requirement: { stat: "Mistis", dc: 16 },
        nextNode: "KAL_10_KUYANG_BANISH",
        failNode: "KAL_11_KUYANG_FIGHT"
      },
      { 
        text: "Lari ke arah tambang!", 
        nextNode: "KAL_11_KUYANG_FIGHT"
      }
    ]
  },

  "KAL_10_KUYANG_BANISH": {
    id: "KAL_10_KUYANG_BANISH",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau merapalkan mantra pelindung. Cahaya putih meledak. Kuyang Glitch itu menjerit dengan suara modem rusak dan terbakar menjadi abu data. Jalanmu aman.",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Lanjut ke area Tambang", nextNode: "KAL_12_MINE_APPROACH" }
    ]
  },

  "KAL_11_KUYANG_FIGHT": {
    id: "KAL_11_KUYANG_FIGHT",
    type: "BATTLE_TRIGGER",
    enemyId: "KAL_SPI_KUYANG",
    winNode: "KAL_12_MINE_APPROACH",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 4: SABOTASE TAMBANG ORANJE ---
  "KAL_12_MINE_APPROACH": {
    id: "KAL_12_MINE_APPROACH",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau tiba di bibir kawah tambang. Pemandangannya mengerikan. Ribuan pekerja paksa yang terlihat seperti hologram glitch sedang menggali batu bara hitam yang memancarkan listrik. Di tengahnya, lift raksasa menuju perut bumi.",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[LUWES] Menyamar dengan debu batu bara (DC 15)", 
        requirement: { stat: "Luwes", dc: 15 },
        nextNode: "KAL_13_SNEAK_ENTRY",
        failNode: "KAL_14_FORCE_ENTRY"
      },
      { 
        text: "Serang Mandor Penjaga!", 
        nextNode: "KAL_14_FORCE_ENTRY" 
      }
    ]
  },

  "KAL_13_SNEAK_ENTRY": {
    id: "KAL_13_SNEAK_ENTRY",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau berbaur dengan pekerja. Mandor Oranje (Overseer) dengan cambuk listriknya tidak menyadari kehadiranmu. Kau berhasil menyelinap masuk ke lift kargo utama.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Turun ke kedalaman", rewardStat: { Pulung: 2 }, nextNode: "KAL_15_VAN_AETERNE_OFFER" }
    ]
  },

  "KAL_14_FORCE_ENTRY": {
    id: "KAL_14_FORCE_ENTRY",
    type: "BATTLE_TRIGGER",
    enemyId: "KAL_HUM_OVERSEER",
    winNode: "KAL_15_VAN_AETERNE_OFFER",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 5: TAWARAN DI KEDALAMAN BUMI ---
  "KAL_15_VAN_AETERNE_OFFER": {
    id: "KAL_15_VAN_AETERNE_OFFER",
    type: "STORY",
    year: "Inti Bumi, Kedalaman 500m",
    speaker: "WILLEM VAN AETERNE (SUARA)",
    text: "Lift berdesing turun. Suara Van Aeterne menggema dari speaker.\n\n'Kau lihat batu bara ini? Di tanganku, ini menjadi Berlian Abadi. Mengapa kau berjuang untuk masa lalu yang kotor? Biarkan aku menyalakan mesin ini, dan kau akan kuhujani dengan kekayaan.'",
    image: "https://images.unsplash.com/photo-1605218427368-35b80a312d1c?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[CORRUPTION] Aku butuh sumber daya untuk menang. Berikan emas itu. (+250G)", 
        alignment: { CORRUPTION: 1 },
        rewardGulden: 250,
        rewardStat: { Tahan: -2 }, // Mengurangi stat fisik karena korupsi
        nextNode: "KAL_16_THE_CORE" // Dapat emas di logic App.jsx nanti (manual handling if needed or just narrative flavor)
      },
      { 
        text: "[PRESERVATION] Kekayaanmu tidak bisa membeli jiwa Nusantara.", 
        alignment: { PRESERVATION: 1 },
        nextNode: "KAL_16_THE_CORE"
      }
    ]
  },

  // --- PILAR 6: THE CORE DRILLER & COLONEL ANDRESEN ---
  "KAL_16_THE_CORE": {
    id: "KAL_16_THE_CORE",
    type: "STORY",
    speaker: "COLONEL ANDRESEN",
    text: "Pintu lift terbuka. Panasnya luar biasa. Di depanmu, Jangkar Alkimia III berwujud Mesin Bor Raksasa (The Core Driller) sedang meraung. Kolonel Andresen duduk di dalam kokpit Tank yang menyatu dengan mesin itu.\n\n'Verdomme! Kau akan jadi bahan bakar mesin ini!'",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Hancurkan Tank dan Mesin Bor itu!", nextNode: "KAL_BOSS_FIGHT_01" }
    ]
  },

  "KAL_BOSS_FIGHT_01": {
    id: "KAL_BOSS_FIGHT_01",
    type: "BATTLE_TRIGGER",
    enemyId: "KAL_BOS_ANDRESEN", // Fase 1: Kolonel
    winNode: "KAL_BOSS_PHASE_2",
    loseNode: "DEATH_SCENE"
  },

  "KAL_BOSS_PHASE_2": {
    id: "KAL_BOSS_PHASE_2",
    type: "STORY",
    speaker: "NARASI",
    text: "Tank Kolonel meledak, tapi inti mesin bor itu malah terbuka, menampakkan Jantung Merah yang berdenyut kencang. Sistem pertahanan otomatis aktif. 'DRILLER DRONE ACTIVATED'.",
    image: "https://images.unsplash.com/photo-1518544806308-8737b475420f?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Hancurkan Inti Jangkar!", nextNode: "KAL_BOSS_FIGHT_02" }
    ]
  },

  "KAL_BOSS_FIGHT_02": {
    id: "KAL_BOSS_FIGHT_02",
    type: "BATTLE_TRIGGER",
    enemyId: "KAL_BOS_CORE", // Fase 2: Core
    winNode: "KAL_17_VICTORY",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 7: TRANSISI KE SUMATRA ---
  "KAL_17_VICTORY": {
    id: "KAL_17_VICTORY",
    type: "STORY",
    speaker: "NARASI",
    text: "Ledakan dahsyat meruntuhkan tambang. Energi Sang Saka melindungimu saat terlempar keluar dari kawah. Saat debu mereda, kau melihat hutan Kalimantan perlahan kembali hijau. Asap hitam menghilang.",
    image: "https://images.unsplash.com/photo-1501854140884-074cf2b21d25?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Temui Pangeran Antasari untuk terakhir kali", nextNode: "KAL_18_FAREWELL" }
    ]
  },

  "KAL_18_FAREWELL": {
    id: "KAL_18_FAREWELL",
    type: "STORY",
    speaker: "PANGERAN ANTASARI",
    text: "'Bumi Borneo berutang padamu. Ambil Pusaka Bumi ini.' Ia memberimu sebuah batu giok yang bersinar. 'Di barat, di tanah Sumatra, api agama dan adat sedang membara. Padamkan api palsu Belanda di sana.'",
    image: "https://images.unsplash.com/photo-1599579042456-e918b958c233?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Gunakan Pusaka untuk terbang ke Sumatra", nextNode: "KAL_END_TRANSITION" }
    ]
  },

  "KAL_END_TRANSITION": {
    id: "KAL_END_TRANSITION",
    type: "END_REGION",
    targetIsland: "sumatra",
    speaker: "SISTEM ARSIP",
    text: "Jangkar III Hancur. Integritas Hutan Tropis: 90%. Koordinat selanjutnya: Bukit Bonjol, Sumatra, 1833. Perang Padri.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    options: [
    ]
  },

// =========================================================================
  // WILAYAH IV: SUMATRA (1833) - BARA IMAN DI BUKIT BONJOL
  // =========================================================================

  // --- PILAR 1: PINTU RIMBA SWARNADWIPA ---
  "SUMATRA_01_ARRIVAL": {
    id: "SUMATRA_01_ARRIVAL",
    type: "STORY",
    year: "Lembah Harau, 1833",
    speaker: "NARASI",
    text: "Pusaka Pangeran Antasari membawamu membelah awan, mendarat keras di tanah Minangkabau. Di sekelilingmu, tebing-tebing granit Lembah Harau menjulang tegak lurus. Namun, ini bukan batu biasa. Permukaannya 'terkelupas', menampakkan sirkuit emas yang berdenyut di baliknya. Kabut di sini berbau mesiu dan dupa digital.",
    image: "https://images.unsplash.com/photo-1565619624098-e659b52a5538?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Analisis anomali tebing", nextNode: "SUM_02_ENV_CHECK" }
    ]
  },

  "SUM_02_ENV_CHECK": {
    id: "SUM_02_ENV_CHECK",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Jangkar Alkimia IV ada di puncak Bukit Bonjol. Sinyalnya sangat kuat, memancarkan gelombang 'Kepatuhan Mutlak'. Neo-VOC tidak hanya ingin menjajah tanah, mereka ingin menjajah iman dan pikiran rakyat Sumatra melalui 'Agama Data'.",
    image: "https://images.unsplash.com/photo-1627393436034-754394019a4e?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Perang Padri (1803-1838)",
    historyText: "Bermula sebagai konflik internal antara Kaum Padri (Ulama) dan Kaum Adat. Belanda memanfaatkan perpecahan ini untuk masuk. Namun pada 1833, kedua kubu bersatu melawan penjajah dalam semangat 'Adat Basandi Syarak, Syarak Basandi Kitabullah'.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Imam_Bonjol.jpg",
    options: [
      { 
        text: "[MISTIS] Cari 'Jalan Tikus' energi untuk menghindari patroli (DC 16)", 
        requirement: { stat: "Mistis", dc: 16 },
        nextNode: "SUM_03_MISTIS_PATH",
        failNode: "SUM_04_LOST_IN_FOG"
      },
      { 
        text: "[KUAT] Terobos jalan utama, siap tempur!", 
        nextNode: "SUM_05_COMBAT_PATH" 
      }
    ]
  },

  // --- CABANG JALUR MISTIS ---
  "SUM_03_MISTIS_PATH": {
    id: "SUM_03_MISTIS_PATH",
    type: "STORY",
    speaker: "NARASI",
    text: "Mata batinmu melihat aliran energi Sang Saka yang tipis di antara celah tebing. Kau menyusup melewatinya. Di sana, kau melihat seekor Harimau Sumatra yang tubuhnya separuh transparan (Glitch). Ia tidak menyerang, seolah mengenal auramu, dan memberimu jalan aman.",
    image: "https://images.unsplash.com/photo-1501706369511-06b086053b27?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Ikuti harimau itu ke Benteng", rewardStat: { Pulung: 3 }, nextNode: "SUM_06_BONJOL_GATE" }
    ]
  },

  "SUM_04_LOST_IN_FOG": {
    id: "SUM_04_LOST_IN_FOG",
    type: "STORY",
    speaker: "NARASI",
    text: "Konsentrasimu pecah. Kabut digital ini menyesatkanmu. Kau berputar-putar selama berjam-jam, menghirup asap beracun yang menguras vitalitasmu sebelum akhirnya menemukan jalan keluar.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Keluar dari kabut dengan lelah (-20 HP)", damage: 20, nextNode: "SUM_06_BONJOL_GATE" }
    ]
  },

  // --- CABANG JALUR TEMPUR ---
  "SUM_05_COMBAT_PATH": {
    id: "SUM_05_COMBAT_PATH",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau memilih jalan konfrontasi. Di ujung lembah, sepasukan 'KNIL Inquisitor' berjubah putih-emas menghadang. Wajah mereka tertutup topeng besi tanpa mata. Mereka tidak bicara, hanya mengacungkan bayonet energi.",
    image: "https://images.unsplash.com/photo-1550953250-7d35398684d5?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Serang mereka!", nextNode: "SUM_BATTLE_INQUISITOR" }
    ]
  },

  "SUM_BATTLE_INQUISITOR": {
    id: "SUM_BATTLE_INQUISITOR",
    type: "BATTLE_TRIGGER",
    enemyId: "SUM_HUM_INQUISITOR",
    winNode: "SUM_06_BONJOL_GATE",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 2: MURKA SANG IMAM ---
  "SUM_06_BONJOL_GATE": {
    id: "SUM_06_BONJOL_GATE",
    type: "STORY",
    year: "Benteng Bonjol, 1833",
    speaker: "NARASI",
    text: "Benteng Bonjol bukanlah bangunan batu, melainkan tembok tanah liat yang diperkuat dengan bambu dan... perisai energi? Pasukan Padri terlihat kelelahan. Di tengah mereka, Tuanku Imam Bonjol sedang berdebat sengit dengan seorang penghulu adat.",
    image: "https://images.unsplash.com/photo-1596401057633-557303107297?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Dekati dan dengarkan perdebatan", nextNode: "SUM_07_INTERNAL_CONFLICT" }
    ]
  },

  "SUM_07_INTERNAL_CONFLICT": {
    id: "SUM_07_INTERNAL_CONFLICT",
    type: "STORY",
    speaker: "TUANKU IMAM BONJOL",
    text: "'Tidak! Kita tidak akan menandatangani 'Plakat Panjang Digital' itu! Belanda menjanjikan surga tanpa kematian, tapi itu adalah neraka tanpa jiwa!'\n\nBeliau menoleh padamu. 'Kau... orang asing. Apakah kau utusan Jenderal De Kock yang datang untuk mengambil sukmaku?'",
    image: "https://images.unsplash.com/photo-1548504770-436282915645?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[PRESERVATION] Saya datang untuk menghancurkan 'Relik Palsu' Belanda (DC 18)", 
        requirement: { stat: "Wibawa", dc: 18 },
        alignment: { PRESERVATION: 1 },
        nextNode: "SUM_08_IMAM_ALLY",
        failNode: "SUM_09_IMAM_DOUBT"
      },
      { 
        text: "[DOMINATION] Mundurlah, Tuanku. Biar senjata masa depan yang bicara.", 
        alignment: { DOMINATION: 1 },
        nextNode: "SUM_09_IMAM_DOUBT"
      }
    ]
  },

  "SUM_08_IMAM_ALLY": {
    id: "SUM_08_IMAM_ALLY",
    type: "STORY",
    speaker: "TUANKU IMAM BONJOL",
    text: "'Allahu Akbar... Akhirnya ada yang melihat kebenaran.' Imam Bonjol menyerahkan sebuah 'Tasbih' yang terbuat dari biji besi hitam. 'Ini pernah menahan peluru. Gunakan untuk melindungi hatimu dari bisikan setan besi.'",
    image: "https://images.unsplash.com/photo-1628519586390-da52c505315f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Terima Tasbih (+5 Mistis, +5 Tahan)", 
        rewardStat: { Mistis: 5, Tahan: 5 }, 
        nextNode: "SUM_10_SIDE_QUEST_START" 
      }
    ]
  },

  "SUM_09_IMAM_DOUBT": {
    id: "SUM_09_IMAM_DOUBT",
    type: "STORY",
    speaker: "TUANKU IMAM BONJOL",
    text: "'Kesombonganmu mirip dengan mereka.' Imam Bonjol berbalik. 'Lakukan semaumu. Tapi jika kau mengganggu pertahanan kami, peluru kami tak kenal kawan.'",
    image: "https://images.unsplash.com/photo-1548504770-436282915645?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Pergi menjelajahi area sekitar benteng", nextNode: "SUM_10_SIDE_QUEST_START" }
    ]
  },

  // --- PILAR 3: BISIKAN SANG TAPA (SIDE QUEST) ---
  "SUM_10_SIDE_QUEST_START": {
    id: "SUM_10_SIDE_QUEST_START",
    type: "STORY",
    speaker: "NARASI",
    text: "Di sudut terpencil benteng, kau menemukan sebuah sumur tua. Airnya tidak memantulkan wajahmu, tapi memantulkan kode biner merah. Suara mendesis terdengar dari dalamnya... suara yang menjanjikan kekuatan.",
    image: "https://images.unsplash.com/photo-1533036830502-d98b049d5b40?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Lihat ke dalam sumur", nextNode: "SUM_11_WELL_TEMPTATION" },
      { text: "Abaikan dan fokus ke misi utama", nextNode: "SUM_13_TRAGEDY" }
    ]
  },

  "SUM_11_WELL_TEMPTATION": {
    id: "SUM_11_WELL_TEMPTATION",
    type: "STORY",
    speaker: "SANG TAPA (BISIKAN)",
    text: "'Ragamu lemah, Penjelajah. Sejarah ini berat. Minumlah. Aku akan memulihkan semua lukamu... selamanya. Hanya dengan satu tegukan kecil kewarasanmu.'",
    image: "https://images.unsplash.com/photo-1618557117765-a8c2215c065f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[CORRUPTION] Minum air sumur (Heal Full HP, -5 Mistis)", 
        alignment: { CORRUPTION: 2 },
        rewardStat: { hp: 100, Mistis: -5 }, // Heal massive tapi debuff mental
        nextNode: "SUM_13_TRAGEDY"
      },
      { 
        text: "[MISTIS] Sucikan sumur dengan Sang Saka (DC 20)", 
        requirement: { stat: "Mistis", dc: 20 },
        nextNode: "SUM_12_WELL_PURIFIED",
        failNode: "SUM_13_TRAGEDY"
      }
    ]
  },

  "SUM_12_WELL_PURIFIED": {
    id: "SUM_12_WELL_PURIFIED",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau meneteskan keringat cahaya ke dalam sumur. Air merah mendidih, lalu berubah jernih. Bisikan jahat itu menjerit dan lenyap. Kau menemukan 'Cincin Delima' di dasar sumur yang kini suci.",
    image: "https://images.unsplash.com/photo-1534086657688-693ce61a0f88?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "Ambil Cincin (+3 Pulung, +3 Wibawa)", 
        rewardStat: { Pulung: 3, Wibawa: 3 },
        alignment: { PRESERVATION: 1 },
        nextNode: "SUM_13_TRAGEDY" 
      }
    ]
  },

  // --- PILAR 4: TRAGEDI LEMBAH HARAU ---
  "SUM_13_TRAGEDY": {
    id: "SUM_13_TRAGEDY",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau berjalan ke pos pengawas. Di bawah sana, di desa penyangga, pemandangan mengerikan terjadi. Penduduk desa yang menolak 'Plakat Panjang' sedang berubah menjadi patung logam. Mereka tidak mati, tapi membeku dalam pose ketakutan abadi.",
    image: "https://images.unsplash.com/photo-1518182170546-07fa6eb28555?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Plakat Panjang (1833)",
    historyText: "Janji Belanda kepada rakyat Minangkabau bahwa mereka datang sebagai kawan, bukan penjajah, dan tidak akan memungut pajak. Namun, janji ini dilanggar, memicu perlawanan semesta rakyat Sumatra Barat.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/2/23/Plakat_Panjang.jpg",
    options: [
      { text: "Periksa dokumen hologram di pos", nextNode: "SUM_14_DOC_CHECK" }
    ]
  },

  "SUM_14_DOC_CHECK": {
    id: "SUM_14_DOC_CHECK",
    type: "STORY",
    speaker: "DOKUMEN NEO-VOC",
    text: "'PROTOCOL: PETRIFICATION. Subjek yang menolak asimilasi data akan diarsipkan secara fisik (dibekukan). Target selanjutnya: Benteng Bonjol. Waktu eksekusi: SEKARANG.'",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Alarm berbunyi! Serangan datang!", nextNode: "SUM_15_SIEGE_START" }
    ]
  },

  // --- PILAR 5: PENGEPUNGAN BENTENG BESI ---
  "SUM_15_SIEGE_START": {
    id: "SUM_15_SIEGE_START",
    type: "STORY",
    speaker: "NARASI",
    text: "Langit menjadi gelap. Armada udara Jenderal De Kock—balon udara berlapis baja—muncul dari balik bukit. Meriam Alkimia mulai menembaki benteng. Dinding tanah bergetar hebat.",
    image: "https://images.unsplash.com/photo-1542382156-f40eb537532a?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[LUWES] Menyusup ke garis belakang untuk sabotase meriam (DC 20)", 
        requirement: { stat: "Luwes", dc: 20 },
        nextNode: "SUM_16_SABOTAGE_SUCCESS",
        failNode: "SUM_17_SABOTAGE_FAIL"
      },
      { 
        text: "Pimpin pertahanan di gerbang utama!", 
        nextNode: "SUM_18_FRONTLINE_DEFENSE" 
      }
    ]
  },

  "SUM_16_SABOTAGE_SUCCESS": {
    id: "SUM_16_SABOTAGE_SUCCESS",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau bergerak secepat bayangan. Kau memasang bom pulsa (dari inventarismu) di meriam utama musuh. DUAR! Ledakan biru melumpuhkan artileri berat mereka. Pasukan Padri bersorak!",
    image: "https://images.unsplash.com/photo-1496364263684-25e1a38a7c2f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Kembali ke benteng untuk serangan balik", rewardStat: { Wibawa: 3 }, nextNode: "SUM_19_VAN_AETERNE_DEBATE" }
    ]
  },

  "SUM_17_SABOTAGE_FAIL": {
    id: "SUM_17_SABOTAGE_FAIL",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau tertangkap sensor panas! Meriam berputar ke arahmu. Kau nyaris lolos, tapi ledakan itu melemparkanmu kembali ke dalam benteng dengan luka bakar serius.",
    image: "https://images.unsplash.com/photo-1495036173004-9445197cb398?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Bangkit dengan sisa tenaga (-25 HP)", damage: 25, nextNode: "SUM_18_FRONTLINE_DEFENSE" }
    ]
  },

  "SUM_18_FRONTLINE_DEFENSE": {
    id: "SUM_18_FRONTLINE_DEFENSE",
    type: "BATTLE_TRIGGER",
    enemyId: "SUM_HUM_INQUISITOR", // Gelombang musuh elit
    winNode: "SUM_19_VAN_AETERNE_DEBATE",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 6: DEBAT ALKIMIA (CLIMAX FILOSOFIS) ---
  "SUM_19_VAN_AETERNE_DEBATE": {
    id: "SUM_19_VAN_AETERNE_DEBATE",
    type: "STORY",
    speaker: "WILLEM VAN AETERNE (PROYEKSI)",
    text: "Di tengah asap pertempuran, hologram raksasa Van Aeterne muncul di atas medan perang. 'Lihatlah mereka. Saling bunuh atas nama adat dan agama. Mengapa kau halangi aku untuk menyatukan mereka dalam satu sistem yang damai?'",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[WIBAWA] Persatuan tanpa kehendak bebas adalah perbudakan! (DC 22)", 
        requirement: { stat: "Wibawa", dc: 22 },
        alignment: { PRESERVATION: 2 },
        nextNode: "SUM_20_DEBATE_WIN",
        failNode: "SUM_21_DEBATE_LOSE"
      },
      { 
        text: "[DOMINATION] Aku tidak peduli filosofimu, aku hanya ingin menghancurkanmu.", 
        alignment: { DOMINATION: 1 },
        nextNode: "SUM_21_DEBATE_LOSE"
      },
      {
        text: "[CORRUPTION] Kau benar... manusia terlalu kacau.",
        alignment: { CORRUPTION: 1 },
        nextNode: "SUM_21_DEBATE_LOSE"
      }
    ]
  },

  "SUM_20_DEBATE_WIN": {
    id: "SUM_20_DEBATE_WIN",
    type: "STORY",
    speaker: "NARASI",
    text: "Kata-katamu mengandung 'Karsa' yang kuat, mengguncang kestabilan proyeksi Van Aeterne. 'Mustahil... variabel manusia ini...' Hologramnya pecah, melemahkan perisai Jangkar di puncak bukit.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Maju ke puncak Bukit Bonjol! (Boss Weakened)", rewardStat: { Pulung: 5 }, nextNode: "SUM_22_BOSS_INTRO" }
    ]
  },

  "SUM_21_DEBATE_LOSE": {
    id: "SUM_21_DEBATE_LOSE",
    type: "STORY",
    speaker: "NARASI",
    text: "Van Aeterne tertawa. 'Naif.' Dia mematikan komunikasi. Perisai Jangkar di puncak bukit bersinar merah terang, siap memusnahkan siapa saja.",
    image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Maju ke puncak dengan nekat", nextNode: "SUM_22_BOSS_INTRO" }
    ]
  },

  // --- PILAR 7: PEMUTUSAN RANTAI TAKDIR (BOSS) ---
  "SUM_22_BOSS_INTRO": {
    id: "SUM_22_BOSS_INTRO",
    type: "STORY",
    speaker: "THE ETERNAL RELIC",
    text: "Di puncak bukit, tidak ada bendera. Yang ada adalah Katedral Mekanik yang melayang. Ini adalah 'The Eternal Relic'—Jangkar Alkimia IV. Ia berdenyut dengan suara ribuan doa yang telah didigitalkan secara paksa.",
    image: "https://images.unsplash.com/photo-1548625361-12e698822003?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Hancurkan Relik itu! Bebaskan Sumatra!", nextNode: "SUM_BOSS_FIGHT" }
    ]
  },

  "SUM_BOSS_FIGHT": {
    id: "SUM_BOSS_FIGHT",
    type: "BATTLE_TRIGGER",
    enemyId: "SUM_BOS_RELIC",
    winNode: "SUM_23_VICTORY",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 8: TRANSISI KE JAWA ---
  "SUM_23_VICTORY": {
    id: "SUM_23_VICTORY",
    type: "STORY",
    speaker: "NARASI",
    text: "Katedral mekanik itu runtuh menjadi debu emas. Langit Sumatra kembali cerah. Pasukan De Kock mundur dalam kebingungan karena jaringan mereka terputus. Tuanku Imam Bonjol menghampirimu di puncak bukit.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Terima salam perpisahan Imam", nextNode: "SUM_24_FAREWELL" }
    ]
  },

  "SUM_24_FAREWELL": {
    id: "SUM_24_FAREWELL",
    type: "STORY",
    speaker: "TUANKU IMAM BONJOL",
    text: "'Perjuangan kami di sini belum selesai, tapi kau punya perang yang lebih besar di seberang lautan.' Beliau menyerahkan 'Tombak Cahaya'. 'Gunakan ini untuk membelah kegelapan di Jawa.'",
    image: "https://images.unsplash.com/photo-1628519586390-da52c505315f?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Terima Tombak & Berangkat ke Jawa", nextNode: "SUM_END_TRANSITION" }
    ]
  },

  "SUM_END_TRANSITION": {
    id: "SUM_END_TRANSITION",
    type: "REGION_TRANSITION",
    targetIsland: "jawa",
    speaker: "SISTEM ARSIP",
    text: "Jangkar IV Hancur. Anomali Kritis terdeteksi di Batavia-Prime. Tahun target: 1945. Proklamasi dalam bahaya. Memulai lompatan terakhir...",
    image: "https://images.unsplash.com/photo-1510915361405-ef8b259c76c9?q=80&w=2000&auto=format&fit=crop",
    options: [
    ]
  },

  // =========================================================================
  // WILAYAH V: JAWA (1945) - BATAVIA PRIME & RETAKAN PROKLAMASI
  // =========================================================================

  // --- PILAR 1: KEDATANGAN DI DYSTOPIA ---
  "JAWA_01_ARRIVAL": {
    id: "JAWA_01_ARRIVAL",
    type: "STORY",
    year: "Batavia-Prime, 16 Agustus 1945",
    speaker: "NARASI",
    text: "Langit Batavia berwarna ungu metalik, tertutup awan data yang statis. Gedung-gedung kolonial Rijswijk (Harmoni) telah berubah menjadi menara sirkuit raksasa. Di tengah kota, bukan Monas yang berdiri, melainkan 'Jarum Sang Tapa'—menara hitam yang menusuk langit, menyedot 'Semangat 45' dari udara.",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Cek sinyal Soekarno-Hatta", nextNode: "JAWA_02_SIGNAL_CHECK" }
    ]
  },

  "JAWA_02_SIGNAL_CHECK": {
    id: "JAWA_02_SIGNAL_CHECK",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "Sejarah retak parah. Para Pemuda gagal menculik Soekarno ke Rengasdengklok karena mereka ditangkap oleh 'Sentinel Omega' tadi malam. Soekarno dan Hatta kini ditahan di penjara data di bekas gedung *Raad van Indië*.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Peristiwa Rengasdengklok",
    historyText: "Sejatinya, pada 16 Agustus dini hari, Golongan Muda 'menculik' Soekarno-Hatta ke Rengasdengklok untuk menjauhkan mereka dari pengaruh Jepang dan mendesak proklamasi segera. Di timeline ini, Neo-VOC mencegah hal itu untuk mematikan momentum kemerdekaan.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Rengasdengklok.jpg",
    options: [
      { 
        text: "[LUWES] Retas sistem keamanan penjara (DC 20)", 
        requirement: { stat: "Luwes", dc: 20 },
        nextNode: "JAWA_03_HACK_SUCCESS",
        failNode: "JAWA_04_ASSAULT_FAIL"
      },
      { 
        text: "[KUAT] Jebol gerbang depan dengan Tombak Imam Bonjol!", 
        nextNode: "JAWA_04_ASSAULT_FAIL" // Force entry always leads to battle in nightmare mode
      }
    ]
  },

  "JAWA_03_HACK_SUCCESS": {
    id: "JAWA_03_HACK_SUCCESS",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau menyambungkan fragmen Sang Saka ke panel pintu. Kode biner merah berubah hijau. Pintu sel terbuka tanpa suara. Di dalam, Soekarno dan Hatta sedang duduk dalam meditasi, dikelilingi dinding laser.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Bebaskan Bapak Bangsa", rewardStat: { Wibawa: 5 }, nextNode: "JAWA_06_REUNION" }
    ]
  },

  "JAWA_04_ASSAULT_FAIL": {
    id: "JAWA_04_ASSAULT_FAIL",
    type: "STORY",
    speaker: "ALARM SISTEM",
    text: ">> INTRUSION DETECTED. DEPLOYING OMEGA UNIT.\n\nGerbang baja meledak, tapi di baliknya telah menunggu robot tempur setinggi 3 meter dengan perisai energi. Kau tidak punya pilihan selain bertarung.",
    image: "https://images.unsplash.com/photo-1531297461136-82lw33903847?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Hancurkan Sentinel Omega!", nextNode: "JAWA_BATTLE_SENTINEL" }
    ]
  },

  "JAWA_BATTLE_SENTINEL": {
    id: "JAWA_BATTLE_SENTINEL",
    type: "BATTLE_TRIGGER",
    enemyId: "JAV_CYB_SENTINEL",
    winNode: "JAWA_06_REUNION",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 2: RENGASDENGKLOK SIMULATION ---
  "JAWA_06_REUNION": {
    id: "JAWA_06_REUNION",
    type: "STORY",
    speaker: "IR. SOEKARNO",
    text: "'Bung... Kau bukan dari Kenpeitai. Matamu menyala seperti api revolusi yang kulihat dalam mimpi.' Soekarno bangkit. 'Kami siap. Tapi raga kami masih terikat oleh ilusi Rengasdengklok yang diciptakan mesin ini.'",
    image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Apa maksud Bung Karno?", nextNode: "JAWA_07_MENTAL_PRISON" }
    ]
  },

  "JAWA_07_MENTAL_PRISON": {
    id: "JAWA_07_MENTAL_PRISON",
    type: "STORY",
    speaker: "NARASI",
    text: "Tiba-tiba ruangan bergeser. Kau berada di rumah Djiaw Kie Siong (Rengasdengklok), tapi dindingnya terbuat dari kode matriks yang luruh. Bayangan Wikana dan Chaerul Saleh berteriak-teriak, tapi suara mereka pecah menjadi *static noise*.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { 
        text: "[MISTIS] Stabilkan memori mereka dengan Sang Saka (DC 22)", 
        requirement: { stat: "Mistis", dc: 22 },
        alignment: { PRESERVATION: 1 },
        nextNode: "JAWA_08_MEMORY_RESTORED",
        failNode: "JAWA_09_MEMORY_FORCED"
      },
      { 
        text: "[DOMINATION] Hancurkan ilusi ini dengan paksa!", 
        alignment: { DOMINATION: 1 },
        nextNode: "JAWA_09_MEMORY_FORCED"
      }
    ]
  },

  "JAWA_08_MEMORY_RESTORED": {
    id: "JAWA_08_MEMORY_RESTORED",
    type: "STORY",
    speaker: "MOHAMMAD HATTA",
    text: "Ilusi pecah dengan lembut. Hatta membetulkan kacamatanya. 'Terima kasih. Kami ingat sekarang. Naskah itu harus disusun malam ini juga. Di rumah Laksamana Maeda... atau apa yang tersisa darinya.'",
    image: "https://images.unsplash.com/photo-1569949381156-35470fa63c08?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Kawal mereka ke Jakarta Pusat", rewardStat: { Wibawa: 3 }, nextNode: "JAWA_10_STREET_WAR" }
    ]
  },

  "JAWA_09_MEMORY_FORCED": {
    id: "JAWA_09_MEMORY_FORCED",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau menghantam dinding ilusi hingga hancur. Soekarno dan Hatta terlempar kembali ke realitas, terengah-engah dan pusing. Mereka selamat, tapi karsa mereka melemah (-10 HP Player karena feedback energi).",
    damage: 10,
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Segera bergerak sebelum musuh datang", nextNode: "JAWA_10_STREET_WAR" }
    ]
  },

  // --- PILAR 3: JALANAN BATAVIA (ZONA PERANG) ---
  "JAWA_10_STREET_WAR": {
    id: "JAWA_10_STREET_WAR",
    type: "STORY",
    year: "Jalanan Batavia-Prime, Malam 16 Agustus",
    speaker: "NARASI",
    text: "Jalanan menuju Pegangsaan Timur adalah zona perang. Rakyat jelata bangkit melawan robot Neo-VOC hanya dengan bambu runcing yang dialiri semangat putus asa. Di atas langit, pesawat tempur alkimia menjatuhkan bom gravitasi.",
    image: "https://images.unsplash.com/photo-1565551916327-0a4fbf5c6043?q=80&w=2000&auto=format&fit=crop",
    historyTitle: "Bambu Runcing",
    historyText: "Senjata sederhana yang menjadi simbol keberanian rakyat Indonesia. Di timeline ini, 'semangat' para pejuang secara tidak sadar mengalirkan energi Sang Saka ke bambu mereka, membuatnya mampu menembus baja robot.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Bamboo_spears.jpg",
    options: [
      { 
        text: "Pimpin rakyat menyerbu barikade musuh (BATTLE)", 
        nextNode: "JAWA_BATTLE_COMMANDO" 
      },
      { 
        text: "[WIBAWA] Orasi untuk membakar semangat tempur", 
        requirement: { stat: "Wibawa", dc: 20 },
        nextNode: "JAWA_11_SPEECH_BUFF",
        failNode: "JAWA_BATTLE_COMMANDO"
      }
    ]
  },

  "JAWA_11_SPEECH_BUFF": {
    id: "JAWA_11_SPEECH_BUFF",
    type: "STORY",
    speaker: "ARKEOLOG (KAMU)",
    text: "'MERDEKA ATAU MATI! Besi mereka bisa patah, tapi jiwa kita abadi!' Teriakanmu memicu gelombang kejut energi emas. Rakyat bersorak, menghancurkan barikade musuh tanpa rasa takut.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Jalan terbuka menuju Menara Sang Tapa (+50 hp)", rewardStat: { hp: 50 }, nextNode: "JAWA_12_TOWER_BASE" }
    ]
  },

  "JAWA_BATTLE_COMMANDO": {
    id: "JAWA_BATTLE_COMMANDO",
    type: "BATTLE_TRIGGER",
    enemyId: "JAV_HUM_COMMANDO",
    winNode: "JAWA_12_TOWER_BASE",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 4: MENARA SANG TAPA ---
  "JAWA_12_TOWER_BASE": {
    id: "JAWA_12_TOWER_BASE",
    type: "STORY",
    speaker: "NARASI",
    text: "Kau menitipkan Soekarno-Hatta pada Sayuti Melik di tempat aman. Kini, hanya ada kau dan Menara Sang Tapa. Puncaknya menembus awan. Di sanalah Willem Van Aeterne menunggu.",
    image: "https://images.unsplash.com/photo-1480044965905-83275966c43b?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Naik ke puncak menara", nextNode: "JAWA_13_VAN_AETERNE_FACE" }
    ]
  },

  // --- PILAR 5: KONFRONTASI VAN AETERNE ---
  "JAWA_13_VAN_AETERNE_FACE": {
    id: "JAWA_13_VAN_AETERNE_FACE",
    type: "STORY",
    year: "Atap Menara, Menjelang Fajar 17 Agustus",
    speaker: "WILLEM VAN AETERNE",
    text: "Pria itu berdiri membelakangi langit yang terbakar. Dia separuh mesin, separuh manusia. 'Lihat ke bawah. Kekacauan. Darah. Aku menawarkan tatanan abadi. Serahkan Sang Saka, dan kita akhiri penderitaan ini.'",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[WIBAWA] Kemerdekaan adalah hak segala bangsa! (DEBAT)", 
        requirement: { stat: "Wibawa", dc: 25 },
        alignment: { PRESERVATION: 2 },
        nextNode: "JAWA_14_DEBAT_WIN",
        failNode: "JAWA_14_DEBAT_LOSE"
      },
      { 
        text: "[CORRUPTION] Apa jaminanmu aku akan selamat?", 
        alignment: { CORRUPTION: 2 },
        nextNode: "JAWA_14_DEBAT_LOSE" // Tetap harus lawan, tapi alignment berubah
      },
      { 
        text: "Cukup bicara. Cabut pedangmu!", 
        nextNode: "JAWA_BATTLE_AETERNE" 
      }
    ]
  },

  "JAWA_14_DEBAT_WIN": {
    id: "JAWA_14_DEBAT_WIN",
    type: "STORY",
    speaker: "WILLEM VAN AETERNE",
    text: "'Kata-katamu... logis. Tapi sistemku tidak mengizinkan keraguan.' Mesin di tubuhnya menjerit. Dia melemah, perisai energinya pudar. (Boss HP Reduced)",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e35f9?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Akhiri dia sekarang!", nextNode: "JAWA_BATTLE_AETERNE" }
    ]
  },

  "JAWA_14_DEBAT_LOSE": {
    id: "JAWA_14_DEBAT_LOSE",
    type: "STORY",
    speaker: "WILLEM VAN AETERNE",
    text: "'Sayang sekali. Kau hanyalah anomali yang harus dihapus.' Dia mengaktifkan pedang gravitasi.",
    image: "https://images.unsplash.com/photo-1535376472810-5d229c6bda89?q=80&w=2000&auto=format&fit=crop",
    options: [
      { text: "Lawan Van Aeterne!", nextNode: "JAWA_BATTLE_AETERNE" }
    ]
  },

  "JAWA_BATTLE_AETERNE": {
    id: "JAWA_BATTLE_AETERNE",
    type: "BATTLE_TRIGGER",
    enemyId: "JAV_BOS_AETERNE",
    winNode: "JAWA_15_SANG_TAPA_AWAKENS",
    loseNode: "DEATH_SCENE"
  },

  // --- PILAR 6: TRANSENDENSI (SANG TAPA) ---
  "JAWA_15_SANG_TAPA_AWAKENS": {
    id: "JAWA_15_SANG_TAPA_AWAKENS",
    type: "STORY",
    speaker: "NARASI",
    text: "Tubuh Van Aeterne hancur menjadi debu data. Tapi menara tidak berhenti bergetar. Dari intinya, muncul bola cahaya hitam yang menyerap semua warna di sekitarnya. SANG TAPA—Sang Pertapa Data—bangkit. Ia tidak berwujud, melainkan cermin dari ketakutan terbesarmu.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop",
    glitch: true,
    options: [
      { text: "Hadapi Sang Tapa!", nextNode: "JAWA_BATTLE_SANG_TAPA" }
    ]
  },

  "JAWA_BATTLE_SANG_TAPA": {
    id: "JAWA_BATTLE_SANG_TAPA",
    type: "BATTLE_TRIGGER",
    enemyId: "JAV_BOS_SANG_TAPA",
    winNode: "JAWA_16_ZERO_POINT",
    loseNode: "ENDING_LOST_ARCHIVE"
  },

// --- PILAR 7: TITIK NOL (PROKLAMASI) ---
  // Node ini menggunakan logika 'Highest Alignment Filter' di NarrativeEngine
  "JAWA_16_ZERO_POINT": {
    id: "JAWA_16_ZERO_POINT",
    type: "STORY",
    year: "Pegangsaan Timur 56, 17 Agustus 1945 - 10:00 WIB",
    speaker: "NARASI",
    text: "Sang Tapa hancur, menaranya runtuh menjadi kelopak bunga melati. Kau terlempar ke halaman rumah sederhana. Di sana, Soekarno berdiri di depan mikrofon, memegang secarik kertas. Hatta di sampingnya. Bendera Merah Putih siap dikibarkan. Dunia menahan napas.",
    image: "https://images.unsplash.com/photo-1569949381156-35470fa63c08?q=80&w=2000&auto=format&fit=crop",
    options: [
      { 
        text: "[JATI DIRI: PRESERVATION] Biarkan Soekarno membaca teks itu. Tugasmu selesai.", 
        // Menggunakan minAlignment agar difilter sebagai opsi 'Skor Tertinggi'
        minAlignment: { PRESERVATION: 1 }, 
        nextNode: "ENDING_HISTORIAN" 
      },
      { 
        text: "[JATI DIRI: DOMINATION] Ambil mikrofon itu. Kau yang menyelamatkan negeri ini.", 
        minAlignment: { DOMINATION: 1 }, 
        nextNode: "ENDING_FOUNDING_FATHER" 
      },
      { 
        text: "[JATI DIRI: CORRUPTION] Sentuh sisa data Van Aeterne di tanganmu.", 
        minAlignment: { CORRUPTION: 1 }, 
        nextNode: "ENDING_GOLDEN_MONARCH" 
      }
    ],
    historyTitle: "Proklamasi Kemerdekaan RI",
    historyText: "Peristiwa pembacaan teks proklamasi oleh Soekarno-Hatta pada 17 Agustus 1945 di Jalan Pegangsaan Timur 56 adalah titik kulminasi perjuangan bangsa Indonesia. Dalam timeline Nusantara Saga, ini adalah momen di mana realitas stabil kembali setelah kehancuran Sang Tapa.",
    historyImage: "https://upload.wikimedia.org/wikipedia/commons/b/be/Soekarno_membacakan_teks_proklamasi.jpg"
  },

  // --- CABANG ENDING ---
  "ENDING_HISTORIAN": {
    id: "ENDING_HISTORIAN",
    type: "ENDING",
    category: "HAPPY",
    title: "THE HISTORIAN",
    text: "\"Kami, bangsa Indonesia...\" Suara Soekarno menggema. Kau tersenyum, tubuhmu perlahan menjadi transparan, terurai menjadi partikel cahaya merah putih. Kau kembali ke tahun 2120. Jakarta hijau, langit biru. Tidak ada robot. Tidak ada yang mengenalmu, tapi kau tahu: Kau menyelamatkan mereka semua.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2000&auto=format&fit=crop"
  },

  "ENDING_FOUNDING_FATHER": {
    id: "ENDING_FOUNDING_FATHER",
    type: "ENDING",
    category: "SECRET",
    title: "THE NEW FOUNDING FATHER",
    text: "Kau mendorong Soekarno ke samping. \"Dunia baru butuh pemimpin baru!\" Kau memproklamirkan Kekaisaran Nusantara. Dengan teknologi masa depan di tanganmu, Indonesia menjadi negara adidaya yang ditakuti dunia. Tahun 2120, patungmu berdiri di setiap sudut kota. Megah, tapi dingin.",
    image: "https://images.unsplash.com/photo-1627393436034-754394019a4e?q=80&w=2000&auto=format&fit=crop"
  },

  "ENDING_GOLDEN_MONARCH": {
    id: "ENDING_GOLDEN_MONARCH",
    type: "ENDING",
    category: "BAD",
    title: "THE GOLDEN MONARCH",
    text: "Kau menyatukan Sang Saka dan Sang Tapa. Realitas pecah. Kau tidak menyelamatkan Indonesia, kau membelinya. Kau duduk di singgasana emas di luar ruang dan waktu. Kau menatap lurus ke layar... menatap PLAYER yang sedang memainkan game ini. \"Giliranmu selanjutnya.\"",
    image: "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=2000&auto=format&fit=crop"
  },

  "ENDING_LOST_ARCHIVE": {
    id: "ENDING_LOST_ARCHIVE",
    type: "ENDING",
    category: "SAD",
    title: "THE LOST ARCHIVE",
    text: "ERROR: SIGNAL LOST. Raga hancur sebelum tugas selesai. Sejarah 1945 terhapus. Batavia-Prime kekal selamanya. Namamu hanya menjadi baris kode rusak di arsip Neo-VOC.",
    image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2000&auto=format&fit=crop"
  }
};

export const ITEMS = {
  ...ITEMS_PAPUA,
  ...ITEMS_SULAWESI,
  ...ITEMS_KALIMANTAN,
  ...ITEMS_SUMATRA,
  ...ITEMS_JAWA
};
