// Jumlah buku tersedia
let stokBuku = 4;

// Daftar permintaan peminjaman (urutan masuk)
const peminjam = ["Alya", "Bima", "Citra", "Doni", "Eka", "Farah"];

// Array hasil
let berhasil = [];
let gagal = [];

// Simulasi proses peminjaman
for (let i = 0; i < peminjam.length; i++) {
  console.log(`Memproses: ${peminjam[i]}`);

  if (stokBuku > 0) {
    berhasil.push(peminjam[i]);
    stokBuku--;
    console.log(`→ Berhasil meminjam buku. Sisa stok: ${stokBuku}\n`);
  } else {
    gagal.push(peminjam[i]);
    console.log(`→ Gagal meminjam (buku habis)\n`);
    break; // proses berhenti
  }
}

// Output akhir
console.log("=== HASIL AKHIR ===");
console.log("Peminjaman Berhasil:");
berhasil.forEach(nama => console.log("- " + nama));

console.log("\nPeminjaman Gagal:");
if (gagal.length > 0) {
  gagal.forEach(nama => console.log("- " + nama));
} else {
  console.log("Tidak ada yang gagal.");
}
