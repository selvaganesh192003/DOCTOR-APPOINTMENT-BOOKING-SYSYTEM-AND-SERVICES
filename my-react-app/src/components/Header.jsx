import React, { useState, useRef, useEffect } from 'react'; 
import { 
  Search, Bell, Siren, ChevronDown, User, LogOut, CreditCard, 
  ExternalLink, Phone, AlertCircle, MapPin, CalendarPlus   // ✅ added
} from 'lucide-react';

import profilePic from '../images/Gemini_Generated_Image_hbwndmhbwndmhbwn.png';
import AddPatientModal from './AddPatientModal';
import AppointmentHistoryModal from './AppointmentHistoryModal'; 
import NewAppointmentModal  from './NewAppointmentModal';

export default function Header({ onSearch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false); 
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  
  // Menu States
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Refs for click-outside detection
  const emergencyRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emergencyRef.current && !emergencyRef.current.contains(event.target)) setIsEmergencyOpen(false);
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) setIsNotificationsOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle menus
  const toggleMenu = (menu) => {
    setIsEmergencyOpen(menu === 'emergency' ? !isEmergencyOpen : false);
    setIsNotificationsOpen(menu === 'notifications' ? !isNotificationsOpen : false);
    setIsProfileOpen(menu === 'profile' ? !isProfileOpen : false);
  };

  return (
    <header className="flex items-center justify-between mb-8 w-full">
      
      {/* Search Bar */}
      <div className="relative w-1/3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-indigo-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search appointments..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white rounded-2xl py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-6">

        {/* Appointment History */}
        <div 
          onClick={() => setIsHistoryOpen(true)} 
          className="flex items-center gap-2 text-indigo-600 font-semibold text-sm cursor-pointer hover:opacity-80"
        >
          <span>Appointment History</span>
          <ChevronDown size={16} />
        </div>

        {/* NEW APPOINTMENTS BUTTON ✅ */}
        <button 
          onClick={() => setIsApptModalOpen(true)} 
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
        >
          <CalendarPlus size={18} />   {/* ✅ icon added */}
          NEW APPOINTMENTS
        </button>

        <NewAppointmentModal 
          isOpen={isApptModalOpen} 
          onClose={() => setIsApptModalOpen(false)} 
        />

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-400 border-l border-r px-6">
          
          {/* Emergency */}
          <div className="relative" ref={emergencyRef}>
            <Siren 
              size={22} 
              className={`cursor-pointer ${isEmergencyOpen ? 'text-red-500 animate-pulse' : 'hover:text-red-500'}`} 
              onClick={() => toggleMenu('emergency')} 
            />
            {isEmergencyOpen && (
              <div className="absolute right-0 mt-4 w-60 bg-white rounded-2xl shadow-2xl border py-2 z-[60]">
                <div className="px-4 py-2 border-b flex items-center gap-2">
                  <AlertCircle size={14} className="text-red-500" />
                  <span className="text-xs font-bold text-red-500 uppercase">Emergency Desk</span>
                </div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-50">
                  <Phone size={16} className="text-red-500" /> Call Ambulance
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-50">
                  <MapPin size={16} className="text-red-500" /> Direct to ER
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <div 
              className={`relative cursor-pointer ${isNotificationsOpen ? 'text-indigo-600' : 'hover:text-indigo-600'}`} 
              onClick={() => toggleMenu('notifications')}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full border-2 border-slate-100"></span>
            </div>
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-4 w-72 bg-white rounded-xl shadow-xl border py-4 z-[60]">
                <p className="px-4 text-sm font-bold mb-2">Recent Updates</p>
                <div className="px-4 py-2 text-xs text-gray-500 hover:bg-gray-50">
                  Dr. Josh, you have 3 new appointments today.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => toggleMenu('profile')}
          >
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Selva</p>
              <p className="text-xs text-gray-400">View profile</p>
            </div>
            <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl border z-[60]">
              <div className="p-4 border-b">
                <p className="text-sm font-bold">Selva Ganesh</p>
                <p className="text-xs text-gray-400">selva.admin@clinic.com</p>
              </div>
              <div className="py-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-indigo-50">
                  <User size={16} /> My Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-indigo-50">
                  <ExternalLink size={16} /> Support
                </button>
              </div>
              <div className="border-t py-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <AddPatientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AppointmentHistoryModal isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </header>
  );
}