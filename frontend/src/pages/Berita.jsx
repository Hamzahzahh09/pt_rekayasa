import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiSearch, FiBookOpen } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export const MOCK_NEWS = [
  {
    id: 'mock-1',
    title: 'PT Anugerah Rekayasa Energi Abadi Resmi Memulai Operasional di Bidang Rekayasa Energi',
    category: 'Company News',
    author: 'Admin AREA',
    coverImage: '/images/image 11.jpeg',
    excerpt: 'Setelah resmi didirikan pada Agustus 2025 dan mendapatkan legalitas lengkap pada September 2025, perusahaan siap menjadi pionir rekayasa energi berkelanjutan di Indonesia.',
    content: 'PT Anugerah Rekayasa Energi Abadi (AREA) dengan bangga mengumumkan dimulainya operasional resmi di Indonesia. Didirikan pada bulan Agustus 2025 dan berpusat di Jakarta, perusahaan berkomitmen untuk menghadirkan solusi teknologi rekayasa energi yang inovatif, efisien, dan ramah lingkungan.\n\nDalam waktu singkat, AREA telah berhasil menyelesaikan seluruh proses legalitas usaha, termasuk Akta Pendirian No. 14, Surat Keputusan (SK) Menkumham AHU-0075759.AH.01.01 TAHUN 2025, serta Nomor Induk Berusaha (NIB) 2309250062726 yang diterbitkan secara resmi pada 23 September 2025.\n\nDengan modal legalitas yang solid serta pendaftaran 17 Kode KBLI strategis—meliputi instalasi mekanikal-elektrikal, konstruksi khusus, hingga pengolahan sampah—PT Anugerah Rekayasa Energi Abadi siap melayani kebutuhan sektor industri berskala nasional.',
    createdAt: '2025-09-24T08:00:00.000Z',
    tags: ['company', 'legalitas', 'energi']
  },
  {
    id: 'mock-2',
    title: 'Inovasi Pengolahan Sampah Menjadi Bahan Bakar Alternatif RDF dan Pellet Energi',
    category: 'Innovation',
    author: 'Admin AREA',
    coverImage: '/images/image 16.jpeg',
    excerpt: 'AREA luncurkan proyek percontohan mesin pengolah sampah terintegrasi untuk menghasilkan RDF dan pellet sebagai bahan bakar alternatif substitusi batubara.',
    content: 'Sebagai bagian dari komitmen ramah lingkungan, PT Anugerah Rekayasa Energi Abadi meluncurkan portofolio teknologi terbarunya dalam pemanfaatan limbah dan sampah tidak berbahaya menjadi energi bersih.\n\nMelalui rekayasa mesin modern, sampah diolah secara mekanis dan termal menjadi Refuse Derived Fuel (RDF) serta pellet padat berkalori tinggi. Produk pellet energi ini dirancang khusus untuk menjadi bahan bakar alternatif ramah lingkungan bagi industri semen dan pembangkit listrik, menggantikan penggunaan batu bara secara bertahap.\n\n"Ini merupakan sumbangsih nyata kami dalam menekan penumpukan limbah sekaligus mendukung program transisi energi nasional," ujar tim rekayasa AREA.',
    createdAt: '2025-10-12T09:30:00.000Z',
    tags: ['rdf', 'waste-to-energy', 'pellet']
  },
  {
    id: 'mock-3',
    title: 'Instalasi Sistem Pendingin HVAC Industri Berstandar Efisiensi Tinggi',
    category: 'Engineering',
    author: 'Admin AREA',
    coverImage: '/images/image 15.jpeg',
    excerpt: 'Penerapan teknologi HVAC terkini oleh tim engineer berpengalaman untuk memaksimalkan efisiensi energi di gedung fasilitas produksi komersial.',
    content: 'PT Anugerah Rekayasa Energi Abadi sukses mengimplementasikan instalasi sistem pendingin udara dan ventilasi industri (HVAC) berkapasitas besar dengan standar efisiensi energi tinggi.\n\nPekerjaan yang terdaftar di bawah Kode KBLI 43224 ini mencakup perancangan jalur ducting, pemasangan Air Handling Unit (AHU), chiller plant, dan cooling tower pendukung. Dengan sistem otomasi pintar, instalasi ini mampu mengurangi konsumsi daya listrik pendingin hingga 25% dibandingkan sistem konvensional, memberikan dampak efisiensi finansial yang signifikan bagi operasional klien.',
    createdAt: '2025-11-05T14:15:00.000Z',
    tags: ['hvac', 'engineering', 'efisiensi']
  }
];

const Berita = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setArticles(data);
        } else {
          setArticles(MOCK_NEWS);
        }
      })
      .catch(err => {
        console.warn('API error, falling back to mock news:', err);
        setArticles(MOCK_NEWS);
      });
  }, []);

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/image 19.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Berita & Informasi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5"
          >
            Berita & Artikel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Informasi terbaru seputar proyek, inovasi, dan kegiatan PT Anugerah Rekayasa Energi Abadi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── SEARCH BAR ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative max-w-xl mx-auto mb-14"
        >
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Cari berita atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white shadow-sm text-sm"
          />
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-center py-32"
          >
            <FiBookOpen className="mx-auto text-gray-300 mb-4" size={56} />
            <p className="text-gray-400 text-xl font-semibold">Belum ada berita yang diterbitkan.</p>
            <p className="text-gray-400 mt-2 text-sm">Silakan kembali lagi nanti.</p>
          </motion.div>
        ) : (
          <>
            {/* ── FEATURED ARTICLE ── */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Artikel Utama</p>
                <Link to={`/berita/${featured.id}`}>
                  <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 lg:flex">
                    {featured.coverImage && (
                      <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                        <img
                          src={featured.coverImage}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center">
                      <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
                        {featured.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-400 gap-4 mb-6">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar size={13} /> {formatDate(featured.createdAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiUser size={13} /> {featured.author}
                        </span>
                      </div>
                      <div className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-3 transition-all text-sm">
                        Baca Selengkapnya <FiArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* ── ARTICLE GRID ── */}
            {rest.length > 0 && (
              <>
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="mb-8"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">Artikel Lainnya</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                      <Link to={`/berita/${article.id}`}>
                        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                          {article.coverImage && (
                            <div className="h-52 overflow-hidden">
                              <img
                                src={article.coverImage}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          )}
                          <div className="p-6 flex flex-col flex-1">
                            <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest mb-3 bg-accent/10 px-2.5 py-1 rounded-full w-fit">
                              {article.category}
                            </span>
                            <h3 className="text-base font-extrabold text-dark mb-3 leading-snug group-hover:text-primary transition-colors flex-1">
                              {article.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">{article.excerpt}</p>
                            <div className="flex items-center text-xs text-gray-400 gap-3 pt-4 border-t border-gray-100">
                              <span className="flex items-center gap-1">
                                <FiCalendar size={11} /> {formatDate(article.createdAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiUser size={11} /> {article.author}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-primary mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ingin Tahu Lebih Banyak?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
              Hubungi kami untuk konsultasi teknis atau informasi lebih lanjut tentang layanan kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl no-underline">
                Hubungi Kami
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-sm font-bold transition-all text-lg no-underline">
                Lihat Layanan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Berita;
