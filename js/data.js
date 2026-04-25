// ═══════════════════════════════════════════════════
//   WANDERLUST INDONESIA - Data
//   by Agus Satria Adhitama
// ═══════════════════════════════════════════════════

// ─── 20 QUESTIONS ───
const QUESTIONS = [
  {
    id: 1,
    category: "Gaya Hidup",
    text: "Kamu lebih suka suasana seperti apa?",
    options: [
      { emoji: "", label: "Alam Terbuka", desc: "Hutan, gunung, pantai sepi", value: "alam", tags: ["alam"] },
      { emoji: "", label: "Kota Modern", desc: "Mall, kafe kekinian, nightlife", value: "kota", tags: ["kota"] },
      { emoji: "", label: "Desa Tradisional", desc: "Budaya lokal, sawah, kampung", value: "budaya", tags: ["budaya"] },
      { emoji: "", label: "Tepi Pantai", desc: "Laut, pasir, matahari", value: "pantai", tags: ["pantai"] }
    ]
  },
  {
    id: 2,
    category: "Waktu",
    text: "Kamu tipe pagi atau malam?",
    options: [
      { emoji: "", label: "Morning Person", desc: "Sunrise, sarapan enak, udara segar", value: "pagi", tags: ["alam", "budaya"] },
      { emoji: "", label: "Night Owl", desc: "Bintang, sunset, suasana malam", value: "malam", tags: ["kota", "pantai"] },
      { emoji: "", label: "Siang Hari", desc: "Aktif di siang terik, suka panas", value: "siang", tags: ["pantai", "alam"] },
      { emoji: "", label: "Santai Sepanjang Hari", desc: "Fleksibel, ikut mood", value: "fleksibel", tags: ["budaya", "kota"] }
    ]
  },
  {
    id: 3,
    category: "Petualangan",
    text: "Aktivitas liburan favoritmu?",
    options: [
      { emoji: "", label: "Hiking & Mendaki", desc: "Puncak gunung, jalur trekking", value: "hiking", tags: ["gunung", "alam"] },
      { emoji: "", label: "Snorkeling & Diving", desc: "Bawah laut, terumbu karang", value: "diving", tags: ["pantai", "bahari"] },
      { emoji: "", label: "Wisata Budaya", desc: "Museum, candi, kesenian lokal", value: "budaya", tags: ["budaya", "sejarah"] },
      { emoji: "", label: "Kuliner & Santai", desc: "Icip-icip makanan, cafe hopping", value: "kuliner", tags: ["kota", "kuliner"] }
    ]
  },
  {
    id: 4,
    category: "Sosial",
    text: "Kamu lebih suka liburan bagaimana?",
    options: [
      { emoji: "", label: "Solo Traveler", desc: "Bebas, fleksibel, mandiri", value: "solo", tags: ["alam", "petualangan"] },
      { emoji: "", label: "Berdua Pasangan", desc: "Romantis, intim, berkesan", value: "couple", tags: ["pantai", "resort"] },
      { emoji: "", label: "Keluarga", desc: "Aman, edukatif, menyenangkan", value: "keluarga", tags: ["budaya", "kota"] },
      { emoji: "", label: "Bareng Teman", desc: "Rame, seru, penuh kenangan", value: "teman", tags: ["petualangan", "pantai"] }
    ]
  },
  {
    id: 5,
    category: "Budget",
    text: "Budget liburanmu cenderung?",
    options: [
      { emoji: "", label: "Backpacker", desc: "Seirit mungkin, petualangan sejati", value: "hemat", tags: ["alam", "budaya"] },
      { emoji: "", label: "Mid-Range", desc: "Nyaman tapi tetap bijak", value: "sedang", tags: ["kota", "budaya"] },
      { emoji: "", label: "Premium", desc: "Yang terbaik, pengalaman mewah", value: "mewah", tags: ["resort", "pantai"] },
      { emoji: "", label: "Tergantung Mood", desc: "Kadang hemat, kadang royal", value: "variatif", tags: ["kota", "alam"] }
    ]
  },
  {
    id: 6,
    category: "Cuaca",
    text: "Cuaca ideal liburanmu?",
    options: [
      { emoji: "", label: "Sejuk & Dingin", desc: "Kabut, sweater, kopi panas", value: "dingin", tags: ["gunung", "highland"] },
      { emoji: "", label: "Panas & Terik", desc: "Sinar matahari, berenergi", value: "panas", tags: ["pantai", "bahari"] },
      { emoji: "", label: "Hujan & Dramatis", desc: "Petrichor, suasana sendu", value: "hujan", tags: ["alam", "budaya"] },
      { emoji: "", label: "Cerah Berawan", desc: "Sempurna, tidak terlalu ekstrem", value: "sedang", tags: ["kota", "alam"] }
    ]
  },
  {
    id: 7,
    category: "Keindahan",
    text: "Pemandangan seperti apa yang bikin kamu kagum?",
    options: [
      { emoji: "", label: "Gunung & Kaldera", desc: "Megah, dramatis, misterius", value: "gunung", tags: ["gunung", "vulkanik"] },
      { emoji: "", label: "Laut & Ombak", desc: "Tak terbatas, bebas, tenang", value: "laut", tags: ["pantai", "bahari"] },
      { emoji: "", label: "Sawah & Pedesaan", desc: "Hijau, damai, autentik", value: "sawah", tags: ["budaya", "alam"] },
      { emoji: "", label: "Arsitektur & Sejarah", desc: "Candi, istana, bangunan tua", value: "sejarah", tags: ["sejarah", "budaya"] }
    ]
  },
  {
    id: 8,
    category: "Kuliner",
    text: "Makanan yang paling bikin kamu excited?",
    options: [
      { emoji: "", label: "Pedas & Berani", desc: "Sambal, rendang, masakan kuat", value: "pedas", tags: ["sumatera", "jawa"] },
      { emoji: "", label: "Seafood Segar", desc: "Ikan bakar, udang, cumi", value: "seafood", tags: ["pantai", "bahari"] },
      { emoji: "", label: "Street Food Lokal", desc: "Nasi gudeg, mie ayam, sate", value: "streetfood", tags: ["kota", "budaya"] },
      { emoji: "", label: "Kopi & Cafe Scene", desc: "Single origin, specialty coffee", value: "kopi", tags: ["kota", "highland"] }
    ]
  },
  {
    id: 9,
    category: "Transportasi",
    text: "Cara paling nikmat menuju destinasi?",
    options: [
      { emoji: "", label: "Langsung Terbang", desc: "Cepat, efisien, langsung sampai", value: "pesawat", tags: ["jauh", "kepulauan"] },
      { emoji: "", label: "Road Trip", desc: "Nikmati perjalanannya, bukan hanya tujuan", value: "darat", tags: ["jawa", "sumatera"] },
      { emoji: "", label: "Kapal Laut", desc: "Santai, menikmati lautan", value: "laut", tags: ["bahari", "kepulauan"] },
      { emoji: "", label: "Motor & Bebas", desc: "Lokal, murah, bebas berhenti", value: "motor", tags: ["alam", "budaya"] }
    ]
  },
  {
    id: 10,
    category: "Penginapan",
    text: "Tempat tidur favoritmu saat liburan?",
    options: [
      { emoji: "", label: "Camping & Glamping", desc: "Bintang di atas kepala, api unggun", value: "camping", tags: ["alam", "gunung"] },
      { emoji: "", label: "Hotel Nyaman", desc: "AC, kolam renang, breakfast", value: "hotel", tags: ["kota", "resort"] },
      { emoji: "", label: "Homestay Lokal", desc: "Rumah warga, culture immersion", value: "homestay", tags: ["budaya", "alam"] },
      { emoji: "", label: "Villa & Resort Mewah", desc: "Jacuzzi, view indah, all-in", value: "villa", tags: ["pantai", "resort"] }
    ]
  },
  {
    id: 11,
    category: "Ritme",
    text: "Tempo liburan idealmu?",
    options: [
      { emoji: "", label: "Padat & Produktif", desc: "Banyak destinasi, ga mau rugi", value: "padat", tags: ["kota", "budaya"] },
      { emoji: "", label: "Santai & Mengalir", desc: "Duduk, nikmati, ga buru-buru", value: "santai", tags: ["pantai", "alam"] },
      { emoji: "", label: "Spontan & Dadakan", desc: "Improvisasi, suka kejutan", value: "spontan", tags: ["petualangan", "alam"] },
      { emoji: "", label: "Terencana Matang", desc: "Itinerary detail, terorganisir", value: "terencana", tags: ["kota", "budaya"] }
    ]
  },
  {
    id: 12,
    category: "Interaksi",
    text: "Interaksimu dengan penduduk lokal biasanya?",
    options: [
      { emoji: "", label: "Aktif Berinteraksi", desc: "Ngobrol, belajar bahasa lokal", value: "interaktif", tags: ["budaya", "pedalaman"] },
      { emoji: "", label: "Observe & Foto", desc: "Dokumentasi, nikmati dari jauh", value: "observer", tags: ["alam", "budaya"] },
      { emoji: "", label: "Ikut Aktivitas Mereka", desc: "Masak bersama, ikut upacara", value: "partisipasi", tags: ["budaya", "adat"] },
      { emoji: "", label: "Minimal Interaksi", desc: "Privasi, introvert, independen", value: "privat", tags: ["alam", "resort"] }
    ]
  },
  {
    id: 13,
    category: "Foto & Kenangan",
    text: "Konten foto yang paling kamu suka bikin?",
    options: [
      { emoji: "", label: "Sunrise / Sunset", desc: "Golden hour, warna langit", value: "sunrise", tags: ["gunung", "pantai"] },
      { emoji: "", label: "Arsitektur & Spot Ikonik", desc: "Landmark, foto epic", value: "landmark", tags: ["kota", "sejarah"] },
      { emoji: "", label: "Alam & Wildlife", desc: "Flora fauna, landscape", value: "nature", tags: ["alam", "taman nasional"] },
      { emoji: "", label: "Food Photography", desc: "Plating cantik, kuliner lokal", value: "food", tags: ["kuliner", "kota"] }
    ]
  },
  {
    id: 14,
    category: "Kedalaman",
    text: "Kamu lebih suka eksplorasi seperti apa?",
    options: [
      { emoji: "", label: "Hidden Gem", desc: "Tempat tersembunyi, belum banyak orang tahu", value: "hidden", tags: ["alam", "petualangan"] },
      { emoji: "", label: "Spot Populer & Terkenal", desc: "Destinasi ikonik, terbukti bagus", value: "popular", tags: ["kota", "budaya"] },
      { emoji: "", label: "Satu Tempat Dalam-Dalam", desc: "Fokus satu daerah, explore habis", value: "deep", tags: ["budaya", "alam"] },
      { emoji: "", label: "Banyak Tempat Sekaligus", desc: "Lompat-lompat, banyak pengalaman", value: "broad", tags: ["kota", "pantai"] }
    ]
  },
  {
    id: 15,
    category: "Adrenalin",
    text: "Seberapa ekstrem kamu?",
    options: [
      { emoji: "", label: "Ekstrem Banget!", desc: "Cliff jumping, volcano hiking", value: "ekstrem", tags: ["petualangan", "gunung"] },
      { emoji: "", label: "Sedikit Tantangan", desc: "Rafting, trekking sedang", value: "moderate", tags: ["alam", "petualangan"] },
      { emoji: "", label: "Anti Risiko", desc: "Aman, nyaman, santai aja", value: "aman", tags: ["resort", "kota"] },
      { emoji: "", label: "Tergantung Momen", desc: "Bisa ekstrem, bisa santai", value: "variatif", tags: ["pantai", "budaya"] }
    ]
  },
  {
    id: 16,
    category: "Pulau",
    text: "Pilih kawasan Indonesia yang paling menarik buatmu!",
    options: [
      { emoji: "", label: "Jawa & Bali", desc: "Budaya, modernitas, spiritualitas", value: "jawa-bali", tags: ["jawa", "bali"] },
      { emoji: "", label: "Sumatera & Kalimantan", desc: "Hutan tropis, satwa liar, suku adat", value: "sum-kal", tags: ["sumatera", "kalimantan"] },
      { emoji: "", label: "Nusa Tenggara & Maluku", desc: "Pantai eksotis, budaya timur", value: "ntt-maluku", tags: ["ntt", "maluku"] },
      { emoji: "", label: "Papua & Sulawesi", desc: "Biodiversitas ekstrem, pedalaman", value: "papua-sul", tags: ["papua", "sulawesi"] }
    ]
  },
  {
    id: 17,
    category: "Sensasi",
    text: "Sensasi apa yang paling kamu kejar saat liburan?",
    options: [
      { emoji: "", label: "Kedamaian & Healing", desc: "Reset pikiran, recharge energi", value: "healing", tags: ["alam", "resort"] },
      { emoji: "", label: "Kekaguman & Terpesona", desc: "Wow, belum pernah lihat ini sebelumnya", value: "kagum", tags: ["alam", "budaya"] },
      { emoji: "", label: "Pencapaian & Tantangan", desc: "Capai puncak, overcome rasa takut", value: "achieve", tags: ["gunung", "petualangan"] },
      { emoji: "", label: "Kesenangan & Fun", desc: "Ketawa, happy memories bersama", value: "fun", tags: ["kota", "pantai"] }
    ]
  },
  {
    id: 18,
    category: "Spiritualitas",
    text: "Hubunganmu dengan dimensi spiritual?",
    options: [
      { emoji: "", label: "Wisata Religi", desc: "Masjid, pura, gereja bersejarah", value: "religi", tags: ["budaya", "sejarah"] },
      { emoji: "", label: "Meditasi & Mindfulness", desc: "Yoga retreat, ketenangan batin", value: "meditasi", tags: ["alam", "bali"] },
      { emoji: "", label: "Upacara Adat", desc: "Ritual, tradisi, kearifan lokal", value: "adat", tags: ["budaya", "adat"] },
      { emoji: "", label: "Koneksi dengan Alam", desc: "Stargazing, hutan, lautan luas", value: "alam_spirit", tags: ["alam", "gunung"] }
    ]
  },
  {
    id: 19,
    category: "Durasi",
    text: "Berapa lama ideal liburanmu?",
    options: [
      { emoji: "", label: "Weekend Getaway (2-3 hari)", desc: "Singkat tapi berkesan", value: "pendek", tags: ["jawa", "bali"] },
      { emoji: "", label: "Seminggu (5-7 hari)", desc: "Cukup untuk eksplorasi", value: "sedang", tags: ["sumatera", "ntt"] },
      { emoji: "", label: "Dua Minggu+", desc: "Deep dive, puas-puasin", value: "panjang", tags: ["papua", "kalimantan"] },
      { emoji: "", label: "Sebulan (Slow Travel)", desc: "Tinggal, rasakan jadi lokal", value: "slowtravel", tags: ["bali", "sulawesi"] }
    ]
  },
  {
    id: 20,
    category: "Warisan",
    text: "Apa yang paling ingin kamu ceritakan setelah liburan?",
    options: [
      { emoji: "", label: "Pengalaman Unik", desc: "Cerita yang orang lain belum punya", value: "unik", tags: ["petualangan", "hidden"] },
      { emoji: "", label: "Foto yang Bikin Iri", desc: "Visual memukau, aesthetic", value: "visual", tags: ["alam", "pantai"] },
      { emoji: "", label: "Pengetahuan Baru", desc: "Belajar budaya, sejarah, bahasa", value: "pengetahuan", tags: ["budaya", "sejarah"] },
      { emoji: "", label: "Perasaan Segar & Baru", desc: "Pulang dengan semangat baru", value: "segar", tags: ["alam", "resort"] }
    ]
  }
];

// ─── 50+ DESTINATIONS ───
const DESTINATIONS = [
  // ── GUNUNG / HIGHLAND ──
  {
    id: "bromo",
    name: "Gunung Bromo",
    province: "Jawa Timur",
    emoji: "🌋",
    gradient: "linear-gradient(135deg, #FF6B35, #FFB347)",
    desc: "Kaldera vulkanik ikonik dengan lautan pasir dan sunrise paling memukau di Indonesia.",
    tags: ["gunung", "vulkanik", "alam", "sunrise", "petualangan"],
    score_tags: ["gunung", "alam", "sunrise", "petualangan", "kagum", "achieve"],
    vibes: ["⛺ Camping/Glamping", "🌅 Sunrise", "🏍️ Jeep Adventure"]
  },
  {
    id: "rinjani",
    name: "Gunung Rinjani",
    province: "NTB / Lombok",
    emoji: "⛰️",
    gradient: "linear-gradient(135deg, #4ECDC4, #44A08D)",
    desc: "Gunung berapi kedua tertinggi di Indonesia dengan danau kawah Segara Anak yang magis.",
    tags: ["gunung", "alam", "hiking", "petualangan", "ntt"],
    score_tags: ["gunung", "hiking", "ekstrem", "alam", "achieve", "petualangan"],
    vibes: ["🧗 Trekking 3 hari", "🏊 Danau Kawah", "🌋 Vulkanik"]
  },
  {
    id: "dieng",
    name: "Dataran Tinggi Dieng",
    province: "Jawa Tengah",
    emoji: "🌫️",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    desc: "Negeri di atas awan dengan telaga warna, kawah, dan misteri candi Hindu tertua di Jawa.",
    tags: ["gunung", "highland", "budaya", "sejarah", "alam"],
    score_tags: ["dingin", "gunung", "sejarah", "budaya", "alam", "kagum"],
    vibes: ["🌄 Golden Sunrise", "🏛️ Candi Arjuna", "☁️ Negeri Awan"]
  },
  {
    id: "kerinci",
    name: "Gunung Kerinci",
    province: "Jambi / Sumatera",
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    desc: "Puncak tertinggi di Sumatera, dikelilingi kebun teh hijau yang memukau.",
    tags: ["gunung", "alam", "sumatera", "hiking", "petualangan"],
    score_tags: ["gunung", "hiking", "alam", "sumatera", "ekstrem", "nature"],
    vibes: ["🍃 Kebun Teh", "🌋 Aktif Vulkanik", "🦏 Wildlife"]
  },
  {
    id: "batur",
    name: "Gunung Batur",
    province: "Bali",
    emoji: "🌅",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    desc: "Gunung berapi aktif di Bali dengan sunrise legendaris dan danau kaldera yang cantik.",
    tags: ["gunung", "bali", "sunrise", "alam"],
    score_tags: ["gunung", "bali", "sunrise", "alam", "moderate", "visual"],
    vibes: ["🌅 Sunrise Trekking", "🛁 Hot Spring", "🍃 Kintamani View"]
  },

  // ── PANTAI / BAHARI ──
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    province: "Papua Barat",
    emoji: "🐠",
    gradient: "linear-gradient(135deg, #0099F7, #F11712)",
    desc: "Surga bawah laut terbaik di dunia dengan biodiversitas laut tertinggi di bumi.",
    tags: ["bahari", "pantai", "diving", "papua"],
    score_tags: ["diving", "laut", "bahari", "hidden", "kagum", "visual", "papa"],
    vibes: ["🤿 World-Class Diving", "🏝️ Island Hopping", "🌊 Crystal Water"]
  },
  {
    id: "labuan-bajo",
    name: "Labuan Bajo",
    province: "NTT",
    emoji: "🦎",
    gradient: "linear-gradient(135deg, #FF416C, #FF4B2B)",
    desc: "Gerbang menuju Komodo dan perairan pink beach yang surreal dan menakjubkan.",
    tags: ["pantai", "bahari", "ntt", "alam"],
    score_tags: ["laut", "bahari", "pantai", "kagum", "visual", "popular", "ntt"],
    vibes: ["🦎 Komodo Dragon", "🏝️ Pink Beach", "🌅 Sunset Cruise"]
  },
  {
    id: "bunaken",
    name: "Bunaken",
    province: "Sulawesi Utara",
    emoji: "🐡",
    gradient: "linear-gradient(135deg, #1FA2FF, #12D8FA, #A6FFCB)",
    desc: "Taman laut nasional dengan wall diving terbaik dan keragaman hayati laut yang luar biasa.",
    tags: ["bahari", "pantai", "diving", "sulawesi"],
    score_tags: ["diving", "laut", "bahari", "sulawesi", "hidden"],
    vibes: ["🤿 Wall Diving", "🐢 Sea Turtle", "🌊 Marine Park"]
  },
  {
    id: "wakatobi",
    name: "Wakatobi",
    province: "Sulawesi Tenggara",
    emoji: "🐟",
    gradient: "linear-gradient(135deg, #00C6FF, #0072FF)",
    desc: "Kepulauan tersembunyi dengan koral paling pristine dan air biru jernih tak terbatas.",
    tags: ["bahari", "pantai", "diving", "sulawesi", "hidden"],
    score_tags: ["diving", "bahari", "hidden", "laut", "sulawesi", "kagum"],
    vibes: ["🤿 Coral Garden", "🏝️ Private Beach", "🌊 Pristine Ocean"]
  },
  {
    id: "belitung",
    name: "Belitung",
    province: "Bangka Belitung",
    emoji: "🪨",
    gradient: "linear-gradient(135deg, #f8ffae, #43c6ac)",
    desc: "Pulau granit raksasa dengan pantai putih dan air toska yang fotogenik tiada tanding.",
    tags: ["pantai", "bahari", "alam", "visual"],
    score_tags: ["pantai", "laut", "visual", "fotogenik", "popular", "couple"],
    vibes: ["🪨 Batu Granit Ikonik", "🚣 Island Hopping", "📸 Instagram Worthy"]
  },
  {
    id: "gili",
    name: "Gili Islands",
    province: "NTB / Lombok",
    emoji: "🏄",
    gradient: "linear-gradient(135deg, #f9d423, #ff4e50)",
    desc: "Trio pulau tropis bebas kendaraan bermotor, surga untuk snorkeling dan relaksasi total.",
    tags: ["pantai", "bahari", "ntt", "resort"],
    score_tags: ["pantai", "laut", "resort", "healing", "couple", "fun"],
    vibes: ["🐢 Turtle Snorkeling", "🌅 Sunset Bar", "🏖️ Zero Motor Zone"]
  },
  {
    id: "nihiwatu",
    name: "Pantai Nihiwatu",
    province: "NTT / Sumba",
    emoji: "🌊",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    desc: "Pantai terbaik dunia versi majalah internasional, ombak kelas dunia dan kesunyian ekstrem.",
    tags: ["pantai", "bahari", "ntt", "hidden", "resort"],
    score_tags: ["pantai", "hidden", "laut", "mewah", "healing", "visual"],
    vibes: ["🏄 World-Class Surf", "🌴 Luxury Eco Resort", "🌅 Remote Paradise"]
  },
  {
    id: "ora-beach",
    name: "Pantai Ora",
    province: "Maluku",
    emoji: "💧",
    gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
    desc: "Surga tersembunyi di Maluku dengan cottage di atas air dan kejernihan laut yang gila.",
    tags: ["pantai", "bahari", "maluku", "hidden"],
    score_tags: ["pantai", "bahari", "maluku", "hidden", "kagum", "visual", "healing"],
    vibes: ["🏚️ Overwater Cottage", "🐟 Snorkeling", "🌿 Pedalaman Maluku"]
  },

  // ── BUDAYA / SEJARAH ──
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    province: "DIY",
    emoji: "🏛️",
    gradient: "linear-gradient(135deg, #c94b4b, #4b134f)",
    desc: "Kota kebudayaan Jawa dengan Borobudur, Prambanan, Kraton, dan scene kuliner yang kaya.",
    tags: ["budaya", "sejarah", "jawa", "kota", "kuliner"],
    score_tags: ["budaya", "sejarah", "jawa", "kota", "kuliner", "popular", "pengetahuan"],
    vibes: ["🏛️ Borobudur Sunrise", "🎭 Wayang Kulit", "🍜 Gudeg Legendaris"]
  },
  {
    id: "solo",
    name: "Kota Solo (Surakarta)",
    province: "Jawa Tengah",
    emoji: "👑",
    gradient: "linear-gradient(135deg, #373B44, #4286f4)",
    desc: "Pusat kebudayaan Jawa yang lebih autentik dari Jogja, dengan kraton, batik, dan kuliner.",
    tags: ["budaya", "sejarah", "jawa", "kota"],
    score_tags: ["budaya", "sejarah", "jawa", "adat", "kuliner", "pengetahuan"],
    vibes: ["👑 Keraton Kasunanan", "🎨 Batik Tradisional", "🍢 Nasi Liwet"]
  },
  {
    id: "toraja",
    name: "Toraja",
    province: "Sulawesi Selatan",
    emoji: "⚰️",
    gradient: "linear-gradient(135deg, #232526, #414345)",
    desc: "Budaya unik dengan ritual kematian yang spektakuler, rumah adat Tongkonan, dan lansekap memukau.",
    tags: ["budaya", "adat", "sulawesi", "sejarah"],
    score_tags: ["budaya", "adat", "sulawesi", "kagum", "unik", "pengetahuan", "hidden"],
    vibes: ["⚰️ Rambu Solo Ritual", "🏠 Tongkonan House", "🌿 Highland Landscape"]
  },
  {
    id: "bali-budaya",
    name: "Bali (Ubud)",
    province: "Bali",
    emoji: "🙏",
    gradient: "linear-gradient(135deg, #EB5757, #000000)",
    desc: "Jantung spiritual Bali, pura berselimut kabut, sawah terasering, dan seni budaya yang hidup.",
    tags: ["budaya", "bali", "sejarah", "alam", "meditasi"],
    score_tags: ["budaya", "bali", "meditasi", "alam", "sejarah", "religi", "healing"],
    vibes: ["🙏 Pura Tirta Empul", "🎭 Kecak Dance", "🧘 Yoga Retreat"]
  },
  {
    id: "banda-neira",
    name: "Banda Neira",
    province: "Maluku",
    emoji: "🏰",
    gradient: "linear-gradient(135deg, #7F7FD5, #86A8E7, #91EAE4)",
    desc: "Pulau rempah-rempah legendaris dengan benteng Portugis dan sejarah kolonial yang kaya.",
    tags: ["sejarah", "maluku", "budaya", "bahari"],
    score_tags: ["sejarah", "maluku", "budaya", "hidden", "pengetahuan", "kagum"],
    vibes: ["🏰 Benteng Nassau", "🌰 Pala Bersejarah", "🤿 Pristine Diving"]
  },
  {
    id: "wae-rebo",
    name: "Desa Wae Rebo",
    province: "NTT / Flores",
    emoji: "🛖",
    gradient: "linear-gradient(135deg, #8360c3, #2ebf91)",
    desc: "Desa adat di atas awan dengan rumah mbaru niang berbentuk kerucut yang memukau dunia.",
    tags: ["budaya", "adat", "ntt", "hidden", "alam"],
    score_tags: ["budaya", "adat", "hidden", "ntt", "kagum", "pengetahuan", "unik"],
    vibes: ["🛖 Rumah Adat Kerucut", "☁️ Negeri di Awan", "🌿 Trek 2 Jam"]
  },
  {
    id: "suku-baduy",
    name: "Baduy Dalam",
    province: "Banten",
    emoji: "🌾",
    gradient: "linear-gradient(135deg, #5C6BC0, #B39DDB)",
    desc: "Suku yang menolak modernisasi, hidup dalam harmoni alam total tanpa listrik dan teknologi.",
    tags: ["budaya", "adat", "jawa", "alam"],
    score_tags: ["budaya", "adat", "pengetahuan", "unik", "hidden", "alam_spirit"],
    vibes: ["🚶 Trekking Tanpa Alas Kaki", "🌿 Hidup Harmoni Alam", "📿 Tradisi Asli"]
  },

  // ── ALAM / TAMAN NASIONAL ──
  {
    id: "komodo",
    name: "Taman Nasional Komodo",
    province: "NTT",
    emoji: "🦎",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    desc: "Satu-satunya tempat di dunia melihat Komodo di habitat aslinya, plus laut eksotis.",
    tags: ["alam", "taman nasional", "ntt", "bahari", "petualangan"],
    score_tags: ["alam", "taman nasional", "ntt", "petualangan", "popular", "kagum", "nature"],
    vibes: ["🦎 Lihat Komodo Liar", "🏖️ Pink Beach", "🤿 Snorkeling"]
  },
  {
    id: "gunung-leuser",
    name: "Taman Nasional Gunung Leuser",
    province: "Aceh / Sumatera Utara",
    emoji: "🦧",
    gradient: "linear-gradient(135deg, #134E5E, #71B280)",
    desc: "Benteng terakhir bagi orangutan Sumatera, harimau, dan badak di hutan tropis lebat.",
    tags: ["alam", "taman nasional", "sumatera", "wildlife"],
    score_tags: ["alam", "taman nasional", "sumatera", "nature", "petualangan", "unik"],
    vibes: ["🦧 Orangutan Liar", "🌿 Jungle Trekking", "🐯 Harimau Sumatera"]
  },
  {
    id: "tanjung-puting",
    name: "Tanjung Puting",
    province: "Kalimantan Tengah",
    emoji: "🌴",
    gradient: "linear-gradient(135deg, #4776E6, #8E54E9)",
    desc: "Surga orangutan di hutan gambut dengan klotok (perahu kayu) yang jadi ikon petualangan.",
    tags: ["alam", "taman nasional", "kalimantan", "wildlife"],
    score_tags: ["alam", "kalimantan", "taman nasional", "nature", "unik", "petualangan"],
    vibes: ["🦧 Feeding Orangutan", "⛵ Klotok Cruise", "🌿 Hutan Gambut"]
  },
  {
    id: "flores",
    name: "Danau Kelimutu",
    province: "NTT / Ende",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #f83600, #f9d423)",
    desc: "Tiga danau kawah dengan warna yang berubah-ubah, turquoise, merah, dan hitam legam.",
    tags: ["alam", "ntt", "vulkanik", "alam"],
    score_tags: ["alam", "ntt", "vulkanik", "kagum", "visual", "sunrise", "nature"],
    vibes: ["🎨 3 Danau Warna", "🌅 Sunrise Kawah", "🚗 Road Trip Flores"]
  },
  {
    id: "kawah-ijen",
    name: "Kawah Ijen",
    province: "Jawa Timur",
    emoji: "🔵",
    gradient: "linear-gradient(135deg, #000428, #004e92)",
    desc: "Fenomena blue fire langka yang hanya ada dua di dunia, plus kawah asam berwarna toska.",
    tags: ["alam", "vulkanik", "jawa", "petualangan"],
    score_tags: ["alam", "vulkanik", "jawa", "petualangan", "unik", "kagum", "achieve"],
    vibes: ["🔵 Blue Fire Fenomena", "🧪 Kawah Asam Terbesar", "⛏️ Kehidupan Penambang"]
  },
  {
    id: "taman-nasional-baluran",
    name: "Taman Nasional Baluran",
    province: "Jawa Timur",
    emoji: "🦒",
    gradient: "linear-gradient(135deg, #f7bb97, #dd5e89)",
    desc: "Afrikanya Jawa, savana luas dengan banteng, rusa, dan merak yang bebas berkeliaran.",
    tags: ["alam", "taman nasional", "jawa", "wildlife"],
    score_tags: ["alam", "taman nasional", "jawa", "nature", "unik", "petualangan"],
    vibes: ["🦌 Safari Savana", "🐦 Birdwatching", "🌅 Golden Hour"]
  },
  {
    id: "mangrove-tarakan",
    name: "Hutan Mangrove Bekantan",
    province: "Kalimantan Utara",
    emoji: "🐵",
    gradient: "linear-gradient(135deg, #56ab2f, #a8e063)",
    desc: "Habitat terakhir Bekantan (proboscis monkey) di tepi sungai mangrove yang menakjubkan.",
    tags: ["alam", "kalimantan", "wildlife", "hidden"],
    score_tags: ["alam", "kalimantan", "nature", "hidden", "unik"],
    vibes: ["🐵 Bekantan Hidung Panjang", "🌿 Mangrove Tour", "🚤 River Cruise"]
  },

  // ── KOTA MODERN ──
  {
    id: "jakarta",
    name: "Jakarta",
    province: "DKI Jakarta",
    emoji: "🌆",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    desc: "Metropolitan terbesar Indonesia dengan kuliner world-class, museum, dan nightlife tanpa batas.",
    tags: ["kota", "kuliner", "sejarah", "jawa"],
    score_tags: ["kota", "kuliner", "popular", "fun", "streetfood", "terencana"],
    vibes: ["🌃 Kota Tua", "🍜 Kuliner 24 Jam", "🏬 Shopping District"]
  },
  {
    id: "bandung",
    name: "Bandung",
    province: "Jawa Barat",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #5f2c82, #49a09d)",
    desc: "Kota kopi, factory outlet, dan kuliner kekinian di tengah udara pegunungan yang sejuk.",
    tags: ["kota", "kopi", "kuliner", "highland", "jawa"],
    score_tags: ["kota", "kopi", "kuliner", "highland", "dingin", "fun", "jawa"],
    vibes: ["☕ Specialty Coffee Scene", "🏭 Factory Outlet", "🌡️ Udara Sejuk"]
  },
  {
    id: "makassar",
    name: "Makassar",
    province: "Sulawesi Selatan",
    emoji: "🦀",
    gradient: "linear-gradient(135deg, #ff6b6b, #feca57)",
    desc: "Kota pelabuhan bersejarah dengan kuliner seafood legendaris dan sunset di Fort Rotterdam.",
    tags: ["kota", "kuliner", "sejarah", "sulawesi"],
    score_tags: ["kota", "kuliner", "sejarah", "sulawesi", "seafood"],
    vibes: ["🦀 Coto Makassar", "🏰 Fort Rotterdam", "🌅 Sunset Pelabuhan"]
  },
  {
    id: "manado",
    name: "Manado",
    province: "Sulawesi Utara",
    emoji: "🐙",
    gradient: "linear-gradient(135deg, #00b4db, #0083b0)",
    desc: "Kota toleransi dengan kuliner ekstrem, diving luar biasa, dan pintu masuk ke Bunaken.",
    tags: ["kota", "kuliner", "sulawesi", "bahari"],
    score_tags: ["kota", "kuliner", "sulawesi", "bahari", "diving", "unik"],
    vibes: ["🐙 Kuliner Ekstrem", "🤿 Bunaken Gateway", "🏔️ Gunung Lokon"]
  },
  {
    id: "pontianak",
    name: "Pontianak",
    province: "Kalimantan Barat",
    emoji: "⭕",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    desc: "Kota tepat di garis khatulistiwa, pengalaman unik berdiri di titik 0° bumi.",
    tags: ["kota", "sejarah", "kalimantan"],
    score_tags: ["kota", "sejarah", "kalimantan", "unik"],
    vibes: ["⭕ Tugu Khatulistiwa", "🌿 Sungai Kapuas", "🍜 Kuliner Kalimantan"]
  },

  // ── RESORT / HEALING ──
  {
    id: "ubud-resort",
    name: "Ubud Retreat",
    province: "Bali",
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    desc: "Mecca healing dunia dengan yoga retreat, spa, sawah terasering, dan art scene yang megah.",
    tags: ["resort", "bali", "meditasi", "healing"],
    score_tags: ["healing", "meditasi", "bali", "resort", "aman", "couple", "segar"],
    vibes: ["🧘 Yoga & Meditation", "🌾 Rice Terrace Walk", "💆 World-Class Spa"]
  },
  {
    id: "seminyak",
    name: "Seminyak",
    province: "Bali",
    emoji: "🍹",
    gradient: "linear-gradient(135deg, #f85032, #e73827)",
    desc: "Pusat gaya hidup Bali, beach club, fine dining, butik fashion, dan sunset paling stylish.",
    tags: ["resort", "bali", "kota", "pantai"],
    score_tags: ["resort", "bali", "pantai", "fun", "mewah", "couple", "kota"],
    vibes: ["🍹 Beach Club", "🌅 Sunset Rooftop", "🛍️ Boutique Shopping"]
  },
  {
    id: "lombok-selatan",
    name: "Kuta Lombok",
    province: "NTB",
    emoji: "🏄",
    gradient: "linear-gradient(135deg, #FC5C7D, #6A82FB)",
    desc: "Pantai selatan Lombok yang masih mentah, surf break kelas dunia dan keindahan yang belum terjamah.",
    tags: ["pantai", "resort", "ntt", "petualangan"],
    score_tags: ["pantai", "resort", "hidden", "petualangan", "visual", "fun"],
    vibes: ["🏄 World Surf Spot", "🏖️ Pristine Beach", "🌅 Dramatic Sunset"]
  },

  // ── PEDALAMAN / UNIK ──
  {
    id: "lore-lindu",
    name: "Lore Lindu",
    province: "Sulawesi Tengah",
    emoji: "🗿",
    gradient: "linear-gradient(135deg, #2C3E50, #FD746C)",
    desc: "Taman nasional dengan megalit misterius yang masih belum terpecahkan asal-usulnya.",
    tags: ["sejarah", "alam", "sulawesi", "taman nasional", "hidden"],
    score_tags: ["sejarah", "hidden", "sulawesi", "unik", "alam", "petualangan", "pengetahuan"],
    vibes: ["🗿 Megalit Misterius", "🌿 Endemic Wildlife", "⛺ Camping Wild"]
  },
  {
    id: "derawan",
    name: "Kepulauan Derawan",
    province: "Kalimantan Timur",
    emoji: "🐢",
    gradient: "linear-gradient(135deg, #43C6AC, #191654)",
    desc: "Surga tersembunyi dengan ubur-ubur tidak menyengat, penyu, dan stingray di perairan biru.",
    tags: ["bahari", "kalimantan", "hidden", "pantai"],
    score_tags: ["bahari", "kalimantan", "hidden", "pantai", "kagum", "visual", "nature"],
    vibes: ["🐢 Turtle Nesting", "🪼 Danau Ubur-ubur", "🤿 Snorkeling Heaven"]
  },
  {
    id: "buton",
    name: "Pulau Buton & Wakatobi",
    province: "Sulawesi Tenggara",
    emoji: "🏯",
    gradient: "linear-gradient(135deg, #FFFC00, #FC466B)",
    desc: "Benteng terluas di dunia plus keajaiban bawah laut yang membuatnya jadi permata tersembunyi.",
    tags: ["sejarah", "bahari", "sulawesi", "hidden"],
    score_tags: ["sejarah", "bahari", "sulawesi", "hidden", "unik", "pengetahuan"],
    vibes: ["🏯 Benteng Wolio", "🤿 World Heritage Dive", "🌊 Hidden Paradise"]
  },
  {
    id: "togean",
    name: "Kepulauan Togean",
    province: "Sulawesi Tengah",
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #00F260, #0575E6)",
    desc: "Kepulauan terpencil dengan keanekaragaman ekosistem laut tertinggi di Coral Triangle.",
    tags: ["bahari", "sulawesi", "hidden", "pantai"],
    score_tags: ["bahari", "hidden", "sulawesi", "pantai", "healing", "nature"],
    vibes: ["🌺 Remote Bliss", "🤿 Coral Triangle", "🏝️ Uninhabited Islands"]
  },
  {
    id: "mentawai",
    name: "Mentawai",
    province: "Sumatera Barat",
    emoji: "🏄",
    gradient: "linear-gradient(135deg, #f46b45, #eea849)",
    desc: "Mecca dunia surfing dengan ombak barrel terbaik dan budaya suku Mentawai yang unik.",
    tags: ["pantai", "bahari", "sumatera", "petualangan"],
    score_tags: ["pantai", "bahari", "sumatera", "petualangan", "ekstrem", "unik"],
    vibes: ["🏄 Best Barrels on Earth", "🎯 Tattoo Suku Mentawai", "🌊 Offshore Swells"]
  },
  {
    id: "banyuwangi",
    name: "Banyuwangi",
    province: "Jawa Timur",
    emoji: "🌊",
    gradient: "linear-gradient(135deg, #1FA2FF, #12D8FA, #A6FFCB)",
    desc: "Kota festival tersembunyi di ujung Jawa dengan Ijen, savana Baluran, dan pantai G-Land.",
    tags: ["alam", "jawa", "petualangan", "bahari"],
    score_tags: ["alam", "jawa", "petualangan", "budaya", "vulkanik", "nature"],
    vibes: ["🔵 Blue Fire Ijen", "🏄 G-Land Surf", "🦌 Baluran Safari"]
  },
  {
    id: "lake-toba",
    name: "Danau Toba",
    province: "Sumatera Utara",
    emoji: "🌋",
    gradient: "linear-gradient(135deg, #2980b9, #6dd5fa, #ffffff)",
    desc: "Kaldera supervolcano terbesar di dunia, kini jadi danau indah dengan budaya Batak yang kaya.",
    tags: ["alam", "sumatera", "budaya", "vulkanik"],
    score_tags: ["alam", "sumatera", "budaya", "vulkanik", "kagum", "sejarah", "popular"],
    vibes: ["🚤 Pulau Samosir", "🥁 Budaya Batak", "🌊 Danau Kaldera Raksasa"]
  },
  {
    id: "bukittinggi",
    name: "Bukittinggi",
    province: "Sumatera Barat",
    emoji: "🕌",
    gradient: "linear-gradient(135deg, #4e54c8, #8f94fb)",
    desc: "Kota Jam Gadang dengan Ngarai Sianok, kuliner Padang autentik, dan budaya Minang yang megah.",
    tags: ["kota", "budaya", "sumatera", "sejarah"],
    score_tags: ["kota", "budaya", "sumatera", "sejarah", "kuliner", "pengetahuan"],
    vibes: ["🕰️ Jam Gadang", "🌋 Ngarai Sianok", "🍛 Rendang Asli"]
  },
  {
    id: "palawan-indonesia",
    name: "Kepulauan Anambas",
    province: "Kepri",
    emoji: "💚",
    gradient: "linear-gradient(135deg, #1D976C, #93F9B9)",
    desc: "Surga tersembunyi dengan air laut paling jernih di Asia Tenggara, hampir tanpa turis.",
    tags: ["bahari", "hidden", "pantai"],
    score_tags: ["bahari", "hidden", "pantai", "laut", "kagum", "visual", "healing"],
    vibes: ["💎 Clearwater Paradise", "🏝️ Uninhabited Islands", "🤿 Unspoiled Reef"]
  },
  {
    id: "sintang",
    name: "Kapuas Hulu",
    province: "Kalimantan Barat",
    emoji: "🌊",
    gradient: "linear-gradient(135deg, #134E5E, #71B280)",
    desc: "Pedalaman Kalimantan dengan sungai Kapuas legendaris, hutan hujan purba, dan Dayak asli.",
    tags: ["alam", "kalimantan", "budaya", "adat", "petualangan"],
    score_tags: ["alam", "kalimantan", "budaya", "adat", "petualangan", "unik", "hidden"],
    vibes: ["⛵ River Expedition", "🏠 Rumah Panjang Dayak", "🌿 Jungle Wild"]
  },
  {
    id: "nias",
    name: "Nias",
    province: "Sumatera Utara",
    emoji: "🪁",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    desc: "Pulau megalitik dengan desa adat Bawömataluo, tradisi lompat batu, dan surfing dunia.",
    tags: ["budaya", "adat", "sumatera", "bahari", "petualangan"],
    score_tags: ["budaya", "adat", "sumatera", "petualangan", "unik", "ekstrem"],
    vibes: ["🪨 Lompat Batu Hombo", "🏄 Surf Lagundri Bay", "🏠 Desa Megalitik"]
  },

  // ── TAMBAHAN ──
  {
    id: "semarang",
    name: "Semarang",
    province: "Jawa Tengah",
    emoji: "⛪",
    gradient: "linear-gradient(135deg, #FDC830, #F37335)",
    desc: "Kota lama penuh heritage arsitektur Eropa, kuliner peranakan, dan surga lumpia.",
    tags: ["kota", "sejarah", "budaya", "jawa"],
    score_tags: ["kota", "sejarah", "budaya", "kuliner", "popular", "pengetahuan"],
    vibes: ["⛪ Kota Lama Kolonial", "🥟 Lumpia Legendaris", "🏛️ Sam Poo Kong"]
  },
  {
    id: "ambon",
    name: "Ambon",
    province: "Maluku",
    emoji: "🎵",
    gradient: "linear-gradient(135deg, #DA22FF, #9733EE)",
    desc: "Kota Musik Indonesia dengan pantai eksotis, rempah-rempah bersejarah, dan dive spot epic.",
    tags: ["kota", "budaya", "maluku", "bahari"],
    score_tags: ["kota", "budaya", "maluku", "bahari", "sejarah", "fun"],
    vibes: ["🎵 Kota Musik", "🌊 Pantai Natsepa", "🔴 Pala & Cengkeh"]
  },
  {
    id: "jayapura",
    name: "Sentani & Jayapura",
    province: "Papua",
    emoji: "🦜",
    gradient: "linear-gradient(135deg, #00b09b, #96c93d)",
    desc: "Danau Sentani yang megah, Festival Danau, dan pintu gerbang petualangan Papua yang epik.",
    tags: ["alam", "budaya", "papua", "bahari"],
    score_tags: ["alam", "budaya", "papua", "petualangan", "kagum", "unik", "pengetahuan"],
    vibes: ["🦜 Bird of Paradise", "🚣 Danau Sentani", "🎭 Festival Budaya"]
  },
  {
    id: "bangka",
    name: "Bangka",
    province: "Bangka Belitung",
    emoji: "🌴",
    gradient: "linear-gradient(135deg, #00c6fb, #005bea)",
    desc: "Pantai-pantai cantik dengan batu granit, kawasan pertambangan timah bersejarah, dan kuliner lezat.",
    tags: ["pantai", "sejarah", "bahari"],
    score_tags: ["pantai", "bahari", "sejarah", "kuliner", "popular"],
    vibes: ["🌴 Pantai Granit", "⛏️ Sejarah Timah", "🦞 Seafood Segar"]
  }
];

// ─── TRAVELER PERSONALITY TYPES ───
const PERSONALITY_TYPES = {
  explorer: {
    icon: "🦅",
    name: "The Explorer",
    desc: "Kamu adalah penjelajah sejati yang tidak takut masuk ke tempat yang belum terjamah. Adrenalin adalah sarapanmu!"
  },
  culture_seeker: {
    icon: "🎭",
    name: "Culture Seeker",
    desc: "Kamu tertarik dengan kedalaman budaya, sejarah, dan cara hidup yang berbeda dari keseharianmu."
  },
  beach_lover: {
    icon: "🏄",
    name: "Beach Lover",
    desc: "Deburan ombak dan pasir hangat adalah definisi sempurna liburanmu. Laut adalah rumah kedua."
  },
  mountain_soul: {
    icon: "⛰️",
    name: "Mountain Soul",
    desc: "Ketinggian memberimu perspektif baru. Setiap puncak adalah pencapaian yang punya makna tersendiri."
  },
  zen_traveler: {
    icon: "🧘",
    name: "Zen Traveler",
    desc: "Kamu mencari ketenangan sejati, tempat di mana pikiran bisa berhenti sejenak dari kebisingan dunia."
  },
  urban_nomad: {
    icon: "🌆",
    name: "Urban Nomad",
    desc: "Kamu betah di kota kuliner, kafe, street art, dan nightlife adalah yang paling menggiurkan bagimu."
  },
  eco_warrior: {
    icon: "🌿",
    name: "Eco Warrior",
    desc: "Alam dan satwa adalah prioritasmu. Kamu ingin menjelajah sambil menjaga, bukan merusak."
  },
  luxury_wanderer: {
    icon: "💎",
    name: "Luxury Wanderer",
    desc: "Yang terbaik adalah standarmu resort premium, pengalaman eksklusif, dan kenangan yang tak ternilai."
  }
};
