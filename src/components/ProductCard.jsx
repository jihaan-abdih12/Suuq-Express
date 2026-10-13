import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-slate-900 mb-1">{product.name}</h3>
        <p className="text-slate-500 text-sm mb-4 flex-grow">{product.desc}</p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div>
            <span className="text-xs text-slate-400 block">Price</span>
            <span className="text-xl font-extrabold text-emerald-600">${product.price.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-slate-900 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2.5 rounded-2xl transition shadow-md shadow-slate-900/10 flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}