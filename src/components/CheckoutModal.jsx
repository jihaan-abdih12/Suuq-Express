import React, { useState } from 'react';
import { CheckCircle2, X, Phone } from 'lucide-react';

export default function CheckoutModal({ 
  isOpen, 
  setIsCheckoutOpen, 
  cart, 
  selectedNeighborhood, 
  resetOrder 
}) {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState("EVC Plus");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = subtotal + selectedNeighborhood.fee;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || !customerName) return;
    setOrderComplete(true);
  };

  const handleClose = () => {
    if (orderComplete) {
      resetOrder();
    } else {
      setIsCheckoutOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 z-10 overflow-hidden">
        
        {orderComplete ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Placed Successfully!</h3>
            <p className="text-slate-500 text-sm mb-6">
              A payment prompt has been sent to your <strong>{paymentMethod}</strong> number (<span className="text-slate-900 font-bold">{phoneNumber}</span>). 
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left mb-6 text-sm space-y-1">
              <p><strong>Customer:</strong> {customerName}</p>
              <p><strong>Delivery Destination:</strong> {selectedNeighborhood.name}, Mogadishu</p>
              <p><strong>Total Paid:</strong> ${total.toFixed(2)}</p>
              <p className="text-emerald-600 font-semibold pt-2">Estimated delivery: {selectedNeighborhood.time}</p>
            </div>
            <button 
              onClick={handleClose}
              className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 rounded-2xl transition"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl text-slate-900">Complete Order</h3>
                <p className="text-xs text-slate-400">Mogadishu Express Checkout</p>
              </div>
              <button onClick={handleClose} className="p-2 text-slate-400 hover:text-slate-700 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Jihaan Abdikadir"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Select Payment Provider</label>
                <div className="grid grid-cols-3 gap-2">
                  {["EVC Plus", "Zaad", "Sahal"].map(provider => (
                    <button
                      type="button"
                      key={provider}
                      onClick={() => setPaymentMethod(provider)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition ${
                        paymentMethod === provider 
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="tel"
                    required
                    placeholder="e.g. 615xxxxxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">You will receive a PIN prompt on your phone for ${total.toFixed(2)}.</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-1 mt-4">
                <div className="flex justify-between text-slate-500">
                  <span>Items Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery to {selectedNeighborhood.name}:</span>
                  <span>${selectedNeighborhood.fee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold pt-2 border-t border-slate-200">
                  <span>Total to Pay:</span>
                  <span className="text-emerald-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-emerald-600/30 transition active:scale-98 mt-2"
              >
                Pay & Place Order (${total.toFixed(2)})
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}