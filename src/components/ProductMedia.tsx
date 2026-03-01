import productHero from "@/assets/product-hero.jpg";
import thumb1 from "@/assets/product-thumb-1.png";
import thumb2 from "@/assets/product-thumb-2.png";
import { useState } from "react";

const ProductMedia = () => {
  const [activeThumb, setActiveThumb] = useState(0);
  const images = [productHero, thumb1, thumb2];

  return (
    <div className="marketplace-card overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={images[activeThumb]}
          alt="Fortnite Account Preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2 p-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveThumb(i)}
            className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
              activeThumb === i ? "border-primary" : "border-transparent"
            }`}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductMedia;
