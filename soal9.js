// Kuota maksimal
const kuotaMaksimal = 3;

// Daftar pendaftar (urutan masuk)
const pendaftar = ["Dea", "Ijat", "Arra", "Budi", "Andi"];

// Array untuk menyimpan hasil
let diterima = [];
let ditolak = [];

// Simulasi proses pendaftaran
for (let i = 0; i < pendaftar.length; i++) {
  if (diterima.length < kuotaMaksimal) {
    diterima.push(pendaftar[i]);
  } else {
    ditolak.push(pendaftar[i]);
    break; // proses berhenti setelah kuota penuh
  }
}

// Output hasil
console.log("=== HASIL PENDAFTARAN ===");
console.log("Peserta diterima:");
diterima.forEach(nama => console.log("- " + nama));

console.log("\nPeserta ditolak:");
if (ditolak.length > 0) {
  ditolak.forEach(nama => console.log("- " + nama));
} else {
  console.log("Tidak ada peserta yang ditolak.");
}
