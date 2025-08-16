### Aplikasi Cuaca Lanjutan dengan Next.js

Ini adalah proyek Hari ke-3, sebuah aplikasi cuaca yang tidak hanya fungsional tetapi juga memiliki antarmuka (UI) yang modern, dinamis, dan informatif. Aplikasi ini mengambil data cuaca secara *real-time* dari OpenWeatherMap API dan menampilkannya dengan visual yang menarik.

### 🚀 Live Demo

[Lihat Demo Langsung](https://your-vercel-or-netlify-link.com) ### 📸 Tampilan


*(Sangat disarankan untuk menggunakan GIF di sini untuk memamerkan latar belakang dinamis dan animasi!)*

### ✨ Fitur Unggulan

Proyek ini melampaui aplikasi cuaca dasar dengan fitur-fitur berikut:

#### UI/UX Modern & Dinamis
* **Latar Belakang Dinamis**: Gradien warna latar belakang berubah secara otomatis sesuai kondisi cuaca (cerah, berawan, hujan, dll.) untuk pengalaman yang lebih imersif.
* **Efek *Glassmorphism***: Kartu informasi menggunakan efek kaca buram (*frosted glass*) yang modern dan elegan.
* **Animasi Halus**: Hasil pencarian muncul dengan animasi *fade-in* yang mulus, memberikan kesan profesional.
* **Indikator Loading**: Menggunakan *spinner* animasi saat data sedang dimuat, memberikan feedback yang jelas kepada pengguna.
* **Desain Responsif**: Tampilan tetap optimal di berbagai ukuran layar, dari desktop hingga mobile.

#### Data Cuaca Lengkap & Terperinci
* **Informasi Suhu Utama**: Menampilkan suhu saat ini, suhu yang dirasakan (*feels like*), serta suhu minimum dan maksimum harian.
* **Detail Kondisi**: Ikon cuaca yang jelas beserta deskripsi dalam Bahasa Indonesia (misal: "Hujan Ringan", "Cerah Berawan").
* **Data Atmosfer**: Informasi lengkap mengenai kelembapan, kecepatan angin, dan jarak pandang.
* **Informasi Matahari**: Waktu matahari terbit (*sunrise*) dan terbenam (*sunset*) yang akurat, dikonversi dari format UNIX timestamp.

### 🛠️ Teknologi yang Digunakan

* **Next.js**: Framework React untuk membangun aplikasi yang cepat dan modern.
* **React**: Library JavaScript untuk membangun antarmuka pengguna, dengan *Hooks* (`useState`) untuk manajemen state.
* **Tailwind CSS**: Framework CSS untuk styling yang cepat dan responsif langsung di dalam komponen.
* **React Icons**: Library untuk menyajikan ikon yang bersih dan konsisten di seluruh aplikasi.
* **OpenWeatherMap API**: Sebagai sumber data cuaca *real-time*.

### 📂 Cara Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/luciferslave666/weather-app.git](https://github.com/luciferslave666/weather-app.git)
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd weather-app
    ```
3.  **Install semua dependensi yang dibutuhkan:**
    ```bash
    npm install
    ```
4.  **Buat file environment variable:**
    Buat file bernama `.env.local` di root folder proyek dan isikan API key Anda dari OpenWeatherMap.
    ```env
    NEXT_PUBLIC_OPENWEATHER_API_KEY="KEY_ANDA_DISINI"
    ```
5.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
6.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---
