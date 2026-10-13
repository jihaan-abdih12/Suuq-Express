import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              SQ
            </div>
            <h2 className="text-lg font-bold tracking-tight">Suuq Express Mogadishu</h2>
          </div>
          <p className="text-slate-400 text-sm">Your trusted local commerce partner in Banadir, Somalia.</p>
        </div>
        <div className="text-sm text-slate-400">
          <p>Supported Payments: <strong className="text-white">EVC Plus (Hormuud) • Zaad (Telesom) • Sahal (Golis)</strong></p>
          <p className="mt-1">© 2026 Suuq Express. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}