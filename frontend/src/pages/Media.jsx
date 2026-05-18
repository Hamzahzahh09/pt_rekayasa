import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// -- CUSTOM ANIMATIONS --
const blurFadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const mediaItems = [
  { id: 1, category: 'Lapangan', title: 'Dokumentasi Proyek Lapangan 1', date: '14 Mei 2026', image: '/images/WhatsApp Image 2026-05-14 at 16.17..jpeg' },
  { id: 2, category: 'Lapangan', title: 'Dokumentasi Proyek Lapangan 2', date: '14 Mei 2026', image: '/images/WhatsApp Image 2026-05-14 at 16.17.41.jpeg' },
  { id: 3, category: 'Lapangan', title: 'Dokumentasi Proyek Lapangan 3', date: '14 Mei 2026', image: '/images/WhatsApp Image 2026-05-14 at 16.17.42.jpeg' },
  { id: 4, category: 'Tim', title: 'Aktivitas Kerja Tim', date: '14 Mei 2026', image: '/images/WhatsApp Image 2026-05-14.jpeg' },
  { id: 5, category: 'Instalasi', title: 'Instalasi Sistem Utilitas', date: '10 Mei 2026', image: '/images/image 5.jpeg' },
  { id: 6, category: 'Instalasi', title: 'Instalasi Mekanikal Pabrik', date: '09 Mei 2026', image: '/images/image 6.jpeg' },
  { id: 7, category: 'Instalasi', title: 'Pemasangan Sistem Utilitas', date: '08 Mei 2026', image: '/images/image 7.jpeg' },
  { id: 8, category: 'Pemeliharaan', title: 'Pemeliharaan Fasilitas Pabrik', date: '07 Mei 2026', image: '/images/iamge 8.jpeg' },
  { id: 9, category: 'Pemeliharaan', title: 'Pengecekan Sistem Pendingin', date: '06 Mei 2026', image: '/images/image 9.jpeg' },
  { id: 10, category: 'Elektrikal', title: 'Inspeksi Panel Listrik', date: '05 Mei 2026', image: '/images/image 10.jpeg' },
  { id: 11, category: 'Elektrikal', title: 'Pemasangan Panel Kontrol', date: '04 Mei 2026', image: '/images/image 11.jpeg' },
  { id: 12, category: 'Elektrikal', title: 'Wiring & Sistem Distribusi', date: '03 Mei 2026', image: '/images/image 12.jpeg' },
  { id: 13, category: 'HVAC', title: 'Pemasangan HVAC Industri', date: '02 Mei 2026', image: '/images/image 13.jpeg' },
  { id: 14, category: 'HVAC', title: 'Instalasi Ducting Pabrik', date: '01 Mei 2026', image: '/images/image 14.jpeg' },
  { id: 15, category: 'HVAC', title: 'Sistem Pendingin Sentral', date: '30 Apr 2026', image: '/images/image 15.jpeg' },
  { id: 16, category: 'Mekanikal', title: 'Instalasi Sistem Mekanikal', date: '29 Apr 2026', image: '/images/image 16.jpeg' },
  { id: 17, category: 'Mekanikal', title: 'Pekerjaan Mekanikal Lapangan', date: '28 Apr 2026', image: '/images/image 17.jpeg' },
  { id: 18, category: 'Mekanikal', title: 'Pemasangan Sistem Pipa', date: '27 Apr 2026', image: '/images/image 18.jpeg' },
  { id: 19, category: 'Monitoring', title: 'Engineering & Monitoring', date: '26 Apr 2026', image: '/images/image 19.jpeg' },
  { id: 20, category: 'Monitoring', title: 'Sistem Kontrol & Monitoring', date: '25 Apr 2026', image: '/images/image 20.jpeg' },
  { id: 21, category: 'Monitoring', title: 'Commissioning & Pengujian', date: '24 Apr 2026', image: '/images/image 21.jpeg' },
  { id: 22, category: 'Komisioning', title: 'Uji Fungsi Peralatan', date: '23 Apr 2026', image: '/images/image 22.jpeg' },
  { id: 23, category: 'Komisioning', title: 'Komisioning Sistem Industri', date: '22 Apr 2026', image: '/images/image 23.jpeg' },
  { id: 24, category: 'Komisioning', title: 'Final Komisioning & Serah Terima', date: '21 Apr 2026', image: '/images/image 24.jpeg' },
];

const categories = ['Semua', 'Lapangan', 'Instalasi', 'Elektrikal', 'HVAC', 'Mekanikal', 'Pemeliharaan', 'Monitoring', 'Komisioning', 'Tim'];

const Media = () => {
  const [filter, setFilter] = useState('Semua');
  const [lightbox, setLightbox] = useState(null); // index in filtered

  const filtered = filter === 'Semua' ? mediaItems : mediaItems.filter(m => m.category === filter);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightbox((prev) => (prev + 1) % filtered.length);

  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 16.jpeg" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/70 to-dark/95" />
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          >
            Media Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            Galeri Dokumentasi Proyek
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Rekam jejak visual dari setiap pekerjaan dan proyek yang telah kami selesaikan.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── FILTER TABS ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setLightbox(null); }}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 border-2 ${
                filter === cat
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                  : 'border-gray-200 text-gray-500 hover:border-primary hover:text-primary bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── PHOTO COUNT ── */}
        <p className="text-center text-gray-400 text-sm mb-12 font-medium bg-gray-50 py-3 rounded-full max-w-xs mx-auto border border-gray-100">{filtered.length} foto ditemukan</p>

        {/* ── MASONRY GRID ── */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 rounded-2xl">
                  <span className="inline-block bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-2 w-fit">{item.category}</span>
                  <p className="text-white font-bold text-base leading-snug">{item.title}</p>
                  <p className="text-gray-300 text-xs mt-1.5 font-light">{item.date}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary p-2.5 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiCamera size={16} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-3 rounded-full hover:scale-105 duration-300">
              <FiX size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:scale-110 transition-all z-10 bg-white/10 hover:bg-white/20 p-4 rounded-full"
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:scale-110 transition-all z-10 bg-white/10 hover:bg-white/20 p-4 rounded-full"
            >
              <FiChevronRight size={28} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0, filter: "blur(5px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.9, opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl mx-auto"
              />
              <div className="mt-6 text-center max-w-xl mx-auto bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <span className="inline-block bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-3">{filtered[lightbox].category}</span>
                <p className="text-white font-extrabold text-xl leading-snug">{filtered[lightbox].title}</p>
                <p className="text-gray-400 text-sm mt-1.5 font-light">{filtered[lightbox].date}</p>
                <p className="text-gray-500 text-xs mt-3 bg-white/5 py-1 px-3 rounded-full w-fit mx-auto">{lightbox + 1} / {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Media;
