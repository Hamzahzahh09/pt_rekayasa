import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiTag, FiArrowRight } from 'react-icons/fi';
import { MOCK_NEWS } from './Berita';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const BeritaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(found => {
        setArticle(found);
        fetch('http://localhost:5000/api/news')
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
      <div className="relative bg-dark text-white py-24 px-4 overflow-hidden">
        {article.coverImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={article.coverImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              to="/berita"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-6 transition-colors no-underline"
            >
              <FiArrowLeft /> Kembali ke Berita
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
            className="flex flex-wrap items-center text-sm text-gray-300 gap-5"
          >
            <span className="flex items-center gap-2">
              <FiCalendar size={14} /> {formatDate(article.createdAt)}
            </span>
            <span className="flex items-center gap-2">
              <FiUser size={14} /> {article.author}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── COVER IMAGE ── */}
        {article.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 rounded-sm overflow-hidden shadow-lg"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-sm shadow-md border border-gray-100 p-8 md:p-12"
        >
          {article.excerpt && (
            <p className="text-lg text-gray-600 font-medium border-l-4 border-primary pl-5 mb-8 italic leading-relaxed">
              {article.excerpt}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {article.content}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <FiTag className="text-gray-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
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
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Kategori Serupa</p>
            <h2 className="text-2xl font-extrabold text-dark mb-8">Berita Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} to={`/berita/${rel.id}`}>
                  <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                    {rel.coverImage && (
                      <div className="h-44 overflow-hidden">
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest mb-2 bg-accent/10 px-2 py-0.5 rounded-full">
                        {rel.category}
                      </span>
                      <h3 className="text-sm font-extrabold text-dark leading-snug group-hover:text-primary transition-colors">
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
        <div className="mt-12 text-center">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 hover:shadow-lg text-white px-10 py-4 rounded-sm font-bold transition-all duration-300 no-underline"
          >
            <FiArrowLeft /> Semua Berita
          </Link>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Tertarik Bekerja Sama?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Hubungi Tim Kami</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
              Dapatkan konsultasi teknis gratis dan temukan solusi terbaik untuk kebutuhan industri Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all text-lg shadow-xl no-underline">
                Hubungi Kami
              </Link>
              <Link to="/berita" className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-sm font-bold transition-all text-lg no-underline inline-flex items-center gap-2">
                Berita Lainnya <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BeritaDetail;
