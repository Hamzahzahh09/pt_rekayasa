Folder ini digunakan untuk menyimpan gambar atau aset statis situs web Anda.

Semua gambar yang diletakkan di dalam folder ini dapat diakses secara langsung di dalam kode React Anda menggunakan path absolute dari root public.

Contoh Penggunaan di React:
---------------------------
Jika Anda memasukkan gambar bernama "logo.png" ke dalam folder ini (public/images/logo.png), Anda bisa memanggilnya di dalam file JSX Anda seperti ini:

<img src="/images/logo.png" alt="Logo Perusahaan" />

Atau di file CSS/Tailwind:
background-image: url('/images/background.jpg')
