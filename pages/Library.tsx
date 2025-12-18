
import React from 'react';
import { BookOpen, Clock, AlertCircle, Newspaper, Library as LibraryIcon } from 'lucide-react';

const Library: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-blue-800 py-16 text-white text-center">
        <LibraryIcon size={48} className="mx-auto mb-4 opacity-50" />
        <h2 className="heading-font text-4xl font-bold mb-2">The Knowledge Hub</h2>
        <p className="opacity-70">Exploring worlds through the pages of books.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <BookOpen className="text-blue-600" />
                Library Overview
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The MJPTBCWR Bela Library is a well-furnished resource center designed to encourage the reading habit among students. It houses a diverse collection of academic texts, literature, and competitive exam guides.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="text-blue-600 font-bold text-3xl mb-1">3,000+</div>
                  <div className="text-blue-900 font-semibold uppercase text-xs tracking-widest">Books Available</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-slate-600 font-bold text-3xl mb-1">10+</div>
                  <div className="text-slate-900 font-semibold uppercase text-xs tracking-widest">Newspapers & Mags</div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Newspaper className="text-blue-600" />
                Periodicals & Media
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-2">Newspapers</h4>
                  <p className="text-slate-500 text-sm italic">Daily newspapers in Telugu and English (Eenadu, The Hindu, etc.) to keep students informed about current affairs.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-2">Magazines</h4>
                  <p className="text-slate-500 text-sm italic">Educational magazines like Chandamama, Children's World, and Competition Success Review.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Rules & Timings Sidebar */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock size={24} />
                Timings
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-bold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Saturdays</span>
                  <span className="font-bold">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span>Sundays</span>
                  <span className="font-bold italic">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <AlertCircle size={24} className="text-red-500" />
                Reading Rules
              </h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Strict silence must be observed in the library at all times.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Books should be returned within the stipulated time (usually 7 days).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Writing in or damaging books is strictly prohibited.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reference books cannot be taken out of the library.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
