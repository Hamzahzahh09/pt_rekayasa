Folder ini digunakan untuk menyimpan gambar atau aset lokal yang ingin Anda import langsung melalui Javascript/React (Webpack/Vite bundling).

Semua gambar di sini akan diproses dan di-bundle oleh Vite.

Contoh Penggunaan di React:
---------------------------
Jika Anda memasukkan gambar bernama "logo.png" ke dalam folder ini (src/assets/images/logo.png), Anda bisa memanggilnya di dalam file JSX Anda seperti ini:

import logo from '../assets/images/logo.png';

// Di dalam komponen:
<img src={logo} alt="Logo Perusahaan" />
