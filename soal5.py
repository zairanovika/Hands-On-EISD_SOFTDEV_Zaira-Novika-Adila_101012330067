# Menentukan jumlah study group yang ingin diinput
jumlah_group = int(input("Masukkan jumlah Study Group: "))

total_peserta = 0  # accumulator untuk total peserta
data_groups = []   # menyimpan data group

# Input data
for i in range(jumlah_group):
    print(f"\nData ke-{i+1}")
    nama_group = input("Masukkan nama Study Group: ")
    jumlah_peserta = int(input("Masukkan jumlah peserta: "))

    data_groups.append((nama_group, jumlah_peserta))
    total_peserta += jumlah_peserta  # proses penjumlahan (accumulator)

# Menghitung rata-rata
rata_rata = total_peserta / jumlah_group if jumlah_group > 0 else 0

# Menampilkan hasil
print("\n=== Rekap Jumlah Peserta Study Group ===")
print("\nDaftar Study Group:")
for group in data_groups:
    print(f"- {group[0]}: {group[1]} peserta")

print("\nTotal seluruh peserta:", total_peserta)
print("Rata-rata peserta per Study Group:", rata_rata)
