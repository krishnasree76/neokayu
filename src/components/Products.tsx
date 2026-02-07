import { ShoppingCart, Plus, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

// Product images
import balmImg from "@/assets/products/balm.jpg";
import hairCleanserImg from "@/assets/products/hair-cleanser.jpg";
import amlaBeetrootImg from "@/assets/products/amla-beetroot.jpg";
import churnaImg from "@/assets/products/churna.jpg";
import tulsiDropsImg from "@/assets/products/tulsi-drops.jpg";
import babyFoodImg from "@/assets/products/baby-food.jpg";
import hairOilImg from "@/assets/products/hair-oil.jpg";
import rollOnImg from "@/assets/products/roll-on.jpg";
import moringaImg from "@/assets/products/moringa.jpg";
import amlaImg from "@/assets/products/amla.jpg";
import abcPowderImg from "@/assets/products/abc-powder.jpg";
import bedaBlastImg from "@/assets/products/beda-blast.jpg";

interface PriceOption {
  size: string;
  price: number;
  type: "sample" | "selling";
}

interface Product {
  id: number;
  name: string;
  benefit: string;
  image: string;
  prices: PriceOption[];
}

const products: Product[] = [
  {
    id: 1,
    name: "NeoKayu Multipurpose Balm",
    benefit: "Natural healing for pain, cold & skin care",
    image: balmImg,
    prices: [
      { size: "5 gm", price: 65, type: "sample" },
      { size: "100 gm", price: 358, type: "selling" },
    ],
  },
  {
    id: 2,
    name: "Neokayu Kayashuddi Hair and body scrub",
    benefit: "Natural hair washer & deep cleanser",
    image: hairCleanserImg,
    prices: [{ size: "100 gm", price: 185, type: "selling" }],
  },
  {
    id: 3,
    name: "NeoKayu Amla + Beetroot Powder",
    benefit: "Digestion support & immunity booster",
    image: amlaBeetrootImg,
    prices: [
      { size: "10 gm", price: 25, type: "sample" },
      { size: "100 gm", price: 190, type: "selling" },
    ],
  },
  {
    id: 4,
    name: "NeoKayu Pudhina Ashtaka Churna",
    benefit: "Digestive relief with cooling mint",
    image: churnaImg,
    prices: [
      { size: "10 gm", price: 45, type: "sample" },
      { size: "100 gm", price: 215, type: "selling" },
    ],
  },
  {
    id: 5,
    name: "NeoKayu TulasAmrit Drop",
    benefit: "Sacred tulsi for immunity & wellness",
    image: tulsiDropsImg,
    prices: [
      { size: "5 ml", price: 135, type: "sample" },
      { size: "10 ml", price: 250, type: "selling" },
    ],
  },
  {
    id: 6,
    name: "NeoKayu Baby Food",
    benefit: "Nutritious raw banana powder for infants",
    image: babyFoodImg,
    prices: [{ size: "200 gm", price: 195, type: "selling" }],
  },
  {
    id: 7,
    name: "NeoKayu Hair Fall Control Oil",
    benefit: "Promotes growth & reduces hair fall",
    image: hairOilImg,
    prices: [{ size: "100 ml", price: 295, type: "selling" }],
  },
  {
    id: 8,
    name: "NeoKayu Roll-On",
    benefit: "Instant relief from headache & stress",
    image: rollOnImg,
    prices: [
      { size: "5 ml", price: 130, type: "sample" },
      { size: "10 ml", price: 210, type: "selling" },
    ],
  },
  {
    id: 9,
    name: "NeoKayu Moringa Super Food",
    benefit: "Complete nutrition from drumstick leaves",
    image: moringaImg,
    prices: [{ size: "100 gm", price: 220, type: "selling" }],
  },
  {
    id: 10,
    name: "NeoKayu Amla Powder",
    benefit: "Vitamin C rich for skin & hair health",
    image: amlaImg,
    prices: [{ size: "100 gm", price: 235, type: "selling" }],
  },
  {
    id: 11,
    name: "NeoKayu ABC Powder",
    benefit: "Ayurvedic blend for overall wellness",
    image: abcPowderImg,
    prices: [
      { size: "50 gm", price: 115, type: "selling" },
      { size: "100 gm", price: 210, type: "selling" },
    ],
  },
  {
    id: 12,
    name: "NeoKayu Instant Beda Blast",
    benefit: "Natural mouth freshener with herbs",
    image: bedaBlastImg,
    prices: [
      { size: "10 gm", price: 55, type: "sample" },
      { size: "50 gm", price: 250, type: "selling" },
    ],
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.prices[0].size);
  const [addedSizes, setAddedSizes] = useState<Set<string>>(new Set());

  const selectedPrice = product.prices.find((p) => p.size === selectedSize);

  const handleAddToCart = () => {
    if (!selectedPrice) return;
    
    addToCart({
      productId: product.id,
      name: product.name,
      size: selectedPrice.size,
      price: selectedPrice.price,
    });

    setAddedSizes((prev) => new Set(prev).add(selectedSize));
    
    toast.success(`Added to cart!`, {
      description: `${product.name} (${selectedPrice.size})`,
    });

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedSizes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(selectedSize);
        return newSet;
      });
    }, 2000);
  };

  const isAdded = addedSizes.has(selectedSize);

  return (
    <div className="card-premium group">
      {/* Product Image */}
      <div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-herbal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <h3 className="font-serif text-lg text-herbal mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-herbal-light text-sm mb-4">{product.benefit}</p>

      {/* Size Dropdown */}
      <div className="mb-4">
        <label className="text-xs text-herbal-light mb-1 block">Select Size</label>
        <div className="relative">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-3 pr-10 rounded-xl bg-sage/10 border border-sage/30 text-herbal font-medium appearance-none cursor-pointer hover:bg-sage/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            {product.prices.map((price) => (
              <option key={price.size} value={price.size} className="bg-card text-herbal">
                {price.type === "sample" ? "Sample: " : ""}
                {price.size} – ₹{price.price}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-herbal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Price Display */}
      <div className="flex items-center justify-between mb-4">
        <div>
          {selectedPrice?.type === "sample" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold font-medium mr-2">
              Sample
            </span>
          )}
          <span className="text-2xl font-sans font-extrabold text-gold">₹{selectedPrice?.price}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`w-full py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
          isAdded
            ? "bg-sage text-herbal cursor-default"
            : "bg-herbal text-cream hover:bg-gold"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart
          </>
        ) : (
          <>
            <Plus className="w-5 h-5" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="section-padding bg-cream-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-herbal mb-6">
            Traditional Ayurvedic Wellness
          </h2>
          <div className="gold-divider" />
          <p className="mt-6 text-herbal-light max-w-2xl mx-auto">
            Each product is crafted with authentic Ayurvedic ingredients and time-tested 
            formulations for your holistic well-being.
          </p>
        </div>

        {/* Cart Info Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-sage/20 border border-sage/30 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="w-6 h-6 text-herbal" />
          </div>
          <div>
            <p className="text-herbal font-medium">Add products to your cart</p>
            <p className="text-herbal-light text-sm">
              Select size, add to cart, and checkout via WhatsApp with your complete order.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
