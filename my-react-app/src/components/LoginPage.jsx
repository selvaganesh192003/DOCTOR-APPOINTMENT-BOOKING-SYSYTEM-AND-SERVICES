import React, { useState, useEffect } from 'react';
import { Lock, Mail, Eye, EyeOff, Activity, AlertCircle } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
  const [error, setError] = useState(false);

  const VALID_EMAIL = "selva.admin@clinic.com";
  const VALID_PASSWORD = "Selva@192003";

  // Check for saved email on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError(false);
      
      // Handle "Remember Me" logic
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 p-10 relative z-10 border border-white">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#5E5CE6] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-4">
            <Activity className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Admin Login</h1>
          <p className="text-slate-400 mt-2 font-medium">Enter your Selva Admin credentials</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold flex items-center gap-2 animate-shake">
              <AlertCircle size={16} /> Invalid email or password.
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="selva.admin@clinic.com"
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 font-medium" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-24 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 font-medium" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox Section */}
          <div className="flex items-center justify-between text-sm px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
              />
              <span className="text-slate-500 font-semibold group-hover:text-slate-700 transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-indigo-600 font-bold hover:underline">Forgot Password?</button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#5E5CE6] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
