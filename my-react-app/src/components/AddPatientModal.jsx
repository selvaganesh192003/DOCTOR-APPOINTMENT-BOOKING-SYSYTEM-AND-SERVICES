import React from 'react';
import { X } from 'lucide-react';

export default function AddPatientModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Add New Patient</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Full Name</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Enter patient name" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="+1..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Status</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>New Patient</option>
                <option>Follow-up</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold mt-4 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]">
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
}