
import React from 'react';
import { Landmark, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_NAME, DISTRICT, STATE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="text-blue-400" size={24} />
            <h2 className="text-white font-bold text-lg">{SCHOOL_NAME}</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            A premier educational institution under the Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential Educational Institutions Society (MJPTBCWREIS).
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#/academics" className="hover:text-blue-400 transition-colors">Academics</a></li>
            <li><a href="#/notices" className="hover:text-blue-400 transition-colors">Circulars & Notices</a></li>
            <li><a href="#/library" className="hover:text-blue-400 transition-colors">Digital Library</a></li>
            <li><a href="#/administration" className="hover:text-blue-400 transition-colors">Faculty Directory</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Contact Details</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Bela, {DISTRICT}, {STATE}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>+91 000-000-0000 (Placeholder)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>school-bela@telangana.gov.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Departmental Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://mjptbcwreis.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">MJPTBCWREIS Main Site</a></li>
            <li><a href="https://www.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telangana State Portal</a></li>
            <li><a href="https://tbcw.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">BC Welfare Department</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}, Bela. All Rights Reserved.</p>
        <p className="mt-1 uppercase tracking-widest">Government of Telangana</p>
      </div>
    </footer>
  );
};

export default Footer;
