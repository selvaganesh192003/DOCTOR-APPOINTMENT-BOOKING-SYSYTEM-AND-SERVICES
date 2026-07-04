import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data based on your AppointmentTable.jsx
const appointments = [
  { name: 'Geethan Kumar', date: '2026-06-25', time: '01:00 PM', status: 'Confirmed' },
  { name: 'Sri Hari', date: '2026-06-25', time: '09:00 PM', status: 'Pending' },
  { name: 'David Laid', date: '2020-06-25', time: '01:00 PM', status: 'Confirmed' },
];

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)); // June 2026

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="bg-slate-50 py-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
            {day}
          </div>
        ))}
        
        {blanks.map(i => <div key={`blank-${i}`} className="bg-white h-32" />)}
        
        {days.map(day => {
          const dateString = `2026-06-${day.toString().padStart(2, '0')}`;
          const dayAppointments = appointments.filter(app => app.date === dateString);

          return (
            <div key={day} className="bg-white h-32 p-2 border-t border-l border-slate-50 hover:bg-slate-50 transition-colors">
              <span className="text-sm font-semibold text-slate-400">{day}</span>
              <div className="mt-1 space-y-1">
                {dayAppointments.map((app, i) => (
                  <div key={i} className={`text-[10px] p-1.5 rounded-lg border-l-4 ${
                    app.status === 'Confirmed' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-orange-50 border-orange-500 text-orange-700'
                  }`}>
                    <p className="font-bold truncate">{app.time}</p>
                    <p className="truncate">{app.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}