# 📄 Product Requirements Document (PRD)
## Migrasi Database: Mock File JSON ke MySQL (TypeORM)

* **Project:** PT Anugerah Rekayasa Energi Abadi — News CMS Dashboard
* **Status:** Ready for Implementation
* **Author:** Antigravity AI Partner
* **Target Environment:** Development (XAMPP MySQL Lokal) & Production (cPanel MySQL Online)

---

## 1. Latar Belakang & Tujuan
Saat ini, NestJS backend menggunakan database tiruan berupa file JSON lokal (`backend/db.json`) dengan operasi baca/tulis langsung menggunakan modul file system (`fs.readFileSync/writeFileSync`). 

Pendekatan ini bagus untuk tahap uji coba awal, tetapi **sangat tidak cocok untuk production** karena:
1. File JSON rentan mengalami kerusakan data (*data corruption*) jika ada penulisan data yang bersamaan.
2. Tidak mendukung pencarian, indexing, relasi tabel, dan performa tinggi.
3. Hosting di cPanel membutuhkan integrasi database formal untuk menjaga kestabilan data.

**Tujuan PRD Ini:**
Memandu migrasi database backend dari mock file JSON ke **MySQL Relational Database** menggunakan **TypeORM** (Object Relational Mapper resmi NestJS) yang dikonfigurasi secara aman melalui variabel lingkungan (`.env`).

---

## 2. Kebutuhan Sistem & Arsitektur

```
┌─────────────────────────┐             ┌─────────────────────────┐
│     React Frontend      │ ➔ REST API  │     NestJS Backend      │
│ (CMS & Portal Berita)   │             │  (TypeORM Repository)   │
└─────────────────────────┘             └────────────┬────────────┘
                                                     │
                                                     ▼
                                        ┌─────────────────────────┐
                                        │     MySQL Database      │
                                        │ (Local XAMPP / cPanel)  │
                                        └─────────────────────────┘
```

### Lingkungan Database (Environment Configurations)

1. **Lokal (Tahap Development - Laptop Anda):**
   * **RDBMS:** MySQL (via XAMPP)
   * **Host:** `localhost`
   * **User:** `root`
   * **Password:** *(kosong)*
   * **Database Name:** `db_anugerah_rekayasa`

2. **Online (Tahap Production - cPanel Hosting):**
   * **RDBMS:** MySQL (cPanel MySQL Database)
   * **Host:** `localhost` (biasanya lokal di server cPanel) atau IP Server cPanel
   * **User:** *Ditentukan saat membuat database di cPanel*
   * **Password:** *Ditentukan saat membuat user database di cPanel*
   * **Database Name:** *Ditentukan di cPanel*

---

## 3. Spesifikasi Kebutuhan Fungsional (Requirements)

### 3.1 Keamanan (Security)
* **Kredensial Aman:** Kredensial database (username, password, nama DB) **dilarang keras** ditulis langsung di dalam kode (*no hardcoded credentials*).
* **Konfigurasi Lingkungan (`.env`):** Semua konfigurasi database wajib disimpan di file `.env` di dalam folder backend. File `.env` ini akan masuk ke `.gitignore` agar tidak bocor ke Git.
* **Template Konfigurasi:** Menyediakan file `.env.example` sebagai panduan konfigurasi bagi developer lain.

### 3.2 Struktur Data (Database Schema)
Tabel berita (`news`) wajib memiliki skema yang sama dengan struktur artikel saat ini, dengan tipe data yang dioptimalkan untuk MySQL:

| Nama Kolom | Tipe Data MySQL | Keterangan |
| :--- | :--- | :--- |
| `id` | `INT` (AUTO_INCREMENT, Primary Key) | ID unik artikel (berubah dari string angka acak menjadi integer berurutan) |
| `title` | `VARCHAR(255)` (NOT NULL) | Judul berita |
| `category` | `VARCHAR(50)` (NOT NULL) | Kategori berita (e.g., Engineering, Innovation) |
| `author` | `VARCHAR(100)` (NOT NULL) | Penulis berita |
| `coverImage` | `TEXT` (NULL) | URL gambar sampul berita |
| `excerpt` | `TEXT` (NULL) | Ringkasan singkat berita |
| `content` | `LONGTEXT` (NOT NULL) | Isi berita lengkap |
| `tags` | `JSON` (NULL) | Tag berita disimpan dalam bentuk format array JSON (e.g., `["epc", "listrik"]`) |
| `createdAt` | `TIMESTAMP` (DEFAULT CURRENT_TIMESTAMP) | Waktu artikel diterbitkan |
| `updatedAt` | `TIMESTAMP` (DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) | Waktu artikel diperbarui |

### 3.3 Penanganan Migrasi Data Awal (Seamless Migration)
* Saat pertama kali database MySQL dijalankan, NestJS harus secara otomatis mengecek apakah tabel `news` kosong.
* Jika kosong, backend akan membaca data lama dari `db.json` lokal dan mengimpornya (*seed*) ke MySQL secara otomatis agar data lama tidak hilang.

---

## 4. Rencana Aksi Implementasi Langkah Demi Langkah

### Langkah 1: Instalasi Dependensi Node.js
Jalankan perintah berikut pada terminal di folder `backend/`:
```bash
npm install @nestjs/typeorm typeorm mysql2 @nestjs/config
```

### Langkah 2: Pembuatan File Konfigurasi Lingkungan (`.env`)
Buat file `.env` di dalam folder `backend/`:
```env
# Server Config
PORT=5000

# Database Config (Local XAMPP MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=db_anugerah_rekayasa
DB_SYNCHRONIZE=true
```

### Langkah 3: Konfigurasi Koneksi Global (`app.module.ts`)
Mengintegrasikan modul konfigurasi dan TypeORM agar backend terhubung ke MySQL secara dinamis:
```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Memastikan .env terbaca di seluruh module
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'), // True hanya untuk development (auto create tables)
      }),
    }),
    NewsModule,
  ],
})
export class AppModule {}
```

### Langkah 4: Pembuatan Entity Database (`news.entity.ts`)
Ubah representasi data di `backend/src/news/entities/news.entity.ts` menjadi entitas database TypeORM:
```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 50 })
  category: string;

  @Column({ length: 100 })
  author: string;

  @Column({ type: 'text', nullable: true })
  coverImage: string;

  @Column({ type: 'text', nullable: true })
  excerpt: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Langkah 5: Refactoring Service Berita (`news.service.ts`)
Mengganti modul File System (`fs`) dengan repository TypeORM yang terhubung langsung ke MySQL:
* Gunakan `@InjectRepository(News)` untuk memanggil repository.
* Ganti method `findAll()` menjadi `this.newsRepository.find()`.
* Ganti method `create()` menjadi `this.newsRepository.save(newArticle)`.
* Ganti method `update()` menjadi `this.newsRepository.update(id, updateNewsDto)`.
* Ganti method `remove()` menjadi `this.newsRepository.delete(id)`.

---

## 5. Rencana Pengujian (Testing Plan)
Setelah migrasi selesai, developer wajib memverifikasi fungsionalitas berikut:
1. **Verifikasi Koneksi:** Pastikan backend berjalan tanpa error koneksi database saat dijalankan dengan `npm run start:dev`.
2. **Auto-Generate Table:** Buka phpMyAdmin lokal (`http://localhost/phpmyadmin/`), pastikan tabel `news` terbentuk otomatis di dalam database `db_anugerah_rekayasa`.
3. **Data Integrity Test:** Buka CMS Dashboard di frontend, coba buat berita baru, edit berita tersebut, dan hapus berita. Pastikan perubahan langsung tecermin di database MySQL.
4. **API Response Check:** Pastikan format response JSON dari API NestJS tetap sama agar Frontend tidak mengalami *break/error* karena perubahan format ID dari string menjadi integer.

---

> [!IMPORTANT]
> Sebelum mengunggah kode ke cPanel nanti, pastikan variabel `DB_SYNCHRONIZE` di file `.env` production diset ke `false` demi keamanan data, dan isi dengan kredensial database yang Anda buat di cPanel.
