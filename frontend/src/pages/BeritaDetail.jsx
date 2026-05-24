import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiTag, FiArrowRight } from 'react-icons/fi';
import { MOCK_NEWS } from './Berita';
import { API_ENDPOINTS } from '../config/api';

// -- CUSTOM ANIMATIONS --
const blurFadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const BeritaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINTS.NEWS_BY_ID(id))
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(found => {
        setArticle(found);
        fetch(API_ENDPOINTS.NEWS)
          .then(res => res.json())
          .then(all => {
            if (Array.isArray(all) && all.length > 0) {
              const rel = all
                .filter((a) => a.category === found.category && String(a.id) !== String(id))
                .slice(0, 3);
              setRelated(rel);
            } else {
              const rel = MOCK_NEWS
                .filter((a) => a.category === found.category && String(a.id) !== String(id))
                .slice(0, 3);
              setRelated(rel);
            }
          })
          .catch(() => {
            const rel = MOCK_NEWS
              .filter((a) => a.category === found.category && String(a.id) !== String(id))
              .slice(0, 3);
            setRelated(rel);
          });
      })
      .catch(err => {
        console.warn('Backend detail failed, searching local mock news:', err);
        const localFound = MOCK_NEWS.find(a => String(a.id) === String(id));
        if (localFound) {
          setArticle(localFound);
          const rel = MOCK_NEWS
            .filter((a) => a.category === localFound.category && String(a.id) !== String(id))
            .slice(0, 3);
          setRelated(rel);
        } else {
          navigate('/berita');
        }
      });
  }, [id, navigate]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  if (!article) return null;

  return (
    <div className="bg-background min-h-screen">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-24 px-4 overflow-hidden min-h-[40vh] flex items-center">
        {article.coverImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={article.coverImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/60 to-dark/95" />
        <div className="relative max-w-4xl mx-auto w-full z-10">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              to="/berita"
              className="group inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-6 transition-colors no-underline font-semibold"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Berita
            </Link>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            {article.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center text-sm text-gray-300 gap-5 border-t border-white/10 pt-5 mt-5"
          >
            <span className="flex items-center gap-2">
              <FiCalendar size={14} className="text-accent" /> {formatDate(article.createdAt)}
            </span>
            <span className="flex items-center gap-2 font-semibold text-accent">
              <FiUser size={14} /> {article.author}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── COVER IMAGE ── */}
        {article.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full max-h-[500px] object-cover"
            />
          </motion.div>
        )}

        {/* ── ARTICLE CONTENT ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-14"
        >
          {article.excerpt && (
            <p className="text-xl text-gray-600 font-medium border-l-4 border-primary pl-6 mb-10 italic leading-relaxed">
              {article.excerpt}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light text-base md:text-lg"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {article.content}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <FiTag className="text-gray-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-gray-200/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.article>

        {/* ── RELATED ARTICLES ── */}
        {related.length > 0 && (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}
            className="mt-24"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Kategori Serupa
            </span>
            <h2 className="text-3xl font-extrabold text-dark mb-10 leading-tight">Berita Terkait</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => (
                <Link key={rel.id} to={`/berita/${rel.id}`} className="no-underline">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col">
                    {rel.coverImage && (
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block text-accent text-[9px] font-bold uppercase tracking-widest mb-3 bg-accent/10 px-2.5 py-1 rounded-md w-fit">
                        {rel.category}
                      </span>
                      <h3 className="text-sm font-extrabold text-dark leading-snug group-hover:text-primary transition-colors flex-1 line-clamp-3">
                        {rel.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── BACK BUTTON ── */}
        <div className="mt-16 text-center">
          <Link
            to="/berita"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/95 text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-primary/30"
          >
            <FiArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" /> Semua Berita
          </Link>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-dark text-white relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurFadeUp}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block flex justify-center items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Tertarik Bekerja Sama? <span className="w-8 h-[2px] bg-accent"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Hubungi Tim Kami</h2>
            <p className="text-gray-300 mb-12 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
              Dapatkan konsultasi teknis gratis dan temukan solusi terbaik untuk kebutuhan industri Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg shadow-[0_0_20px_rgba(var(--color-accent),0.5)] no-underline flex justify-center items-center gap-2 group">
                Hubungi Kami <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/berita" className="border-2 border-white/50 text-white hover:bg-white hover:text-dark px-10 py-5 rounded-md font-bold transition-all duration-300 text-lg no-underline flex justify-center items-center gap-2">
                Berita Lainnya
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BeritaDetail;
