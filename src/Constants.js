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
    imageIdle: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dipo", 
    imgAtk: "https://api.dicebear.com/7.x/avataaars/svg?seed=DipoAtk",
    imgUlt: "https://api.dicebear.com/7.x/avataaars/svg?seed=DipoUlt",
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
    imageIdle: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karti",
    imgAtk: "https://api.dicebear.com/7.x/avataaars/svg?seed=KartiAtk",
    imgUlt: "https://api.dicebear.com/7.x/avataaars/svg?seed=KartiUlt",
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
    imageIdle: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mada",
    imgAtk: "https://api.dicebear.com/7.x/avataaars/svg?seed=MadaAtk",
    imgUlt: "https://api.dicebear.com/7.x/avataaars/svg?seed=MadaUlt",
  }
];

// --- 3. DATA WILAYAH (ISLANDS) ---
// Sinkronisasi dengan WorldMap.jsx: Menggunakan 'status' dan 'coordinates.top/left'
export const ISLANDS = [
  { 
    id: 'papua_start', 
    name: 'PESISIR PAPUA', 
    status: 'unlocked', // Diubah dari isUnlocked agar sesuai komponen
    coordinates: { top: '65%', left: '80%' }, 
    startNode: 'PAP_01_ARRIVAL'
  },
  { 
    id: 'sulawesi_iron', 
    name: 'PEGUNUNGAN SULAWESI', 
    status: 'locked', 
    coordinates: { top: '50%', left: '60%' },
    startNode: 'sulawesi_start'
  },
  { 
    id: 'kalimantan_forest', 
    name: 'RIMBA KALIMANTAN', 
    status: 'locked', 
    coordinates: { top: '45%', left: '45%' },
    startNode: 'kalimantan_start'
  },
  { 
    id: 'sumatra_coast', 
    name: 'PESISIR ANDALAS', 
    status: 'locked', 
    coordinates: { top: '40%', left: '20%' },
    startNode: 'sumatra_start'
  },
  { 
    id: 'jawa_selarong', 
    name: 'PUSAT KARSA JAWA', 
    status: 'locked', 
    coordinates: { top: '70%', left: '35%' },
    startNode: 'jawa_start'
  }
];

// --- 4. ASET VISUAL PETA (MAP_ASSETS) ---
// Menampung gambar pulau dan informasi detail sidebar
export const MAP_ASSETS = {
  'papua_start': {
    idleUnlocked: "https://api.dicebear.com/7.x/identicon/svg?seed=PapuaIdle", // Ganti dengan asset PNG pulau
    hoverUnlocked: "https://api.dicebear.com/7.x/identicon/svg?seed=PapuaHover",
    idleLocked: "https://api.dicebear.com/7.x/identicon/svg?seed=PapuaLocked",
    hoverLocked: "https://api.dicebear.com/7.x/identicon/svg?seed=PapuaLockedHover",
    landmark: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    lore: "Titik di mana fajar Nusantara pertama kali menyentuh tanah. Jangkar alkimia di sini terkubur jauh di bawah akar pohon bakau purba yang bermutasi."
  },
  'sulawesi_iron': {
    idleUnlocked: "https://api.dicebear.com/7.x/identicon/svg?seed=SulawesiIdle",
    hoverUnlocked: "https://api.dicebear.com/7.x/identicon/svg?seed=SulawesiHover",
    idleLocked: "https://api.dicebear.com/7.x/identicon/svg?seed=SulawesiLocked",
    hoverLocked: "https://api.dicebear.com/7.x/identicon/svg?seed=SulawesiLockedHover",
    landmark: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
    lore: "Gunung-gunung di sini bukan terbuat dari batu, melainkan logam alkimia VOC masa depan yang mulai mengonsumsi alam sekitarnya."
  },
  'kalimantan_forest': {
    landmark: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=1000",
    lore: "Hutan yang menyesatkan arah bagi mereka yang tidak memiliki Karsa murni. Sinyal dari tahun 2120 paling kuat terdeteksi di sini."
  },
  'sumatra_coast': {
    landmark: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1000",
    lore: "Sisa-sisa kejayaan maritim yang kini dihuni oleh Iron Sentinels penjaga gerbang barat."
  },
  'jawa_selarong': {
    landmark: "https://images.unsplash.com/photo-1625472304192-3a56c078028f?q=80&w=1000",
    lore: "Tempat di mana Sang Tapa Utama berada. Ini adalah jantung dari paradoks waktu yang harus dihancurkan."
  }
};

// --- 4. TIPE WILAYAH (REGION THEMES) ---
export const REGION_THEMES = {
  'papua_start': { color: '#0f2a1f', accent: '#d4af37' },
  'sulawesi_iron': { color: '#2a2a2a', accent: '#94a3b8' },
  'kalimantan_forest': { color: '#064e3b', accent: '#10b981' },
  'sumatra_coast': { color: '#1e3a8a', accent: '#60a5fa' },
  'jawa_selarong': { color: '#450a0a', accent: '#ef4444' }
};

// --- 5. DATA SINEMATIK PROLOGUE ---
// Menggunakan alur: 2120 -> 2026 -> Discovery -> Expedition
export const PROLOGUE_SCENES = [
  {
    id: 1,
    year: "2120 M",
    location: "BATAVIA-PRIME",
    text: "Nusantara telah lama mati. Megastruktur logam VOC menghisap karsa dari setiap raga yang tersisa. Keabadian tanpa kehendak adalah hukuman bagi kita semua.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000", 
    glitch: true
  },
  {
    id: 2,
    year: "2026 M",
    location: "TITIK BALIK ALKIMIA",
    text: "Semua bermula di sini. Penemuan 'Sang Tapa' merobek tirai waktu. Alkimia VOC masa depan mulai menjangkarkan pengaruhnya ke masa lalu, meracuni sejarah bangsa.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000", 
    glitch: true
  },
  {
    id: 3,
    year: "ERA ARKEOLOG",
    location: "MUSEUM PUSAKA",
    text: "Sang Saka... artefak yang dulu dianggap dongeng, ternyata adalah kunci. Saat jemarimu menyentuh kain merah-putih yang berdebu itu, realitas mulai runtuh.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000",
    glitch: false
  },
  {
    id: 4,
    year: "AWAL EKSPEDISI",
    location: "GERBANG TIMUR",
    text: "Takdir menarikmu kembali. Kamu harus menghancurkan Jangkar Alkimia di setiap pulau. Ingatanmu akan memudar, namun kebebasan Nusantara harus ditebus.",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=2000",
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
  papua_start: [
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
  sulawesi_iron: [
    {
      title: "Logam Terkutuk",
      text: "Besi Sulawesi adalah material terbaik untuk membelah armor Iron Sentinels dari masa depan. Pastikan senjatamu telah ditempa dengan karsa murni.",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2000"
    }
  ],
  kalimantan_forest: [
    {
      title: "Jantung Zamrud",
      text: "Hutan Kalimantan adalah labirin yang hidup. Gunakan stat Luwes untuk menemukan jalan keluar dari jerat akar alkimia yang mencekik.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000"
    }
  ],
  sumatra_coast: [
    {
      title: "Suara Andalas",
      text: "Pesisir Sumatra menyimpan memori kerajaan maritim. Stat Wibawa sangat krusial untuk mengumpulkan sisa-sisa armada yang masih setia pada merah-putih.",
      image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2000"
    }
  ],
  jawa_selarong: [
    {
      title: "Titik Nadir",
      text: "Jawa adalah tempat di mana Sang Saka dan Sang Tapa akan beradu untuk terakhir kalinya. Pastikan seluruh poin takdirmu telah dialokasikan dengan bijak.",
      image: "https://images.unsplash.com/photo-1625472304192-3a56c078028f?q=80&w=2000"
    }
  ]
};

export const ENEMIES_PAPUA = {
  // --- 1. FAUNA TERKUTUK (Unsur Alam Papua) ---
  'p1_kasuari_belati' : {
    id: 'p1_kasuari_belati',
    name: "Kasuari Belati Karat",
    type: 'ANIMAL',
    hp: 110,
    atk: 14,
    xp: 4,
    description: "Burung purba yang matanya telah hilang, digantikan oleh kristal alkimia merah. Cakarnya mampu membelah zirah kayu dan kulit pahlawan dalam satu ayunan.",
    lore: "Sejarah mencatat kasuari sebagai penjaga hutan, namun kebocoran Karsa 2026 mengubah mereka menjadi predator buta yang hanya mengenal aroma darah."
  },
  'p1_hiu_rawa_asmat' : {
    id: 'p1_hiu_rawa_asmat',
    name: "Hiu Gergaji Rawa",
    type: 'ANIMAL',
    hp: 130,
    atk: 12,
    xp: 4,
    description: "Hiu darat yang bermutasi, kulitnya bersisik keras seperti basalt. Ia bersembunyi di balik genangan air bakau yang gelap.",
    lore: "Mutasi fauna akibat 'Jangkar Alkimia' yang ditanam VOC di kedalaman rawa Papua."
  },

  // --- 2. SERDADU KOLONIAL DISTORSI (Unsur Sejarah VOC) ---
  'p1_voc_musketeer_undead' : {
    id: 'p1_voc_musketeer_undead',
    name: "Musketeer VOC Berkarat",
    type: 'HUMAN',
    hp: 140,
    atk: 18,
    xp: 6,
    description: "Zombi serdadu Belanda abad ke-18. Seragamnya compang-camping dan senapan 'Matchlock'-nya kini menembakkan peluru karsa yang meledak.",
    lore: "Mereka adalah serdadu yang tewas dalam ekspedisi gagal di abad lalu, dibangkitkan kembali oleh energi aneh dari menara 2120."
  },
  'p1_prajurit_bayangan_biak' : {
    id: 'p1_prajurit_bayangan_biak',
    name: "Prajurit Bayangan Biak",
    type: 'HUMAN',
    hp: 95,
    atk: 22, // Damage tinggi tapi HP rendah (Glass Cannon)
    xp: 6,
    description: "Prajurit lokal yang menolak tunduk. Mereka menggunakan topeng kayu menyeramkan dan bergerak secepat bayangan di antara pohon bakau.",
    lore: "Terinspirasi dari ketangguhan pejuang Biak yang legendaris di laut. Mereka tidak jahat, tapi Karsa hitam membuat mereka menyerang siapapun yang dianggap asing."
  },

  // --- 3. ENTITAS MISTIS (Unsur Mitologi Papua) ---
  'p1_roh_koreri_hitam' : {
    id: 'p1_roh_koreri_hitam',
    name: "Manifestasi Karsa Koreri",
    type: 'SPIRIT',
    hp: 160,
    atk: 25,
    xp: 10,
    description: "Gumpalan asap hitam berbentuk figur raksasa dengan mata emas. Membawa gada batu yang memancarkan energi radioaktif.",
    lore: "Distorsi dari paham Koreri (kehidupan abadi). Alih-alih membawa surga, entitas ini membawa penderitaan abadi bagi mereka yang menyentuhnya."
  },

  // --- 4. ANOMALI MASA DEPAN (Cyber 2120 - Rare) ---
  'p1_sentinel_2120_glitch' : {
    id: 'p1_sentinel_2120_glitch',
    name: "Sentinel VOC 2120 (Rusak)",
    type: 'CYBER',
    hp: 80,
    atk: 15,
    xp: 8,
    description: "Robot protokol dari masa depan yang mengalami 'malfungsi waktu'. Tubuhnya transparan dan sering mengalami glitch (berpindah posisi secara instan).",
    lore: "Hanya muncul di titik-titik di mana waktu 'sobek'. Kehadirannya adalah tanda bahwa VOC masa depan sedang mengawasi pahlawanmu."
  },

  // --- 5. BOSS PAPUA ---
  'p1_boss_hongi_reaper' : {
    id: 'p1_boss_hongi_reaper',
    name: "Kaptayn Hongi: Sang Pemanen",
    type: 'BOSS',
    hp: 550, // Boss Level 1-2
    atk: 40,
    xp: 50,
    description: "Seorang Laksamana VOC raksasa yang menunggangi perahu kora-kora mekanik. Ia menggunakan arit besar yang dialiri energi alkimia biru.",
    lore: "Representasi dari kejamnya pelayaran Hongi. Ia terjebak dalam loop waktu, terus memanen jiwa di pesisir Papua demi memenuhi kuota Sang Tapa."
  }
};

// --- SULAWESI BESTIARY: GEMA BESI LUWU ---
// Skala kesulitan: Level 3 - 5
export const ENEMIES_SULAWESI = [
  // --- 1. FAUNA MINERAL (Mutasi Logam) ---
  {
    id: 's2_anoa_zirah',
    name: "Anoa Zirah Hitam",
    type: 'ANIMAL',
    hp: 220, 
    atk: 25,
    xp: 8,
    description: "Mamalia tangguh yang kulitnya telah menyatu dengan bijih besi Luwu. Setiap serudukannya mampu merobek perisai kayu pahlawan.",
    lore: "Mutasi terjadi karena fauna ini meminum air sungai yang tercemar limbah pemrosesan Sang Tapa dari masa depan."
  },
  {
    id: 's2_babirusa_gading_karsa',
    name: "Babirusa Gading Karsa",
    type: 'ANIMAL',
    hp: 180,
    atk: 32,
    xp: 8,
    description: "Gadingnya tumbuh melengkung menembus tengkorak, memancarkan listrik statis biru yang mampu melumpuhkan saraf pahlawan.",
    lore: "Taringnya bertindak sebagai antena yang menangkap sinyal radioaktif dari tahun 2120."
  },

  // --- 2. SERDADU & PENGRAJIN (Unsur Sejarah) ---
  {
    id: 's2_pandai_besi_terkutuk',
    name: "Pandai Besi Terkutuk",
    type: 'HUMAN',
    hp: 300, 
    atk: 28,
    xp: 12,
    description: "Mantan penempa keris sakti yang jiwanya terikat pada palu raksasa. Ia memburu baja murni untuk menyempurnakan zirah abadinya.",
    lore: "Terinspirasi dari pengrajin besi Luwu. Dalam kegelapan alkimia, mereka kehilangan akal dan menganggap tulang manusia sebagai material tempaan."
  },
  {
    id: 's2_voc_grenadier_luwu',
    name: "Grenadier VOC Luwu",
    type: 'HUMAN',
    hp: 240,
    atk: 38,
    xp: 10,
    description: "Pasukan berat kolonial dengan baju zirah besi. Melemparkan granat uap yang meledakkan partikel merkuri alkimia ke area luas.",
    lore: "Unit khusus yang ditugaskan menjaga tambang besi Sulawesi untuk memasok industri senjata VOC di masa depan."
  },

  // --- 3. MISTISISME TEBING (Unsur Mitologi) ---
  {
    id: 's2_tau_tau_whisper',
    name: "Tau-tau Berbisik",
    type: 'SPIRIT',
    hp: 190,
    atk: 42, // Damage Mistis Tinggi
    xp: 15,
    description: "Patung kayu penjaga makam tebing yang dirasuki malfungsi data 2120. Menyerang dengan gelombang suara yang menghancurkan mental.",
    lore: "Tradisi penghormatan jenazah Toraja yang dicemari oleh virus digital dari masa depan, mengubah pelindung menjadi pemangsa."
  },
  {
    id: 's2_arwah_penjaga_lemo',
    name: "Arwah Penjaga Lemo",
    type: 'SPIRIT',
    hp: 210,
    atk: 30,
    xp: 12,
    description: "Roh leluhur yang muncul dari celah-celah batu karst. Mampu memanipulasi gravitasi di sekitar pahlawan.",
    lore: "Mereka marah karena makam-makam tebing digali oleh drone VOC untuk mencari inti karsa tersembunyi."
  },

  // --- 4. ANOMALI INDUSTRI (Unsur Cyber 2120) ---
  {
    id: 's2_extractor_bot_beta',
    name: "Extractor-Bot Beta",
    type: 'CYBER',
    hp: 150,
    atk: 22,
    xp: 10,
    description: "Unit penambang otomatis dari tahun 2120. Dilengkapi gergaji plasma berputar yang mampu membelah batu dan tulang dengan mudah.",
    lore: "Robot yang terlempar melalui retakan waktu, terus bekerja meski sistemnya sudah berkarat dan tak terkendali."
  },

  // --- 5. BOSS SULAWESI ---
  {
    id: 's2_boss_opu_besi',
    name: "Opu Besi: Sang Laksamana Zirah",
    type: 'BOSS',
    hp: 1200, 
    atk: 65,
    xp: 150,
    description: "Seorang bangsawan Bugis raksasa yang seluruh tubuhnya telah dilapisi eksoskeleton mekanik VOC 2120. Menggenggam Badik Meteorit.",
    lore: "Ia mengkhianati tanah airnya demi teknologi abadi dari masa depan. Kini ia berdiri sebagai jangkar alkimia kedua yang menjaga gerbang menuju Kalimantan."
  }
];

// --- KALIMANTAN BESTIARY: RIMBA ZAMRUD ---
// Skala kesulitan: Level 4 - 6
export const ENEMIES_KALIMANTAN = [
  // --- 1. PRIMATA & PREDATOR MUTASI (Eksperimen Hayati) ---
  {
    id: 'k3_orangutan_wira',
    name: "Wira Hutan Terpilih",
    type: 'ANIMAL',
    hp: 450, 
    atk: 48,
    xp: 25,
    description: "Orangutan raksasa yang sarafnya telah disambung dengan kabel alkimia. Ia mampu mencabut pohon untuk digunakan sebagai gada penghancur zirah.",
    lore: "Hasil dari Proyek 'Wira' VOC 2120 yang mencoba menciptakan kekuatan fisik murni tanpa rasa takut."
  },
  {
    id: 'k3_buaya_muara_alkimia',
    name: "Buaya Muara Plat-Hijau",
    type: 'ANIMAL',
    hp: 520, // Sangat Tanky
    atk: 40,
    xp: 22,
    description: "Pemangsa air yang punggungnya ditanami plat sensor alkimia. Ia mampu mendeteksi keberadaan karsa pahlawan dari jarak satu kilometer.",
    lore: "Penjaga aliran sungai Mahakam yang memastikan tidak ada Arkeolog yang bisa menyeberang tanpa izin."
  },

  // --- 2. PENJAGA RIMBA (Unsur Sejarah & Dayak) ---
  {
    id: 'k3_mandau_spirit_warrior',
    name: "Prajurit Mandau Berkarat",
    type: 'HUMAN',
    hp: 350,
    atk: 55, // Damage sangat tinggi
    xp: 30,
    description: "Pejuang Dayak dari masa lalu yang jiwanya terperangkap dalam kutukan kabut hijau. Mengayunkan Mandau yang dialiri energi plasma.",
    lore: "Mereka bersumpah menjaga hutan sampai mati. Sayangnya, radiasi Sang Tapa memutarbalikkan sumpah mereka menjadi haus darah."
  },
  {
    id: 'k3_voc_jungle_ranger',
    name: "Ranger VOC Rimba",
    type: 'HUMAN',
    hp: 320,
    atk: 42,
    xp: 20,
    description: "Infanteri ringan kolonial yang menggunakan kamuflase aktif. Menembakkan panah tiup (Sumpit) yang mengandung virus digital.",
    lore: "Pasukan khusus yang beradaptasi dengan rimba Kalimantan untuk memburu para pemberontak waktu."
  },

  // --- 3. ENTITAS HUTAN HIDUP (Unsur Mitologi & Flora) ---
  {
    id: 'k3_akar_cekik_2120',
    name: "Akar Cekik Alkimia",
    type: 'PLANT',
    hp: 280,
    atk: 35,
    xp: 18,
    description: "Tanaman merambat yang memiliki kesadaran kolektif. Ia akan menjerat kaki pahlawan dan menghisap karsa mereka secara perlahan.",
    lore: "Flora asli yang bermutasi setelah menyerap tumpahan inti karsa dari laboratorium VOC yang hancur."
  },
  {
    id: 'k3_spirit_kuyang_glitch',
    name: "Kuyang: Anomali Organik",
    type: 'SPIRIT',
    hp: 250,
    atk: 60, // Serangan kritis
    xp: 35,
    description: "Kepala terbang dengan organ dalam yang bercahaya neon hijau. Ia adalah glitch antara mitos lama dan eksperimen kloning masa depan.",
    lore: "Visualisasi horor yang paling ditakuti. Di tahun 2120, Kuyang dijadikan sebagai drone biologis untuk meneror populasi."
  },

  // --- 4. BOSS KALIMANTAN ---
  {
    id: 'k3_boss_lembuswana_corrupted',
    name: "Lembuswana: Sang Penjaga Mahakam",
    type: 'BOSS',
    hp: 2500, // Boss Mid-Game
    atk: 85,
    xp: 300,
    description: "Makhluk mitis berkepala singa, berbelalai gajah, dan bersayap elang. Kini tubuhnya dipenuhi sirkuit alkimia yang mengontrol kehendaknya.",
    lore: "Simbol suci kerajaan Kutai Kartanegara yang dipaksa menjadi budak mesin oleh VOC. Menghancurkannya adalah satu-satunya cara untuk membebaskan jiwa Kalimantan."
  }
];

// --- SUMATRA BESTIARY: PESISIR ANDALAS ---
// Skala kesulitan: Level 5 - 7
export const ENEMIES_SUMATRA = [
  // --- 1. KAVALERI & PREDATOR (Unsur Alam & Perang) ---
  {
    id: 's4_harimau_karsa_hitam',
    name: "Harimau Sumatra: Penjaga Bunian",
    type: 'ANIMAL',
    hp: 550, 
    atk: 65,
    xp: 45,
    description: "Predator puncak yang kulitnya bercahaya neon jingga redup. Mampu menghilang ke dalam 'dimensi bunian' dan menyerang dari titik buta.",
    lore: "Terinspirasi dari legenda Harimau Cindaku. Mereka bukan musuh alami, namun Karsa hitam 2026 memaksa mereka melindungi wilayah dari siapapun pahlawannya."
  },
  {
    id: 's4_gajah_perang_alkimia',
    name: "Gajah Perang VOC-Aritia",
    type: 'ANIMAL',
    hp: 1200, // Mini-Boss Tankiness
    atk: 75,
    xp: 60,
    description: "Gajah raksasa yang kepalanya dipasangi zirah baja 2120 dan meriam uap. Setiap langkahnya menggetarkan tanah Pesisir Andalas.",
    lore: "Distorsi dari pasukan gajah Kesultanan Aceh yang legendaris, kini dikontrol oleh chip saraf VOC untuk menghancurkan barisan pemberontak."
  },

  // --- 2. PENDEKAR & SERDADU (Unsur Sejarah & Perlawanan) ---
  {
    id: 's4_pendekar_rencong_asap',
    name: "Arwah Pendekar Rencong",
    type: 'HUMAN',
    hp: 400,
    atk: 85, // Damage sangat fatal
    xp: 50,
    description: "Prajurit gerilya yang bertarung dengan Rencong bercahaya biru plasma. Gerakannya tidak terduga dan sangat agresif.",
    lore: "Representasi perlawanan Aceh yang tak pernah padam. Mereka terjebak dalam memori perang abadi, menyerang pahlawan karena menganggapnya mata-mata kolonial."
  },
  {
    id: 's4_voc_marines_2120',
    name: "Mariner VOC: Komando Laut",
    type: 'HUMAN',
    hp: 480,
    atk: 55,
    xp: 40,
    description: "Pasukan elit masa depan yang mampu bertempur di darat dan air. Menggunakan zirah kedap air dan senapan harpun elektrik.",
    lore: "Unit penjaga jalur perdagangan laut yang memastikan pasokan inti karsa dari Sumatra sampai ke Jawa tanpa hambatan."
  },

  // --- 3. MISTISISME SUNGAI & CANDI (Unsur Mitologi) ---
  {
    id: 's4_spirit_muara_takus',
    name: "Penjaga Candi Muara Takus",
    type: 'SPIRIT',
    hp: 600,
    atk: 50,
    xp: 55,
    description: "Entitas kuno yang terbentuk dari tumpukan batu bata candi dan kabel serat optik 2120. Menyerang dengan mantra gravitasi.",
    lore: "Roh pelindung dharma yang terdistorsi oleh data digital masa depan, mencoba 'menghapus' pahlawan yang dianggap sebagai error dalam sejarah."
  },

  // --- 4. ANOMALI MARITIM (Unsur Cyber 2120) ---
  {
    id: 's4_dreadnought_drone',
    name: "Drone Dreadnought: Tipe-Musiri",
    type: 'CYBER',
    hp: 450,
    atk: 60,
    xp: 50,
    description: "Drone berbentuk kapal tempur kecil yang melayang di atas permukaan air. Dilengkapi dengan detektor karsa infra-merah.",
    lore: "Patroli otomatis VOC 2120 yang memblokade sungai Musi untuk memutus jalur komunikasi antar pulau."
  },

  // --- 5. BOSS SUMATRA ---
  {
    id: 's4_boss_laksamana_malahayati_corrupted',
    name: "Laksamana Bayangan: Sang Penjaga Selat",
    type: 'BOSS',
    hp: 4500, // Menjelang End-game
    atk: 110,
    xp: 500,
    description: "Seorang wanita perkasa yang berdiri di atas armada hantu. Ia memegang pedang bermata dua yang mampu membelah gelombang dan waktu.",
    lore: "Terinspirasi dari Laksamana Malahayati. Dalam garis waktu yang rusak ini, ia dipaksa menjaga gerbang terakhir menuju Jawa oleh VOC 2120. Mengalahkannya adalah satu-satunya cara untuk membuktikan bahwa pahlawanmu layak menulis ulang proklamasi."
  }
];

// --- JAWA BESTIARY: PUSAT KARSA JAWA ---
// Skala kesulitan: Level 7 - 8 (MAX)
export const ENEMIES_JAWA = [
  // --- 1. GARDA ELIT (Distorsi Sejarah & Militer) ---
  {
    id: 's5_sentinel_mataram_cyber',
    name: "Garda Mataram Sibernetik",
    type: 'HUMAN',
    hp: 850,
    atk: 95,
    xp: 80,
    description: "Prajurit Mataram yang zirah kayunya telah diganti dengan plat baja 2120. Bertarung dengan tombak plasma yang mampu menembus dimensi.",
    lore: "Prajurit yang dikhianati oleh waktu. Mereka dipaksa menjaga gerbang Batavia-Prime oleh instruksi terprogram dari Van Aeterne."
  },
  {
    id: 's5_voc_inquisitor_2120',
    name: "Inquisitor VOC: Tipe-Executioner",
    type: 'HUMAN',
    hp: 900,
    atk: 85,
    xp: 75,
    description: "Unit elit VOC 2120 yang ditugaskan menghapus eksistensi Arkeolog. Membawa senjata 'Void-Sabre' yang menghancurkan bar Karsa secara instan.",
    lore: "Algojo tanpa wajah yang tidak mengenal ampun. Mereka adalah manifestasi dari birokrasi penindasan yang abadi."
  },

  // --- 2. ENTITAS DREAD (Unsur Mitologi & Alkimia) ---
  {
    id: 's5_rakshasa_alkimia_agung',
    name: "Rakshasa Alkimia Agung",
    type: 'SPIRIT',
    hp: 1500,
    atk: 120,
    xp: 150,
    description: "Entitas raksasa yang terbentuk dari asap hitam dan limbah Sang Tapa. Memiliki seribu mata yang semuanya menatap ke tahun 2026.",
    lore: "Penjaga batas antara masa lalu dan masa depan. Kehadirannya menyebabkan glitch hebat pada layar pahlawan."
  },
  {
    id: 's5_kuntilanak_serat_optik',
    name: "Malfungsi Kuntilanak 2120",
    type: 'SPIRIT',
    hp: 700,
    atk: 140, // Damage kritikal sangat tinggi
    xp: 120,
    description: "Roh yang terjerat kabel serat optik dan kode biner. Suara tangisannya adalah distorsi sinyal radio yang merusak pendengaran.",
    lore: "Horor tradisional yang dijadikan senjata psikologis oleh VOC di era distopia."
  },

  // --- 3. ANOMALI TERAKHIR (Cyber 2120) ---
  {
    id: 's5_titan_extractor',
    name: "Titan Extractor: Sang Saka Hunter",
    type: 'CYBER',
    hp: 2000,
    atk: 110,
    xp: 200,
    description: "Mesin perang setinggi gedung yang dirancang khusus untuk memburu pembawa Sang Saka. Dilengkapi meriam anti-materi.",
    lore: "Senjata pamungkas VOC 2120 untuk memastikan Jangkar Alkimia di Jawa tidak pernah hancur."
  },

  // --- 4. BOSS PENUTUP (THE FINAL DREAD) ---
  {
    id: 's5_boss_aeterne',
    name: "Willem Van Aeterne: The Alchemist-King",
    type: 'BOSS',
    hp: 8500, // Phase 1: Humanoid Boss
    atk: 180,
    xp: 1000,
    description: "Gubernur Jenderal VOC dari tahun 2120. Ia mengenakan jubah emas yang terbuat dari jalinan karsa manusia. Menggunakan tongkat kekuasaan yang bisa menghentikan waktu.",
    lore: "Arsitek dari kiamat 2026. Ia tidak ingin menguasai dunia, ia ingin menjadi waktu itu sendiri agar penindasannya tidak pernah berakhir."
  },
  {
    id: 's5_boss_sang_tapa_ultimate',
    name: "SANG TAPA: Manifestasi Kiamat",
    type: 'BOSS',
    hp: 20000, // Phase 2: Cosmic/Abstract Boss
    atk: 250,
    xp: 0, // Akhir permainan
    description: "Bentuk murni dari artefak yang ditemukan di 2026. Sebuah jantung raksasa yang berdetak dalam frekuensi kehancuran. Menelan realitas 1945 dan 2120 menjadi satu.",
    lore: "Ia bukanlah benda, melainkan sebuah kesalahan dalam sejarah yang diberi nyawa oleh ketamakan manusia. Menghancurkannya berarti menghapus dirimu sendiri dari ingatan dunia."
  }
];

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
// Fokus: Kavaleri, Kekuatan Maritim, dan Wibawa Sultan
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
// Fokus: Manipulasi Waktu, Karsa Absolut, dan Senjata Proklamasi
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
  'papua_start': [
    'p1_papeda_karsa', 'p1_pinang_alkimia', 'p1_air_penawar_bakau', 
    'p1_noken_takdir', 'p1_gelang_akar_bahar', 'p1_kapak_batu_plasma', 'p1_tombak_ikan_biak', 'p1_belati_tulang_kasuari'
  ],
  'sulawesi_iron': [
    's2_saraba_cair_karsa', 's2_kopi_toraja_neon', 's2_zirah_rantai_luwu', 
    's2_badik_meteorit_2120', 's2_parang_salu_putih', 's2_tombak_pajonge', 's2_dangke_alkimia', 's2_lipa_sabbe_karsa'
  ],
  'kalimantan_forest': [
    'k3_madu_kelulut_hitam',
    'k3_akar_kuning_plasma',
    'k3_buah_paken_neon',
    'k3_zirah_kulit_trenggiling',
    'k3_topeng_hudoq_karsa',
    'k3_mandau_plasma_dayak',
    'k3_sumpit_senyap_2120',
    'k3_gada_ulin_alkimia'
  ],
    'sumatra_coast': [
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
    'jawa_core': [
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

export const PAPUA_STORY_NODES = {
  'PAP_01_ARRIVAL': {
    id: 'PAP_01_ARRIVAL',
    speaker: 'NARASI',
    year: '1700 M • Pesisir Onin',
    text: 'Kabut tebal menyelimuti hutan bakau yang menjulang. Aroma pala dan tanah basah menyengat indra penciumanmu. Di kejauhan, kepulauan Raja Ampat terlihat seperti raksasa yang tertidur. Seorang pemandu lokal menatapmu dengan ragu.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    historyTitle: 'Pesisir Onin: Gerbang Rempah',
    historyText: 'Wilayah Onin di Fakfak merupakan pusat perdagangan penting di masa lampau di mana pedagang Nusantara bertukar tekstil dengan pala dan bulu Cendrawasih.',
    options: [
      { text: 'Tunjukkan wibawa untuk meyakinkannya.', nextNode: 'PAP_02_GUIDE', requirement: { stat: 'Wibawa', dc: 12 } },
      { text: 'Berikan persembahan berupa Papeda Karsa.', nextNode: 'PAP_02_GUIDE', itemRequirement: { id: 'papeda_karsa' } },
      { text: 'Abaikan dia dan masuk ke hutan sendirian.', nextNode: 'BATTLE_PENJAGA_BAKAU', damage: 10 }
    ]
  },

  'PAP_02_GUIDE': {
    id: 'PAP_02_GUIDE',
    speaker: 'PEMANDU ONIN',
    year: '1700 M',
    text: '“Karsa-mu murni, pengelana. Namun waspadalah, hutan ini dijaga oleh arwah yang tidak suka ketenangan mereka terusik oleh sepatu asing.”',
    image: 'https://images.unsplash.com/photo-1544933863-482c6caefefb',
    options: [
      { text: 'Bertanya tentang keberadaan Totem Kuno.', nextNode: 'PAP_04_TOTEM', rewardStat: { Mistis: 1 } },
      { text: 'Minta dia menunjukkan jalan pintas ke lembah.', nextNode: 'PAP_05_VALLEY' }
    ]
  },

  'PAP_03_JUNGLE': {
    id: 'PAP_03_JUNGLE',
    speaker: 'NARASI',
    text: 'Tanpa panduan, akar pohon mencekik langkahmu. Tiba-tiba, sesosok bayangan dengan mata merah muncul dari balik pepohonan purba. Ini adalah wilayah kekuasaan Penjaga Bakau.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
    options: [
      { text: 'Hadapi dengan raga!', nextNode: 'BATTLE_PENJAGA_BAKAU' },
      { text: 'Gunakan keluwesan untuk melarikan diri.', nextNode: 'PAP_01_ARRIVAL', requirement: { stat: 'Luwes', dc: 18 } }
    ]
  },

  'BATTLE_PENJAGA_BAKAU': {
    id: 'BATTLE_PENJAGA_BAKAU',
    type: 'BATTLE_TRIGGER',
    enemyId: 'p1_kasuari_belati', // Menyambung ke ENEMIES di Constants
    nextNode: 'PAP_04_TOTEM'
  },

  'PAP_04_TOTEM': {
    id: 'PAP_04_TOTEM',
    speaker: 'ARWAH HUTAN',
    text: 'Di depanmu berdiri Totem Korwar yang telah berlumut. Getaran magis terasa kuat. Sepertinya kamu membutuhkan kekuatan spiritual untuk membangkitkan memorinya.',
    image: 'https://images.unsplash.com/photo-1590001158193-790130ae8cc2',
    options: [
      { text: 'Gunakan kekuatan Mistis untuk bermeditasi.', nextNode: 'PAP_06_VISION', requirement: { stat: 'Mistis', dc: 15 } },
      { text: 'Pasang Pusaka Keris untuk membelah tabir.', nextNode: 'PAP_06_VISION', itemRequirement: { id: 'keris_pusaka' } },
      { text: 'Hancurkan totem karena dianggap berbahaya.', nextNode: 'PAP_03_JUNGLE', alignment: { chaos: 5 } }
    ]
  },

  'PAP_05_VALLEY': {
    id: 'PAP_05_VALLEY',
    speaker: 'NARASI',
    text: 'Lembah ini penuh dengan tanaman karnivora. Kamu melihat seorang Serdadu Belanda yang terluka parah bersandar di pohon. Dia menggenggam sebuah peta rahasia.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    options: [
      { text: 'Obati dia (Tahan Check).', nextNode: 'PAP_07_MAP', requirement: { stat: 'Tahan', dc: 14 }, rewardStat: { Wibawa: 2 } },
      { text: 'Ambil petanya dan biarkan dia.', nextNode: 'PAP_07_MAP', alignment: { moral: -10 } }
    ]
  },

  'PAP_06_VISION': {
    id: 'PAP_06_VISION',
    speaker: 'VISI MASA LALU',
    text: 'Kegelapan menyelimuti. Kamu melihat kapal-kapal besar dengan layar hitam mendekat. Mereka bukan pedagang, melainkan penjajah yang mengincar jantung Papua. Kamu harus memperingatkan suku pedalaman.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    options: [
      { text: 'Lari secepat mungkin ke desa.', nextNode: 'PAP_08_VILLAGE', requirement: { stat: 'Luwes', dc: 14 } },
      { text: 'Kumpulkan kekuatan alam.', nextNode: 'PAP_08_VILLAGE', rewardStat: { Mistis: 2 } }
    ]
  },

  'PAP_07_MAP': {
    id: 'PAP_07_MAP',
    speaker: 'NARASI',
    text: 'Peta tersebut menunjukkan koordinat gua rahasia di bawah pegunungan Jayawijaya. Di sana tersimpan mineral alkimia yang bisa mengubah jalannya perang.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
    options: [
      { text: 'Menuju Gua Bisikan.', nextNode: 'PAP_09_CAVE', requirement: { stat: 'Pulung', dc: 20 } },
      { text: 'Kembali ke pemukiman.', nextNode: 'PAP_08_VILLAGE' }
    ]
  },

  'PAP_08_VILLAGE': {
    id: 'PAP_08_VILLAGE',
    speaker: 'KEPALA SUKU',
    text: '“Kau datang membawa kabar buruk atau keberuntungan? Buktikan bahwa kau adalah bagian dari kami, pahlawan.”',
    image: 'https://images.unsplash.com/photo-1544933863-482c6caefefb',
    options: [
      { text: 'Tunjukkan keahlian bertarung.', nextNode: 'PAP_10_END', requirement: { stat: 'Kuat', dc: 16 } },
      { text: 'Gunakan diplomasi Wibawa.', nextNode: 'PAP_10_END', requirement: { stat: 'Wibawa', dc: 14 } }
    ]
  },

  'PAP_09_CAVE': {
    id: 'PAP_09_CAVE',
    speaker: 'NARASI',
    text: 'Gua ini dipenuhi kristal bercahaya biru. Di tengahnya, berdiri sesosok bayangan agung yang menjaga mineral purba. Ini adalah ujian terakhirmu di tanah ini.',
    image: 'https://images.unsplash.com/photo-1509023467864-1ecbb3f034ce',
    options: [
      { text: 'Tantang Penjaga Gua!', nextNode: 'BATTLE_GUARDIAN' },
      { text: 'Coba berkomunikasi secara mistis.', nextNode: 'PAP_10_END', requirement: { stat: 'Mistis', dc: 22 } }
    ]
  },

  'PAP_10_END': {
    id: 'PAP_10_END',
    type: 'END_REGION',
    targetIsland: 'MALUKU', // Pulau selanjutnya
    text: 'Tugasmu di Papua telah selesai. Dengan pengetahuan dan pusaka baru, kamu meluncur menggunakan perahu kora-kora menuju kepulauan rempah selanjutnya: Maluku.'
  }
};

export const ITEMS = {
  ...ITEMS_PAPUA,
  ...ITEMS_SULAWESI,
  ...ITEMS_KALIMANTAN,
  ...ITEMS_SUMATRA,
  ...ITEMS_JAWA
};

export const ENEMIES = {
    ...ENEMIES_PAPUA,
    ...ENEMIES_SULAWESI,
    ...ENEMIES_KALIMANTAN,
    ...ENEMIES_SUMATRA,
    ...ENEMIES_JAWA
};

export const STORY_NODES = {
    ...PAPUA_STORY_NODES
};