import React from 'react';
import { ArrowLeft, FileText, Activity, Clock, Plus } from 'lucide-react';

export default function PatientProfile({ patient, onBack }) {
  if (!patient) return null;

  return (
    <div className="animate-in slide-in-from-right duration-300">
      {/* Top Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 font-bold mb-6 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={20} /> Back to Appointments
      </button>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Patient Bio & Vitals */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm text-center border border-slate-50">
            <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-600 text-3xl font-bold">
              {patient.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{patient.name}</h2>
            <p className="text-slate-400 text-sm mb-6">Patient ID: #PT-{Math.floor(Math.random() * 9000) + 1000}</p>
            
            <div className="grid grid-cols-2 gap-4 border-t pt-6 text-left">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="font-bold text-slate-700">{patient.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Blood Type</p>
                <p className="font-bold text-slate-700">O Positive</p>
              </div>
            </div>
          </div>

          <div className="bg-[#5E5CE6] p-6 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Activity size={18} /> Recent Vitals
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-sm opacity-80">Blood Pressure</span>
                <span className="font-bold">120/80 mmHg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-80">Heart Rate</span>
                <span className="font-bold">72 bpm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Consultation Notes & History */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <FileText size={20} className="text-indigo-600" /> Consultation Notes
              </h3>
              <button className="bg-indigo-50 text-indigo-600 p-2 rounded-xl hover:bg-indigo-100 transition-colors">
                <Plus size={20} />
              </button>
            </div>
            <textarea 
              className="w-full bg-slate-50 border-none rounded-2xl p-4 h-40 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700"
              placeholder="Start typing symptoms, diagnosis, or prescription notes..."
            />
            <button className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
              Save Clinical Note
            </button>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock size={20} className="text-indigo-600" /> Medical History
            </h3>
            <div className="space-y-4">
              {['Annual Checkup', 'Vaccination', 'General Consultation'].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all cursor-pointer group">
                  <div>
                    <p className="font-bold text-slate-700 group-hover:text-indigo-600">{item}</p>
                    <p className="text-xs text-slate-400">Recorded on {patient.date}</p>
                  </div>
                  <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">View Report</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}