import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiSearch, FiBookOpen } from 'react-icons/fi';
import { API_ENDPOINTS } from '../config/api';

// -- CUSTOM ANIMATIONS --
const blurFadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const slideFromLeftBlur = {
  hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
};

export const MOCK_NEWS = [];

const Berita = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(API_ENDPOINTS.NEWS)
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
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 19.jpeg" 
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
            Berita & Informasi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            Berita & Artikel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Informasi terbaru seputar proyek, inovasi, dan kegiatan PT Anugerah Rekayasa Energi Abadi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── SEARCH BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-md mx-auto mb-16 shadow-sm"
        >
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Cari berita atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm font-medium shadow-sm transition-all focus:shadow-md"
          />
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <FiBookOpen className="mx-auto text-gray-300 mb-5 animate-pulse" size={64} />
            <p className="text-gray-500 text-xl font-extrabold mb-2">Belum ada berita yang ditemukan.</p>
            <p className="text-gray-400 text-sm font-light">Silakan gunakan kata kunci pencarian lainnya.</p>
          </motion.div>
        ) : (
          <>
            {/* ── FEATURED ARTICLE ── */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-24"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-5 block flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-accent"></span> Artikel Utama
                </span>
                <Link to={`/berita/${featured.id}`} className="no-underline">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-500 lg:flex">
                    {featured.coverImage && (
                      <div className="lg:w-1/2 h-[350px] lg:h-auto overflow-hidden relative">
                        <img
                          src={featured.coverImage}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      </div>
                    )}
                    <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
                      <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-md uppercase tracking-widest mb-6 w-fit">
                        {featured.category}
                      </span>
                      <h2 className="text-3xl font-extrabold text-dark mb-5 leading-snug group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed font-light text-base">{featured.excerpt}</p>
                      
                      <div className="flex flex-wrap items-center text-xs text-gray-400 gap-6 mb-8 border-t border-gray-100 pt-6">
                        <span className="flex items-center gap-2">
                          <FiCalendar size={14} className="text-primary" /> {formatDate(featured.createdAt)}
                        </span>
                        <span className="flex items-center gap-2 font-semibold text-primary">
                          <FiUser size={14} /> {featured.author}
                        </span>
                      </div>
                      <div className="inline-flex items-center text-primary font-bold gap-3 group-hover:gap-5 transition-all text-sm uppercase tracking-wider">
                        Baca Selengkapnya <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
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
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}
                  className="mb-10"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-accent"></span> Artikel Lainnya
                  </span>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                    >
                      <Link to={`/berita/${article.id}`} className="no-underline">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                          {article.coverImage && (
                            <div className="h-56 overflow-hidden relative">
                              <img
                                src={article.coverImage}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                              />
                            </div>
                          )}
                          <div className="p-8 flex flex-col flex-1">
                            <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest mb-4 bg-accent/10 px-3.5 py-1 rounded-md w-fit">
                              {article.category}
                            </span>
                            <h3 className="text-lg font-extrabold text-dark mb-4 leading-snug group-hover:text-primary transition-colors flex-1">
                              {article.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">{article.excerpt}</p>
                            <div className="flex items-center text-xs text-gray-400 gap-4 pt-5 border-t border-gray-100">
                              <span className="flex items-center gap-1.5">
                                <FiCalendar size={13} className="text-primary" /> {formatDate(article.createdAt)}
                              </span>
                              <span className="flex items-center gap-1.5 font-semibold text-primary">
                                <FiUser size={13} /> {article.author}
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
      <section className="py-24 bg-primary mt-16 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 opacity-20 mix-blend-overlay"
        >
          <img src="/images/image 19.jpeg" alt="" className="w-full h-full object-cover filter grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}>
            <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
              Mulai Langkah Anda
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
              Ingin Tahu Lebih Banyak?
            </h2>
            <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Hubungi kami untuk konsultasi teknis atau informasi lebih lanjut tentang inovasi rekayasa energi kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.5)] no-underline flex justify-center items-center gap-2 group">
                Hubungi Kami <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white hover:bg-white hover:text-dark px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg no-underline flex justify-center items-center">
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
