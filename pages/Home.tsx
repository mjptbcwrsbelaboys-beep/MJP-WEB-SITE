
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Bell, Users, Award, FileText } from 'lucide-react';
import { FULL_SCHOOL_NAME, NOTICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-blue-900 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/bela/1920/1080" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              Shaping the Future of <span className="text-blue-400">Telangana's Youth</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {FULL_SCHOOL_NAME} provides quality residential education to boys from Class V to X, fostering academic excellence and holistic growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/academics" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Vision & Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Ticker / Highlight */}
      <section className="bg-blue-50 py-4 border-b border-blue-100">
        <div className="container mx-auto px-4 flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold shrink-0">
            <Bell size={16} />
            <span>LATEST</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="animate-pulse whitespace-nowrap text-blue-900 font-medium text-sm">
              {NOTICES[0].title} — Released on {NOTICES[0].date} | Admissions for 2024-25 session are ongoing.
            </p>
          </div>
          <Link to="/notices" className="text-xs text-blue-600 font-bold hover:underline shrink-0">VIEW ALL</Link>
        </div>
      </section>

      {/* Main Content Areas */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Welcome Message */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Welcome to MJPTBCWR Bela</h3>
              <p className="text-slate-500 font-medium">Empowering Students Through Education</p>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              The Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential School (Boys) at Bela is a cornerstone of quality education in Adilabad District. Established with the vision of providing top-tier academic and residential facilities, we strive to bridge the gap in educational opportunities.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our curriculum follows the SCERT guidelines, integrated with modern teaching methodologies. With a dedicated staff and state-of-the-art facilities, we ensure that every student who enters our gates is prepared to face the challenges of tomorrow with confidence and integrity.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">V - X</div>
                <div className="text-sm text-slate-500 font-medium uppercase">Classes</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-slate-500 font-medium uppercase">SSC Result</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-slate-500 font-medium uppercase">Students</div>
              </div>
            </div>
          </div>

          {/* Quick Access Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-blue-600 p-4 text-white font-bold flex items-center gap-2">
                <FileText size={20} />
                <span>Notice Board</span>
              </div>
              <div className="p-4 space-y-4">
                {NOTICES.slice(0, 4).map((notice) => (
                  <div key={notice.id} className="pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase">{notice.category}</span>
                      <span className="text-[10px] text-slate-400">{notice.date}</span>
                    </div>
                    <Link to="/notices" className="text-sm font-semibold text-slate-800 hover:text-blue-600 block transition-colors leading-snug">
                      {notice.title}
                    </Link>
                    {notice.isNew && <span className="inline-block mt-1 text-[10px] text-red-500 font-bold uppercase tracking-widest">New</span>}
                  </div>
                ))}
                <Link to="/notices" className="block text-center text-sm font-bold text-blue-600 hover:underline pt-2">
                  View All Notifications
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap size={80} />
              </div>
              <h4 className="text-xl font-bold mb-4">Admissions</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Admissions are typically conducted through the MJP CET entrance exam. Stay updated for the next session's notification.
              </p>
              <Link to="/contact" className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-font text-3xl font-bold text-slate-800 mb-2">Academic Excellence & More</h3>
            <p className="text-slate-500">Holistic development through diverse facilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<BookOpen className="text-blue-600" />}
              title="Modern Library"
              desc="Vast collection of reference books, periodicals, and newspapers."
            />
            <FeatureCard 
              icon={<Users className="text-blue-600" />}
              title="Expert Faculty"
              desc="Highly qualified and dedicated teaching professionals."
            />
            <FeatureCard 
              icon={<GraduationCap className="text-blue-600" />}
              title="SSC Results"
              desc="Consistently achieving top grades in board examinations."
            />
            <FeatureCard 
              icon={<Award className="text-blue-600" />}
              title="Sports & Games"
              desc="Excellent infrastructure for athletics and outdoor sports."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/60 text-center flex flex-col items-center">
    <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
      {/* Fix: Use React.isValidElement and cast to React.ReactElement<any> to allow the 'size' prop during cloning of Lucide icons */}
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 32 }) : icon}
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
