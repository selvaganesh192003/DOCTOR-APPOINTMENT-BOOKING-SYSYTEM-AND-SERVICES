import React from 'react';

const appointments = [
  { name: 'Geethan Kumar', location: 'Chennai', date: '25 Jun 2026', time: '01:00 PM', status: 'Confirmed' },
  { name: 'Sri Hari', location: 'Madurai', date: '25 Jun 2026', time: '09:00 PM', status: 'Pending' },
  { name: 'David Laid', location: 'New York', date: '25 Jun 2020', time: '01:00 PM', status: 'Confirmed' },
];

export default function AppointmentTable({ searchTerm = "", onPatientClick }) {
  const filteredData = appointments.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm overflow-hidden">
      <h3 className="text-xl font-bold mb-6 text-slate-800">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead>
            <tr className="text-slate-400 border-b border-slate-50">
              <th className="pb-4 font-medium px-4">Name</th>
              <th className="pb-4 font-medium px-4">Location</th>
              <th className="pb-4 font-medium px-4">Date</th>
              <th className="pb-4 font-medium px-4">Time</th>
              <th className="pb-4 font-medium px-4 text-center">Status</th>  
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr 
                key={index} 
                onClick={() => onPatientClick(item)} // This triggers the Profile view
                className="border-b last:border-0 hover:bg-indigo-50/50 transition-colors cursor-pointer group"
              >
                <td className="py-5 px-4 font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </td>
                <td className="py-5 px-4 text-gray-500">{item.location}</td>
                <td className="py-5 px-4 text-gray-500">{item.date}</td>
                <td className="py-5 px-4 font-semibold text-slate-700">{item.time}</td>
                <td className="py-5 px-4 flex justify-center">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    item.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}