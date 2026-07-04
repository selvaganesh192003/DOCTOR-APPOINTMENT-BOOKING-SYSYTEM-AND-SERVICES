import React, { useState } from 'react';
import { 
  Home, Calendar, Mail, Settings, Folder, LogOut,
  CreditCard, Users, Menu, X
} from 'lucide-react';

import NewAppointmentModal from './NewAppointmentModal'; 

export default function Sidebar({ activeItem, setActiveItem, onLogout }) {
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile toggle

  // ✅ Navigation with submenu
  const navItems = [
    { id: 'home', icon: <Home size={22} />, label: 'Dashboard' },
    { id: 'calendar', icon: <Calendar size={22} />, label: 'Schedule' },
    { id: 'billing', icon: <CreditCard size={22} />, label: 'Billing' },
    { id: 'mail', icon: <Mail size={22} />, label: 'Messages' },
    { id: 'patients', icon: <Users size={22} />, label: 'Patients' },
    { 
      id: 'records', 
      icon: <Folder size={22} />, 
      label: 'Records',
      subItems: [
        { id: 'patient-list', label: 'Patient List' }
      ]
    },
    { id: 'settings', icon: <Settings size={22} />, label: 'Settings' },
  ];

  return (
    <>
      {/* 🔥 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#5E5CE6] text-white">
        <h1 className="font-bold">Dashboard</h1>
        <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
      </div>

      {/* 🔥 Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔥 Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen w-24 bg-[#5E5CE6] 
        flex flex-col items-center py-8 justify-between 
        rounded-r-[3rem] shadow-2xl z-50
        transform transition-transform duration-300

        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:flex
      `}>
        
        {/* Close button (mobile) */}
        <div className="md:hidden absolute top-4 right-4 text-white">
          <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>

        {/* 🔹 Navigation */}
        <div className="flex flex-col items-center gap-12 w-full mt-6 md:mt-0">
          <nav className="flex flex-col gap-8 w-full items-center">

            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center w-full">

                {/* Main Icon */}
                <SidebarIcon 
                  icon={item.icon} 
                  active={activeItem === item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    setIsOpen(false);
                  }}
                  label={item.label}
                />

                {/* 🔽 Submenu */}
                {item.subItems && activeItem === item.id && (
                  <div className="mt-2 flex flex-col items-center gap-2">
                    {item.subItems.map((sub) => (
                      <span
                        key={sub.id}
                        onClick={() => {
                          setActiveItem(sub.id);
                          setIsOpen(false);
                        }}
                        className={`
                          text-[10px] cursor-pointer
                          ${activeItem === sub.id 
                            ? 'text-white font-semibold' 
                            : 'text-white/70 hover:text-white'}
                        `}
                      >
                        {sub.label}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </nav>
        </div>

        {/* 🔹 Bottom (ONLY Logout now) */}
        <div className="flex flex-col gap-6 items-center mb-4">

          <button 
            onClick={onLogout}
            className="text-white/40 hover:text-white transition-all p-2 hover:bg-white/10 rounded-xl active:scale-90 group relative"
          >
            <LogOut size={22} />
            <span className="absolute left-16 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Sign Out
            </span>
          </button>
        </div>
      </div>

      {/* 🔹 Modal (still available if you trigger elsewhere) */}
      <NewAppointmentModal 
        isOpen={isApptModalOpen} 
        onClose={() => setIsApptModalOpen(false)} 
      />
    </>
  );
}


// 🔹 Icon Component
function SidebarIcon({ icon, active, onClick, label }) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center group relative w-full px-2"
    >
      <div className={`${active ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
        {icon}
      </div>

      <div className={`w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 ${active ? 'opacity-100' : 'opacity-0'}`} />

      <span className="absolute left-20 bg-white text-[#5E5CE6] text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap shadow">
        {label}
      </span>
    </div>
  );
}