// MailView.jsx
import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';

const mockMessages = [
  { id: 1, sender: 'Dr. Sarah Smith', subject: 'Lab Results: Geethan', preview: 'The blood work came back normal...', time: '10:24 AM', unread: true },
  { id: 2, sender: 'Sri Hari', subject: 'Appointment Reschedule', preview: 'Can we move my 9 PM to tomorrow?', time: 'Yesterday', unread: false },
  { id: 3, sender: 'Front Desk', subject: 'New Patient Alert', preview: 'David Laid just registered via...', time: 'Oct 24', unread: false },
];

export default function MailView() {
  const [selectedMail, setSelectedMail] = useState(mockMessages[0]);

  return (
    <div className="flex h-[calc(100vh-160px)] gap-6 animate-in fade-in duration-500">
      {/* Inbox Sidebar */}
      <div className="w-1/3 bg-white rounded-[2.5rem] shadow-sm flex flex-col overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Messages</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search mail..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {mockMessages.map((mail) => (
            <div 
              key={mail.id}
              onClick={() => setSelectedMail(mail)}
              className={`p-6 cursor-pointer border-b border-slate-50 transition-colors ${selectedMail?.id === mail.id ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-slate-700 text-sm">{mail.sender}</span>
                <span className="text-[10px] text-slate-400 font-medium">{mail.time}</span>
              </div>
              <p className={`text-xs mb-1 truncate ${mail.unread ? 'font-bold text-slate-800' : 'text-slate-500'}`}>
                {mail.subject}
              </p>
              <p className="text-xs text-slate-400 truncate">{mail.preview}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm flex flex-col overflow-hidden">
        {selectedMail ? (
          <>
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  {selectedMail.sender.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{selectedMail.sender}</h3>
                  <p className="text-xs text-slate-400">{selectedMail.subject}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="flex-1 p-8 text-slate-600 overflow-y-auto">
              <p className="mb-4">Hello,</p>
              <p className="leading-relaxed">
                This is a placeholder for the message body. In a real application, you would fetch 
                the full conversation thread here. The patient's records are attached for your review.
              </p>
            </div>

            <div className="p-6 bg-slate-50 m-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  placeholder="Type your reply..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700"
                />
                <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-transform active:scale-90">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <Mail size={48} className="mb-4 opacity-20" />
            <p>Select a message to read</p>
          </div>
        )}
      </div>
    </div>
  );
}

