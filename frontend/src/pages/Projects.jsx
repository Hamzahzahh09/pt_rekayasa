import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
      <div className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/image 6.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Portofolio Proyek
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5"
          >
            Rekam Jejak Proyek Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Pilihan proyek rekayasa dan pemeliharaan terbaik yang telah kami selesaikan di berbagai sektor industri Indonesia.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── FILTER TABS ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                filter === cat
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                  : 'border-gray-300 text-gray-500 hover:border-primary hover:text-primary bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── PROJECT GRID ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-dark/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {p.year}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-extrabold text-dark mb-2 leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{p.desc}</p>
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FiMapPin size={12} className="text-primary" />
                      <span>{p.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FiCalendar size={12} className="text-primary" />
                        <span className="font-semibold text-primary">{p.client}</span>
                      </div>
                      <button className="text-primary hover:text-accent transition-colors">
                        <FiArrowRight size={18} />
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
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Belum ada proyek dalam kategori ini.</p>
          </div>
        )}
      </div>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ingin Proyek Anda di Sini?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Percayakan kebutuhan rekayasa industri Anda kepada tim profesional kami.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl no-underline">
              Diskusikan Proyek Anda <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
