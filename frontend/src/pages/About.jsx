import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiTarget, FiEye, FiShield, FiCheckCircle, FiFileText, FiActivity, FiAward } from 'react-icons/fi';

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
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 11.jpeg" 
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
            Profil Perusahaan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            PT Anugerah Rekayasa Energi Abadi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Pelopor Solusi Energi yang Inovatif dan Berkelanjutan di Indonesia.
          </motion.p>
        </div>
      </div>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-24 bg-white overflow-hidden relative">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" 
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
                Membangun Masa Depan<br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Energi & Konstruksi Indonesia</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PT Anugerah Rekayasa Energi Abadi adalah perusahaan yang bergerak di bidang jasa perdagangan, konstruksi, pengayaan dan rekayasa energi. Kami berkomitmen untuk menyediakan solusi energi yang inovatif serta berkelanjutan bagi kemajuan bangsa.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                PT Anugerah Rekayasa Energi Abadi didirikan pada bulan Agustus 2025 dengan tujuan mulia untuk menjadi pioneer dan pemimpin di bidang Rekayasa Energi di Indonesia, mengintegrasikan efisiensi tinggi serta kepedulian lingkungan yang kuat.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={slideFromRightBlur}
              className="relative"
            >
              {/* Image Reveal Mask */}
              <motion.div 
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 bg-white z-20"
              />
              <img src="/images/image 16.jpeg" alt="Engineering Team" className="w-full h-[450px] object-cover rounded-2xl shadow-2xl" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-2xl hidden md:block border-4 border-white"
              >
                <p className="text-xs uppercase tracking-widest font-bold text-white/80">Didirikan Pada</p>
                <p className="text-3xl font-extrabold mt-1">Agustus 2025</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={blurFadeUp} 
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Arah Perusahaan <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark">Visi & Misi Kami</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white p-12 rounded-2xl shadow-sm border-t-8 border-primary hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="bg-primary/10 w-20 h-20 flex items-center justify-center rounded-xl text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-primary/30">
                <FiEye size={36} className="group-hover:rotate-6 transition-transform" />
              </div>
              <h3 className="text-3xl font-extrabold text-dark mb-5">Visi</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Menjadi Perusahaan Energi dan Rekayasa terkemuka di Indonesia dengan Fokus pada Inovasi dan berkelanjutan.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white p-12 rounded-2xl shadow-sm border-t-8 border-accent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="bg-accent/10 w-20 h-20 flex items-center justify-center rounded-xl text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-accent/30">
                <FiTarget size={36} className="group-hover:rotate-6 transition-transform" />
              </div>
              <h3 className="text-3xl font-extrabold text-dark mb-5">Misi</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Menyediakan Solusi Energi yang inovatif, efisien dan ramah lingkungan serta meningkatkan kualitas hidup masyarakat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUK DAN LAYANAN ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={blurFadeUp} 
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Kompetensi Utama <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark">Produk & Layanan</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.12, type: "spring", stiffness: 100, damping: 20 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:-translate-y-2.5 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                    <FiActivity size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed text-lg group-hover:text-primary transition-colors">{item}</p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-4 flex justify-between items-center text-xs text-gray-400 font-bold tracking-widest uppercase">
                  <span>Layanan Inti</span>
                  <FiCheckCircle className="text-accent" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGALITAS PERUSAHAAN ── */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={blurFadeUp} 
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Kredibilitas & Kepercayaan <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Legalitas Perusahaan</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Akta & SK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1, type: "spring" }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="bg-accent/20 text-accent w-14 h-14 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <FiFileText size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-6 text-white group-hover:text-accent transition-colors">Akta & SK Menkumham</h4>
              <ul className="space-y-5 text-gray-300">
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">Akta Perusahaan</span>
                  Akta pendirian No. 14 Notaris Raja Solehuddin, SH Tanggal 29-08-2025
                </li>
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">SK Menkumham</span>
                  AHU-0075759.AH.01.01 TAHUN 2025
                </li>
              </ul>
            </motion.div>

            {/* Identitas Pajak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="bg-accent/20 text-accent w-14 h-14 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <FiShield size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-6 text-white group-hover:text-accent transition-colors">Perpajakan</h4>
              <ul className="space-y-5 text-gray-300">
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">NPWP</span>
                  1000 0000 0558 3058
                </li>
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">PKP</span>
                  S-00767/SPPKP-CT/KPP.3307/2025
                </li>
              </ul>
            </motion.div>

            {/* NIB */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3, type: "spring" }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="bg-accent/20 text-accent w-14 h-14 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <FiCheckCircle size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-6 text-white group-hover:text-accent transition-colors">NIB & Registrasi</h4>
              <ul className="space-y-5 text-gray-300">
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">NIB</span>
                  2309250062726
                </li>
                <li className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-bold text-xs uppercase tracking-wider mb-1">Tanggal Penerbitan</span>
                  Diterbitkan di Jakarta, tanggal: 23 September 2025
                </li>
              </ul>
            </motion.div>
          </div>

          {/* KBLI List */}
          <motion.div
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl"
          >
            <h4 className="text-2xl font-extrabold mb-10 text-accent border-b border-white/10 pb-5 flex items-center gap-3">
              <FiAward /> Kode KBLI Terdaftar
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kbliList.map((kbli, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring" } }
                  }}
                  className="flex gap-4 items-start text-sm bg-white/5 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="bg-primary/20 text-primary font-bold px-3 py-1.5 rounded-lg text-xs tracking-wider flex-shrink-0">
                    {kbli.code}
                  </span>
                  <p className="text-gray-300 leading-snug font-medium">{kbli.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
