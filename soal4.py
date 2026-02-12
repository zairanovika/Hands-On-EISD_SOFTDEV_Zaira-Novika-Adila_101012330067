def validasi_data(nama, email, divisi, jumlah):
    # Cek nama
    if not nama.strip():
        return "Data tidak valid"

    # Cek email
    if not email.strip() or "@" not in email:
        return "Data tidak valid"

    # Cek pilihan divisi
    if not divisi.strip():
        return "Data tidak valid"

    # Cek jumlah peserta
    if not jumlah.isdigit() or int(jumlah) < 1:
        return "Data tidak valid"

    return "Data valid"


# Input dari user
nama = input("Masukkan nama peserta: ")
email = input("Masukkan email: ")
divisi = input("Masukkan pilihan study group: ")
jumlah = input("Masukkan jumlah peserta terdaftar saat ini: ")

# Panggil fungsi validasi
hasil = validasi_data(nama, email, divisi, jumlah)

print("Hasil:", hasil)
