# Menentukan berapa data yang ingin diinput
jumlah_data = int(input("Masukkan jumlah data yang ingin dicek: "))

# List untuk menyimpan hasil
data_list = []

for i in range(jumlah_data):
    print(f"\nData ke-{i+1}")
    kuota = int(input("Masukkan kuota maksimal: "))
    terdaftar = int(input("Masukkan jumlah peserta terdaftar: "))

    # Conditional logic
    if terdaftar > kuota:
        status = "Pendaftaran ditolak"
    elif terdaftar == kuota:
        status = "Pendaftaran ditutup"
    elif terdaftar >= kuota - 3:
        status = "Hampir penuh"
    else:
        status = "Pendaftaran diterima"

    # Simpan ke list
    data_list.append((kuota, terdaftar, status))


# Output tabel
print("\nKuota\tTerdaftar\tOutput")
for data in data_list:
    print(f"{data[0]}\t{data[1]}\t\t{data[2]}")
