import React, { useState, useMemo, useEffect } from 'react';
import { 
  Gamepad2, 
  ExternalLink, 
  Search, 
  SlidersHorizontal, 
  Download, 
  Info, 
  Sparkles, 
  Layers, 
  Grid, 
  Maximize2, 
  Check, 
  X, 
  Monitor, 
  Heart, 
  ChevronRight, 
  BookOpen, 
  DollarSign, 
  Tag,
  Palette,
  Coffee
} from 'lucide-react';

// ==========================================
// DATA KATALOG UTAMA (MUDAH DI-UPDATE DI SINI)
// ==========================================
// Untuk memperbarui katalog, Developer cukup menambah, mengubah, atau menghapus
// objek di dalam array ASSETS_DATA di bawah ini sesuai listing di itch.io.
const ASSETS_DATA = [
  {
    id: 'retro-rpg-gui',
    title: 'Retro RPG GUI & Hud Pack',
    category: 'gui',
    tags: ['GUI', 'RPG', '16-Bit', 'HUD'],
    price: 1.99,
    isFree: false,
    shortDesc: 'Paket GUI lengkap bertema RPG klasik 16-bit untuk kebutuhan HUD, menu, dan dialog game Anda.',
    longDesc: 'Didesain khusus untuk mempermudah developer game RPG klasik. Paket ini mencakup berbagai komponen antarmuka seperti bar kesehatan, kotak dialog, tombol interaktif, slot inventaris, dan jendela menu utama yang siap pakai.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-05-15',
    downloadsCount: 340,
    specs: {
      grid: '16x16 & 32x32',
      format: 'PNG (Sprite Sheets & Slices)',
      license: 'CC BY 4.0 (Komersial & Personal)',
      version: 'v1.2'
    },
    colors: ['#2e222f', '#3e3546', '#625565', '#966c6c', '#ab947a', '#ffd541', '#ff5277'],
    // Menggunakan mockup visual berbasis SVG buatan untuk representasi pixel art berkualitas tinggi
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-slate-950">
        <rect x="5" y="5" width="90" height="90" rx="3" fill="#2d1b33" stroke="#ffd541" strokeWidth="2" />
        <rect x="15" y="15" width="70" height="15" fill="#4d325c" rx="1" />
        <text x="50" y="25" fill="#ffd541" fontSize="6" fontFamily="'Press Start 2P', monospace" textAnchor="middle">STATUS BAR</text>
        <rect x="15" y="40" width="50" height="6" fill="#ff5277" />
        <rect x="15" y="50" width="40" height="6" fill="#3cd070" />
        <rect x="15" y="60" width="60" height="6" fill="#00bfff" />
        <circle cx="75" cy="45" r="5" fill="#ffd541" />
        <rect x="15" y="75" width="70" height="12" fill="#1f1124" stroke="#4d325c" strokeWidth="1" />
        <text x="20" y="83" fill="#ab947a" fontSize="4" fontFamily="sans-serif">Mulai Petualangan Baru...</text>
      </svg>
    )
  },
  {
    id: 'weather-icon-set',
    title: 'Pixel Weather & Status Icons',
    category: 'icons',
    tags: ['Icons', 'Weather', '8-Bit', 'UI'],
    price: 0,
    isFree: true,
    shortDesc: 'Set ikon cuaca dan status lingkungan bergaya pixel art minimalis untuk HUD game petualangan.',
    longDesc: 'Kumpulan ikon berukuran 16x16 piksel yang menggambarkan berbagai kondisi cuaca (cerah, hujan, badai, bersalju) serta efek status lingkungan (beracun, panas ekstrem, membeku) untuk melengkapi imersifitas game Anda.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-06-01',
    downloadsCount: 1250,
    specs: {
      grid: '16x16',
      format: 'PNG Sprite Sheet',
      license: 'Gratis untuk Proyek Non-Komersial',
      version: 'v1.0'
    },
    colors: ['#0f172a', '#38bdf8', '#fbbf24', '#94a3b8', '#ffffff', '#ef4444'],
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-slate-900">
        {/* Sun and Cloud Pixel Graphic */}
        <circle cx="40" cy="40" r="15" fill="#fbbf24" />
        <rect x="25" y="45" width="50" height="20" rx="10" fill="#94a3b8" opacity="0.9" />
        <rect x="35" y="38" width="35" height="20" rx="8" fill="#cbd5e1" opacity="0.9" />
        {/* Rain Drops */}
        <rect x="35" y="70" width="2" height="6" fill="#38bdf8" />
        <rect x="47" y="72" width="2" height="6" fill="#38bdf8" />
        <rect x="58" y="69" width="2" height="6" fill="#38bdf8" />
        <rect x="65" y="73" width="2" height="6" fill="#38bdf8" />
      </svg>
    )
  },
  {
    id: 'cyberpunk-buttons-pack',
    title: 'Cyberpunk Futuristic Button Pack',
    category: 'buttons',
    tags: ['Buttons', 'Cyberpunk', 'Futuristic', 'Neon'],
    price: 1.00,
    isFree: false,
    shortDesc: 'Tombol interaktif bertema Cyberpunk futuristik dengan efek neon menyala dan variasi status hover.',
    longDesc: 'Tingkatkan estetika sci-fi game Anda dengan paket tombol neon futuristik ini. Berisi berbagai bentuk tombol (lingkaran, persegi, panjang) dengan kondisi normal, hover, dan pressed yang siap diintegrasikan.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-04-20',
    downloadsCount: 480,
    specs: {
      grid: '32x32 & 64x16',
      format: 'PNG, Aseprite file',
      license: 'CC BY 4.0 (Boleh Komersial)',
      version: 'v2.0'
    },
    colors: ['#09090b', '#06b6d4', '#ec4899', '#a855f7', '#ffffff'],
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-zinc-950">
        <rect x="10" y="20" width="80" height="20" fill="#09090b" stroke="#ec4899" strokeWidth="2" />
        <text x="50" y="33" fill="#ec4899" fontSize="6" fontFamily="'Press Start 2P', monospace" textAnchor="middle">PLAY GAME</text>
        <line x1="12" y1="36" x2="25" y2="36" stroke="#06b6d4" strokeWidth="2" />
        
        <rect x="10" y="55" width="80" height="20" fill="#ec4899" stroke="#ffffff" strokeWidth="2" />
        <text x="50" y="68" fill="#09090b" fontSize="6" fontFamily="'Press Start 2P', monospace" textAnchor="middle">HOVER STATE</text>
        <line x1="12" y1="71" x2="25" y2="71" stroke="#09090b" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'trash-street-assets',
    title: '8-Bit Trash & Street Prop Pack',
    category: 'environment',
    tags: ['Environment', 'Props', '8-Bit', 'Urban'],
    price: 1.00,
    isFree: false,
    shortDesc: 'Aset dekorasi jalanan perkotaan kumuh bergaya retro, mulai dari tempat sampah, lampu jalan, hingga kardus.',
    longDesc: 'Sangat cocok untuk game platformer 2D atau top-down berlatar belakang kota modern atau pasca-apokaliptik. Berisi lebih dari 40 tipe objek lingkungan jalanan yang terperinci.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-03-10',
    downloadsCount: 290,
    specs: {
      grid: '16x16',
      format: 'PNG Tileset',
      license: 'CC BY 4.0',
      version: 'v1.0'
    },
    colors: ['#1c1917', '#44403c', '#78716c', '#a8a29e', '#16a34a', '#dc2626'],
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-stone-900">
        {/* Lamp Post */}
        <rect x="25" y="10" width="4" height="80" fill="#44403c" />
        <circle cx="27" cy="15" r="8" fill="#fef08a" opacity="0.8" />
        {/* Trash Can */}
        <rect x="55" y="50" width="22" height="30" fill="#78716c" rx="2" />
        <rect x="52" y="46" width="28" height="4" fill="#44403c" rx="1" />
        <line x1="60" y1="55" x2="60" y2="75" stroke="#44403c" strokeWidth="2" />
        <line x1="66" y1="55" x2="66" y2="75" stroke="#44403c" strokeWidth="2" />
        <line x1="72" y1="55" x2="72" y2="75" stroke="#44403c" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'fantasy-item-icons',
    title: 'Fantasy Roguelike Item Pack',
    category: 'icons',
    tags: ['Icons', 'Fantasy', 'Roguelike', 'Items'],
    price: 0,
    isFree: true,
    shortDesc: 'Koleksi lengkap ikon item fantasi gratis termasuk senjata, ramuan magis, permata, dan gulungan mantra.',
    longDesc: 'Kumpulan 50+ item fantasi berkualitas tinggi yang dirancang khusus untuk game bergenre RPG, Roguelike, atau petualangan taktis. Memiliki palet warna kontras tinggi agar mudah diidentifikasi di layar kecil.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-02-28',
    downloadsCount: 1980,
    specs: {
      grid: '16x16',
      format: 'PNG Sprite Sheet',
      license: 'Komersial & Personal (Wajib Kredit)',
      version: 'v1.1'
    },
    colors: ['#0f051d', '#3c096c', '#7b2cbf', '#c77dff', '#e0aaff', '#e2e8f0'],
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-violet-950">
        {/* Potion Bottle */}
        <path d="M40 30 h20 v10 l15 20 v20 h-50 v-20 l15 -20 z" fill="#3c096c" stroke="#e0aaff" strokeWidth="3" />
        <rect x="45" y="20" width="10" height="10" fill="#e2e8f0" />
        {/* Liquid */}
        <path d="M22 62 h56 v15 h-56 z" fill="#c77dff" />
        {/* Sparkle */}
        <polygon points="50,45 53,50 58,50 54,53 56,58 50,55 44,58 46,53 42,50 47,50" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: 'chibi-monster-sprites',
    title: 'Cute Chibi Slime & Monster Pack',
    category: 'characters',
    tags: ['Characters', 'Sprites', 'Chibi', 'Slime'],
    price: 2.50,
    isFree: false,
    shortDesc: 'Lembar animasi karakter monster chibi yang lucu, lengkap dengan status jalan, menyerang, dan terluka.',
    longDesc: 'Dapatkan 4 varian monster slime imut dengan total lebih dari 24 frame animasi per monster. Animasi telah diuji kelancarannya untuk game engine terpopuler seperti Godot, Unity, dan Construct 3.',
    itchUrl: 'https://sketpixel.itch.io/',
    releaseDate: '2026-06-15',
    downloadsCount: 150,
    specs: {
      grid: '32x32',
      format: 'PNG Sprite Sheets (Aseprite file incl.)',
      license: 'CC BY-ND 4.0',
      version: 'v1.0'
    },
    colors: ['#052e16', '#15803d', '#22c55e', '#86efac', '#f43f5e', '#ffffff'],
    svgPreview: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-emerald-950">
        {/* Cute Slime character */}
        <path d="M20 70 C20 40, 80 40, 80 70 C80 80, 20 80, 20 70 Z" fill="#22c55e" stroke="#052e16" strokeWidth="3" />
        {/* Eyes */}
        <ellipse cx="40" cy="58" rx="4" ry="6" fill="#052e16" />
        <ellipse cx="60" cy="58" rx="4" ry="6" fill="#052e16" />
        <circle cx="38" cy="56" r="1.5" fill="#ffffff" />
        <circle cx="58" cy="56" r="1.5" fill="#ffffff" />
        {/* Blush */}
        <ellipse cx="32" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="68" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        {/* Shadow */}
        <ellipse cx="50" cy="78" rx="35" ry="5" fill="#052e16" opacity="0.4" />
      </svg>
    )
  }
];

// Data Pengembang/Pemilik Situs untuk bagian "Bio & About"
const CREATOR_PROFILE = {
  name: 'sketpixel',
  title: 'Pixel Art Asset Creator',
  bio: 'Halo! Saya sketpixel, seorang seniman pixel independen yang berfokus menciptakan aset game 2D beresolusi rendah yang rapi, berkarakter, dan siap pakai. Saya mendedikasikan waktu saya untuk mempermudah pekerjaan para pengembang game indie di seluruh dunia melalui paket GUI, ikon, dan tileset berkualitas tinggi.',
  commissionStatus: 'Menerima Projek / Komisi Khusus',
  socials: {
    itch: 'https://sketpixel.itch.io/',
    twitter: 'https://x.com/',
    koFi: 'https://ko-fi.com/',
    discord: 'sketpixel#0000',
    email: 'sketpixel@gmail.com'
  },
  stats: {
    totalPacks: ASSETS_DATA.length,
    freePacks: ASSETS_DATA.filter(a => a.isFree).length,
    downloads: '4,500+',
    rating: '5.0★'
  }
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isCrtEnabled, setIsCrtEnabled] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('synthwave'); // 'synthwave' | 'gameboy' | 'cozy-retro'
  const [copiedText, setCopiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulasi skeleton loading demi nilai estetika retro yang mantap ketika mengganti filter
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedPrice, sortBy, searchQuery]);

  // Handler Salin Tautan (Fallback sesuai instruksi menggunakan execCommand)
  const handleShare = (assetTitle, e) => {
    e.stopPropagation();
    const mockUrl = `${window.location.origin}/#${assetTitle.toLowerCase().replace(/ /g, '-')}`;
    
    const el = document.createElement('textarea');
    el.value = mockUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopiedText(assetTitle);
    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  // Logika Filter dan Pengurutan Data Aset
  const filteredAssets = useMemo(() => {
    return ASSETS_DATA.filter(asset => {
      const matchCategory = selectedCategory === 'all' || asset.category === selectedCategory;
      const matchPrice = selectedPrice === 'all' || 
                         (selectedPrice === 'free' && asset.isFree) || 
                         (selectedPrice === 'paid' && !asset.isFree);
      const matchSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          asset.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      }
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      if (sortBy === 'popular') {
        return b.downloadsCount - a.downloadsCount;
      }
      return 0;
    });
  }, [selectedCategory, selectedPrice, searchQuery, sortBy]);

  // Penentuan Class CSS Berdasarkan Tema Terpilih
  const getThemeClasses = () => {
    switch(currentTheme) {
      case 'gameboy':
        return {
          bg: 'bg-[#8bac0f] text-[#0f380f]',
          card: 'bg-[#9bbc0f] border-4 border-[#306230] text-[#0f380f] shadow-[4px_4px_0px_0px_#306230]',
          buttonPrimary: 'bg-[#306230] text-[#8bac0f] hover:bg-[#0f380f] border-2 border-[#0f380f] shadow-[2px_2px_0px_0px_#0f380f] active:translate-y-1 active:shadow-none',
          buttonSecondary: 'bg-[#9bbc0f] text-[#306230] hover:bg-[#8bac0f] border-2 border-[#306230]',
          accentText: 'text-[#306230]',
          accentBorder: 'border-[#306230]',
          headerBg: 'bg-[#9bbc0f] border-b-4 border-[#306230]',
          badgeFree: 'bg-[#306230] text-[#8bac0f]',
          badgePaid: 'bg-[#0f380f] text-[#9bbc0f]',
          inputField: 'bg-[#8bac0f] border-2 border-[#306230] text-[#0f380f] placeholder-[#306230]/70',
          modalBg: 'bg-[#9bbc0f] border-4 border-[#306230] text-[#0f380f]'
        };
      case 'cozy-retro':
        return {
          bg: 'bg-[#fdf6e3] text-[#586e75]',
          card: 'bg-[#eee8d5] border-4 border-[#93a1a1] text-[#586e75] shadow-[4px_4px_0px_0px_rgba(147,161,161,0.6)]',
          buttonPrimary: 'bg-[#cb4b16] text-[#fdf6e3] hover:bg-[#b58900] border-2 border-[#93a1a1] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none',
          buttonSecondary: 'bg-[#eee8d5] text-[#586e75] hover:bg-[#eee8d5]/80 border-2 border-[#93a1a1]',
          accentText: 'text-[#b58900]',
          accentBorder: 'border-[#cb4b16]',
          headerBg: 'bg-[#eee8d5] border-b-4 border-[#93a1a1]',
          badgeFree: 'bg-[#2aa198] text-white',
          badgePaid: 'bg-[#b58900] text-white',
          inputField: 'bg-[#fdf6e3] border-2 border-[#93a1a1] text-[#586e75] placeholder-[#93a1a1]',
          modalBg: 'bg-[#fdf6e3] border-4 border-[#cb4b16] text-[#586e75]'
        };
      case 'synthwave':
      default:
        return {
          bg: 'bg-[#120e2e] text-[#f43f5e]',
          card: 'bg-[#1a143d] border-4 border-[#f43f5e] text-pink-100 shadow-[4px_4px_0px_0px_#a855f7]',
          buttonPrimary: 'bg-[#f43f5e] text-white hover:bg-[#ec4899] border-2 border-[#ffd541] shadow-[4px_4px_0px_0px_#120e2e] active:translate-y-1 active:shadow-none',
          buttonSecondary: 'bg-[#120e2e] text-[#f43f5e] hover:bg-[#251b54] border-2 border-[#f43f5e]',
          accentText: 'text-[#ffd541]',
          accentBorder: 'border-[#f43f5e]',
          headerBg: 'bg-[#1a143d] border-b-4 border-[#f43f5e]',
          badgeFree: 'bg-emerald-600 text-white border border-emerald-400',
          badgePaid: 'bg-amber-500 text-slate-950 border border-amber-300 font-bold',
          inputField: 'bg-[#120e2e] border-2 border-[#f43f5e] text-white placeholder-pink-300/50',
          modalBg: 'bg-[#1a143d] border-4 border-[#ffd541] text-pink-50'
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className={`min-h-screen font-sans ${theme.bg} relative transition-colors duration-300 overflow-x-hidden`}>
      
      {/* ================= CRT SCANLINE OVERLAY ================= */}
      {isCrtEnabled && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.12] mix-blend-overlay">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
              backgroundSize: '100% 4px',
            }}
          />
          <div 
            className="absolute inset-0 bg-radial-vignette opacity-20"
            style={{
              background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.8) 100%)'
            }}
          />
        </div>
      )}

      {/* ================= HEADER & SETTINGS BAR ================= */}
      <header className={`${theme.headerBg} p-4 sticky top-0 z-30 shadow-md`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center border-2 border-white animate-pulse shadow-md">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wider uppercase flex items-center gap-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '1rem' }}>
                {CREATOR_PROFILE.name}
                <span className={`text-[9px] px-2 py-0.5 rounded border ${theme.accentBorder} animate-pulse bg-emerald-950/50 text-emerald-400`}>
                  PORTFOLIO
                </span>
              </h1>
              <p className="text-xs opacity-75 mt-0.5">Pixel Art Game Assets Showcase</p>
            </div>
          </div>

          {/* Controls: CRT Toggle, Theme Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Theme Selectors */}
            <div className="flex items-center gap-1 border-2 border-current p-1 rounded">
              <span className="text-[10px] uppercase font-bold px-1.5 hidden sm:inline">Tema:</span>
              <button 
                onClick={() => setCurrentTheme('synthwave')}
                className={`text-[10px] font-bold px-2 py-1 rounded ${currentTheme === 'synthwave' ? 'bg-pink-600 text-white' : 'opacity-60'}`}
              >
                Synthwave
              </button>
              <button 
                onClick={() => setCurrentTheme('gameboy')}
                className={`text-[10px] font-bold px-2 py-1 rounded ${currentTheme === 'gameboy' ? 'bg-[#306230] text-[#8bac0f]' : 'opacity-60'}`}
              >
                GameBoy
              </button>
              <button 
                onClick={() => setCurrentTheme('cozy-retro')}
                className={`text-[10px] font-bold px-2 py-1 rounded ${currentTheme === 'cozy-retro' ? 'bg-[#cb4b16] text-[#fdf6e3]' : 'opacity-60'}`}
              >
                Cozy
              </button>
            </div>

            {/* CRT Scanline Toggle */}
            <button 
              onClick={() => setIsCrtEnabled(!isCrtEnabled)}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 border-2 border-current rounded active:scale-95 transition-transform`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Monitor CRT:</span> 
              <span>{isCrtEnabled ? 'ON' : 'OFF'}</span>
            </button>

            {/* Hubungkan ke Itch.io Profile Utama */}
            <a 
              href={CREATOR_PROFILE.socials.itch} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 ${theme.buttonPrimary} rounded transition-all`}
            >
              <span>ITCH.IO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION (TENTANG & BIO) ================= */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Bio Utama */}
          <div className={`${theme.card} p-6 lg:col-span-2 flex flex-col md:flex-row gap-6 items-center md:items-start`}>
            {/* Avatar Kreator dengan Gaya Bingkai Retro Grid */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 border-4 border-current rounded overflow-hidden relative bg-slate-950">
                {/* SVG Avatar Pixel Art Buatan */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="0" y="0" width="100" height="100" fill="#2e1065" />
                  {/* Rambut Pixel */}
                  <rect x="25" y="15" width="50" height="15" fill="#f43f5e" />
                  <rect x="20" y="25" width="60" height="35" fill="#f43f5e" />
                  {/* Wajah */}
                  <rect x="30" y="35" width="40" height="35" fill="#fed7aa" />
                  {/* Kacamata Pixel Retro */}
                  <rect x="25" y="45" width="50" height="10" fill="#000000" />
                  <rect x="30" y="47" width="15" height="6" fill="#00ffff" />
                  <rect x="55" y="47" width="15" height="6" fill="#00ffff" />
                  {/* Mulut */}
                  <rect x="45" y="62" width="10" height="3" fill="#f43f5e" />
                  {/* Baju */}
                  <rect x="20" y="70" width="60" height="30" fill="#ffd541" />
                  <rect x="40" y="70" width="20" height="10" fill="#2e1065" />
                </svg>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-slate-950 px-2.5 py-1 text-[10px] font-bold uppercase rounded border-2 border-slate-950 shadow">
                🟢 ONLINE
              </div>
            </div>

            {/* Deskripsi & Tombol Kontak */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 mb-3">
                <div>
                  <h2 className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Press Start 2P', sans-serif" }}>
                    {CREATOR_PROFILE.name}
                  </h2>
                  <p className="text-sm font-bold opacity-80 mt-1">{CREATOR_PROFILE.title}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500 text-xs font-bold animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  {CREATOR_PROFILE.commissionStatus}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-5 opacity-90">
                {CREATOR_PROFILE.bio}
              </p>
              
              {/* Kontak & Sosial */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs">
                <a href={`mailto:${CREATOR_PROFILE.socials.email}`} className={`flex items-center gap-1.5 px-3 py-1.5 rounded ${theme.buttonSecondary} font-semibold hover:scale-105 transition-transform`}>
                  <span>Kirim Email</span>
                </a>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded border-2 border-dashed border-current opacity-80">
                  <span className="font-bold">Discord:</span>
                  <span>{CREATOR_PROFILE.socials.discord}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Widget Statistik Retro */}
          <div className={`${theme.card} p-6 flex flex-col justify-between`}>
            <div>
              <h3 className="text-sm font-bold uppercase mb-4 tracking-wider flex items-center gap-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                <Layers className="w-4 h-4" /> Statistik
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-black/20 rounded border border-current/20 text-center">
                  <p className="text-[10px] uppercase opacity-75 font-semibold">Total Paket</p>
                  <p className="text-2xl font-black mt-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    {CREATOR_PROFILE.stats.totalPacks}
                  </p>
                </div>
                <div className="p-3 bg-black/20 rounded border border-current/20 text-center">
                  <p className="text-[10px] uppercase opacity-75 font-semibold">Paket Gratis</p>
                  <p className="text-2xl font-black mt-1 text-emerald-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    {CREATOR_PROFILE.stats.freePacks}
                  </p>
                </div>
                <div className="p-3 bg-black/20 rounded border border-current/20 text-center">
                  <p className="text-[10px] uppercase opacity-75 font-semibold">Unduhan</p>
                  <p className="text-2xl font-black mt-1 text-sky-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    {CREATOR_PROFILE.stats.downloads}
                  </p>
                </div>
                <div className="p-3 bg-black/20 rounded border border-current/20 text-center">
                  <p className="text-[10px] uppercase opacity-75 font-semibold">Rating Kepuasan</p>
                  <p className="text-2xl font-black mt-1 text-yellow-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    {CREATOR_PROFILE.stats.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Promo Singkat Dukungan */}
            <div className="mt-4 pt-4 border-t-2 border-dashed border-current/20 text-center">
              <a 
                href={CREATOR_PROFILE.socials.koFi} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <Coffee className="w-4 h-4" />
                Dukung saya di Ko-fi / Donasi
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FILTER, SEARCH, & SORTING (P1) ================= */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className={`${theme.card} p-5 flex flex-col gap-4`}>
          
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
            {/* Pencarian Teks */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70" />
              <input 
                type="text"
                placeholder="Cari aset (mis. 'GUI', 'Weather', 'Free')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm font-semibold outline-none transition-all ${theme.inputField}`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs opacity-60 hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Pengurutan */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 opacity-70 flex-shrink-0" />
              <span className="text-xs font-bold uppercase whitespace-nowrap">Urutkan:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 rounded text-xs font-bold ${theme.inputField} cursor-pointer outline-none`}
              >
                <option value="latest">Rilis Terbaru</option>
                <option value="popular">Terpopuler</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>

          <hr className="border-current/10" />

          {/* Filter Bar Kategori & Harga */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Tombol Kategori */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase mr-1">Kategori:</span>
              {[
                { key: 'all', label: 'Semua' },
                { key: 'gui', label: 'GUI & HUD' },
                { key: 'icons', label: 'Ikon & Item' },
                { key: 'buttons', label: 'Tombol' },
                { key: 'environment', label: 'Latar & Props' },
                { key: 'characters', label: 'Karakter' }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded text-xs font-bold border transition-all ${
                    selectedCategory === cat.key 
                      ? theme.buttonPrimary + ' scale-105'
                      : 'border-current/30 hover:bg-black/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Filter Rentang Harga */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase">Harga:</span>
              <div className="inline-flex rounded overflow-hidden border-2 border-current">
                <button 
                  onClick={() => setSelectedPrice('all')}
                  className={`px-3 py-1 text-xs font-bold ${selectedPrice === 'all' ? 'bg-current text-slate-900' : 'hover:bg-black/10'}`}
                >
                  Semua
                </button>
                <button 
                  onClick={() => setSelectedPrice('free')}
                  className={`px-3 py-1 text-xs font-bold ${selectedPrice === 'free' ? 'bg-current text-slate-900' : 'hover:bg-black/10'}`}
                >
                  Gratis
                </button>
                <button 
                  onClick={() => setSelectedPrice('paid')}
                  className={`px-3 py-1 text-xs font-bold ${selectedPrice === 'paid' ? 'bg-current text-slate-900' : 'hover:bg-black/10'}`}
                >
                  Berbayar
                </button>
              </div>
            </div>

          </div>

          {/* Menampilkan jumlah filter aktif */}
          <div className="text-[11px] opacity-80 flex items-center justify-between">
            <span>Ditemukan: <strong className="text-base">{filteredAssets.length}</strong> aset pas dengan kriteria</span>
            {(selectedCategory !== 'all' || selectedPrice !== 'all' || searchQuery !== '') && (
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPrice('all');
                  setSearchQuery('');
                  setSortBy('latest');
                }}
                className="text-xs text-rose-500 hover:underline font-bold"
              >
                Reset Semua Filter ×
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ================= GRID LISTING ASET (P0 & P1) ================= */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {isLoading ? (
          // SKELETON LOADING STATE UNTUK GAYA RETRO
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className={`${theme.card} p-4 animate-pulse opacity-60 flex flex-col justify-between h-[380px]`}>
                <div className="w-full h-44 bg-slate-800 rounded mb-4 flex items-center justify-center">
                  <Gamepad2 className="w-12 h-12 opacity-35" />
                </div>
                <div>
                  <div className="h-6 bg-slate-700 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-slate-700 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-slate-700 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-700 rounded w-5/6" />
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="h-8 bg-slate-700 rounded w-20" />
                  <div className="h-8 bg-slate-700 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredAssets.length === 0 ? (
          // KONDISI JIKA TIDAK ADA ASET YANG DITEMUKAN
          <div className={`${theme.card} p-12 text-center max-w-xl mx-auto`}>
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-bold uppercase mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Tidak Ada Aset
            </h3>
            <p className="text-sm opacity-80 mb-6">
              Maaf, tidak ada aset game yang sesuai dengan kriteria filter pencarian Anda saat ini.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPrice('all');
                setSearchQuery('');
              }}
              className={`px-4 py-2 ${theme.buttonPrimary} rounded font-bold text-xs`}
            >
              Kembali ke Semua Aset
            </button>
          </div>
        ) : (
          // GRID SEBENARNYA
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map(asset => (
              <div 
                key={asset.id} 
                className={`${theme.card} group flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-all duration-300 relative overflow-hidden`}
              >
                
                {/* Visual Preview Asset & Hover Action */}
                <div className="relative aspect-video w-full border-b-4 border-current overflow-hidden bg-slate-950">
                  {asset.svgPreview}
                  
                  {/* Badge Label Kategori di Pojok Kiri */}
                  <span className="absolute top-2.5 left-2.5 bg-slate-950/95 text-white text-[9px] font-bold px-2 py-1 rounded border border-white/20 uppercase tracking-widest">
                    {asset.category}
                  </span>

                  {/* Badge Harga */}
                  <span className={`absolute top-2.5 right-2.5 text-xs font-bold px-2.5 py-1 rounded shadow-md uppercase ${
                    asset.isFree ? theme.badgeFree : theme.badgePaid
                  }`}>
                    {asset.isFree ? 'FREE' : `$${asset.price}`}
                  </span>

                  {/* Overlay interaktif saat hover untuk Quick View */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 gap-3">
                    <button 
                      onClick={() => setSelectedAsset(asset)}
                      className="px-3 py-1.5 bg-white text-slate-950 text-xs font-bold rounded flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      Detail Spek
                    </button>
                    <a 
                      href={asset.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded flex items-center gap-1 hover:scale-105 active:scale-95 transition-all border border-rose-400"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Unduh Aset
                    </a>
                  </div>
                </div>

                {/* Konten Kartu */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Judul & Tag */}
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg leading-snug group-hover:text-amber-400 transition-colors">
                        {asset.title}
                      </h3>
                    </div>

                    {/* Deskripsi Singkat */}
                    <p className="text-xs opacity-85 leading-relaxed mb-4 line-clamp-2">
                      {asset.shortDesc}
                    </p>

                    {/* Kumpulan Tag */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {asset.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-black/30 px-2 py-0.5 rounded border border-current/10">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tombol Aksi Bawah */}
                  <div className="pt-3 border-t-2 border-dashed border-current/10 flex items-center justify-between gap-2 mt-auto">
                    {/* Tombol Bagikan */}
                    <button 
                      onClick={(e) => handleShare(asset.title, e)}
                      className={`text-[11px] font-semibold flex items-center gap-1 py-1 px-2.5 rounded border border-current/30 hover:bg-black/10 active:scale-95 transition-all`}
                      title="Salin tautan aset ini"
                    >
                      {copiedText === asset.title ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-3 h-3" />
                          <span>Salin Link</span>
                        </>
                      )}
                    </button>

                    {/* Tombol Detail/Unduh Utama */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setSelectedAsset(asset)}
                        className={`p-1.5 rounded ${theme.buttonSecondary} border text-xs`}
                        title="Info Detail"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                      
                      <a 
                        href={asset.itchUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center gap-1.5 py-1.5 px-3 rounded text-xs font-bold ${theme.buttonPrimary}`}
                      >
                        <span>Unduh</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}
      </main>

      {/* ================= MODAL DETIL: QUICK VIEW (P1 UPGRADE) ================= */}
      {selectedAsset && (
        <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className={`${theme.modalBg} w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl relative my-8`}>
            
            {/* Tombol Tutup Pojok */}
            <button 
              onClick={() => setSelectedAsset(null)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white p-1.5 rounded-full border border-white/20 z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gambar Pratinjau Lebar */}
            <div className="w-full aspect-video bg-slate-950 border-b-4 border-current relative">
              {selectedAsset.svgPreview}
              <span className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1 rounded border border-white/20">
                SAMPEL VISUAL ASET
              </span>
            </div>

            {/* Info Konten Modal */}
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Press Start 2P', sans-serif", fontSize: '1.05rem' }}>
                  {selectedAsset.title}
                </h3>
                <span className={`text-sm font-bold px-3 py-1 rounded ${selectedAsset.isFree ? theme.badgeFree : theme.badgePaid}`}>
                  {selectedAsset.isFree ? 'FREE DOWNLOAD' : `$${selectedAsset.price}`}
                </span>
              </div>

              {/* Tag di Modal */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedAsset.tags.map(tag => (
                  <span key={tag} className="text-xs bg-black/40 px-2.5 py-0.5 rounded border border-current/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Deskripsi Lengkap */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase mb-1.5 tracking-wider opacity-75">Deskripsi Produk:</h4>
                <p className="text-sm leading-relaxed opacity-90">
                  {selectedAsset.longDesc}
                </p>
              </div>

              {/* Grid Spesifikasi Teknis & Palet Warna */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Spesifikasi Teknis */}
                <div className="p-3.5 bg-black/30 rounded border border-current/10">
                  <h4 className="text-xs font-bold uppercase mb-2.5 flex items-center gap-1.5">
                    <Grid className="w-4 h-4 text-amber-400" />
                    Spesifikasi Teknis
                  </h4>
                  <ul className="text-xs space-y-2">
                    <li className="flex justify-between border-b border-current/10 pb-1">
                      <span className="opacity-75">Resolusi Grid:</span>
                      <strong className="font-semibold">{selectedAsset.specs.grid}</strong>
                    </li>
                    <li className="flex justify-between border-b border-current/10 pb-1">
                      <span className="opacity-75">Format Berkas:</span>
                      <strong className="font-semibold">{selectedAsset.specs.format}</strong>
                    </li>
                    <li className="flex justify-between border-b border-current/10 pb-1">
                      <span className="opacity-75">Lisensi Aset:</span>
                      <strong className="font-semibold">{selectedAsset.specs.license}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-75">Versi Rilis:</span>
                      <strong className="font-semibold">{selectedAsset.specs.version}</strong>
                    </li>
                  </ul>
                </div>

                {/* Palet Warna Terpakai */}
                <div className="p-3.5 bg-black/30 rounded border border-current/10">
                  <h4 className="text-xs font-bold uppercase mb-2.5 flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-emerald-400" />
                    Palet Warna Seni
                  </h4>
                  <p className="text-[10px] opacity-75 mb-2.5 leading-tight">
                    Palet orisinal yang digunakan oleh sketpixel dalam menggambar paket aset game ini:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAsset.colors.map(color => (
                      <div 
                        key={color} 
                        className="w-8 h-8 rounded-md border border-white/30 cursor-pointer hover:scale-110 active:scale-90 transition-transform relative group/color"
                        style={{ backgroundColor: color }}
                        title={color}
                      >
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-[8px] px-1 py-0.5 rounded opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-1">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tombol Aksi Bawah */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-dashed border-current/20">
                <button 
                  onClick={(e) => handleShare(selectedAsset.title, e)}
                  className={`text-xs font-semibold px-4 py-2 border-2 border-current rounded hover:bg-black/10 transition-colors flex items-center gap-2`}
                >
                  {copiedText === selectedAsset.title ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Link Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4" />
                      <span>Bagikan Tautan</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedAsset(null)}
                    className="px-4 py-2 text-xs font-bold hover:underline"
                  >
                    Batal
                  </button>
                  <a 
                    href={selectedAsset.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 py-2.5 px-6 rounded text-sm font-bold ${theme.buttonPrimary}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh di itch.io</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ================= KARTU SEPUTAR CARA UPDATE MANUAL (DOCK BAWAH) ================= */}
      <section className="max-w-7xl mx-auto px-4 py-6 mt-10">
        <div className="border-4 border-dashed border-current/20 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 mt-0.5 text-amber-500 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide">Panduan Pengembang / Klien: Pembaruan Manual</h4>
              <p className="text-xs opacity-75 mt-1 max-w-2xl leading-relaxed">
                Katalog portfolio ini dirancang *tanpa dependensi database eksternal* agar performa halaman dapat dimuat instan. Untuk menambah, merubah, atau menghapus item, developer atau pemilik situs cukup membuka berkas kodenya dan memperbarui array data objek berlabel <code className="bg-black/20 px-1 py-0.5 rounded font-mono text-rose-400">ASSETS_DATA</code> yang diletakkan pada bagian paling atas kode React ini.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center md:text-right">
            <p className="text-[10px] opacity-75 uppercase">Est. Waktu Kerja</p>
            <p className="text-base font-black text-emerald-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              ~3 MENIT
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full text-center py-8 mt-12 border-t border-current/10 text-xs opacity-75">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span>© 2026</span>
            <strong className="font-bold">{CREATOR_PROFILE.name}</strong>
            <span>• Seluruh aset bernaung di bawah payung hak cipta masing-masing.</span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dibuat penuh dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>oleh solo-builder untuk komunitas game dev.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}