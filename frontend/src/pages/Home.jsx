import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiTool, FiSettings, FiZap, FiArrowRight, FiAward, FiUsers, FiBriefcase, FiShield, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const heroImages = [
  '/images/image 5.jpeg',
  '/images/image 6.jpeg',
  '/images/image 7.jpeg',
  '/images/iamge 8.jpeg',
  '/images/image 9.jpeg',
  '/images/image 10.jpeg',
  '/images/image 11.jpeg',
  '/images/image 13.jpeg'
];

const heroSlides = [
  { title: 'Solusi Rekayasa Energi Terintegrasi', subtitle: 'Menyediakan rekayasa energi, konstruksi, perdagangan, dan pengayaan berkelanjutan.' },
  { title: 'Pioneer Rekayasa Energi', subtitle: 'Solusi energi yang inovatif, efisien, ramah lingkungan, serta meningkatkan kualitas hidup masyarakat.' },
  { title: 'Pengembangan Energi Terbarukan', subtitle: 'Konstruksi, instalasi, pemeliharaan, operasional, dan konsultasi desain sistem energi modern.' },
];

const stats = [
  { icon: <FiBriefcase size={28} />, value: '2025', label: 'Tahun Didirikan' },
  { icon: <FiUsers size={28} />, value: '17+', label: 'Kode KBLI Terdaftar' },
  { icon: <FiAward size={28} />, value: 'Pioneer', label: 'Rekayasa Energi' },
  { icon: <FiShield size={28} />, value: 'Resmi', label: 'SK MENKUMHAM & NIB' },
];

const services = [
  { icon: <FiZap size={32} />, title: 'Energi Terbarukan', desc: 'Pengembangan proyek energi terbarukan, mesin pengolahan RDF & pellet dari limbah dan sampah.' },
  { icon: <FiSettings size={32} />, title: 'Desain & Konsultasi', desc: 'Konsultasi dan desain sistem energi yang inovatif, efisien, serta ramah lingkungan.' },
  { icon: <FiTool size={32} />, title: 'Konstruksi & Instalasi', desc: 'Konstruksi, instalasi, pemeliharaan, dan operasional menyeluruh sistem energi industri.' },
];

const whyUs = [
  'Fokus Utama pada Inovasi & Keberlanjutan',
  'Didukung Legalitas Lengkap (SK Menkumham & NIB)',
  'KBLI Terdaftar di Berbagai Bidang Rekayasa',
  'Solusi Pengolahan Sampah Menjadi RDF & Pellet',
  'Komitmen Peningkatan Kualitas Hidup Masyarakat',
  'Desain Sistem Energi yang Efisien & Ramah Lingkungan',
];

const galleryImages = [
  { src: '/images/image 14.jpeg', caption: 'Instalasi Panel Listrik' },
  { src: '/images/image 15.jpeg', caption: 'Sistem HVAC Industri' },
  { src: '/images/image 16.jpeg', caption: 'Commissioning Peralatan' },
  { src: '/images/image 17.jpeg', caption: 'Pekerjaan Lapangan Tim' },
  { src: '/images/image 18.jpeg', caption: 'Mekanikal & Perpipaan' },
  { src: '/images/image 20.jpeg', caption: 'Monitoring & Kontrol' },
];

const Home = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImages[currentImageIdx]}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/60 to-dark/80" />
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentImageIdx ? 'bg-white scale-125' : 'bg-white/40'}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          >
            PT Anugerah Rekayasa Energi Abadi
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImageIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
            >
              {heroSlides[currentImageIdx % heroSlides.length].title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${currentImageIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {heroSlides[currentImageIdx % heroSlides.length].subtitle}
            </motion.p>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-accent/30 hover:shadow-xl no-underline">
              Profil Perusahaan
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-sm font-bold transition-colors text-lg no-underline">
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-accent flex justify-center mb-3">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT COMPANY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
                Membangun Solusi Energi<br />
                <span className="text-primary">yang Inovatif & Berkelanjutan</span>
              </h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                PT Anugerah Rekayasa Energi Abadi adalah perusahaan yang bergerak di bidang jasa perdagangan, konstruksi, pengayaan dan rekayasa energi berkomitmen untuk menyediakan solusi energi yang inovatif serta berkelanjutan.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Didirikan pada bulan Agustus 2025 dengan tujuan untuk menjadi pioneer dan pemimpin di bidang Rekayasa Energi di Indonesia, mengutamakan keselamatan kerja dan kelestarian lingkungan.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Akta Pendirian No. 14', 'NIB Resmi', 'KBLI Lengkap'].map((badge) => (
                  <span key={badge} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20">{badge}</span>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-sm font-bold hover:bg-primary/90 transition-all no-underline">
                Profil Perusahaan <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/image 5.jpeg" alt="Project 1" className="w-full h-52 object-cover rounded-sm shadow-md" />
                <img src="/images/image 9.jpeg" alt="Project 2" className="w-full h-52 object-cover rounded-sm shadow-md mt-8" />
                <img src="/images/image 6.jpeg" alt="Project 3" className="w-full h-52 object-cover rounded-sm shadow-md" />
                <img src="/images/image 13.jpeg" alt="Project 4" className="w-full h-52 object-cover rounded-sm shadow-md mt-8" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent text-white px-8 py-4 rounded-sm shadow-xl text-center">
                <p className="text-xs uppercase tracking-wider font-semibold">Didirikan Bulan</p>
                <p className="text-2xl font-extrabold">Agustus 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Layanan Utama</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">Kompetensi Inti Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Solusi rekayasa energi komprehensif untuk mendukung kemandirian energi dan kelestarian lingkungan.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-primary/10 text-primary w-16 h-16 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-extrabold text-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{s.desc}</p>
                <Link to="/about" className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-3 transition-all no-underline group-hover:text-accent">
                  Selengkapnya <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-sm font-bold hover:bg-primary hover:text-white transition-all no-underline">
              Semua Kompetensi <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY PREVIEW ── */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Galeri Proyek</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Dokumentasi Pekerjaan Kami</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Rekam jejak nyata dari proyek-proyek yang telah berhasil kami selesaikan.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden rounded-sm group cursor-pointer"
              >
                <img src={img.src} alt={img.caption} className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/media" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-sm font-bold transition-all no-underline shadow-lg hover:shadow-accent/30">
              Lihat Semua Dokumentasi <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Keunggulan Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Mengapa Memilih PT Anugerah Rekayasa Energi Abadi?</h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Kami menghadirkan keunggulan teknis, standar keamanan ketat, dan solusi inovatif di setiap proyek untuk memastikan performa optimal fasilitas Anda.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/10 rounded-sm px-4 py-3">
                    <FiCheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-white text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm font-bold transition-all no-underline shadow-lg">
                  Hubungi Kami <FiArrowRight />
                </Link>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative hidden lg:block">
              <img src="/images/image 22.jpeg" alt="Kerja Profesional" className="w-full h-80 object-cover rounded-sm shadow-2xl mb-4" />
              <img src="/images/image 23.jpeg" alt="Tim Lapangan" className="w-3/4 ml-auto h-48 object-cover rounded-sm shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-dark via-primary/90 to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/image 7.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Mulai Proyek Anda</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Siap Mengoptimalkan<br />Sistem Energi Fasilitas Anda?
            </h2>
            <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Hubungi tim engineer kami hari ini untuk konsultasi teknis gratis dan penilaian komprehensif kebutuhan fasilitas Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl hover:shadow-accent/30 no-underline">
                Konsultasi Gratis Sekarang
              </Link>
              <Link to="/projects" className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-sm font-bold transition-all text-lg no-underline">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
