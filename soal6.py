# Menentukan jumlah email yang akan diinput
jumlah_email = int(input("Masukkan jumlah email yang ingin dicek: "))

emails = []

# Input email
for i in range(jumlah_email):
    email = input(f"Masukkan email ke-{i+1}: ")
    emails.append(email)

# Set untuk menyimpan email unik dan duplikat
email_unik = set()
duplikat = set()

# Proses pengecekan duplikat
for email in emails:
    if email in email_unik:
        duplikat.add(email)
    else:
        email_unik.add(email)

# Menampilkan hasil
print("\n=== Hasil Pengecekan Duplikat ===")
if duplikat:
    print("Email yang terdeteksi duplikat:")
    for email in duplikat:
        print("-", email)
else:
    print("Tidak ada data duplikat.")
