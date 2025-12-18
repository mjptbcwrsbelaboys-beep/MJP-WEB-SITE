
import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = activeFilter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-slate-100 py-16 text-center">
        <h2 className="heading-font text-4xl font-bold text-slate-800 mb-2">School Gallery</h2>
        <p className="text-slate-500">Captured moments of excellence, joy, and growth.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in zoom-in-95 duration-200">
            <button 
              className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Fullscreen Preview" 
              className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
