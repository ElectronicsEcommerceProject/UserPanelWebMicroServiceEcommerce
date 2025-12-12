import React, { useState, useRef } from 'react';
import { Check, Truck, Zap } from 'lucide-react';

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  
  const productImages = product.images || [product.image];

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const lensSize = 128; // 32 * 4 (w-32 = 128px)
    const halfLens = lensSize / 2;
    
    let x = e.clientX - left;
    let y = e.clientY - top;
    
    // Constrain lens within image boundaries
    x = Math.max(halfLens, Math.min(x, width - halfLens));
    y = Math.max(halfLens, Math.min(y, height - halfLens));
    
    setMagnifierPos({ x, y });
  };

  return (
    <div className="space-y-3">
      {/* Main Image Container */}
      <div className="relative bg-linear-to-br from-slate-100 via-white to-slate-100 rounded-xl shadow-lg overflow-hidden border border-slate-300">
        <div 
          ref={imageRef}
          className="relative aspect-4/3 flex items-center justify-center cursor-crosshair group overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
          <img 
            src={selectedImage} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-300" 
            style={{
              transform: showMagnifier ? 'scale(2)' : 'scale(1)',
              transformOrigin: showMagnifier ? `${magnifierPos.x}px ${magnifierPos.y}px` : 'center'
            }}
          />
          
          {/* Magnifier Lens Overlay */}
          {showMagnifier && (
            <div 
              className="absolute w-32 h-32 border-4 border-blue-500 bg-transparent pointer-events-none shadow-2xl"
              style={{ 
                left: `${magnifierPos.x - 64}px`, 
                top: `${magnifierPos.y - 64}px`
              }}
            />
          )}


        </div>


      </div>

      {/* Thumbnail Gallery */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {productImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 border-3 cursor-pointer ${
                selectedImage === img 
                  ? 'border-blue-500 scale-105 shadow-xl' 
                  : 'border-gray-300 hover:border-blue-400 hover:scale-105 opacity-70 hover:opacity-100 shadow-md'
              }`}
            >
              <img 
                src={img} 
                alt={`View ${idx + 1}`} 
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      </div>

      {/* Quick Info Badges */}
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-sm font-semibold rounded-full border-2 border-green-200 shadow-sm">
          <Check className="w-5 h-5" /> In Stock
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-semibold rounded-full border-2 border-blue-200 shadow-sm">
          <Truck className="w-5 h-5" /> Free Shipping
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-semibold rounded-full border-2 border-purple-200 shadow-sm">
          <Zap className="w-5 h-5" /> Fast Delivery
        </span>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductImages;
