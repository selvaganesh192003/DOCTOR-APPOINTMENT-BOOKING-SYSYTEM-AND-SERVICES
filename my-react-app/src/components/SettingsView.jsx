// components/SettingsView.jsx
import React from 'react';
import { User, Bell, Shield, Moon, Globe, Save } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800">Settings</h2>

      <div className="grid grid-cols-12 gap-8">
        {/* Navigation Sidebar for Settings */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-50">
            <nav className="flex flex-col gap-1">
              {[
                { icon: <User size={18} />, label: 'Account Profile', active: true },
                { icon: <Bell size={18} />, label: 'Notifications', active: false },
                { icon: <Shield size={18} />, label: 'Privacy & Security', active: false },
                { icon: <Globe size={18} />, label: 'Language & Region', active: false },
              ].map((item, idx) => (
                <button 
                  key={idx}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    item.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Profile Information</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Full Name</label>
                  <input type="text" defaultValue="Selva.Admin" className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Specialization</label>
                  <input type="text" defaultValue="Admin" className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Email Address</label>
                <input type="email" defaultValue="selva.admin@clinic.com" className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div className="pt-4 border-t border-slate-50">
                <h4 className="font-bold text-slate-800 mb-4">Preferences</h4>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Moon size={18} /></div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Dark Mode</p>
                      <p className="text-xs text-slate-400">Adjust the appearance of the dashboard</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                <Save size={18} /> Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}