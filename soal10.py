# Input jumlah buku tersedia
stok_buku = int(input("Masukkan jumlah buku tersedia: "))

# Input jumlah peminjam
jumlah_peminjam = int(input("Masukkan jumlah permintaan peminjaman: "))

antrian = []

# Input nama peminjam
for i in range(jumlah_peminjam):
    nama = input(f"Masukkan nama peminjam ke-{i+1}: ")
    antrian.append(nama)

berhasil = []
gagal = []

# Simulasi proses peminjaman
for nama in antrian:
    if stok_buku > 0:
        berhasil.append(nama)
        stok_buku -= 1
    else:
        gagal.append(nama)  # semua setelah stok habis masuk gagal

# Output hasil
print("\n=== HASIL SIMULASI PEMINJAMAN ===")

print("\nPeminjaman berhasil:")
for nama in berhasil:
    print("-", nama)

print("\nPermintaan peminjaman gagal:")
for nama in gagal:
    print("-", nama)

print("\nSisa buku:", stok_buku)
