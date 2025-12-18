
import React from 'react';
import { Book, CheckCircle2, GraduationCap, ClipboardList } from 'lucide-react';

const Academics: React.FC = () => {
  const subjects = [
    { name: 'Telugu', code: '01' },
    { name: 'Hindi', code: '02' },
    { name: 'English', code: '03' },
    { name: 'Mathematics', code: '04' },
    { name: 'General Science', code: '05' },
    { name: 'Social Studies', code: '06' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-4xl font-bold mb-2">Academics</h2>
          <p className="text-blue-100">Nurturing minds through a robust curriculum from Class V to X.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Courses Offered */}
          <section>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Book className="text-blue-600" />
              Classes & Courses Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[5, 6, 7, 8, 9, 10].map((grade) => (
                <div key={grade} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Grade</span>
                    <h4 className="text-2xl font-bold text-slate-800">Class {grade}</h4>
                  </div>
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">EM/TM</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm">
              *The primary medium of instruction is English, supplemented with Telugu to ensure conceptual clarity.
            </p>
          </section>

          {/* Subjects */}
          <section>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ClipboardList className="text-blue-600" />
              Core Subjects
            </h3>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700">Subject Name</th>
                    <th className="px-6 py-4 font-bold text-slate-700">Code</th>
                    <th className="px-6 py-4 font-bold text-slate-700">Focus Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {subjects.map((s) => (
                    <tr key={s.name} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{s.name}</td>
                      <td className="px-6 py-4 text-slate-500 font-mono text-sm">{s.code}</td>
                      <td className="px-6 py-4 text-slate-500 text-sm">
                        Comprehensive understanding as per SCERT standards.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Evaluation */}
          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <GraduationCap />
              Examination & Evaluation
            </h3>
            <div className="space-y-4 text-blue-800 leading-relaxed">
              <div className="flex gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                <p><strong>Formative Assessment (FA):</strong> Conducted four times a year through projects, slips tests, and classroom participation.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                <p><strong>Summative Assessment (SA):</strong> Conducted twice a year (Half-yearly and Annual examinations).</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                <p><strong>CCE Pattern:</strong> Continuous and Comprehensive Evaluation is strictly followed to monitor student progress holistically.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Academic Calendar/Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-xl mb-6 pb-2 border-b">Academic Highlights</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <span className="text-slate-600 text-sm">Remedial classes for slow learners in Mathematics and Science.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <span className="text-slate-600 text-sm">Special emphasis on English communication skills.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <span className="text-slate-600 text-sm">Regular parent-teacher interactive sessions.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <span className="text-slate-600 text-sm">Digital classroom facilities with interactive screens.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-2xl text-white">
            <h4 className="font-bold text-white text-xl mb-4">Exam Results</h4>
            <p className="text-slate-400 text-sm mb-6">Our school consistently ranks among the top residential schools in the district with 100% pass results in SSC examinations.</p>
            <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-bold transition-colors">
              Archive of Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
