import { useState, useEffect } from "react";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const checkout = () => {
    if (!items.length) return;
    const lines = items.map(i => `${i.quantity} x ${i.name} (${i.size}) – ₹${i.price * i.quantity}`);
    const msg = encodeURIComponent(`Hello, I want to order:\n\n${lines.join("\n")}\n\nTotal: ₹${totalPrice}`);
    window.open(`https://wa.me/918618676696?text=${msg}`, "_blank");
    clearCart();
    setOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button onClick={() => setOpen(true)} className="relative p-2">
        <ShoppingCart className="w-6 h-6 text-herbal" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          open ? "bg-black/50 backdrop-blur-sm opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side Cart - FIXED HEIGHT FROM TOP TO BOTTOM */}
      <div
        className={`fixed inset-y-0 right-0 z-[110] w-full sm:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col h-screen ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header - Fixed at Top */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-serif text-herbal">Your Cart</h2>
            <p className="text-sm text-gray-500">{totalItems} items</p>
          </div>
          <button 
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Items - Scrollable Middle Section */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg">Your cart is empty</p>
              <button 
                onClick={() => setOpen(false)}
                className="mt-4 text-gold font-medium underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.productId}-${item.size}`} className="flex justify-between items-start gap-4 pb-6 border-b border-gray-50">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg uppercase tracking-tight">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.size}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)} 
                        className="px-3 py-1 hover:bg-gray-50 text-gray-600"
                      >
                        <Minus className="w-4 h-4"/>
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)} 
                        className="px-3 py-1 hover:bg-gray-50 text-gray-600"
                      >
                        <Plus className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between items-end h-full">
                  <p className="text-gold font-bold text-lg">₹{item.price * item.quantity}</p>
                  <button 
                    onClick={() => removeFromCart(item.productId, item.size)} 
                    className="text-red-400 hover:text-red-600 mt-4 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Fixed at Bottom */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-600">Total Amount</span>
              <span className="text-2xl font-serif text-gold font-bold">₹{totalPrice}</span>
            </div>

            <button
              onClick={checkout}
              className="w-full py-4 rounded-xl bg-gold hover:bg-[#b88e2f] text-white text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98]"
            >
              <MessageCircle className="w-6 h-6" />
              ORDER ON WHATSAPP
            </button>
            <p className="text-[11px] text-center text-gray-400 uppercase tracking-widest">
              Ready to checkout? We'll chat on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </>
  );
}