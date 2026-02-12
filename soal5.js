// Data jumlah peserta per Study Group
const studyGroups = [
  { nama: "Web Development Dasar", peserta: 18 },
  { nama: "Logic & Algorithm", peserta: 15 },
  { nama: "Frontend Fundamental", peserta: 10 },
  { nama: "Backend Introduction", peserta: 10 }
];

// Accumulator untuk total peserta
let totalPeserta = 0;

// Perulangan untuk menghitung total
for (let i = 0; i < studyGroups.length; i++) {
  totalPeserta += studyGroups[i].peserta;
}

// Menghitung rata-rata
let rataRata = totalPeserta / studyGroups.length;

// Output hasil
console.log("=== DATA PESERTA STUDY GROUP ===");

for (let i = 0; i < studyGroups.length; i++) {
  console.log(
    studyGroups[i].nama + ": " + studyGroups[i].peserta + " peserta"
  );
}

console.log("\nTotal seluruh peserta:", totalPeserta);
console.log("Rata-rata peserta per Study Group:", rataRata);
