import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  MessageCircle,
  X,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } =
    useCart();

  // Lock background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const orderLines = items.map(
      (item) =>
        `${item.quantity} x ${item.name} (${item.size}) – ₹${
          item.price * item.quantity
        }`
    );

    const message = encodeURIComponent(
      `Hello, I want to order:\n\n${orderLines.join(
        "\n"
      )}\n\n*Total: ₹${totalPrice}*`
    );

    window.open(`https://wa.me/918618676696?text=${message}`, "_blank");
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-herbal hover:text-gold transition"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-cream text-xs font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative bg-cream w-[90%] max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-xl font-serif text-herbal">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="p-5 space-y-4 max-h-[45vh] overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  Your cart is empty
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex items-center gap-3 bg-muted/40 p-3 rounded-2xl"
                  >
                    {/* Info */}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.size}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="qty-btn"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="qty-btn"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-medium text-gold">
                        ₹{item.price * item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          removeFromCart(item.productId, item.size)
                        }
                        className="text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t space-y-4">
                <div className="flex justify-between text-lg font-serif">
                  <span>Total</span>
                  <span className="text-gold">₹{totalPrice}</span>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 rounded-full bg-gold text-cream font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
