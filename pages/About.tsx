
import React from 'react';
import { Target, Eye, ShieldCheck, Landmark } from 'lucide-react';
import { FULL_SCHOOL_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="bg-blue-900 py-16 text-white text-center">
        <h2 className="heading-font text-4xl font-bold mb-4">About Our School</h2>
        <p className="max-w-2xl mx-auto px-4 opacity-80">Rooted in values, blooming in excellence. Learn about the legacy of MJPTBCWR Bela.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="School Students" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-video lg:aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900 mb-4 heading-font">Our Introduction</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              {FULL_SCHOOL_NAME}, located in the serene surroundings of Bela, Adilabad District, is an institution established by the Government of Telangana to offer superior residential education to the children of Backward Classes.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Since its inception, the school has been a beacon of hope for many families, providing not just academics but a comprehensive environment for overall character building. We believe that every student has potential, and our role is to provide the right catalyst for its discovery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <Landmark className="text-blue-600 shrink-0" size={24} />
                <span className="font-semibold text-slate-700">Govt. of Telangana Undertaking</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                <span className="font-semibold text-slate-700">Safe Residential Campus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-600 p-12 rounded-3xl text-white shadow-xl hover:scale-[1.01] transition-transform">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-4 heading-font">Our Vision</h4>
            <p className="text-blue-100 leading-relaxed text-lg">
              To be a premier institution of excellence that empowers students from backward classes with the knowledge, skills, and values necessary to become responsible citizens and leaders of the global community.
            </p>
          </div>
          <div className="bg-slate-900 p-12 rounded-3xl text-white shadow-xl hover:scale-[1.01] transition-transform">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-4 heading-font">Our Mission</h4>
            <p className="text-slate-400 leading-relaxed text-lg">
              To provide high-quality residential education, foster a spirit of inquiry, promote physical and emotional well-being, and ensure social equity through inclusive educational practices.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Landmark className="text-blue-600" />
            Management Information
          </h3>
          <div className="prose max-w-none text-slate-600 text-lg">
            <p>
              The school is managed by the <strong>Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential Educational Institutions Society (MJPTBCWREIS)</strong>. This society operates under the aegis of the Backward Classes Welfare Department, Government of Telangana.
            </p>
            <p className="mt-4">
              Our administrative hierarchy ensures transparent and efficient governance:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Hon'ble Minister for BC Welfare, Telangana State</li>
              <li>Secretary, MJPTBCWREIS</li>
              <li>District Welfare Officer, Adilabad</li>
              <li>Regional Coordinator (RCO)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
