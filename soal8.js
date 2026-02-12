// Data peserta
const peserta = [
  { nama: "Alya", status: "active", kategori: "Web", nilai: 85 },
  { nama: "Bima", status: "active", kategori: "Data", nilai: 75 },
  { nama: "Citra", status: "inactive", kategori: "Web", nilai: 901 },
  { nama: "Doni", status: "active", kategori: "Web", nilai: 95 },
  { nama: "Eka", status: "active", kategori: "Data", nilai: 80 }
];

// 1️⃣ Filtering dengan multiple conditions
const hasilFilter = peserta.filter(p =>
  p.status === "active" &&
  p.kategori === "Web" &&
  p.nilai >= 80
);

// 2️⃣ Mapping untuk menampilkan nama & nilai saja
const hasilAkhir = hasilFilter.map(p => ({
  nama: p.nama,
  nilai: p.nilai
}));

// Output
console.log("=== PESERTA LOLOS KELAS LANJUTAN ===");

if (hasilAkhir.length > 0) {
  hasilAkhir.forEach(p => {
    console.log(`Nama: ${p.nama}, Nilai: ${p.nilai}`);
  });
} else {
  console.log("Tidak ada peserta yang memenuhi syarat.");
}
