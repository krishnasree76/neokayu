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

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-card rounded-2xl shadow-xl border border-sage/20 z-50 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="p-4 border-b border-sage/20 flex items-center justify-between bg-sage/10">
            <h3 className="font-serif text-lg text-herbal">Your Cart</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-sage/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-herbal" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="max-h-80 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-8 text-center">
                <ShoppingCart className="w-12 h-12 text-sage mx-auto mb-3" />
                <p className="text-herbal-light">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add products to get started
                </p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex items-center gap-3 p-3 bg-sage/10 rounded-xl"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-herbal font-medium text-sm truncate">
                        {item.name}
                      </p>
                      <p className="text-herbal-light text-xs">{item.size}</p>
                      <p className="text-gold font-medium text-sm mt-1">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-sage/30 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-herbal" />
                      </button>
                      <span className="w-6 text-center text-herbal font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-sage/30 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-herbal" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.productId, item.size)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-sage/20 bg-sage/5">
              {/* Total */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-herbal font-medium">Total</span>
                <span className="text-xl font-serif text-gold">₹{totalPrice}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="flex-1 py-3 px-4 rounded-full border border-herbal/30 text-herbal text-sm font-medium hover:bg-herbal hover:text-cream transition-all duration-300"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex-1 py-3 px-4 rounded-full bg-gold text-cream text-sm font-medium hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
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
