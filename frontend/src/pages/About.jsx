import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiShield, FiCheckCircle, FiFileText, FiActivity } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const kbliList = [
  { code: '43224', title: 'Instalasi Pendingin dan Ventilasi Udara' },
  { code: '43303', title: 'Pengecatan' },
  { code: '41013', title: 'Konstruksi Gedung' },
  { code: '42111', title: 'Konstruksi Jalan Raya' },
  { code: '42211', title: 'Konstruksi Jaringan Irigasi' },
  { code: '42220', title: 'Pemasangan Bangunan Pabrikasi untuk Jaringan Irigasi, Komunikasi dan Limbah' },
  { code: '43211', title: 'Instalasi Listrik' },
  { code: '43302', title: 'Pengerjaan Lantai, Dinding, Peralatan Saniter dan Plafon' },
  { code: '43909', title: 'Konstruksi Khusus Lainnya YTDL' },
  { code: '38110', title: 'Pengumpul Sampah dan Limbah Tidak Berbahaya' },
  { code: '38211', title: 'Treatment dan Pembuangan Limbah dan Sampah Tidak Berbahaya' },
  { code: '46100', title: 'Perdagangan Besar Atas Dasar Balas Jasa' },
  { code: '46631', title: 'Perdagangan Besar Barang Logam untuk Bahan Konstruksi' },
  { code: '46639', title: 'Perdagangan Besar Bahan Konstruksi Lainnya' },
  { code: '43291', title: 'Instalasi Mekanikal' },
  { code: '43304', title: 'Dekorasi Interior' },
  { code: '43305', title: 'Dekorasi Eksterior' }
];

const productsList = [
  'Pengembangan proyek energi terbarukan',
  'Pengembangan proyek mesin pengolahan dan pemanfaatan limbah dan sampah menjadi RDF serta pellet sebagai sumber energi terbarukan',
  'Konsultasi dan desain sistem energi',
  'Konstruksi dan instalasi sistem energi',
  'Pemeliharaan dan operasional sistem energi'
];

const About = () => {
  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/image 11.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Profil Perusahaan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
          >
            PT Anugerah Rekayasa Energi Abadi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Pelopor Solusi Energi yang Inovatif dan Berkelanjutan di Indonesia.
          </motion.p>
        </div>
      </div>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
                Membangun Masa Depan<br />
                <span className="text-primary">Energi & Konstruksi Indonesia</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PT Anugerah Rekayasa Energi Abadi adalah perusahaan yang bergerak di bidang jasa perdagangan, konstruksi, pengayaan dan rekayasa energi. Kami berkomitmen untuk menyediakan solusi energi yang inovatif serta berkelanjutan bagi kemajuan bangsa.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                PT Anugerah Rekayasa Energi Abadi didirikan pada bulan Agustus 2025 dengan tujuan mulia untuk menjadi pioneer dan pemimpin di bidang Rekayasa Energi di Indonesia, mengintegrasikan efisiensi tinggi serta kepedulian lingkungan yang kuat.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <img src="/images/image 16.jpeg" alt="Engineering Team" className="w-full h-96 object-cover rounded-sm shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-sm shadow-xl hidden md:block">
                <p className="text-sm uppercase tracking-wider font-semibold">Didirikan Pada</p>
                <p className="text-3xl font-extrabold mt-1">Agustus 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Arah Perusahaan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Visi & Misi Kami</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 rounded-sm shadow-sm border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-sm text-primary mb-6">
                <FiEye size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-dark mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menjadi Perusahaan Energi dan Rekayasa terkemuka di Indonesia dengan Fokus pada Inovasi dan berkelanjutan.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 rounded-sm shadow-sm border-l-4 border-accent hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-14 h-14 flex items-center justify-center rounded-sm text-accent mb-6">
                <FiTarget size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-dark mb-4">Misi</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menyediakan Solusi Energi yang inovatif, efisien dan ramah lingkungan serta meningkatkan kualitas hidup masyarakat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUK DAN LAYANAN ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Kompetensi Utama</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Produk & Layanan</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-background p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-accent/10 text-accent w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                  <FiActivity size={24} />
                </div>
                <p className="text-gray-700 font-bold leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGALITAS PERUSAHAAN ── */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Kredibilitas & Kepercayaan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Legalitas Perusahaan</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Akta & SK */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white/5 border border-white/10 p-8 rounded-sm"
            >
              <div className="bg-accent/20 text-accent w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                <FiFileText size={24} />
              </div>
              <h4 className="text-lg font-bold mb-4">Akta & SK Menkumham</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">Akta Perusahaan</span>
                  Akta pendirian No. 14 Notaris Raja Solehuddin, SH Tanggal 29-08-2025
                </li>
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">SK Menkumham</span>
                  AHU-0075759.AH.01.01 TAHUN 2025
                </li>
              </ul>
            </motion.div>

            {/* Identitas Pajak */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white/5 border border-white/10 p-8 rounded-sm"
            >
              <div className="bg-accent/20 text-accent w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                <FiShield size={24} />
              </div>
              <h4 className="text-lg font-bold mb-4">Perpajakan</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">NPWP</span>
                  1000 0000 0558 3058
                </li>
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">PKP</span>
                  S-00767/SPPKP-CT/KPP.3307/2025
                </li>
              </ul>
            </motion.div>

            {/* NIB */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white/5 border border-white/10 p-8 rounded-sm"
            >
              <div className="bg-accent/20 text-accent w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                <FiCheckCircle size={24} />
              </div>
              <h4 className="text-lg font-bold mb-4">NIB & Registrasi</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">NIB</span>
                  2309250062726
                </li>
                <li>
                  <span className="block text-gray-500 font-semibold text-xs uppercase">Tanggal Penerbitan</span>
                  Diterbitkan di Jakarta, tanggal: 23 September 2025
                </li>
              </ul>
            </motion.div>
          </div>

          {/* KBLI List */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm"
          >
            <h4 className="text-xl font-bold mb-8 text-accent border-b border-white/10 pb-4">Kode KBLI Terdaftar</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kbliList.map((kbli, idx) => (
                <div key={idx} className="flex gap-4 items-start text-sm">
                  <span className="bg-primary/20 text-primary font-bold px-2.5 py-1 rounded-sm text-xs">
                    {kbli.code}
                  </span>
                  <p className="text-gray-300 leading-snug">{kbli.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
