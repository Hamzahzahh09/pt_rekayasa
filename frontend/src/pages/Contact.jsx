import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiArrowRight, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

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

const contactInfo = [
  {
    icon: <FiMapPin size={22} />,
    label: 'Alamat',
    lines: ['Jl.Guru Suma no.135 Rt.004/001', 'Cibinong-Bogor'],
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    lines: ['area70an@gmail.com', 'marketing@area.co.id'],
    links: ['mailto:area70an@gmail.com', 'mailto:marketing@area.co.id'],
  },
  {
    icon: <FiGlobe size={22} />,
    label: 'Website',
    lines: ['www.area.co.id'],
    links: ['https://www.area.co.id'],
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Contact Person',
    lines: ['082128337789', '088973803316', '081317136515', '081311241768'],
    links: ['tel:082128337789', 'tel:088973803316', 'tel:081317136515', 'tel:081311241768'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    service: 'Instalasi HVAC',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, company, email, service, message } = formData;

    const textMessage = `Halo, saya ingin berkonsultasi mengenai proyek.

*Nama:* ${firstName} ${lastName}
*Perusahaan:* ${company || '-'}
*Email:* ${email || '-'}
*Layanan:* ${service}
*Pesan:* ${message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/6282128337789?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-background">

      {/* ── HERO HEADER ── */}
      <div className="relative bg-dark text-white py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-25">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            src="/images/image 9.jpeg" 
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
            Hubungi Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
          >
            Kami Siap Membantu Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Konsultasikan kebutuhan rekayasa industri Anda dengan tim engineer berpengalaman kami.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 overflow-hidden">

          {/* ── CONTACT INFO ── */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer} 
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={slideFromLeftBlur}>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Informasi Kontak
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4 leading-tight">Mari Berkolaborasi</h2>
              <p className="text-gray-500 leading-relaxed font-light">Kami siap mendiskusikan kebutuhan proyek Anda. Hubungi kami melalui salah satu kanal berikut atau isi formulir untuk kami tindak lanjuti.</p>
            </motion.div>

            {contactInfo.map((c, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring" } }
                }}
                className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="bg-primary/5 text-primary p-4 rounded-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{c.label}</p>
                  {c.lines.map((line, li) => (
                    c.links ? (
                      <a key={li} href={c.links[li]} className="block text-gray-700 text-sm md:text-base font-bold hover:text-primary transition-colors no-underline">
                        {line}
                      </a>
                    ) : (
                      <p key={li} className="text-gray-700 text-sm md:text-base font-bold">{line}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { delay: 0.6, type: "spring" } }
              }}
              href="https://wa.me/6282128337789"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-5 rounded-xl font-bold transition-all duration-300 text-lg shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.45)] hover:-translate-y-1 no-underline"
            >
              <FaWhatsapp size={24} className="animate-bounce" />
              Chat via WhatsApp
            </motion.a>
          </motion.div>

          {/* ── CONTACT FORM ── */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={slideFromRightBlur} 
            className="lg:col-span-3"
          >
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Formulir Kontak
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-dark mb-8 leading-tight">Kirim Pesan kepada Kami</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Nama Depan</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Budi" 
                      required
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Nama Belakang</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Santoso" 
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Nama Perusahaan</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="PT Contoh Industri" 
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white text-sm" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Alamat Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="budi@perusahaan.co.id" 
                    required
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white text-sm" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Layanan yang Diminati</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white text-sm font-semibold text-gray-700"
                  >
                    <option>Instalasi HVAC</option>
                    <option>Rekayasa Elektrikal</option>
                    <option>Layanan Mekanikal</option>
                    <option>Pemeliharaan Industri</option>
                    <option>Konsultasi Teknis</option>
                    <option>Pertanyaan Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Pesan</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan proyek Anda..." 
                    required
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none text-sm leading-relaxed"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-5 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5">
                  Kirim Pesan <FiArrowRight />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAP BANNER ── */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-900 h-80 flex items-center justify-center border-t border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url('/images/image 9.jpeg')` }} />
        <div className="text-center relative z-10 p-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30">
            <FiMapPin className="text-white" size={24} />
          </div>
          <p className="text-white font-extrabold text-2xl mb-1">Cibinong, Bogor</p>
          <p className="text-gray-400 text-sm font-medium tracking-wide">Jl.Guru Suma no.135 Rt.004/001</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
