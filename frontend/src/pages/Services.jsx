import { motion } from 'framer-motion';
import { FiWind, FiZap, FiTool, FiSettings, FiActivity, FiCpu, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
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

const slideFromRightBlur = {
  hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    id: 1,
    icon: <FiZap size={36} />,
    title: 'Pengembangan Energi Terbarukan',
    subtitle: 'Renewable Energy Development',
    desc: 'Kami fokus merancang dan mengembangkan proyek-proyek energi alternatif terbarukan berskala industri dan komersial guna mendukung transisi energi ramah lingkungan.',
    image: '/images/image 15.jpeg',
    features: ['Pemanfaatan Energi Bersih & Berkelanjutan', 'Desain Pembangkit Energi Baru', 'Integrasi Sistem Smart Grid', 'Studi Kelayakan & Kelayakan Teknis'],
    color: 'from-blue-500 to-primary',
  },
  {
    id: 2,
    icon: <FiActivity size={36} />,
    title: 'Mesin Pengolahan Limbah & RDF',
    subtitle: 'Waste-to-Energy (RDF & Pellet)',
    desc: 'Pengembangan proyek mesin pengolahan dan pemanfaatan sampah/limbah tidak berbahaya menjadi Refuse Derived Fuel (RDF) serta pellet berkualitas tinggi sebagai substitusi batubara.',
    image: '/images/image 13.jpeg',
    features: ['Reduksi Limbah Industri & Domestik', 'Konversi Sampah Menjadi RDF', 'Produksi Pellet Energi Terbarukan', 'Instalasi Alat Treatment Limbah'],
    color: 'from-teal-500 to-primary',
  },
  {
    id: 3,
    icon: <FiCpu size={36} />,
    title: 'Konsultasi & Desain Sistem Energi',
    subtitle: 'Technical Consultation & Energy Audit',
    desc: 'Kajian rekayasa energi menyeluruh, audit efisiensi, perancangan sistem distribusi kelistrikan, pendingin/ventilasi, dan pemeliharaan jangka panjang sesuai regulasi resmi.',
    image: '/images/image 10.jpeg',
    features: ['Audit Konsumsi & Efisiensi Energi', 'Desain Sistem Distribusi Daya', 'Kajian Teknis & Kepatuhan KBLI', 'Rekomendasi Hemat Energi Ramah Lingkungan'],
    color: 'from-yellow-500 to-accent',
  },
  {
    id: 4,
    icon: <FiSettings size={36} />,
    title: 'Konstruksi & Instalasi Sistem Energi',
    subtitle: 'Energy System Construction',
    desc: 'Pelaksanaan pekerjaan konstruksi sipil, mekanikal, elektrikal, perpipaan, dan pemasangan jaringan utilitas energi dengan presisi tinggi dan material berkualitas prima.',
    image: '/images/image 22.jpeg',
    features: ['Konstruksi Bangunan Pabrikasi', 'Instalasi Listrik & Pendingin (HVAC)', 'Sistem Mekanikal & Perpipaan Terpadu', 'Instalasi Jaringan Irigasi & Komunikasi'],
    color: 'from-orange-500 to-accent',
  },
  {
    id: 5,
    icon: <FiTool size={36} />,
    title: 'Pemeliharaan & Operasional Sistem',
    subtitle: 'Maintenance & Operation',
    desc: 'Layanan pemeliharaan terencana berkala dan operasional harian pada seluruh sistem energi industri guna meminimalisasi downtime serta menjamin kelancaran aktivitas produksi.',
    image: '/images/image 17.jpeg',
    features: ['Preventive & Corrective Maintenance', 'Pengecekan Rutin Peralatan Mekanikal', 'Servis Sistem Kelistrikan & Panel', 'Monitoring Kinerja Sistem Real-Time'],
    color: 'from-gray-500 to-dark',
  },
];

const process = [
  { step: '01', title: 'Survei & Konsultasi', desc: 'Identifikasi kebutuhan energi, konstruksi, serta spesifikasi teknis lokasi proyek.' },
  { step: '02', title: 'Perencanaan Sistem', desc: 'Kajian rekayasa mendalam oleh tim ahli untuk menyusun desain terbaik serta estimasi efisiensi.' },
  { step: '03', title: 'Konstruksi & Instalasi', desc: 'Eksekusi fisik proyek di lapangan dengan mematuhi protokol keselamatan tinggi.' },
  { step: '04', title: 'Operasional & Perawatan', desc: 'Serah terima proyek, pengujian fungsi penuh, serta pemeliharaan berkala teratur.' },
];

const Services = () => {
  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 5.jpeg" 
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
            Layanan Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            Solusi Rekayasa Komprehensif
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            PT Anugerah Rekayasa Energi Abadi menyediakan solusi terintegrasi di bidang energi terbarukan, perdagangan, dan konstruksi.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image side */}
                <motion.div 
                  variants={i % 2 !== 0 ? slideFromRightBlur : slideFromLeftBlur}
                  className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "0%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.77, 0, 0.175, 1] }}
                    className="absolute inset-0 bg-white z-20"
                  />
                  <img src={s.image} alt={s.title} className="w-full h-[350px] md:h-[400px] object-cover rounded-2xl shadow-2xl" />
                  <div className={`absolute -bottom-6 ${i % 2 !== 0 ? '-right-6' : '-left-6'} bg-gradient-to-br ${s.color} text-white p-6 rounded-2xl shadow-2xl hidden md:block border-4 border-white`}>
                    <div className="opacity-90">{s.icon}</div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div 
                  variants={i % 2 !== 0 ? slideFromLeftBlur : slideFromRightBlur}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-accent"></span> {s.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">{s.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-8 text-lg">{s.desc}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {s.features.map((f, fi) => (
                      <motion.li 
                        key={fi} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.1 }}
                        className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <FiCheckCircle className="text-primary flex-shrink-0" size={18} />
                        <span className="text-gray-700 text-sm font-semibold">{f}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 no-underline">
                    Minta Penawaran <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={blurFadeUp} 
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Cara Kerja Kami <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Proses Pengerjaan Proyek</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connected line with expand animation */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-0 h-1 bg-white/10 hidden md:block mx-20 origin-left" 
            />

            {process.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                className="text-center relative group"
              >
                <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center font-extrabold text-2xl mx-auto mb-6 shadow-lg relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {p.step}
                </div>
                <h4 className="text-xl font-extrabold mb-3 text-white group-hover:text-accent transition-colors">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
              </motion.div>
            ))}
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
          <img src="/images/image 5.jpeg" alt="" className="w-full h-full object-cover filter grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}>
            <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
              Mulai Proyek Anda
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
              Butuh Layanan Kami?
            </h2>
            <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Dapatkan konsultasi teknis gratis dari tim engineer kami. Kami siap membantu Anda menemukan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.5)] no-underline flex justify-center items-center gap-2 group">
                Hubungi Kami Sekarang <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="border-2 border-white/50 text-white hover:bg-white hover:text-dark px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg no-underline flex justify-center items-center">
                Tentang Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
