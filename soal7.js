// Data awal
const peserta = [
  { nama: "Alya", status: "active", nilaiSeleksi: 85 },
  { nama: "Bima", status: "inactive", nilaiSeleksi: 90 },
  { nama: "Citra", status: "active", nilaiSeleksi: 70 },
  { nama: "Doni", status: "active", nilaiSeleksi: 95 },
  { nama: "Eka", status: "inactive", nilaiSeleksi: 60 }
];

// 1️⃣ Filter data
const hasilFilter = peserta.filter(p =>
  p.status === "active" && p.nilaiSeleksi >= 80
);

// 2️⃣ Mapping (ubah bentuk data & rename field)
const hasilAkhir = hasilFilter.map(p => ({
  nama: p.nama,
  nilai: p.nilaiSeleksi
}));

// Output
console.log("=== HASIL FILTER & MAPPING ===");
console.log(hasilAkhir);
