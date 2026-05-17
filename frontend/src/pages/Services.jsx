import { motion } from 'framer-motion';
import { FiWind, FiZap, FiTool, FiSettings, FiActivity, FiCpu, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
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
      <div className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/image 5.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Layanan Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
          >
            Solusi Rekayasa Komprehensif
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            PT Anugerah Rekayasa Energi Abadi menyediakan solusi terintegrasi di bidang energi terbarukan, perdagangan, dan konstruksi.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image side */}
                <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={s.image} alt={s.title} className="w-full h-80 object-cover rounded-sm shadow-xl" />
                  <div className={`absolute -bottom-5 ${i % 2 !== 0 ? '-right-5' : '-left-5'} bg-gradient-to-br ${s.color} text-white p-5 rounded-sm shadow-xl hidden md:block`}>
                    <div className="opacity-90">{s.icon}</div>
                  </div>
                </div>

                {/* Content side */}
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{s.subtitle}</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">{s.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        <FiCheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-bold hover:bg-primary/90 transition-all no-underline">
                    Minta Penawaran <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Cara Kerja Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proses Pengerjaan Proyek</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/10 hidden md:block mx-16" />
            {process.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4 shadow-lg relative z-10">
                  {p.step}
                </div>
                <h4 className="text-white font-extrabold mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Butuh Layanan Kami?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Dapatkan konsultasi teknis gratis dari tim engineer kami. Kami siap membantu Anda menemukan solusi terbaik.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl no-underline">
                Hubungi Kami Sekarang
              </Link>
              <Link to="/about" className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-sm font-bold transition-all text-lg no-underline">
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
