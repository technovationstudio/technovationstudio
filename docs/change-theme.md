# Brief: Restyle Tema Warna Landing Page (Next.js + Tailwind v4)

## Konteks

Landing page saat ini menggunakan gradient teks (cyan → purple), background dark navy dengan radial glow/mesh, dan banyak warna aksen yang bersaing (cyan, purple, hijau badge, warna-warni tag stack). Ini terasa generic / "AI slop" karena polanya sangat umum di template hasil AI generator.

Tujuan restyle: bikin tampilan lebih "designed" dan minim, terinspirasi dari:

- Logo brand: hitam solid + satu warna aksen ungu/violet solid (tanpa gradient)
- Referensi Liveblocks.io: true black background, satu warna aksen dipakai sedikit & strategis, sisanya monokrom/netral

**Scope: HANYA warna/tema. Jangan ubah layout, struktur komponen, copy, atau spacing.**

---

## Prinsip Desain yang Harus Diikuti

1. **Satu warna aksen saja** — ambil warna ungu dari logo, jadikan satu-satunya accent color di seluruh halaman. Hapus cyan sebagai warna kompetitor.
2. **Tidak ada gradient di teks** — semua gradient text (`bg-clip-text` + gradient) diganti jadi warna solid. Highlight kata penting cukup pakai warna aksen solid.
3. **Tidak ada glow/radial mesh di background** — background jadi hitam solid/near-black polos. Kalau perlu tekstur, gunakan grid halus atau noise tipis dengan opacity sangat rendah, bukan warna-warni.
4. **Badge, tag, border → monokrom** — semua badge/tag pakai satu warna border & teks netral (abu-abu), kecuali ikon yang memang punya warna brand aslinya (contoh: ikon Next.js, TypeScript) boleh tetap warna asli, tapi container/border/teks di sekitarnya netral.
5. **Kontras dipakai untuk hierarki, bukan dekorasi** — dari beberapa kartu/statistik sejenis, hanya SATU elemen paling penting yang boleh pakai warna aksen; sisanya netral (putih/abu-abu).
6. **Tombol**: tombol primer = solid warna aksen. Tombol sekunder = outline tipis (border abu-abu gelap, teks abu-abu terang), BUKAN solid putih terang.

---

## Instruksi Teknis: Sentralisasi Tema via Tailwind v4

Karena pakai Tailwind v4, definisikan semua warna sebagai **design token di satu tempat** menggunakan `@theme` directive di file CSS utama (biasanya `app/globals.css`), supaya ganti tema ke depannya cukup edit satu file, tanpa menyentuh komponen.

### Yang harus dilakukan:

1. Buat/perbarui blok `@theme` di `globals.css` dengan token warna semantik (bukan token teknis seperti "purple-500", tapi semantik seperti "brand", "accent", "surface", dst), contoh struktur (isi nilai hex disesuaikan dengan warna logo):

```css
@theme {
	--color-background: #000000;
	--color-surface: #0a0a0a;
	--color-surface-elevated: #111111;
	--color-border: #262626;

	--color-foreground: #ffffff;
	--color-foreground-muted: #a3a3a3;

	--color-accent: #6d28d9; /* ungu dari logo */
	--color-accent-foreground: #ffffff;
	--color-accent-muted: #6d28d940; /* untuk hover/bg tipis */
}
```

2. **Jangan hardcode hex/warna Tailwind default (`bg-purple-600`, `text-cyan-400`, dll) langsung di komponen.** Semua pemakaian warna di komponen HARUS memakai token semantik di atas, misalnya:
   - `bg-background`, `text-foreground`, `text-foreground-muted`
   - `bg-accent`, `text-accent`, `border-accent`
   - `border-border`, `bg-surface`

3. Ganti seluruh pemakaian:
   - `bg-gradient-to-r ... bg-clip-text text-transparent` pada headline → `text-foreground` untuk teks biasa, `text-accent` untuk kata yang mau ditonjolkan
   - Elemen background dengan radial-gradient/mesh/glow → `bg-background` polos (boleh tambah grid pattern tipis via CSS terpisah, opacity ≤5%, warna `--color-border`)
   - Semua elemen yang sekarang pakai cyan → diganti pakai `--color-accent` (ungu) atau `--color-foreground-muted` (netral), tergantung apakah dia elemen penting atau dekoratif
   - Badge/tag warna-warni → `border-border text-foreground-muted`, ikon tetap warna asli jika relevan

4. **Pastikan tidak ada warna yang didefinisikan dua kali di tempat berbeda.** Jika ada CSS module lain atau inline style yang mendefinisikan warna, pindahkan ke token di `@theme`.

5. Setelah selesai, buat dokumentasi singkat (komentar di atas blok `@theme`) yang menjelaskan tiap token dipakai untuk apa, supaya gampang di-tweak nanti.

---

## Checklist Verifikasi Setelah Selesai

- [ ] Tidak ada lagi `bg-gradient-to-r` pada teks headline
- [ ] Tidak ada radial-gradient/blur glow warna-warni di background
- [ ] Hanya ada satu warna aksen (ungu) di seluruh halaman, dipakai konsisten
- [ ] Semua kelas warna di komponen menggunakan token semantik dari `@theme`, bukan warna Tailwind default langsung
- [ ] Badge & tag technology stack seragam (monokrom border/text)
- [ ] Tombol sekunder berbentuk outline, bukan solid putih
- [ ] Mengganti satu warna tema (misal test dengan ganti `--color-accent` ke warna lain) cukup dilakukan di satu file `globals.css` dan otomatis berubah di seluruh halaman
