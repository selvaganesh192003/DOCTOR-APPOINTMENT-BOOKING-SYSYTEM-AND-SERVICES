// components/BillingView.jsx
import React from 'react';
import { CreditCard, Download, Plus, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export default function BillingView() {
  const invoices = [
    { id: 'INV-2026-001', patient: 'Geethan Kumar', date: 'Feb 05, 2026', amount: '$120.00', status: 'Paid' },
    { id: 'INV-2026-002', patient: 'Sri Hari', date: 'Feb 03, 2026', amount: '$85.00', status: 'Pending' },
    { id: 'INV-2026-003', patient: 'David Laid', date: 'Jan 30, 2026', amount: '$250.00', status: 'Paid' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Billing & Invoices</h2>
          <p className="text-slate-400">Track clinic revenue and patient payments</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100">
          <Plus size={20} /> Create Invoice
        </button>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
            <DollarSign size={24} />
          </div>
          <p className="text-sm text-slate-400 font-medium">Total Revenue</p>
          <h3 className="text-2xl font-bold text-slate-800">$12,450.00</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <TrendingUp size={24} />
          </div>
          <p className="text-sm text-slate-400 font-medium">Monthly Growth</p>
          <h3 className="text-2xl font-bold text-slate-800">+12.5%</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
            <CheckCircle size={24} />
          </div>
          <p className="text-sm text-slate-400 font-medium">Outstanding Balance</p>
          <h3 className="text-2xl font-bold text-slate-800">$1,200.00</h3>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 border-b border-slate-50">
                <th className="pb-4 font-medium px-4">Invoice ID</th>
                <th className="pb-4 font-medium px-4">Patient</th>
                <th className="pb-4 font-medium px-4">Date</th>
                <th className="pb-4 font-medium px-4">Amount</th>
                <th className="pb-4 font-medium px-4 text-center">Status</th>
                <th className="pb-4 font-medium px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-4 font-bold text-slate-700">{inv.id}</td>
                  <td className="py-5 px-4 text-slate-600">{inv.patient}</td>
                  <td className="py-5 px-4 text-slate-500 text-sm">{inv.date}</td>
                  <td className="py-5 px-4 font-bold text-slate-800">{inv.amount}</td>
                  <td className="py-5 px-4 text-center">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      inv.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Download size={18} />
                    </button>
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