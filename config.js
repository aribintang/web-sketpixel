// ==========================================
// SUPABASE CLIENT CONFIGURATION
// ==========================================
// Masukkan URL dan ANON_KEY proyek Supabase Anda di bawah ini.
// Informasi ini aman dipublikasikan di frontend karena keamanan data 
// dilindungi menggunakan Row Level Security (RLS) di database Supabase.

const SUPABASE_URL = "https://ioqowusxezxarmloguwo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_vj6CEYaj8tiJjJm1XAelNg_KWCDThk9";

let supabaseClient = null;

if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
  if (SUPABASE_URL && SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_URL.trim() !== "") {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } else {
    console.warn("Supabase URL belum dikonfigurasi di config.js. Aplikasi akan menggunakan data statis cadangan.");
  }
} else {
  console.error("Library Supabase SDK gagal dimuat. Pastikan Anda terhubung ke internet.");
}

// Daftarkan ke window agar bisa diakses global oleh script lain (app.js, admin.js)
window.supabaseClient = supabaseClient;
