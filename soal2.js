// Data Study Group
const studyGroups = [
  { nama: "Software Development", kuota: 20, terdaftar: 18 },
  { nama: "UI/UX Design", kuota: 15, terdaftar: 15 },
  { nama: "Technopreneur", kuota: 25, terdaftar: 10 },
  { nama: "Intelligence System", kuota: 10, terdaftar: 10 }
];

// Array untuk menampung hasil
let tersedia = [];
let penuh = [];

// Membaca dan membandingkan data
for (let i = 0; i < studyGroups.length; i++) {
  if (studyGroups[i].terdaftar < studyGroups[i].kuota) {
    tersedia.push(studyGroups[i].nama);
  } else {
    penuh.push(studyGroups[i].nama);
  }
}

// Menampilkan hasil
console.log("Study Group yang masih tersedia:");
tersedia.forEach(nama => console.log("- " + nama));

console.log("\nStudy Group yang sudah penuh:");
penuh.forEach(nama => console.log("- " + nama));
 