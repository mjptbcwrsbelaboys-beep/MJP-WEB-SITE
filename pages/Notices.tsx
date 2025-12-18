
import React, { useState } from 'react';
import { Download, Search, Filter, Calendar, ExternalLink, Plus } from 'lucide-react';
import { NOTICES } from '../constants';
import { Notice } from '../types';

const Notices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  
  const filteredNotices = NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || notice.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-slate-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-3xl font-bold text-slate-800 mb-2">Notice Board & Official Orders</h2>
          <p className="text-slate-500">Stay updated with latest announcements, circulars, and government orders.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search notices..." 
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-400" />
            <select 
              className="bg-white border border-slate-200 py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-600"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Circular">Circulars</option>
              <option value="Order">Official Orders</option>
              <option value="Announcement">Announcements</option>
            </select>
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {filteredNotices.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {filteredNotices.map((notice) => (
                <div key={notice.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                        notice.category === 'Order' ? 'bg-red-50 text-red-600' :
                        notice.category === 'Circular' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {notice.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar size={14} />
                        {notice.date}
                      </div>
                      {notice.isNew && (
                        <span className="animate-pulse text-[10px] text-red-500 font-bold uppercase tracking-widest">New</span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-bold transition-colors">
                      <Download size={16} />
                      Download PDF
                    </button>
                    <button className="p-2 hover:bg-slate-100 text-slate-400 rounded-lg transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500">
              <Search size={48} className="mx-auto mb-4 opacity-20" />
              <p>No notices found matching your search.</p>
            </div>
          )}
        </div>

        {/* Note for staff */}
        <div className="mt-12 p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-slate-800 text-lg mb-1 italic">Administrative Portal</h4>
            <p className="text-slate-500 text-sm">Staff members can upload new circulars or scanned PDF documents through the official login.</p>
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shrink-0 shadow-lg">
            <Plus size={20} />
            Add Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
