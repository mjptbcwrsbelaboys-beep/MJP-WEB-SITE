
import React from 'react';
import { Trophy, Music, Home, Coffee, Dumbbell, Palette } from 'lucide-react';

const StudentLife: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white text-center">
        <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">Life at Bela Campus</h2>
        <p className="max-w-3xl mx-auto px-4 text-blue-100 text-lg">Beyond books, our students explore their passions and build life-long friendships in a supportive residential environment.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sports */}
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Trophy size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 heading-font">Sports & Games</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We provide ample space and equipment for athletics, volleyball, kabaddi, and cricket. Morning PET sessions are mandatory to ensure physical fitness.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Volleyball</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Kabaddi</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Kho-Kho</span>
            </div>
          </section>

          {/* Culture */}
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <Music size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 heading-font">Cultural Activities</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Weekly cultural programs, debate competitions, and dance performances allow students to showcase their artistic talents and boost public speaking skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Debate</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Drama</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Singing</span>
            </div>
          </section>

          {/* Residential */}
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-6">
              <Home size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 heading-font">Residential Facilities</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Well-maintained dormitories and a hygienic mess provide a 'home away from home'. Students are supervised by dedicated house masters.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Nutritious Food</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Clean RO Water</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Study Halls</span>
            </div>
          </section>
        </div>

        {/* Daily Schedule */}
        <section className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h3 className="text-3xl font-bold mb-8 heading-font">A Typical Day at Bela</h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">05:00 AM</div>
                  <div className="text-slate-300">Wake up & Physical Training</div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">07:30 AM</div>
                  <div className="text-slate-300">Breakfast</div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">08:30 AM</div>
                  <div className="text-slate-300">Assembly & Academic Sessions</div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">01:00 PM</div>
                  <div className="text-slate-300">Lunch Break</div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">04:30 PM</div>
                  <div className="text-slate-300">Sports & Refreshments</div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-blue-400 font-mono font-bold text-lg w-20">06:00 PM</div>
                  <div className="text-slate-300">Supervised Study Hours</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/studentlife/800/1000" 
                alt="Students in classroom" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentLife;
