-- =========================================================================
-- SUPABASE DATABASE SETUP & INITIAL SEED DATA
-- copy and paste this script into your Supabase SQL Editor (SQL Editor -> New Query)
-- =========================================================================

-- 1. Create the assets table
CREATE TABLE IF NOT EXISTS public.assets (
    id text PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    title text NOT NULL,
    category text NOT NULL,
    tags text[] NOT NULL,
    price numeric NOT NULL,
    is_free boolean NOT NULL,
    short_desc text NOT NULL,
    long_desc text NOT NULL,
    itch_url text NOT NULL,
    release_date date NOT NULL,
    downloads_count integer DEFAULT 0 NOT NULL,
    specs jsonb NOT NULL,
    colors text[] NOT NULL,
    svg_preview text NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
-- Allow anyone (public/anonymous) to read the assets data
CREATE POLICY "Allow public read access" ON public.assets
    FOR SELECT TO public USING (true);

-- Allow authenticated admins to do everything (Insert, Update, Delete, Select)
CREATE POLICY "Allow authenticated admin full control" ON public.assets
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 4. Insert initial seed data from the current portfolio
INSERT INTO public.assets (
    id, title, category, tags, price, is_free, short_desc, long_desc, itch_url, release_date, downloads_count, specs, colors, svg_preview
) VALUES 
(
    'retro-rpg-gui',
    'Retro RPG GUI & Hud Pack',
    'gui',
    ARRAY['GUI', 'RPG', '16-Bit', 'HUD'],
    1.99,
    false,
    'Paket GUI lengkap bertema RPG klasik 16-bit untuk kebutuhan HUD, menu, dan dialog game Anda.',
    'Didesain khusus untuk mempermudah developer game RPG klasik. Paket ini mencakup berbagai komponen antarmuka seperti bar kesehatan, kotak dialog, tombol interaktif, slot inventaris, dan jendela menu utama yang siap pakai.',
    'https://sketpixel.itch.io/',
    '2026-05-15',
    340,
    '{"grid": "16x16 & 32x32", "format": "PNG (Sprite Sheets & Slices)", "license": "CC BY 4.0 (Komersial & Personal)", "version": "v1.2"}'::jsonb,
    ARRAY['#2e222f', '#3e3546', '#625565', '#966c6c', '#ab947a', '#ffd541', '#ff5277'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-slate-950">
        <rect x="5" y="5" width="90" height="90" rx="3" fill="#2d1b33" stroke="#ffd541" stroke-width="2" />
        <rect x="15" y="15" width="70" height="15" fill="#4d325c" rx="1" />
        <text x="50" y="25" fill="#ffd541" font-size="6" font-family="''Press Start 2P'', monospace" text-anchor="middle">STATUS BAR</text>
        <rect x="15" y="40" width="50" height="6" fill="#ff5277" />
        <rect x="15" y="50" width="40" height="6" fill="#3cd070" />
        <rect x="15" y="60" width="60" height="6" fill="#00bfff" />
        <circle cx="75" cy="45" r="5" fill="#ffd541" />
        <rect x="15" y="75" width="70" height="12" fill="#1f1124" stroke="#4d325c" stroke-width="1" />
        <text x="20" y="83" fill="#ab947a" font-size="4" font-family="sans-serif">Mulai Petualangan Baru...</text>
      </svg>'
),
(
    'weather-icon-set',
    'Pixel Weather & Status Icons',
    'icons',
    ARRAY['Icons', 'Weather', '8-Bit', 'UI'],
    0.00,
    true,
    'Set ikon cuaca dan status lingkungan bergaya pixel art minimalis untuk HUD game petualangan.',
    'Kumpulan ikon berukuran 16x16 piksel yang menggambarkan berbagai kondisi cuaca (cerah, hujan, badai, bersalju) serta efek status lingkungan (beracun, panas ekstrem, membeku) untuk melengkapi imersifitas game Anda.',
    'https://sketpixel.itch.io/',
    '2026-06-01',
    1250,
    '{"grid": "16x16", "format": "PNG Sprite Sheet", "license": "Gratis untuk Proyek Non-Komersial", "version": "v1.0"}'::jsonb,
    ARRAY['#0f172a', '#38bdf8', '#fbbf24', '#94a3b8', '#ffffff', '#ef4444'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-slate-900">
        <circle cx="40" cy="40" r="15" fill="#fbbf24" />
        <rect x="25" y="45" width="50" height="20" rx="10" fill="#94a3b8" opacity="0.9" />
        <rect x="35" y="38" width="35" height="20" rx="8" fill="#cbd5e1" opacity="0.9" />
        <rect x="35" y="70" width="2" height="6" fill="#38bdf8" />
        <rect x="47" y="72" width="2" height="6" fill="#38bdf8" />
        <rect x="58" y="69" width="2" height="6" fill="#38bdf8" />
        <rect x="65" y="73" width="2" height="6" fill="#38bdf8" />
      </svg>'
),
(
    'cyberpunk-buttons-pack',
    'Cyberpunk Futuristic Button Pack',
    'buttons',
    ARRAY['Buttons', 'Cyberpunk', 'Futuristic', 'Neon'],
    1.00,
    false,
    'Tombol interaktif bertema Cyberpunk futuristik dengan efek neon menyala dan variasi status hover.',
    'Tingkatkan estetika sci-fi game Anda dengan paket tombol neon futuristik ini. Berisi berbagai bentuk tombol (lingkaran, persegi, panjang) dengan kondisi normal, hover, dan pressed yang siap diintegrasikan.',
    'https://sketpixel.itch.io/',
    '2026-04-20',
    480,
    '{"grid": "32x32 & 64x16", "format": "PNG, Aseprite file", "license": "CC BY 4.0 (Boleh Komersial)", "version": "v2.0"}'::jsonb,
    ARRAY['#09090b', '#06b6d4', '#ec4899', '#a855f7', '#ffffff'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-zinc-950">
        <rect x="10" y="20" width="80" height="20" fill="#09090b" stroke="#ec4899" stroke-width="2" />
        <text x="50" y="33" fill="#ec4899" font-size="6" font-family="''Press Start 2P'', monospace" text-anchor="middle">PLAY GAME</text>
        <line x1="12" y1="36" x2="25" y2="36" stroke="#06b6d4" stroke-width="2" />
        <rect x="10" y="55" width="80" height="20" fill="#ec4899" stroke="#ffffff" stroke-width="2" />
        <text x="50" y="68" fill="#09090b" font-size="6" font-family="''Press Start 2P'', monospace" text-anchor="middle">HOVER STATE</text>
        <line x1="12" y1="71" x2="25" y2="71" stroke="#09090b" stroke-width="2" />
      </svg>'
),
(
    'trash-street-assets',
    '8-Bit Trash & Street Prop Pack',
    'environment',
    ARRAY['Environment', 'Props', '8-Bit', 'Urban'],
    1.00,
    false,
    'Aset dekorasi jalanan perkotaan kumuh bergaya retro, mulai dari tempat sampah, lampu jalan, hingga kardus.',
    'Sangat cocok untuk game platformer 2D atau top-down berlatar belakang kota modern atau pasca-apokaliptik. Berisi lebih dari 40 tipe objek lingkungan jalanan yang terperinci.',
    'https://sketpixel.itch.io/',
    '2026-03-10',
    290,
    '{"grid": "16x16", "format": "PNG Tileset", "license": "CC BY 4.0", "version": "v1.0"}'::jsonb,
    ARRAY['#1c1917', '#44403c', '#78716c', '#a8a29e', '#16a34a', '#dc2626'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-stone-900">
        <rect x="25" y="10" width="4" height="80" fill="#44403c" />
        <circle cx="27" cy="15" r="8" fill="#fef08a" opacity="0.8" />
        <rect x="55" y="50" width="22" height="30" fill="#78716c" rx="2" />
        <rect x="52" y="46" width="28" height="4" fill="#44403c" rx="1" />
        <line x1="60" y1="55" x2="60" y2="75" stroke="#44403c" stroke-width="2" />
        <line x1="66" y1="55" x2="66" y2="75" stroke="#44403c" stroke-width="2" />
        <line x1="72" y1="55" x2="72" y2="75" stroke="#44403c" stroke-width="2" />
      </svg>'
),
(
    'fantasy-item-icons',
    'Fantasy Roguelike Item Pack',
    'icons',
    ARRAY['Icons', 'Fantasy', 'Roguelike', 'Items'],
    0.00,
    true,
    'Koleksi lengkap ikon item fantasi gratis termasuk senjata, ramuan magis, permata, dan gulungan mantra.',
    'Kumpulan 50+ item fantasi berkualitas tinggi yang dirancang khusus untuk game bergenre RPG, Roguelike, atau petualangan taktis. Memiliki palet warna kontras tinggi agar mudah diidentifikasi di layar kecil.',
    'https://sketpixel.itch.io/',
    '2026-02-28',
    1980,
    '{"grid": "16x16", "format": "PNG Sprite Sheet", "license": "Komersial & Personal (Wajib Kredit)", "version": "v1.1"}'::jsonb,
    ARRAY['#0f051d', '#3c096c', '#7b2cbf', '#c77dff', '#e0aaff', '#e2e8f0'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-violet-950">
        <path d="M40 30 h20 v10 l15 20 v20 h-50 v-20 l15 -20 z" fill="#3c096c" stroke="#e0aaff" stroke-width="3" />
        <rect x="45" y="20" width="10" height="10" fill="#e2e8f0" />
        <path d="M22 62 h56 v15 h-56 z" fill="#c77dff" />
        <polygon points="50,45 53,50 58,50 54,53 56,58 50,55 44,58 46,53 42,50 47,50" fill="#ffffff" />
      </svg>'
),
(
    'chibi-monster-sprites',
    'Cute Chibi Slime & Monster Pack',
    'characters',
    ARRAY['Characters', 'Sprites', 'Chibi', 'Slime'],
    2.50,
    false,
    'Lembar animasi karakter monster chibi yang lucu, lengkap dengan status jalan, menyerang, dan terluka.',
    'Dapatkan 4 varian monster slime imut dengan total lebih dari 24 frame animasi per monster. Animasi telah diuji kelancarannya untuk game engine terpopuler seperti Godot, Unity, dan Construct 3.',
    'https://sketpixel.itch.io/',
    '2026-06-15',
    150,
    '{"grid": "32x32", "format": "PNG Sprite Sheets (Aseprite file incl.)", "license": "CC BY-ND 4.0", "version": "v1.0"}'::jsonb,
    ARRAY['#052e16', '#15803d', '#22c55e', '#86efac', '#f43f5e', '#ffffff'],
    '<svg viewBox="0 0 100 100" class="w-full h-full bg-emerald-950">
        <path d="M20 70 C20 40, 80 40, 80 70 C80 80, 20 80, 20 70 Z" fill="#22c55e" stroke="#052e16" stroke-width="3" />
        <ellipse cx="40" cy="58" rx="4" ry="6" fill="#052e16" />
        <ellipse cx="60" cy="58" rx="4" ry="6" fill="#052e16" />
        <circle cx="38" cy="56" r="1.5" fill="#ffffff" />
        <circle cx="58" cy="56" r="1.5" fill="#ffffff" />
        <ellipse cx="32" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="68" cy="64" rx="3" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="50" cy="78" rx="35" ry="5" fill="#052e16" opacity="0.4" />
      </svg>'
)
ON CONFLICT (id) DO NOTHING;
