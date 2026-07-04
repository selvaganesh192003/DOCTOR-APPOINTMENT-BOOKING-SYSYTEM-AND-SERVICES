import React, { useState } from 'react';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AppointmentTable from './components/AppointmentTable';
import PatientChart from './components/PatientChart';
import CalendarView from './components/CalendarView';
import PatientProfile from './components/PatientProfile';
import SettingsView from './components/SettingsView';
import RecordsView from './components/RecordsView'; 
import MailView from './components/MailView'; 
import BillingView from './components/BillingView';
import LoginPage from './components/LoginPage'; 
import NewAppointmentModal from './components/NewAppointmentModal';

// ✅ FIXED IMPORT (IMPORTANT)
import PatientList from './components/records/PatientList'

// Icons
import { Home, Calendar, Settings, CreditCard, ShieldCheck, Plus } from 'lucide-react';

export default function App() {

  // 🔐 AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [user, setUser] = useState(null);

  // 📊 APP STATE
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItem, setActiveItem] = useState('home'); 
  const [selectedPatient, setSelectedPatient] = useState(null); 
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);

  // 🔁 NAVIGATION
  const handleNavClick = (view) => {
    setActiveItem(view);
    setSelectedPatient(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveItem('home');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  // 🔐 LOGIN GUARD
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FD] overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={handleNavClick} 
        onLogout={handleLogout} 
      />

      {/* MAIN */}
      <main className="flex-1 md:ml-24 w-full p-4 md:p-8 pb-24 md:pb-8">

        {/* HEADER */}
        <Header onSearch={(val) => setSearchTerm(val)} />

        {/* CONTENT */}
        {selectedPatient ? (
          <PatientProfile 
            patient={selectedPatient} 
            onBack={() => setSelectedPatient(null)} 
          />
        ) : (
          <>
            {activeItem === 'home' ? (
              <>
                {/* HERO */}
                <div className="bg-[#5E5CE6] rounded-3xl p-6 md:p-10 mb-6 flex flex-col gap-4 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-widest opacity-80">
                      Administrator Portal
                    </span>
                  </div>

                  <h1 className="text-2xl md:text-4xl font-bold">
                    Welcome Back, {user?.name || 'Admin'}
                  </h1>

                  <p className="text-sm md:text-base opacity-90">
                    System is running smoothly.
                  </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <StatCard title="Total Patients" count="580" />
                  <StatCard title="Phone Calls" count="356" />
                  <StatCard title="Appointments" count="288" />

                  <div onClick={() => setActiveItem('mail')} className="cursor-pointer">
                    <StatCard title="Unread Mail" count="05" />
                  </div>
                </div>

                {/* TABLE + CHART */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-8">
                    <AppointmentTable 
                      searchTerm={searchTerm} 
                      onPatientClick={(p) => setSelectedPatient(p)} 
                    />
                  </div>

                  <div className="col-span-12 lg:col-span-4">
                    <PatientChart />
                  </div>
                </div>
              </>
            ) : (
              <div className="animate-in fade-in duration-500">

                {activeItem === 'calendar' && <CalendarView />}
                {activeItem === 'mail' && <MailView />}
                {activeItem === 'billing' && <BillingView />}

                {/* ✅ FIXED */}
                {activeItem === 'records' && <RecordsView />}
                {activeItem === 'patients' && <PatientList />}
                {activeItem === 'patient-list' && <PatientList />}

                {activeItem === 'settings' && <SettingsView />}

              </div>
            )}
          </>
        )}
      </main>

      {/* MOBILE NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#5E5CE6] h-16 flex items-center justify-around text-white/70 z-50 rounded-t-3xl px-6 shadow-lg">

        <button onClick={() => handleNavClick('home')} className={activeItem === 'home' ? "text-white" : ""}>
          <Home size={22} />
        </button>

        <button onClick={() => handleNavClick('calendar')} className={activeItem === 'calendar' ? "text-white" : ""}>
          <Calendar size={22} />
        </button>

        <button 
          onClick={() => setIsApptModalOpen(true)}
          className="bg-white text-[#5E5CE6] p-3 rounded-full -mt-10 shadow-xl border-4 border-[#F8F9FD]"
        >
          <Plus size={20} />
        </button>

        <button onClick={() => handleNavClick('billing')} className={activeItem === 'billing' ? "text-white" : ""}>
          <CreditCard size={22} />
        </button>

        <button onClick={() => handleNavClick('settings')} className={activeItem === 'settings' ? "text-white" : ""}>
          <Settings size={22} />
        </button>
      </nav>

      {/* MODAL */}
      <NewAppointmentModal 
        isOpen={isApptModalOpen} 
        onClose={() => setIsApptModalOpen(false)} 
      />
    </div>
  );
}