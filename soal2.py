# Data Study Group
study_groups = [
    {"nama": "Software Development", "kuota": 20, "terdaftar": 18},
    {"nama": "UI/UX Design", "kuota": 15, "terdaftar": 15},
    {"nama": "Technopreneur", "kuota": 25, "terdaftar": 10},
    {"nama": "Intelligence System", "kuota": 10, "terdaftar": 10}
]

# List untuk menyimpan hasil
tersedia = []
penuh = []

# Membaca dan mengecek kondisi
for group in study_groups:
    if group["terdaftar"] < group["kuota"]:
        tersedia.append(group["nama"])
    else:
        penuh.append(group["nama"])

# Menampilkan hasil
print("#Study Group yang masih tersedia:")
for nama in tersedia:
    print("-", nama)

print("\n#Study Group yang sudah penuh:")
for nama in penuh:
    print("-", nama)
