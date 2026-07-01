# PRD: Website Katalog Portofolio — Pixel Art Asset Showcase (sketpixel)

**Status:** Draft v1
**Owner:** Pixel (Solo Builder)
**Klien:** sketpixel (itch.io creator — pixel art game assets)
**Referensi:** https://sketpixel.itch.io/

---

## Problem Statement

sketpixel adalah pixel artist yang merilis aset game 2D (GUI elements, button packs, weather icons, trash asset packs — campuran free dan paid $1) melalui listing individual di itch.io. Saat ini, satu-satunya tempat calon buyer atau calon klien commission bisa melihat keseluruhan portofolio adalah profile page bawaan itch.io, yang tampilannya generik, tidak bisa dikustomisasi secara visual, dan tidak menonjolkan identitas personal sketpixel sebagai artist.

Tanpa katalog showcase yang representatif, calon klien, recruiter, atau sesama developer kesulitan menilai kualitas dan konsistensi gaya kerja sketpixel secara cepat dalam satu kunjungan. Ini berdampak pada hilangnya peluang branding di luar discovery internal itch.io, terutama saat link portofolio dibagikan ke konteks lain (CV, sosial media, komunitas game dev).

## Goals

1. **(User goal)** Visitor dapat menilai keseluruhan portofolio sketpixel dalam satu kunjungan, tanpa harus menjelajah listing itch.io satu per satu.
2. **(User goal)** Setiap aksi "download / lihat produk" berhasil mengarahkan visitor ke listing itch.io yang tepat, tanpa broken link.
3. **(Business goal)** Katalog tetap akurat dan mudah di-update saat ada rilis produk baru di itch.io, melalui proses update yang ringan (manual edit kode oleh developer) tanpa kebutuhan infrastruktur tambahan.
4. **(Business goal)** Website memperkuat personal branding sketpixel sebagai pixel artist, terpisah dari tampilan generik profile itch.io.
5. **(Execution goal)** MVP dapat di-deploy dan live dalam target waktu solo-build yang singkat (hari hingga minggu).

## Non-Goals

- **Tidak ada transaksi/checkout di website ini.** Seluruh proses pembelian/download tetap 100% terjadi di itch.io — itch.io sudah menghandle payment, file hosting, dan regional pricing; replikasi ini di luar scope showcase.
- **Tidak ada form kontak/commission request di v1.** Sudah dikonfirmasi out of scope oleh klien; reachability cukup lewat channel itch.io/sosial media existing.
- **Tidak ada sistem akun/login**, baik untuk visitor maupun admin. Katalog bersifat read-only publik dan tidak membutuhkan personalisasi user.
- **Tidak ada CMS/dashboard admin maupun fitur self-service editing untuk klien.** Update katalog dilakukan langsung oleh developer melalui edit kode/file data, bukan lewat antarmuka admin terpisah — menghindari kompleksitas build CMS untuk kebutuhan update yang frekuensinya rendah.
- **Tidak ada fitur review/rating/komentar dari visitor.** Fitur komunitas ini sudah ada secara native di itch.io; duplikasi berisiko memecah reputasi/review antara dua platform.

## User Stories

### Persona 1: Calon Buyer / Game Developer (Visitor)
- Sebagai indie game developer yang mencari aset, saya ingin melihat seluruh katalog aset sketpixel dalam satu grid visual, sehingga saya bisa cepat menilai gaya dan kualitas sebelum klik ke itch.io.
- Sebagai visitor, saya ingin tombol "Download / View on itch.io" pada tiap item, sehingga saya diarahkan langsung ke listing resmi tanpa langkah tambahan.
- Sebagai visitor di mobile, saya ingin layout katalog tetap nyaman dibaca di layar kecil, sehingga saya bisa browsing aset kapan saja.
- Sebagai visitor, saya ingin melihat status jelas jika sebuah produk free atau paid, sehingga saya tahu ekspektasi sebelum klik keluar ke itch.io.

### Persona 2: Calon Klien Commission / Recruiter
- Sebagai recruiter atau studio kecil, saya ingin melihat bio singkat & identitas sketpixel sebagai artist, sehingga saya punya konteks siapa di balik karya sebelum menghubungi lewat channel itch.io/sosial.
- Sebagai recruiter, saya ingin melihat konsistensi gaya visual di seluruh portofolio dalam satu tampilan, sehingga saya bisa menilai cepat apakah gaya ini cocok untuk proyek saya.

### Persona 3: Klien / Site Owner (sketpixel)
- Sebagai pemilik situs, saya ingin menginformasikan rilis produk baru ke developer (mis. via chat), lalu katalog di-update lewat edit kode dalam waktu singkat, sehingga portofolio saya selalu mencerminkan rilis terbaru tanpa proses yang rumit.
- Sebagai pemilik situs, saya ingin produk yang sudah saya unpublish/hapus di itch.io turut dihapus dari katalog saat developer melakukan update berikutnya, sehingga tidak ada broken card yang mempermalukan branding saya.

## Requirements

### Must-Have (P0)

**1. Katalog Grid Display**
- Given visitor membuka homepage, when halaman selesai load, then seluruh produk *published* milik sketpixel ditampilkan dalam grid card berisi thumbnail/cover, judul, short description, dan price tag (Free / $1 / dst).

**2. Direct Link ke itch.io**
- Given visitor klik tombol "Download" / "View on itch.io" pada sebuah card, when diklik, then visitor diarahkan (tab baru) langsung ke URL listing produk yang sesuai persis di itch.io, tanpa halaman perantara.

**3. Manual Catalog Update**
- Given klien menginformasikan rilis produk baru atau perubahan listing di itch.io, when developer melakukan update, then data katalog (judul, thumbnail, deskripsi singkat, price tag, URL itch.io) ditambahkan/diedit langsung melalui file data terstruktur (mis. JSON/array konfigurasi) di dalam kode, tanpa memerlukan database atau backend tambahan.
- Acceptance: struktur data katalog dirancang sederhana (single source file) agar proses tambah/edit/hapus item bisa dilakukan dalam hitungan menit oleh developer.
- Acceptance: setiap field per item minimal mencakup — nama produk, thumbnail/cover image, deskripsi singkat, price tag (Free/$1/dst), dan URL listing itch.io yang valid.

**4. Responsive Layout**
- Given visitor mengakses dari device apapun (mobile/tablet/desktop), then layout grid menyesuaikan jumlah kolom tanpa elemen terpotong atau overflow.

**5. Manual Remove Produk Unpublished**
- Given sebuah produk diubah menjadi private/unpublished/dihapus di itch.io, when klien menginformasikan ke developer, then developer menghapus entry produk tersebut dari file data katalog pada update berikutnya.

### Nice-to-Have (P1)

1. **Filter/Kategori** — visitor dapat memfilter katalog berdasarkan tag (GUI/Buttons/Icons/dll) dan/atau Free vs Paid.
2. **Bio/About Section** — section singkat berisi nama, deskripsi diri, dan link ke sosial media/profile itch.io utama sketpixel.
3. **Sort/Urutan** — visitor dapat mengurutkan katalog (terbaru, atau terpopuler berdasarkan `downloads_count` dari API).
4. **Loading/Skeleton State** — tampilan skeleton saat data katalog sedang fetch, untuk persepsi performa yang lebih baik.

### Future Considerations (P2)

1. **Multi-creator support** — jika model ini ingin direplikasi sebagai template/produk SaaS untuk pixel artist lain, bukan situs one-off untuk satu klien.
2. **Analytics dashboard sederhana** untuk klien — insight klik tombol download per produk.
3. **Custom asset preview interaktif** (mis. live preview animasi button pack) di luar thumbnail statis bawaan itch.io.
4. **Notifikasi rilis produk baru** bagi follower/pengunjung berulang.

## Success Metrics

### Leading Indicators
- **Page load time** < 2.5 detik (LCP) di koneksi 4G — diukur via Lighthouse/PageSpeed Insights pada minggu pertama pasca-launch.
- **Click-through rate** ke itch.io dari katalog ≥ 15% dari total visitor unik — diukur via event tracking pada tombol "View on itch.io" (mis. Plausible/GA4, sebagai pertimbangan tooling).
- **Catalog freshness** — katalog ter-update (entry baru/edit/hapus) maksimal dalam 2x24 jam setelah klien menginformasikan perubahan ke developer — diukur secara kualitatif/self-tracked, bukan otomatis.

### Lagging Indicators
- Pertumbuhan referral traffic ke listing itch.io klien yang teratribusi dari website katalog, dibandingkan baseline sebelum website live — dievaluasi 1 bulan pasca-launch.
- Jumlah inbound commission inquiry yang klien terima via channel sosial/itch.io yang ia atribusikan ke website (self-reported oleh klien) — dievaluasi 1–3 bulan pasca-launch.

## Open Questions

1. **[Stakeholder/Klien]** Channel komunikasi apa yang dipakai klien untuk menginformasikan rilis/perubahan produk ke developer (chat, email, dll), agar proses manual update punya alur yang jelas dan tidak terlewat?
2. **[Design]** Skema kategori/tag untuk filter P1 — karena data diinput manual, kategori bisa langsung ditentukan saat entry ditambahkan. Apakah klien ingin terlibat menentukan kategori, atau diserahkan ke developer berdasarkan judul/deskripsi produk?

## Timeline Considerations

- Tidak ada hard deadline eksternal yang disebutkan. Mengikuti pola eksekusi solo-build sebelumnya, target realistis untuk v1 (P0 only) adalah hitungan hari hingga 1–2 minggu.
- Tidak ada dependency blocking dari sisi klien (tidak perlu API key atau akses teknis apa pun) — seluruh P0 dapat dikerjakan langsung begitu data awal katalog (daftar produk + thumbnail + deskripsi) dikumpulkan dari halaman itch.io klien.
- **Saran phasing:**
  - **Phase 1 (P0):** Katalog dengan data awal (input manual dari listing itch.io saat ini) + direct link ke itch.io + responsive layout. Bisa live cepat untuk validasi visual/branding.
  - **Phase 2 (P1):** Filter kategori, bio section, sorting — ditambahkan setelah v1 live dan mendapat feedback.

---

*PRD ini dibuat berdasarkan konfirmasi scope: tujuan utama = portfolio/personal branding, mekanisme update = manual edit kode oleh developer, dan tanpa fitur kontak/commission di v1.*
