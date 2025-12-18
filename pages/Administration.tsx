
import React from 'react';
import { User, Quote, Mail, GraduationCap } from 'lucide-react';
import { TEACHING_STAFF } from '../constants';

const Administration: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-slate-800 py-16 text-white text-center">
        <h2 className="heading-font text-4xl font-bold mb-4">School Administration</h2>
        <p className="max-w-2xl mx-auto px-4 opacity-70">Dedicated leadership and staff driving academic excellence.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Principal Message */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-slate-50 p-12 flex flex-col items-center justify-center border-r border-slate-100">
              <div className="w-48 h-48 rounded-full bg-blue-100 border-4 border-white shadow-lg overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/principal/400/400" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1 text-center">Sri. K. Ramesh</h3>
              <p className="text-blue-600 font-bold text-sm mb-4">Principal</p>
              <div className="flex gap-2">
                <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-600 font-medium">M.Sc, M.Ed</span>
              </div>
            </div>
            <div className="lg:col-span-2 p-8 md:p-12 relative">
              <Quote className="absolute top-8 right-8 text-slate-100" size={80} />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-6 heading-font">From the Desk of the Principal</h4>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed italic">
                  <p>
                    "Education is not just about loading the mind with facts; it's about lighting the fire of curiosity. At MJPTBCWR Bela, we are committed to providing an environment where every boy can explore his interests and excel."
                  </p>
                  <p>
                    "Our focus is not only on academic brilliance but also on character, discipline, and social responsibility. Our students are our pride, and we work tirelessly to ensure they get the best possible headstart in life."
                  </p>
                  <p>
                    "I welcome you all to be part of our journey towards excellence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff List */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 heading-font">Our Dedicated Staff</h3>
              <p className="text-slate-500">Qualified professionals who guide our students.</p>
            </div>
            <div className="hidden md:flex gap-4">
               <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">Teaching: 15+</div>
               <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-bold text-sm">Non-Teaching: 10+</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEACHING_STAFF.map((staff) => (
              <div key={staff.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <User size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{staff.name}</h4>
                    <p className="text-blue-600 text-sm font-bold mb-2 uppercase tracking-wide">{staff.designation}</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border">
                        <GraduationCap size={14} />
                        {staff.qualification}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Administration;
