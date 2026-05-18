import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import AdminCMS from './pages/AdminCMS';
import AdminLogin from './pages/AdminLogin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="media" element={<Media />} />
            <Route path="contact" element={<Contact />} />
            <Route path="berita" element={<Berita />} />
            <Route path="berita/:id" element={<BeritaDetail />} />
          </Route>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-rti2024" element={<AdminCMS />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
