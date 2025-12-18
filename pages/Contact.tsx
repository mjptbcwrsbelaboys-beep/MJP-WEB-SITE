
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SCHOOL_NAME, DISTRICT, STATE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-blue-900 py-16 text-white text-center">
        <h2 className="heading-font text-4xl font-bold mb-2">Contact Us</h2>
        <p className="opacity-70">We are here to help and answer any questions you may have.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Form */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Address</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Bela Mandal, {DISTRICT}<br />
                    {STATE}, India - 504310
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                  <p className="text-slate-500 text-sm">
                    Principal: +91 000-000-0000<br />
                    Office: +91 000-000-0001
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                  <p className="text-slate-500 text-sm">
                    mjptbcwr.bela@gmail.com<br />
                    edu-support@ts.gov.in
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Office Hours</h4>
                  <p className="text-slate-500 text-sm">
                    Mon - Sat: 9:30 AM - 5:00 PM<br />
                    Lunch: 1:00 PM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 heading-font">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Admissions Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                  <Send size={18} />
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200 relative">
            {/* Embedded Map Simulation */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.69464522432!2d78.4900!3d19.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbdedb000000001%3A0x0!2sBela%20Town!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MJPTBCWR Bela Map Location"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white">
              <p className="text-sm font-bold text-blue-900">{SCHOOL_NAME}</p>
              <p className="text-xs text-slate-500">Bela, Adilabad, Telangana 504310</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
