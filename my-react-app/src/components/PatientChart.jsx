import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', blue: 40, orange: 20 },
  { day: 'Tue', blue: 70, orange: 45 },
  { day: 'Wed', blue: 30, orange: 90 },
  { day: 'Thu', blue: 50, orange: 30 },
  { day: 'Fri', blue: 20, orange: 40 },
  { day: 'Sat', blue: 60, orange: 25 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100 text-gray-800 text-xs font-bold">
        {/* Labeling these to match your medical dashboard context */}
        <p className="text-[#5E5CE6]">{`Appointments: ${payload[0].value}`}</p>
        <p className="text-[#FFB067]">{`New Patients: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const PatientChart = () => {
  return (
    <div className="bg-[#5E5CE6] p-6 rounded-3xl text-white shadow-xl w-full h-[320px] flex flex-col">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Number of Patients</h4>
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span className="bg-yellow-400 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-black font-bold">✓</span>
          <span>Weekly Statistics</span>
        </div>
      </div>

      {/* FIX: Added a relative wrapper with flex-1. 
          The minHeight ensures the chart isn't 0px on initial load.
      */}
      <div className="flex-1 w-full min-h-[180px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#ffffff', fontSize: 12, opacity: 0.7 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            {/* radius property gives the bars the rounded look from your DA project screenshot */}
            <Bar dataKey="blue" fill="#8280FF" radius={[10, 10, 0, 0]} barSize={8} />
            <Bar dataKey="orange" fill="#FFB067" radius={[10, 10, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientChart;
