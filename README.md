# e-votingbackend
aplikasi e-voting 

## Disclaimer:

Ini adalah Project yang dibuat sebagai bagian syarat untuk menyelesaikan skripsi saya di Universitas Gunadarma dengan judul “APLIKASI E-VOTING UNTUK PEMILIHAN CALON LEGISLATIF DEWAN PERWAKILAN RAKYAT REPUBLIK INDONESIA (DPR RI) PROVINSI BANTEN BERBASIS WEB DENGAN MENGGUNAKAN REACTJS DAN NODE JS”. 


Project ini dibuat dengan menggunakan Framework ExpressJs dan database mongoDb. Untuk menghubungkan Express dengan mongodb digunakan mongosee. Project ini digunakan sebagai REST API untuk e-voting pemilihan anggota DPR RI. Proses rekapitulasi dilakukan dengan  menentukan terlebih dahulu partai apa saja yang dapat mengikuti proses pembagian kursi sesuai dengan aturan parliamentary threshold sebesar 4% sesuai dengan UU No. 7 Tahun 2017. Kemudian proses pembagian kursi dilakukan menggunakan metode sainte lague.

CARA PENGGUNAAN:
  - install node module
    ketik pada terminal:  npm install
  
  - jalankan dengan perintah :
    nodemon

  - Persiapkan database:
    Export database yang telah disediakan pada folder database. kemudian buat dan export collection tersebut. Nama collection disesuaikan     dengan nama file json.
    
  - optional Data duummy Membuat KTP dan caleg
    Buka postman atau insomnia REST CLIENT atau sejenisnya
    o	Dummy KTP
    Default: http://127.0.0.1:3001/api/addRandomKtp
    {DomainAnda}/api/ addRandomKtp
    o	Dummy Anggota Caleg
    Default: http://127.0.0.1:3001/api/addRandomCaleg
    {DomainAnda}/api/ addRandomCaleg

    


