// ==========================================
// DATA KATALOG UTAMA (MUDAH DI-UPDATE DI SINI)
// ==========================================
// Untuk memperbarui katalog, Developer cukup menambah, mengubah, atau menghapus
// objek di dalam array ASSETS_DATA di bawah ini sesuai listing di itch.io.
const BACKUP_ASSETS_DATA = [
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-slate-950">
        <rect x="5" y="5" width="90" height="90" rx="3" fill="#2d1b33" stroke="#ffd541" stroke-width="2" />
        <rect x="15" y="15" width="70" height="15" fill="#4d325c" rx="1" />
        <text x="50" y="25" fill="#ffd541" font-size="6" font-family="'Press Start 2P', monospace" text-anchor="middle">STATUS BAR</text>
        <rect x="15" y="40" width="50" height="6" fill="#ff5277" />
        <rect x="15" y="50" width="40" height="6" fill="#3cd070" />
        <rect x="15" y="60" width="60" height="6" fill="#00bfff" />
        <circle cx="75" cy="45" r="5" fill="#ffd541" />
        <rect x="15" y="75" width="70" height="12" fill="#1f1124" stroke="#4d325c" stroke-width="1" />
        <text x="20" y="83" fill="#ab947a" font-size="4" font-family="sans-serif">Mulai Petualangan Baru...</text>
      </svg>
    `
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-slate-900">
        <circle cx="40" cy="40" r="15" fill="#fbbf24" />
        <rect x="25" y="45" width="50" height="20" rx="10" fill="#94a3b8" opacity="0.9" />
        <rect x="35" y="38" width="35" height="20" rx="8" fill="#cbd5e1" opacity="0.9" />
        <rect x="35" y="70" width="2" height="6" fill="#38bdf8" />
        <rect x="47" y="72" width="2" height="6" fill="#38bdf8" />
        <rect x="58" y="69" width="2" height="6" fill="#38bdf8" />
        <rect x="65" y="73" width="2" height="6" fill="#38bdf8" />
      </svg>
    `
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-zinc-950">
        <rect x="10" y="20" width="80" height="20" fill="#09090b" stroke="#ec4899" stroke-width="2" />
        <text x="50" y="33" fill="#ec4899" font-size="6" font-family="'Press Start 2P', monospace" text-anchor="middle">PLAY GAME</text>
        <line x1="12" y1="36" x2="25" y2="36" stroke="#06b6d4" stroke-width="2" />
        <rect x="10" y="55" width="80" height="20" fill="#ec4899" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="68" fill="#09090b" font-size="6" font-family="'Press Start 2P', monospace" text-anchor="middle">HOVER STATE</text>
        <line x1="12" y1="71" x2="25" y2="71" stroke="#09090b" stroke-width="2" />
      </svg>
    `
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-stone-900">
        <rect x="25" y="10" width="4" height="80" fill="#44403c" />
        <circle cx="27" cy="15" r="8" fill="#fef08a" opacity="0.8" />
        <rect x="55" y="50" width="22" height="30" fill="#78716c" rx="2" />
        <rect x="52" y="46" width="28" height="4" fill="#44403c" rx="1" />
        <line x1="60" y1="55" x2="60" y2="75" stroke="#44403c" stroke-width="2" />
        <line x1="66" y1="55" x2="66" y2="75" stroke="#44403c" stroke-width="2" />
        <line x1="72" y1="55" x2="72" y2="75" stroke="#44403c" stroke-width="2" />
      </svg>
    `
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-violet-950">
        <path d="M40 30 h20 v10 l15 20 v20 h-50 v-20 l15 -20 z" fill="#3c096c" stroke="#e0aaff" stroke-width="3" />
        <rect x="45" y="20" width="10" height="10" fill="#e2e8f0" />
        <path d="M22 62 h56 v15 h-56 z" fill="#c77dff" />
        <polygon points="50,45 53,50 58,50 54,53 56,58 50,55 44,58 46,53 42,50 47,50" fill="#ffffff" />
      </svg>
    `
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
    svgPreview: `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-emerald-950">
        <path d="M20 70 C20 40, 80 40, 80 70 C80 80, 20 80, 20 70 Z" fill="#22c55e" stroke="#052e16" stroke-width="3" />
        <ellipse cx="40" cy="58" rx="4" ry="6" fill="#052e16" />
        <ellipse cx="60" cy="58" rx="4" ry="6" fill="#052e16" />
        <circle cx="38" cy="56" r="1.5" fill="#ffffff" />
        <circle cx="58" cy="56" r="1.5" fill="#ffffff" />
        <ellipse cx="32" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="68" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="50" cy="78" rx="35" ry="5" fill="#052e16" opacity="0.4" />
      </svg>
    `
  }
];

let ASSETS_DATA = [];

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
    downloads: '4,500+',
    rating: '5.0★'
  }
};

// ==========================================
// APLIKASI STATE (MANAJEMEN KONDISI)
// ==========================================
const state = {
  selectedCategory: 'all',
  selectedPrice: 'all',
  searchQuery: '',
  sortBy: 'latest',
  selectedAsset: null,
  isCrtEnabled: true,
  currentTheme: 'synthwave', // 'synthwave' | 'gameboy' | 'cozy-retro'
  copiedText: '',
  isLoading: false
};

let loadingTimeout = null;

// Fungsi update state dan render ulang UI secara reaktif
function setState(updates) {
  Object.assign(state, updates);
  render();
}

// Simulasi Loading Skeleton Retro
function triggerFilterChange(updates) {
  if (loadingTimeout) clearTimeout(loadingTimeout);
  
  setState({ ...updates, isLoading: true });
  
  loadingTimeout = setTimeout(() => {
    setState({ isLoading: false });
  }, 450);
}

// ==========================================
// RENDERER LOGIC (MENULIS KE DOM)
// ==========================================

// 1. Render Tema & CRT Status ke container utama
function renderThemeAndCrt() {
  const root = document.documentElement;
  root.setAttribute('data-theme', state.currentTheme);
  
  if (state.isCrtEnabled) {
    document.body.classList.add('crt-active');
  } else {
    document.body.classList.remove('crt-active');
  }
}

// 2. Render Profil Bio Kreator (Showcase)
function renderProfile() {
  const profileContainer = document.getElementById('profile-showcase');
  if (!profileContainer) return;

  const totalPacks = ASSETS_DATA.length;
  const freePacks = ASSETS_DATA.filter(a => a.isFree).length;

  profileContainer.innerHTML = `
    <!-- Bio Card -->
    <div class="card-retro bio-main-card">
      <div class="avatar-wrapper">
        <div class="avatar-border">
          <svg viewBox="0 0 100 100" class="w-full h-full">
            <rect x="0" y="0" width="100" height="100" fill="#2e1065" />
            <rect x="25" y="15" width="50" height="15" fill="#f43f5e" />
            <rect x="20" y="25" width="60" height="35" fill="#f43f5e" />
            <rect x="30" y="35" width="40" height="35" fill="#fed7aa" />
            <rect x="25" y="45" width="50" height="10" fill="#000000" />
            <rect x="30" y="47" width="15" height="6" fill="#00ffff" />
            <rect x="55" y="47" width="15" height="6" fill="#00ffff" />
            <rect x="45" y="62" width="10" height="3" fill="#f43f5e" />
            <rect x="20" y="70" width="60" height="30" fill="#ffd541" />
            <rect x="40" y="70" width="20" height="10" fill="#2e1065" />
          </svg>
        </div>
        <div class="avatar-badge">🟢 ONLINE</div>
      </div>

      <div class="bio-content">
        <div class="bio-header">
          <div>
            <h2>${CREATOR_PROFILE.name}</h2>
            <p class="bio-title">${CREATOR_PROFILE.title}</p>
          </div>
          <span class="status-bubble">
            <i data-lucide="sparkles" style="width: 14px; height: 14px;"></i>
            ${CREATOR_PROFILE.commissionStatus}
          </span>
        </div>
        
        <p class="bio-text">${CREATOR_PROFILE.bio}</p>
        
        <div class="contact-row">
          <a href="mailto:${CREATOR_PROFILE.socials.email}" class="btn-retro" style="font-size: 11px; padding: 5px 12px;">
            <i data-lucide="mail" style="width: 14px; height: 14px;"></i>
            Kirim Email
          </a>
          <div class="discord-badge">
            <i data-lucide="message-square" style="width: 14px; height: 14px;"></i>
            <span>Discord: <strong>${CREATOR_PROFILE.socials.discord}</strong></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Widget -->
    <div class="card-retro stats-card">
      <div>
        <h3 class="stats-title">
          <i data-lucide="layers" style="width: 16px; height: 16px;"></i>
          Statistik Kreator
        </h3>
        
        <div class="stats-grid" style="margin-top: 1rem;">
          <div class="stat-box">
            <p class="stat-label">Total Paket</p>
            <p class="stat-val">${totalPacks}</p>
          </div>
          <div class="stat-box">
            <p class="stat-label">Paket Gratis</p>
            <p class="stat-val" style="color: #34d399;">${freePacks}</p>
          </div>
          <div class="stat-box">
            <p class="stat-label">Unduhan</p>
            <p class="stat-val" style="color: #38bdf8;">${CREATOR_PROFILE.stats.downloads}</p>
          </div>
          <div class="stat-box">
            <p class="stat-label">Kepuasan</p>
            <p class="stat-val" style="color: #fbbf24;">${CREATOR_PROFILE.stats.rating}</p>
          </div>
        </div>
      </div>

      <div class="support-footer">
        <a href="${CREATOR_PROFILE.socials.koFi}" target="_blank" rel="noopener noreferrer" class="support-link">
          <i data-lucide="coffee" style="width: 15px; height: 15px;"></i>
          Dukung saya di Ko-fi / Donasi
        </a>
      </div>
    </div>
  `;
}

// 3. Render Grid Produk / Katalog Aset
function renderGallery() {
  const galleryContainer = document.getElementById('gallery-grid');
  const foundText = document.getElementById('found-count-text');
  const resetContainer = document.getElementById('reset-filter-container');

  if (!galleryContainer) return;

  // Saring & Urutkan Data Aset
  const filtered = ASSETS_DATA.filter(asset => {
    const matchCategory = state.selectedCategory === 'all' || asset.category === state.selectedCategory;
    const matchPrice = state.selectedPrice === 'all' || 
                       (state.selectedPrice === 'free' && asset.isFree) || 
                       (state.selectedPrice === 'paid' && !asset.isFree);
    
    const query = state.searchQuery.trim().toLowerCase();
    const matchSearch = !query || 
                        asset.title.toLowerCase().includes(query) || 
                        asset.tags.some(tag => tag.toLowerCase().includes(query)) ||
                        asset.shortDesc.toLowerCase().includes(query);
                        
    return matchCategory && matchPrice && matchSearch;
  }).sort((a, b) => {
    if (state.sortBy === 'latest') {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    }
    if (state.sortBy === 'price-low') {
      return a.price - b.price;
    }
    if (state.sortBy === 'price-high') {
      return b.price - a.price;
    }
    if (state.sortBy === 'popular') {
      return b.downloadsCount - a.downloadsCount;
    }
    return 0;
  });



  // A. RENDER LOADING STATE
  if (state.isLoading) {
    galleryContainer.innerHTML = Array(6).fill(0).map(() => `
      <div class="card-retro skeleton-card">
        <div class="skeleton-preview">
          <i data-lucide="gamepad-2"></i>
        </div>
        <div class="skeleton-body">
          <div class="skeleton-line title"></div>
          <div class="skeleton-line sub"></div>
          <div class="skeleton-line desc-1"></div>
          <div class="skeleton-line desc-2"></div>
        </div>
        <div class="skeleton-footer">
          <div class="skeleton-line btn-1"></div>
          <div class="skeleton-line btn-2"></div>
        </div>
      </div>
    `).join('');
    lucide.createIcons();
    return;
  }

  // B. RENDER EMPTY STATE
  if (filtered.length === 0) {
    galleryContainer.innerHTML = `
      <div class="card-retro empty-gallery-card">
        <div class="empty-gallery-icon">
          <i data-lucide="gamepad-2" style="width: 48px; height: 48px; color: var(--text-muted);"></i>
        </div>
        <h3 class="empty-gallery-title">Tidak Ada Aset</h3>
        <p class="empty-gallery-desc">
          Maaf, tidak ada aset game yang sesuai dengan kriteria filter pencarian Anda saat ini.
        </p>
        <button class="btn-retro-primary" id="btn-empty-clear" style="font-size: 11px;">
          Kembali ke Semua Aset
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // C. RENDER GRID KATALOG UTAMA
  galleryContainer.innerHTML = filtered.map(asset => {
    const isCopied = state.copiedText === asset.title;
    
    return `
      <div class="card-retro group-card" data-asset-id="${asset.id}">
        <!-- Visual Preview Box -->
        <div class="asset-preview-box">
          ${asset.svgPreview}
          
          <span class="asset-badge-cat">${asset.category}</span>
          
          <span class="asset-badge-price ${asset.isFree ? 'badge-free' : 'badge-paid'}">
            ${asset.isFree ? 'FREE' : `$${asset.price}`}
          </span>

          <!-- Overlay Hover Menu -->
          <div class="asset-hover-overlay">
            <button class="asset-hover-btn hover-btn-spec btn-trigger-detail" data-id="${asset.id}">
              <i data-lucide="maximize-2" style="width: 12px; height: 12px;"></i>
              Detail Spek
            </button>
            <a href="${asset.itchUrl}" target="_blank" rel="noopener noreferrer" class="asset-hover-btn hover-btn-dl">
              <i data-lucide="download" style="width: 12px; height: 12px;"></i>
              Unduh Aset
            </a>
          </div>
        </div>

        <!-- Body Content -->
        <div class="asset-body">
          <div class="asset-info">
            <h3 class="asset-title">${asset.title}</h3>
            <p class="asset-desc">${asset.shortDesc}</p>
            <div class="asset-tags">
              ${asset.tags.map(t => `<span class="tag-badge">#${t}</span>`).join('')}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="asset-actions">
            <button class="btn-share btn-trigger-share" data-title="${asset.title}">
              ${isCopied ? `
                <i class="share-success-text" data-lucide="check" style="width: 13px; height: 13px;"></i>
                <span class="share-success-text" style="font-weight: 800;">Tersalin!</span>
              ` : `
                <i data-lucide="book-open" style="width: 13px; height: 13px;"></i>
                <span>Salin Link</span>
              `}
            </button>

            <div class="btn-group-right">
              <button class="btn-icon-retro btn-trigger-detail" data-id="${asset.id}" title="Info Detail">
                <i data-lucide="info"></i>
              </button>
              <a href="${asset.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-text-retro">
                <span>Unduh</span>
                <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 4. Render Detail Modal Quick View
function renderModal() {
  const modalBackdrop = document.getElementById('asset-detail-modal');
  if (!modalBackdrop) return;

  const asset = state.selectedAsset;

  if (!asset) {
    modalBackdrop.classList.remove('open');
    return;
  }

  const isCopied = state.copiedText === asset.title;

  modalBackdrop.innerHTML = `
    <div class="modal-container">
      <!-- Close Button -->
      <button class="modal-close-btn" id="btn-modal-close">
        <i data-lucide="x" style="width: 18px; height: 18px;"></i>
      </button>

      <!-- SVG Preview -->
      <div class="modal-preview-box">
        ${asset.svgPreview}
        <span class="modal-preview-badge">SAMPEL VISUAL ASET</span>
      </div>

      <!-- Info Contents -->
      <div class="modal-body">
        <div class="modal-title-row">
          <h3 class="modal-title">${asset.title}</h3>
          <span class="asset-badge-price ${asset.isFree ? 'badge-free' : 'badge-paid'}" style="position: static; font-size: 13px; padding: 4px 12px;">
            ${asset.isFree ? 'FREE DOWNLOAD' : `$${asset.price}`}
          </span>
        </div>

        <div class="modal-tags">
          ${asset.tags.map(t => `<span class="tag-badge" style="font-size: 10px; padding: 3px 8px;">${t}</span>`).join('')}
        </div>

        <div class="modal-desc-box">
          <h4 class="modal-section-title">Deskripsi Produk:</h4>
          <p class="modal-desc-text">${asset.longDesc}</p>
        </div>

        <!-- Technical specs & color palettes -->
        <div class="modal-meta-grid">
          <!-- Specs -->
          <div class="modal-spec-card">
            <h4 class="modal-spec-title">
              <i data-lucide="grid" style="width: 14px; height: 14px; color: #fbbf24;"></i>
              Spesifikasi Teknis
            </h4>
            <ul class="modal-spec-list">
              <li class="modal-spec-item">
                <span class="modal-spec-label">Resolusi Grid:</span>
                <span class="modal-spec-val">${asset.specs.grid}</span>
              </li>
              <li class="modal-spec-item">
                <span class="modal-spec-label">Format Berkas:</span>
                <span class="modal-spec-val">${asset.specs.format}</span>
              </li>
              <li class="modal-spec-item">
                <span class="modal-spec-label">Lisensi Aset:</span>
                <span class="modal-spec-val">${asset.specs.license}</span>
              </li>
              <li class="modal-spec-item">
                <span class="modal-spec-label">Versi Rilis:</span>
                <span class="modal-spec-val">${asset.specs.version}</span>
              </li>
            </ul>
          </div>

          <!-- Color Palette -->
          <div class="modal-spec-card">
            <h4 class="modal-spec-title">
              <i data-lucide="palette" style="width: 14px; height: 14px; color: #34d399;"></i>
              Palet Warna Seni
            </h4>
            <p style="font-size: 10px; opacity: 0.75; line-height: 1.3;">
              Palet orisinal yang digunakan sketpixel dalam menggambar paket aset ini:
            </p>
            <div class="color-palette-grid">
              ${asset.colors.map(color => `
                <div class="color-palette-swatch" style="background-color: ${color};" data-color="${color}"></div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Modal Actions Footer -->
        <div class="modal-footer">
          <button class="btn-share-modal btn-trigger-share" data-title="${asset.title}">
            ${isCopied ? `
              <i class="share-success-text" data-lucide="check" style="width: 14px; height: 14px;"></i>
              <span class="share-success-text" style="font-weight: 800;">Link Berhasil Disalin!</span>
            ` : `
              <i data-lucide="book-open" style="width: 14px; height: 14px;"></i>
              <span>Bagikan Tautan</span>
            `}
          </button>

          <div class="modal-footer-right">
            <button class="modal-cancel-btn" id="btn-modal-cancel">Batal</button>
            <a href="${asset.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-retro-primary" style="padding: 7px 16px;">
              <i data-lucide="download" style="width: 14px; height: 14px;"></i>
              <span>Unduh di itch.io</span>
              <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
  lucide.createIcons();
}

// 5. Render active price filter button classes reactively
function renderFilters() {
  document.querySelectorAll('.price-btn').forEach(btn => {
    const priceVal = btn.getAttribute('data-price-val');
    if (priceVal === state.selectedPrice) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 6. General Master Render
function render() {
  renderThemeAndCrt();
  renderFilters();
  renderGallery();
  renderModal();
}

// ==========================================
// PENDUKUNG INTEGRASI & BAGI TAUTAN
// ==========================================

// Handle Salin Tautan (Copy Link deep link)
function handleShare(assetTitle, event) {
  if (event) event.stopPropagation();

  // Buat URL Deep Link menggunakan Hash
  const hash = assetTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const deepLinkUrl = `${window.location.origin}${window.location.pathname}#${hash}`;

  // Fallback Copy to Clipboard
  const textarea = document.createElement('textarea');
  textarea.value = deepLinkUrl;
  textarea.style.position = 'fixed'; // Hindari scrolling halaman
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Gagal menyalin link: ', err);
  }
  
  document.body.removeChild(textarea);

  // Ubah state copiedText untuk memicu pembaruan feedback teks
  setState({ copiedText: assetTitle });
  
  setTimeout(() => {
    setState({ copiedText: '' });
  }, 2000);
}

// Periksa Hash URL pada load pertama untuk Auto Open Detail modal
function checkUrlHash() {
  const hash = window.location.hash.substring(1);
  if (!hash) return;

  const found = ASSETS_DATA.find(asset => {
    const assetHash = asset.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return assetHash === hash || asset.id === hash;
  });

  if (found) {
    // Beri sedikit jeda agar loading transisi awal halaman lebih mulus
    setTimeout(() => {
      setState({ selectedAsset: found });
    }, 300);
  }
}

// ==========================================
// REGISTRASI EVENT LISTENERS (DELEGASI & CLICK)
// ==========================================
function setupEventListeners() {
  // A. Delegasi click untuk tombol di grid / modal (karena data dimuat dinamis)
  document.addEventListener('click', (e) => {
    // 1. Detail modal trigger
    const detailBtn = e.target.closest('.btn-trigger-detail');
    if (detailBtn) {
      const assetId = detailBtn.getAttribute('data-id');
      const asset = ASSETS_DATA.find(a => a.id === assetId);
      if (asset) setState({ selectedAsset: asset });
      return;
    }

    // 2. Share button trigger
    const shareBtn = e.target.closest('.btn-trigger-share');
    if (shareBtn) {
      const title = shareBtn.getAttribute('data-title');
      handleShare(title, e);
      return;
    }

    // 3. Close modal triggers
    const closeBtn = e.target.closest('#btn-modal-close');
    const cancelBtn = e.target.closest('#btn-modal-cancel');
    if (closeBtn || cancelBtn) {
      setState({ selectedAsset: null });
      return;
    }

    // 4. Modal backdrop click (tutup modal jika klik di luar box)
    if (e.target.id === 'asset-detail-modal') {
      setState({ selectedAsset: null });
      return;
    }

    // 5. Empty grid state "Kembali ke Semua Aset"
    if (e.target.id === 'btn-empty-clear') {
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      
      triggerFilterChange({
        selectedCategory: 'all',
        selectedPrice: 'all',
        searchQuery: ''
      });
      return;
    }

  });


  // D. Search Input dengan trigger loading state
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      triggerFilterChange({ searchQuery: e.target.value });
    });

    // Tombol X hapus teks pencarian
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        triggerFilterChange({ searchQuery: '' });
      });
    }
  }

  // G. Price selector filters
  document.querySelectorAll('.price-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const priceVal = btn.getAttribute('data-price-val');
      triggerFilterChange({ selectedPrice: priceVal });
    });
  });
}

// ==========================================
// SUPABASE DATA FETCHING
// ==========================================
async function fetchAssetsFromSupabase() {
  setState({ isLoading: true });
  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('assets')
        .select('*');
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        ASSETS_DATA = data.map(item => ({
          id: item.id,
          title: item.title,
          category: item.category,
          tags: item.tags || [],
          price: parseFloat(item.price),
          isFree: item.is_free,
          shortDesc: item.short_desc,
          longDesc: item.long_desc,
          itchUrl: item.itch_url,
          releaseDate: item.release_date,
          downloadsCount: item.downloads_count,
          specs: item.specs || {},
          colors: item.colors || [],
          svgPreview: item.svg_preview
        }));
      } else {
        console.log("Database kosong, menggunakan data cadangan statis.");
        ASSETS_DATA = BACKUP_ASSETS_DATA;
      }
    } catch (e) {
      console.error("Gagal menarik data dari Supabase, beralih ke data cadangan statis:", e);
      ASSETS_DATA = BACKUP_ASSETS_DATA;
    }
  } else {
    ASSETS_DATA = BACKUP_ASSETS_DATA;
  }
  
  setState({ isLoading: false });
  renderProfile();
  checkUrlHash();
}

// ==========================================
// INISIALISASI HALAMAN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  fetchAssetsFromSupabase();
});
