import React from 'react';
import { ShoppingBag, Search, MapPin, Clock } from 'lucide-react';

export default function Navbar({ 
  selectedNeighborhood, 
  searchQuery, 
  setSearchQuery, 
  totalItems, 
  setIsCartOpen 
}) {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-emerald-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Delivering to: <strong className="text-emerald-300">{selectedNeighborhood.name}, Bakaaro</strong> ({selectedNeighborhood.time})</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5" /> Open 24/7 
            </span>
            <span className="hidden md:inline text-emerald-400">|</span>
            <span className="hidden md:inline font-medium text-emerald-200">Instant Mobile Money Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-600/30">
              SQ
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none">Suuq Express</h1>
              <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Mogadishu Market</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative w-96">
            <Search className="absolute left-3 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search groceries, electronics, fashion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-medium shadow-md shadow-emerald-600/20 transition active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </header>
    </>
  );
}