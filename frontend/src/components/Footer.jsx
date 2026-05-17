import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-extrabold text-2xl tracking-wider text-white leading-tight">
                PT ANUGERAH REKAYASA
              </span>
              <span className="font-bold text-xs text-secondary tracking-widest uppercase mt-1">
                ENERGI ABADI
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Perusahaan jasa perdagangan, konstruksi, pengayaan, dan rekayasa energi yang berkomitmen menyediakan solusi energi inovatif serta berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="underline hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="underline hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="underline hover:text-white transition-colors">Project Showcase</Link></li>
              <li><Link to="/media" className="underline hover:text-white transition-colors">Media Center</Link></li>
              <li><Link to="/contact" className="underline hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Core Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Pengembangan Energi Terbarukan</li>
              <li>Mesin Pengolahan RDF & Pellet</li>
              <li>Konsultasi & Desain Sistem Energi</li>
              <li>Konstruksi & Instalasi Sistem</li>
              <li>Pemeliharaan & Operasional</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <span>
                  Jakarta, Indonesia<br />
                  Diterbitkan di Jakarta<br />
                  Tanggal: 23 September 2025
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 flex-shrink-0 text-blue-300" />
                <a href="tel:+62215550123" className="underline hover:text-white transition-colors">+62 21 555 0123</a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 flex-shrink-0 text-blue-300" />
                <a href="mailto:info@rekayasaenergiabadi.co.id" className="underline hover:text-white transition-colors">info@rekayasaenergiabadi.co.id</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} PT Anugerah Rekayasa Energi Abadi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="underline hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="underline hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
