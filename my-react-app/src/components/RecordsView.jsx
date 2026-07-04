import React, { useState } from 'react';
import { Folder, FileText, Search, Download, MoreVertical, Plus } from 'lucide-react';
import Patients from "./Patients"; // ✅ IMPORT

const folders = [
  { name: 'Medical Reports', count: 124, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Lab Results', count: 86, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { name: 'Prescriptions', count: 210, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Patient List', count: 45, color: 'text-green-500', bg: 'bg-green-50' },
];

const recentFiles = [
  { name: 'Blood_Test_Geethan.pdf', type: 'PDF', date: '24 Jun 2026', size: '1.2 MB' },
  { name: 'X-Ray_Chest_SriHari.jpg', type: 'IMG', date: '22 Jun 2026', size: '4.5 MB' },
  { name: 'Annual_Checkup_David.pdf', type: 'PDF', date: '20 Jun 2026', size: '2.1 MB' },
];

export default function RecordsView() {
  const [selectedFolder, setSelectedFolder] = useState(null); // ✅ NEW STATE

  // 👉 If Patient List clicked → show Patients component
  if (selectedFolder === "Patient List") {
    return <Patients />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Medical Records</h2>
          <p className="text-slate-400">Manage and access all patient documentation</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          <Plus size={20} /> Upload New File
        </button>
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {folders.map((folder, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedFolder(folder.name)} // ✅ CLICK HANDLER
            className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50 hover:border-indigo-200 transition-colors cursor-pointer group"
          >
            <div className={`w-12 h-12 ${folder.bg} ${folder.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <Folder size={24} />
            </div>
            <h3 className="font-bold text-slate-800">{folder.name}</h3>
            <p className="text-sm text-slate-400">{folder.count} Files</p>
          </div>
        ))}
      </div>

      {/* Recent Files Table */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Recent Uploads</h3>
          <div className="relative w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search records..." className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 border-b border-slate-50">
                <th className="pb-4 font-medium px-4">File Name</th>
                <th className="pb-4 font-medium px-4">Date</th>
                <th className="pb-4 font-medium px-4">Size</th>
                <th className="pb-4 font-medium px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentFiles.map((file, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                        <FileText size={18} />
                      </div>
                      <span className="font-bold text-slate-700">{file.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-500 text-sm">{file.date}</td>
                  <td className="py-4 px-4 text-slate-500 text-sm">{file.size}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}