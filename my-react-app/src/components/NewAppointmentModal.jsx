import React from 'react';
import { X, Calendar, Clock, User } from 'lucide-react';

export default function NewAppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Schedule Appointment</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Patient Name</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
              <input 
                type="text" 
                placeholder="Search or enter patient name"
                className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700" 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Date</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
                <input 
                  type="date" 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700" 
                />
              </div>
            </div>
            {/* Time */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Time</label>
              <div className="relative">
                <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
                <input 
                  type="time" 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700" 
                />
              </div>
            </div>
          </div>

          {/* Appointment Type */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Type of Visit</label>
            <select className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 appearance-none cursor-pointer">
              <option>General Consultation</option>
              <option>Emergency</option>
              <option>Follow-up</option>
              <option>Lab Results Review</option>
            </select>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg mt-4 hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}