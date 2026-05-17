import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiTrash2, FiEdit2, FiSave, FiX, FiCheckCircle, FiAlertCircle, FiImage, FiFileText, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const AdminCMS = () => {
  const navigate = useNavigate();
  const { user, loading, logout, getToken } = useAuth();
  const [articles, setArticles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    title: '',
    category: 'Engineering',
    author: 'Admin AREA',
    coverImage: '',
    excerpt: '',
    content: '',
    tags: ''
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin', { replace: true });
    }
  }, [user, loading, navigate]);

  const fetchNews = () => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Error fetching news:', err));
  };

  useEffect(() => {
    if (user) fetchNews();
  }, [user]);

  const authFetch = (url, options = {}) => {
    const token = getToken();
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      showMessage('error', 'Judul dan Konten harus diisi!');
      return;
    }

    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim())
    };

    const url = isEditing 
      ? `http://localhost:5000/api/news/${currentArticle.id}` 
      : 'http://localhost:5000/api/news';
    
    const method = isEditing ? 'PUT' : 'POST';

    authFetch(url, {
      method: method,
      body: JSON.stringify(payload)
    })
    .then(res => {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    })
    .then(() => {
      showMessage('success', isEditing ? 'Berita diperbarui!' : 'Berita ditambahkan!');
      fetchNews();
      resetForm();
    })
    .catch(() => showMessage('error', 'Gagal memproses data'));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'Engineering',
      author: 'Admin AREA',
      coverImage: '',
      excerpt: '',
      content: '',
      tags: ''
    });
    setIsEditing(false);
    setCurrentArticle(null);
  };

  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      category: article.category,
      author: article.author,
      coverImage: article.coverImage || '',
      excerpt: article.excerpt || '',
      content: article.content,
      tags: article.tags ? article.tags.join(', ') : ''
    });
    setCurrentArticle(article);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      authFetch(`http://localhost:5000/api/news/${id}`, { method: 'DELETE' })
        .then(res => {
          if (!res.ok) throw new Error('Delete failed');
          showMessage('success', 'Berita telah dihapus');
          fetchNews();
        })
        .catch(() => showMessage('error', 'Gagal menghapus berita'));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin', { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-lg font-medium">Memuat...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-dark text-white py-12 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">CMS Dashboard</h1>
            <p className="text-blue-200 mt-1 text-sm">Manajemen Berita PT Anugerah Rekayasa Energi Abadi</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-blue-200 hidden sm:block">{user?.username}</span>
            <button 
              onClick={() => navigate('/berita')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-sm border border-white/30 transition-all text-sm font-medium"
            >
              Lihat Website
            </button>
            <button 
              onClick={handleLogout}
              className="bg-secondary hover:bg-red-700 text-white px-4 py-2 rounded-sm transition-all text-sm font-medium flex items-center gap-2"
            >
              <FiLogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-primary flex items-center gap-2">
                  {isEditing ? <FiEdit2 /> : <FiPlus />}
                  {isEditing ? 'Edit Berita' : 'Tambah Berita Baru'}
                </h2>
                {isEditing && (
                  <button onClick={resetForm} className="text-gray-400 hover:text-primary text-sm flex items-center gap-1">
                    <FiX /> Batal
                  </button>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {message.text && (
                  <div className={`p-4 rounded-sm flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {message.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                    <span className="text-sm font-medium">{message.text}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Judul Berita *</label>
                    <input 
                      type="text" name="title" value={formData.title} onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none" 
                      placeholder="Contoh: Proyek Pembangkit Listrik Baru"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Kategori</label>
                    <select 
                      name="category" value={formData.category} onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                    >
                      <option>Engineering</option>
                      <option>Company News</option>
                      <option>Innovation</option>
                      <option>Projects</option>
                      <option>Sustainability</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Penulis</label>
                    <input 
                      type="text" name="author" value={formData.author} onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">URL Gambar Sampul</label>
                    <div className="relative">
                      <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="text" name="coverImage" value={formData.coverImage} onChange={handleInputChange}
                        className="w-full border border-gray-200 rounded-sm pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Ringkasan Singkat (Excerpt)</label>
                  <textarea 
                    name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows="2"
                    className="w-full border border-gray-200 rounded-sm px-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none text-sm resize-none"
                    placeholder="Tuliskan ringkasan berita dalam 1-2 kalimat..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Konten Berita *</label>
                  <div className="relative">
                    <FiFileText className="absolute left-3 top-4 text-gray-300" />
                    <textarea 
                      name="content" value={formData.content} onChange={handleInputChange} rows="10"
                      className="w-full border border-gray-200 rounded-sm pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none text-sm leading-relaxed"
                      placeholder="Tuliskan isi berita lengkap di sini..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tags (Pisahkan dengan koma)</label>
                  <input 
                    type="text" name="tags" value={formData.tags} onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-sm px-4 py-2.5 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                    placeholder="proyek, teknik, listrik, 2024"
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary/25"
                  >
                    <FiSave size={20} />
                    {isEditing ? 'Simpan Perubahan' : 'Terbitkan Berita'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden sticky top-24">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-primary">Berita Terdaftar ({articles.length})</h2>
              </div>
              <div className="divide-y divide-gray-100 max-h-[700px] overflow-y-auto">
                {articles.length === 0 ? (
                  <div className="p-10 text-center text-gray-400 italic text-sm">
                    Belum ada berita.
                  </div>
                ) : (
                  articles.map((art) => (
                    <div key={art.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{art.category}</span>
                          <h4 className="text-sm font-bold text-dark line-clamp-2 mt-1 leading-snug">{art.title}</h4>
                          <p className="text-[10px] text-gray-400 mt-2">Dibuat: {new Date(art.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => handleEdit(art)}
                            className="p-2 text-primary hover:bg-blue-50 rounded-sm transition-colors"
                            title="Edit"
                          >
                            <FiEdit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(art.id)}
                            className="p-2 text-secondary hover:bg-red-50 rounded-sm transition-colors"
                            title="Hapus"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminCMS;
