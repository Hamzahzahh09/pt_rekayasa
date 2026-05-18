import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiCheckCircle, FiTool, FiSettings, FiZap, FiArrowRight, FiAward, FiUsers, FiBriefcase, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// -- CUSTOM ANIMATIONS --
const blurFadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const slideFromLeftBlur = {
  hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
  { icon: <FiBriefcase size={32} />, value: '2025', label: 'Tahun Didirikan' },
  { icon: <FiUsers size={32} />, value: '17+', label: 'Kode KBLI Terdaftar' },
  { icon: <FiAward size={32} />, value: 'Pioneer', label: 'Rekayasa Energi' },
  { icon: <FiShield size={32} />, value: 'Resmi', label: 'SK MENKUMHAM & NIB' },
];

const services = [
  { icon: <FiZap size={36} />, title: 'Energi Terbarukan', desc: 'Pengembangan proyek energi terbarukan, mesin pengolahan RDF & pellet dari limbah dan sampah.' },
  { icon: <FiSettings size={36} />, title: 'Desain & Konsultasi', desc: 'Konsultasi dan desain sistem energi yang inovatif, efisien, serta ramah lingkungan.' },
  { icon: <FiTool size={36} />, title: 'Konstruksi & Instalasi', desc: 'Konstruksi, instalasi, pemeliharaan, dan operasional menyeluruh sistem energi industri.' },
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

// Subcomponent: Animated Counter
const StatCounter = ({ s, delay }) => {
  const isNumber = /\d+/.test(s.value);
  const numValue = isNumber ? parseInt(s.value.match(/\d+/)[0]) : 0;
  const suffix = isNumber ? s.value.replace(numValue.toString(), '') : '';

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView && isNumber) {
      const controls = animate(count, numValue, { duration: 2.5, delay: delay + 0.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, isNumber, numValue, delay, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setInView(true)}
      transition={{ delay, type: "spring", stiffness: 80, damping: 20 }}
      className="text-center group p-8 rounded-2xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10"
    >
      <div className="text-accent flex justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{s.icon}</div>
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 flex justify-center items-center drop-shadow-md">
        {isNumber ? <motion.span>{rounded}</motion.span> : <span>{s.value}</span>}
        {isNumber && <span>{suffix}</span>}
      </div>
      <div className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-semibold group-hover:text-gray-200 transition-colors">{s.label}</div>
    </motion.div>
  );
};

const Home = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImages[currentImageIdx]}")` }}
          >
            {/* Parallax floating effect */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-dark/90 via-primary/60 to-dark/90" 
            />
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIdx(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentImageIdx ? 'w-8 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          >
            PT Anugerah Rekayasa Energi Abadi
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${currentImageIdx}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
            >
              {heroSlides[currentImageIdx % heroSlides.length].title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${currentImageIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
              {heroSlides[currentImageIdx % heroSlides.length].subtitle}
            </motion.p>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <Link to="/about" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.4)] hover:shadow-[0_0_30px_rgba(var(--color-accent),0.6)] no-underline flex items-center justify-center">
                Profil Perusahaan
              </Link>
            </motion.div>
            <Link to="/contact" className="bg-white/5 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-bold transition-all duration-300 text-lg no-underline flex items-center justify-center">
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <StatCounter key={i} s={s} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT COMPANY ── */}
      <section className="py-24 bg-white overflow-hidden relative">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" 
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={slideFromLeftBlur}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Tentang Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                Membangun Solusi Energi<br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">yang Inovatif & Berkelanjutan</span>
              </h2>
              <p className="text-gray-600 mb-5 text-lg leading-relaxed">
                PT Anugerah Rekayasa Energi Abadi adalah perusahaan yang bergerak di bidang jasa perdagangan, konstruksi, pengayaan dan rekayasa energi berkomitmen untuk menyediakan solusi energi yang inovatif serta berkelanjutan.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed text-md">
                Didirikan pada bulan Agustus 2025 dengan tujuan untuk menjadi pioneer dan pemimpin di bidang Rekayasa Energi di Indonesia, mengutamakan keselamatan kerja dan kelestarian lingkungan.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Akta Pendirian No. 14', 'NIB Resmi', 'KBLI Lengkap'].map((badge, idx) => (
                  <motion.span 
                    key={badge} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                    className="bg-gray-50 text-dark text-xs font-bold px-4 py-2 rounded-md border border-gray-100 shadow-sm"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
              <Link to="/about" className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 no-underline">
                Profil Perusahaan <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={staggerContainer} 
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img variants={blurFadeUp} src="/images/image 5.jpeg" alt="Project 1" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg" />
                <motion.img variants={blurFadeUp} src="/images/image 9.jpeg" alt="Project 2" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg mt-12" />
                <motion.img variants={blurFadeUp} src="/images/image 6.jpeg" alt="Project 3" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg -mt-8" />
                <motion.img variants={blurFadeUp} src="/images/image 13.jpeg" alt="Project 4" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg mt-4" />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center border border-white/50"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <FiAward className="text-white text-3xl" />
                </div>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Didirikan Bulan</p>
                <p className="text-xl font-extrabold text-dark whitespace-nowrap">Agustus 2025</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blurFadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
               <span className="w-8 h-[2px] bg-accent"></span> Layanan Utama <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">Kompetensi Inti Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Solusi rekayasa energi komprehensif untuk mendukung kemandirian energi dan kelestarian lingkungan dengan standar internasional.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100, damping: 20 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-colors duration-500 pointer-events-none" />
                <div className="bg-gray-50 text-primary w-20 h-20 flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/30 group-hover:scale-110">
                  <div className="group-hover:rotate-12 transition-transform duration-500">{s.icon}</div>
                </div>
                <h3 className="text-2xl font-extrabold text-dark mb-4 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{s.desc}</p>
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-dark group-hover:text-primary transition-all no-underline">
                  Pelajari Lebih Lanjut <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/about" className="group inline-flex items-center gap-2 border-2 border-dark text-dark px-8 py-4 rounded-md font-bold hover:bg-dark hover:text-white transition-all duration-300 no-underline">
              Lihat Semua Layanan <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT GALLERY PREVIEW ── */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blurFadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Galeri Proyek
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Dokumentasi Pekerjaan</h2>
              <p className="text-gray-400 text-lg">Rekam jejak nyata dari proyek-proyek berskala industri yang telah kami selesaikan dengan presisi.</p>
            </div>
            <Link to="/media" className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-bold transition-all no-underline backdrop-blur-sm border border-white/10">
              Lihat Semua <FiArrowRight />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3] bg-gray-900"
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <p className="text-white font-extrabold text-xl mb-2">{img.caption}</p>
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider">
                      Detail Proyek <FiArrowRight />
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/media" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold transition-all no-underline border border-white/10">
              Lihat Semua Dokumentasi <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              <motion.span variants={slideFromLeftBlur} className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Keunggulan Kami
              </motion.span>
              <motion.h2 variants={slideFromLeftBlur} className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                Standar Kualitas <br/><span className="text-primary">Internasional</span>
              </motion.h2>
              <motion.p variants={slideFromLeftBlur} className="text-gray-600 mb-10 text-lg leading-relaxed">
                Kami menghadirkan keunggulan teknis, standar keamanan ketat, dan solusi inovatif di setiap proyek untuk memastikan performa optimal fasilitas industri Anda.
              </motion.p>
              
              <div className="flex flex-col gap-5">
                {whyUs.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    className="flex items-center gap-4 bg-gray-50 hover:bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <FiCheckCircle className="text-primary group-hover:text-white transition-colors duration-300" size={20} />
                    </div>
                    <span className="text-dark font-medium md:text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={slideFromLeftBlur} className="mt-12">
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-dark hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl no-underline">
                  Hubungi Tim Ahli <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block h-[600px] xl:h-[700px]"
            >
              {/* Reveal Mask effect */}
              <motion.div 
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 bg-white z-20 origin-top"
              />
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                src="/images/image 22.jpeg" 
                alt="Kerja Profesional" 
                className="absolute top-0 right-0 w-4/5 h-[450px] xl:h-[500px] object-cover rounded-2xl shadow-2xl z-10" 
              />
              <motion.img 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                src="/images/image 23.jpeg" 
                alt="Tim Lapangan" 
                className="absolute bottom-0 left-0 w-3/4 h-[300px] xl:h-[350px] object-cover rounded-2xl shadow-2xl z-30 border-8 border-white" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 opacity-20 mix-blend-overlay"
        >
          <img src="/images/image 7.jpeg" alt="" className="w-full h-full object-cover filter grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}>
            <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
              Mulai Proyek Anda
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
              Siap Mengoptimalkan<br />Sistem Energi Fasilitas Anda?
            </h2>
            <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Hubungi tim engineer kami hari ini untuk konsultasi teknis gratis dan penilaian komprehensif kebutuhan fasilitas Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.5)] no-underline flex justify-center items-center gap-2 group">
                Konsultasi Gratis <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="border-2 border-white/50 text-white hover:bg-white hover:text-dark px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg no-underline flex justify-center items-center">
                Lihat Portofolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
