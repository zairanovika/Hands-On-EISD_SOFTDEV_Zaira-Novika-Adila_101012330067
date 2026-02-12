const prompt = require("prompt-sync")({ sigint: true });

// Input data
let nama = prompt("Masukkan nama peserta: ");
let email = prompt("Masukkan email: ");
let divisi = prompt("Masukkan pilihan study group: ");
let jumlahInput = prompt("Masukkan jumlah peserta terdaftar saat ini: ");

// Ubah jumlah ke number
let jumlah = parseInt(jumlahInput);

// Validasi
let isValid = true;

// 1. Nama tidak boleh kosong
if (!nama || nama.trim() === "") {
  isValid = false;
}

// 2. Email tidak boleh kosong dan harus mengandung "@"
if (!email || email.trim() === "" || !email.includes("@")) {
  isValid = false;
}

// 3. Divisi tidak boleh kosong
if (!divisi || divisi.trim() === "") {
  isValid = false;
}

// 4. Jumlah harus angka dan minimal 1
if (isNaN(jumlah) || jumlah < 1) {
  isValid = false;
}

// Output hasil
if (isValid) {
  console.log("\nData valid");
} else {
  console.log("\nData tidak valid");
}
