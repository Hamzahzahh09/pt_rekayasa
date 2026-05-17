import { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active nav on scroll effect
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  // Fade-in-up on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="logo">
            PT. <span>Anugerah Abadi Nusantara</span>
          </a>
          <ul className="nav-links">
            <li><a href="#perusahaan" className={`nav-link ${activeNav === 'perusahaan' ? 'active' : ''}`}>Perusahaan</a></li>
            <li><a href="#bisnis" className={`nav-link ${activeNav === 'bisnis' ? 'active' : ''}`}>Bisnis Kami</a></li>
            <li><a href="#berita" className={`nav-link ${activeNav === 'berita' ? 'active' : ''}`}>Berita</a></li>
            <li><a href="#investor" className={`nav-link ${activeNav === 'investor' ? 'active' : ''}`}>Investor</a></li>
          </ul>
          <div className="nav-actions">
            {/* Search */}
            <button aria-label="Cari">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            {/* Language */}
            <button className="lang-btn">ID / EN</button>
            {/* Hamburger */}
            <button className="hamburger" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Pengumuman Terbaru
          </div>
          <h1>Pemberitahuan Penyelenggaraan Paparan Publik Tahun 2026</h1>
        </div>
      </section>

      {/* ─── BREADCRUMB ─── */}
      <div className="breadcrumb-bar">
        <div className="breadcrumb-inner">
          <a href="#">Beranda</a>
          <span className="sep">›</span>
          <span>Pemberitahuan Paparan Publik 2026</span>
        </div>
      </div>

      {/* ─── TENTANG KAMI ─── */}
      <section id="perusahaan" className="about-section section-py">
        <div className="container">
          <div className="label">Tentang Kami</div>
          <h2 className="section-title">
            <span className="blue">Pioneer Rekayasa Energi</span><br />
            Di Indonesia
          </h2>
          <div className="about-grid" style={{ marginTop: '36px' }}>
            {/* Text column */}
            <div className="about-text fade-in-up">
              <div className="section-divider"></div>
              <p>PT Anugerah Abadi Nusantara adalah perusahaan yang bergerak di bidang jasa perdagangan, konstruksi, pengujian dan rekayasa energi.</p>
              <p>Kami berkomitmen untuk menyediakan solusi energi yang inovatif serta berkelanjutan.</p>
              <p>Didirikan pada Agustus 2025, perusahaan kami bertujuan menjadi pioneer dan pemimpin di bidang rekayasa energi di Indonesia dengan tim yang berpengalaman dan bersertifikat.</p>
              <a href="#" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex', width: 'fit-content' }}>
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            {/* Legalitas column */}
            <div className="fade-in-up delay-1">
              <div className="legalitas-card">
                <h4>Legalitas Perusahaan</h4>
                <div className="legalitas-item">
                  <div className="legalitas-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="legalitas-item-text">
                    <strong>Akta Pendirian Perusahaan</strong>
                    No. 12 – Agustus 2025
                  </div>
                </div>
                <div className="legalitas-item">
                  <div className="legalitas-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="legalitas-item-text">
                    <strong>Nomor Induk Berusaha (NIB)</strong>
                    Teregistrasi OSS RBA
                  </div>
                </div>
                <div className="legalitas-item">
                  <div className="legalitas-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="legalitas-item-text">
                    <strong>NPWP Perusahaan</strong>
                    Terdaftar di KPP setempat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BISNIS KAMI ─── */}
      <section id="bisnis" className="bisnis-section section-py">
        <div className="container">
          <div className="bisnis-header fade-in-up">
            <h3>Bisnis Kami</h3>
            <p>Kami bergerak di bidang energi berkelanjutan, meliputi pengembangan energi terbarukan, manajemen limbah, instalasi RDF dan panel, serta layanan konsultasi, konstruksi, instalasi, dan operasional sistem energi.</p>
          </div>
          <div className="bisnis-grid">
            <div className="bisnis-card fade-in-up delay-1">
              <div className="bisnis-card-img" style={{ background: 'linear-gradient(135deg,#1B4FD8,#3B6EF0)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="img-tag">Energi Terbarukan</span>
              </div>
              <div className="bisnis-card-body">
                <h4>Pengembangan Energi Terbarukan</h4>
                <p>Solusi energi surya, angin, dan biomassa yang berkelanjutan untuk industri dan korporasi.</p>
              </div>
            </div>
            <div className="bisnis-card fade-in-up delay-2">
              <div className="bisnis-card-img" style={{ background: 'linear-gradient(135deg,#0E7C6B,#12A88E)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="img-tag">Manajemen Limbah</span>
              </div>
              <div className="bisnis-card-body">
                <h4>Manajemen &amp; Pengolahan Limbah</h4>
                <p>Sistem pengelolaan limbah industri menjadi energi melalui teknologi RDF yang efisien.</p>
              </div>
            </div>
            <div className="bisnis-card fade-in-up delay-3">
              <div className="bisnis-card-img" style={{ background: 'linear-gradient(135deg,#6B21A8,#9333EA)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
                <span className="img-tag">Instalasi Panel</span>
              </div>
              <div className="bisnis-card-body">
                <h4>Instalasi RDF &amp; Panel Surya</h4>
                <p>Pemasangan dan komisioning sistem panel surya skala industri dan komersial bersertifikat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BERITA & ACARA ─── */}
      <section id="berita" className="section-py" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="news-header">
            <div className="fade-in-up">
              <div className="label">Terkini</div>
              <h2 className="section-title">Berita &amp; Acara</h2>
            </div>
            <a href="#" className="see-more-link fade-in-up">
              Lihat Semua
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="news-grid">
            {/* Card 1 – photo style */}
            <article className="news-card fade-in-up delay-1">
              <div className="news-img">
                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=75" alt="Presentasi Investor" loading="lazy" />
              </div>
              <div className="news-body">
                <div className="news-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  15 Mei 2026
                </div>
                <h3>Presentasi hubungan Investor kinerja kuarta I 2026</h3>
              </div>
            </article>
            {/* Card 2 – logo style */}
            <article className="news-card fade-in-up delay-2">
              <div className="news-img">
                <div className="logo-placeholder">
                  <div className="tiga-roda-logo">
                    <span className="dot3"></span>
                  </div>
                  <div className="logo-text-block">
                    <div className="brand">Indocement</div>
                    <div className="sub">Heidelberg Materials</div>
                  </div>
                </div>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  10 Mei 2026
                </div>
                <h3>Presentasi hubungan Investor kinerja kuarta I 2026</h3>
              </div>
            </article>
            {/* Card 3 – logo style */}
            <article className="news-card fade-in-up delay-3">
              <div className="news-img">
                <div className="logo-placeholder">
                  <div className="tiga-roda-logo">
                    <span className="dot3"></span>
                  </div>
                  <div className="logo-text-block">
                    <div className="brand">Indocement</div>
                    <div className="sub">Heidelberg Materials</div>
                  </div>
                </div>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  05 Mei 2026
                </div>
                <h3>Presentasi hubungan Investor kinerja kuarta I 2026</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── HUBUNGAN INVESTOR ─── */}
      <section id="investor" className="investor-section section-py">
        <div className="container">
          <div className="investor-header fade-in-up">
            <div className="label">Relasi</div>
            <h2 className="section-title" style={{ color: 'var(--primary)' }}>Hubungan Investor</h2>
          </div>
          <div className="investor-grid">
            <div className="investor-card fade-in-up delay-1">
              <div className="investor-num">01</div>
              <h3>Laporan Tahunan</h3>
              <p>Laporan kinerja tahunan perusahaan yang komprehensif dan transparan untuk para pemegang saham.</p>
              <div className="investor-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="investor-card featured fade-in-up delay-2">
              <div className="investor-num">02</div>
              <h3>Presentasi Perusahaan</h3>
              <p>Dokumen presentasi terkini yang menggambarkan strategi, kinerja, dan prospek bisnis perusahaan.</p>
              <div className="investor-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="investor-card fade-in-up delay-3">
              <div className="investor-num">03</div>
              <h3>Laporan Keuangan</h3>
              <p>Laporan keuangan triwulanan dan tahunan yang telah diaudit sesuai standar akuntansi berlaku.</p>
              <div className="investor-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="investor-link fade-in-up">
            <a href="#" className="see-more-link">
              Lihat Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── KARIR ─── */}
      <section className="karir-section">
        <div className="container">
          <div className="karir-card fade-in-up">
            <div className="karir-text">
              <div className="label">Bergabung</div>
              <h2>Karir Bersama Kami</h2>
              <p>Kami menciptakan lingkungan kerja yang terbuka, dinamis, dan penuh kesempatan, di mana setiap individu didorong untuk tumbuh, belajar, dan memberikan kontribusi nyata bagi masa depan energi Indonesia.</p>
            </div>
            <div className="karir-cta">
              <a href="#" className="btn-primary">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#" className="logo">
                Bali.<span>Tour</span>
              </a>
              <p>PT Anugerah Abadi Nusantara — Pioneer rekayasa energi di Indonesia yang berkomitmen untuk menyediakan solusi energi inovatif dan berkelanjutan.</p>
              <div className="footer-social">
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="footer-col">
              <h5>Beranda &amp; Acara</h5>
              <ul className="footer-links">
                <li><a href="#">Berita Terkini</a></li>
                <li><a href="#">Acara Perusahaan</a></li>
                <li><a href="#">Galeri Media</a></li>
                <li><a href="#">Siaran Pers</a></li>
                <li><a href="#">Pengumuman</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h5>Contact Us</h5>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 88973803336
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 82138327189
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                direc10srg@gmail.com
              </div>
              <ul className="footer-links" style={{ marginTop: '12px' }}>
                <li><a href="#">Syarat Ketentuan</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
              </ul>
            </div>

            {/* Map */}
            <div className="footer-col">
              <h5>Lokasi Kami</h5>
              <div className="contact-item" style={{ marginBottom: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jl.Duren Jaya No.88 Rt.004/010 Cibinong Bogor
              </div>
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7!2d106.86!3d-6.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjknMjIuMCJTIDEwNsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sid!4v1"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 PT Anugerah Abadi Nusantara. Hak cipta dilindungi.</span>
            <span>
              <a href="#">Kebijakan Privasi</a> &nbsp;·&nbsp;
              <a href="#">Syarat Ketentuan</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
