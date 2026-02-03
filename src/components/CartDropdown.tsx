import { useState, useRef, useEffect } from "react";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const orderLines = items.map(
      (item) => `${item.quantity} x ${item.name} (${item.size}) – ₹${item.price * item.quantity}`
    );
    
    const message = encodeURIComponent(
      `Hello, I want to order:\n\n${orderLines.join("\n")}\n\n*Total: ₹${totalPrice}*`
    );
    
    window.open(`https://wa.me/918618676696?text=${message}`, "_blank");
    clearCart();
    setIsOpen(false);
  };

 return (
  <div className="relative" ref={dropdownRef}>
    {/* Cart Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative p-2 text-herbal hover:text-gold transition-colors duration-300"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-cream text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>

    {/* Overlay for mobile */}
    {isOpen && (
      <div className="fixed inset-0 bg-black/40 z-40 sm:hidden" onClick={() => setIsOpen(false)} />
    )}

    {/* Cart Panel */}
    {isOpen && (
      <div className="
        fixed right-0 top-0 h-full w-full bg-card z-50 flex flex-col
        sm:absolute sm:h-auto sm:w-96 sm:top-auto sm:mt-2 sm:rounded-2xl sm:shadow-xl sm:border sm:border-sage/20 sm:overflow-hidden
      ">
        {/* Header */}
        <div className="p-5 border-b border-sage/20 flex items-center justify-between bg-sage/10">
          <h3 className="font-serif text-xl text-herbal">Your Cart</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-sage/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-herbal" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center mt-20">
              <ShoppingCart className="w-12 h-12 text-sage mx-auto mb-3" />
              <p className="text-herbal-light">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add products to get started
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex gap-3 p-3 bg-sage/10 rounded-2xl"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-herbal font-medium text-sm truncate">
                    {item.name}
                  </p>
                  <p className="text-herbal-light text-xs">{item.size}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full border border-sage/30 flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-full border border-sage/30 flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Price + Remove */}
                <div className="flex flex-col items-end justify-between">
                  <p className="text-gold font-medium text-sm">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size)}
                    className="text-red-500 text-xs mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sage/20 p-5 bg-sage/5 space-y-4">
            <div className="flex justify-between text-lg font-serif">
              <span>Total</span>
              <span className="text-gold">₹{totalPrice}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="flex-1 py-3 rounded-full border border-herbal/30 text-herbal text-sm font-medium"
              >
                Clear Cart
              </button>
              <button
                onClick={handleWhatsAppCheckout}
                className="flex-1 py-3 rounded-full bg-gold text-cream text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Order
              </button>
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

};

export default CartDropdown;
