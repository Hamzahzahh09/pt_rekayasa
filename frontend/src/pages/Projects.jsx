import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// -- CUSTOM ANIMATIONS --
const blurFadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const categories = ['Semua', 'HVAC', 'Elektrikal', 'Mekanikal', 'Pemeliharaan'];

const projects = [
  { id: 1, title: 'Instalasi HVAC Sentral Pabrik', category: 'HVAC', client: 'PT Mega Manufaktur', year: '2025', location: 'Karawang, Jawa Barat', image: '/images/image 13.jpeg', desc: 'Pemasangan sistem HVAC sentral berkapasitas tinggi untuk pabrik manufaktur otomotif seluas 10.000 m².' },
  { id: 2, title: 'Gardu Induk Tegangan Tinggi', category: 'Elektrikal', client: 'Kawasan Industri Terpadu', year: '2024', location: 'Cikarang, Bekasi', image: '/images/image 10.jpeg', desc: 'Pembangunan gardu induk untuk menyuplai daya stabil ke lebih dari 50 tenant industri.' },
  { id: 3, title: 'Sistem Konveyor Logistik', category: 'Mekanikal', client: 'Global Logistics Hub', year: '2024', location: 'Surabaya, Jawa Timur', image: '/images/image 17.jpeg', desc: 'Desain dan instalasi sistem konveyor mekanik sepanjang 2 km untuk efisiensi distribusi.' },
  { id: 4, title: 'Cooling Tower Pabrik Pupuk', category: 'HVAC', client: 'AgroChem Indonesia', year: '2023', location: 'Gresik, Jawa Timur', image: '/images/image 15.jpeg', desc: 'Pemasangan unit cooling tower berskala besar di fasilitas pengolahan pupuk kimia.' },
  { id: 5, title: 'Overhaul Lini Produksi Otomotif', category: 'Pemeliharaan', client: 'Automotive Parts Co.', year: '2025', location: 'Bekasi, Jawa Barat', image: '/images/image 22.jpeg', desc: 'Overhaul tahunan pada jalur perakitan robotik secara menyeluruh dan terencana.' },
  { id: 6, title: 'Panel Distribusi Utama (MDP)', category: 'Elektrikal', client: 'City Commercial Center', year: '2023', location: 'Jakarta Selatan', image: '/images/image 12.jpeg', desc: 'Instalasi panel distribusi utama dan sistem backup genset otomatis untuk pusat perbelanjaan.' },
  { id: 7, title: 'Sistem Exhaust Pabrik Logam', category: 'HVAC', client: 'PT Logam Karya', year: '2024', location: 'Tangerang, Banten', image: '/images/image 14.jpeg', desc: 'Sistem ventilasi dan exhaust khusus untuk area pabrik peleburan logam berisiko tinggi.' },
  { id: 8, title: 'Restorasi Pompa Hidrolik', category: 'Mekanikal', client: 'Maritime Port Authority', year: '2025', location: 'Tanjung Priok, Jakarta', image: '/images/image 23.jpeg', desc: 'Perbaikan dan kalibrasi pompa hidrolik raksasa untuk alat bongkar muat pelabuhan.' },
  { id: 9, title: 'Kontrak Pemeliharaan Bulanan', category: 'Pemeliharaan', client: 'Food Tech Industry', year: '2023–Kini', location: 'Depok, Jawa Barat', image: '/images/image 21.jpeg', desc: 'Kontrak inspeksi mesin mekanikal bulanan untuk menjamin standar kebersihan food-grade.' },
];

const Projects = () => {
  const [filter, setFilter] = useState('Semua');

  const filtered = filter === 'Semua' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 6.jpeg" 
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
            Portofolio Proyek
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            Rekam Jejak Proyek Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Pilihan proyek rekayasa dan pemeliharaan terbaik yang telah kami selesaikan di berbagai sektor industri Indonesia.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── FILTER TABS ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-500 border-2 relative overflow-hidden ${
                filter === cat
                  ? 'bg-primary border-primary text-white shadow-xl shadow-primary/30'
                  : 'border-gray-200 text-gray-500 hover:border-primary hover:text-primary bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── PROJECT GRID ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-widest shadow-sm">
                    {p.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-dark/70 text-white text-xs font-bold px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm border border-white/10">
                    {p.year}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1 font-light">{p.desc}</p>
                  
                  <div className="border-t border-gray-100 pt-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                      <FiMapPin size={14} className="text-primary" />
                      <span>{p.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold">
                        <FiCalendar size={14} className="text-primary" />
                        <span className="text-primary">{p.client}</span>
                      </div>
                      <button className="text-primary hover:text-accent transition-colors group-hover:translate-x-1.5 transition-transform duration-300">
                        <FiArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── EMPTY STATE ── */}
        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-400 text-xl font-semibold">Belum ada proyek dalam kategori ini.</p>
          </div>
        )}
      </div>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 opacity-20 mix-blend-overlay"
        >
          <img src="/images/image 6.jpeg" alt="" className="w-full h-full object-cover filter grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}>
            <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
              Mulai Kolaborasi
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
              Ingin Proyek Anda di Sini?
            </h2>
            <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Percayakan kebutuhan rekayasa industri Anda kepada tim profesional kami. Kami berikan hasil optimal berstandar keselamatan tertinggi.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.5)] no-underline">
              Diskusikan Proyek Anda <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
