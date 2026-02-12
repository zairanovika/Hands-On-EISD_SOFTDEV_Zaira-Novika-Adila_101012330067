/*
Soal Noncoding (WAJIB)

Jika hanya boleh memperbaiki satu hal pada website pendaftaran Study Group EISD Lab,
maka prioritas utama yang harus diperbaiki adalah:

VALIDASI DAN KONTROL DI SISI SERVER (SERVER-SIDE VALIDATION & DATABASE CONSTRAINT)

Alasan:
Server harus menjadi “penjaga utama” yang memeriksa setiap data sebelum disimpan
ke dalam database. Dengan validasi dan kontrol di sisi backend, sistem tidak lagi
bergantung pada perilaku user ataupun validasi frontend saja.

Permasalahan yang terjadi:
1. Data double karena tombol ditekan berkali-kali
2. Data tidak valid (nama kosong, simbol, email tidak sesuai format)
3. Kuota kelas terlampaui
4. Kebingungan menentukan data resmi saat rekap

Solusi Prioritas:

1. Validasi Input di Server
   - Nama tidak boleh kosong atau hanya simbol
   - Format email harus valid
   - Berikan pesan error jika data tidak sesuai

2. Pencegahan Data Duplikat
   - Cek apakah email sudah terdaftar
   - Gunakan Unique Email Constraint pada database
   - Bisa juga menggunakan Idempotency Check

3. Kontrol Kuota Kelas
   - Gunakan database transaction
   - Terapkan batas maksimal peserta per kelas
   - Tambahkan validasi logika pada server sebelum menyimpan data

Alur Kerja Sistem:

1. User mengisi form pendaftaran
2. Server menerima request
3. Server melakukan validasi:
   - Cek kelengkapan data
   - Cek format email
   - Cek duplikasi
   - Cek kuota kelas
4. Jika semua valid → data disimpan ke database
5. Sistem menampilkan "Pendaftaran Berhasil"
6. Jika tidak valid → tampilkan pesan error

Kesimpulan:

Validasi dan kontrol di sisi server adalah solusi tercepat dan paling efektif
karena memperbaiki akar permasalahan data. Dengan backend yang kuat, data akan
lebih bersih, kuota terkendali, dan proses rekap menjadi jelas serta akurat.
*/
