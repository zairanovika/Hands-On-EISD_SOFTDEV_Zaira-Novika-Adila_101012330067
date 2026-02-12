// Data email peserta
const emails = [
  "Andi@gmail.com",
  "Budi@gmail.com",
  "Sari@gmail.com",
  "Andi@gmail.com",
  "Rina@gmail.com",
  "Budi@gmail.com"
];

// Object untuk menghitung jumlah kemunculan
let count = {};
let duplicates = [];

// Loop untuk menghitung
for (let i = 0; i < emails.length; i++) {
  let email = emails[i];

  if (count[email]) {
    count[email]++;
  } else {
    count[email] = 1;
  }
}

// Cek mana yang lebih dari 1
for (let email in count) {
  if (count[email] > 1) {
    duplicates.push(email);
  }
}

// Output
if (duplicates.length > 0) {
  console.log("Email duplikat ditemukan:");
  duplicates.forEach(email => console.log("- " + email));
} else {
  console.log("Tidak ada data duplikat.");
}

