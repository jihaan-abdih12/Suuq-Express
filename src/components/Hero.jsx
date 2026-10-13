import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/mockData';

export default function Hero({ selectedNeighborhood, setSelectedNeighborhood }) {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-block bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            🚀 Lightning Fast Delivery across Benadir
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Everything you need, delivered to your door in Mogadishu.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Shop fresh groceries, electronics, and local essentials. Pay easily with EVC Plus, Zaad, or Sahal.
          </p>

          {/* Neighborhood Picker */}
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 inline-block w-full sm:w-auto">
            <label className="block text-xs font-medium text-emerald-200 mb-1.5 text-left">Select Your Neighborhood:</label>
            <select 
              value={selectedNeighborhood.name}
              onChange={(e) => {
                const found = NEIGHBORHOODS.find(n => n.name === e.target.value);
                if (found) setSelectedNeighborhood(found);
              }}
              className="w-full sm:w-64 bg-white text-slate-900 text-sm font-medium rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {NEIGHBORHOODS.map(n => (
                <option key={n.name} value={n.name}>
                  {n.name} ({n.time} • ${n.fee} delivery)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl max-w-sm w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-2xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Trusted Local Service</h4>
              <p className="text-xs text-emerald-200">100% Secure & Guaranteed</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-200">
            <li className="flex items-center gap-2">✓ Direct mobile money integration</li>
            <li className="flex items-center gap-2">✓ Real-time rider tracking</li>
            <li className="flex items-center gap-2">✓ Fresh quality & authentic products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}