import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const contactInfo = [
  {
    icon: <FiMapPin size={22} />,
    label: 'Kantor Pusat',
    lines: ['Jl. Industrial Estate No. 88', 'Kawasan Industri Terpadu', 'Jakarta, Indonesia 10220'],
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Telepon',
    lines: ['+62 21 555 0123 (Kantor)', '+62 811 555 0124 (Darurat 24/7)'],
    links: ['tel:+62215550123', 'tel:+628115550124'],
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    lines: ['info@anugerahabadinusantara.co.id', 'support@anugerahabadinusantara.co.id'],
    links: ['mailto:info@anugerahabadinusantara.co.id', 'mailto:support@anugerahabadinusantara.co.id'],
  },
  {
    icon: <FiClock size={22} />,
    label: 'Jam Operasional',
    lines: ['Senin – Jumat: 08.00 – 17.00 WIB', 'Sabtu: 08.00 – 13.00 WIB'],
  },
];

const Contact = () => {
  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/image 9.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/60 to-dark/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Hubungi Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5"
          >
            Kami Siap Membantu Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Konsultasikan kebutuhan rekayasa industri Anda dengan tim engineer berpengalaman kami.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── CONTACT INFO ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Informasi Kontak</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">Mari Berkolaborasi</h2>
              <p className="text-gray-500 leading-relaxed">Kami siap mendiskusikan kebutuhan proyek Anda. Hubungi kami melalui salah satu kanal berikut atau isi formulir untuk kami tindak lanjuti.</p>
            </div>

            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-sm shadow-sm border border-gray-100 hover:border-primary/30 transition-colors group">
                <div className="bg-primary/10 text-primary p-3 rounded-sm flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{c.label}</p>
                  {c.lines.map((line, li) => (
                    c.links ? (
                      <a key={li} href={c.links[li]} className="block text-gray-700 text-sm font-medium hover:text-primary transition-colors no-underline">
                        {line}
                      </a>
                    ) : (
                      <p key={li} className="text-gray-700 text-sm font-medium">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/628115550124"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-sm font-bold transition-colors text-lg shadow-lg no-underline"
            >
              <FaWhatsapp size={24} />
              Chat via WhatsApp
            </a>
          </motion.div>

          {/* ── CONTACT FORM ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Formulir Kontak</span>
              <h3 className="text-2xl font-extrabold text-dark mb-6">Kirim Pesan kepada Kami</h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Depan</label>
                    <input type="text" placeholder="Budi" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Belakang</label>
                    <input type="text" placeholder="Santoso" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Perusahaan</label>
                  <input type="text" placeholder="PT Contoh Industri" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Alamat Email</label>
                  <input type="email" placeholder="budi@perusahaan.co.id" className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Layanan yang Diminati</label>
                  <select className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white">
                    <option>Instalasi HVAC</option>
                    <option>Rekayasa Elektrikal</option>
                    <option>Layanan Mekanikal</option>
                    <option>Pemeliharaan Industri</option>
                    <option>Konsultasi Teknis</option>
                    <option>Pertanyaan Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pesan</label>
                  <textarea rows="5" placeholder="Ceritakan kebutuhan proyek Anda..." className="w-full border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-sm transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 hover:shadow-xl">
                  Kirim Pesan <FiArrowRight />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAP PLACEHOLDER ── */}
      <div className="bg-gray-100 h-64 flex items-center justify-center border-t border-gray-200">
        <div className="text-center">
          <FiMapPin className="text-primary mx-auto mb-3" size={36} />
          <p className="text-gray-500 font-semibold">Kawasan Industri Terpadu, Jakarta</p>
          <p className="text-gray-400 text-sm">Jl. Industrial Estate No. 88, Jakarta 10220</p>
        </div>
      </div>

    </div>
  );
};

export default Contact;
