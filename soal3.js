const prompt = require("prompt-sync")({ sigint: true });

// Menentukan berapa data yang ingin diinput
let jumlahData = parseInt(prompt("Masukkan jumlah data yang ingin dicek: "));

// Array untuk menyimpan hasil
let dataList = [];

for (let i = 0; i < jumlahData; i++) {
  console.log(`\nData ke-${i + 1}`);
  
  let kuota = parseInt(prompt("Masukkan kuota maksimal: "));
  let terdaftar = parseInt(prompt("Masukkan jumlah peserta terdaftar: "));
  
  let status;

  // Conditional logic
  if (terdaftar > kuota) {
    status = "Pendaftaran ditolak";
  } else if (terdaftar === kuota) {
    status = "Pendaftaran ditutup";
  } else if (terdaftar >= kuota - 3) {
    status = "Hampir penuh";
  } else {
    status = "Pendaftaran diterima";
  }

  // Simpan ke array
  dataList.push({ kuota, terdaftar, status });
}

// Output tabel
console.log("\nKuota\tTerdaftar\tOutput");
dataList.forEach(data => {
  console.log(`${data.kuota}\t${data.terdaftar}\t\t${data.status}`);
});
