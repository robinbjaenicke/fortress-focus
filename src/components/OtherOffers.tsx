import { Zap, Star, Gamepad2 } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";
import thumb1 from "@/assets/product-thumb-1.png";
import thumb2 from "@/assets/product-thumb-2.png";

const offers = [
  {
    title: "Email Access | 5-20 Random Skins Guaranteed",
    platforms: ["PlayStation", "Xbox", "PC"],
    price: "$5.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
    image: thumb1,
  },
  {
    title: "Rare Skin Bundle | OG Ghoul Trooper, Renegade Raider & More",
    platforms: ["PlayStation", "Xbox", "PC"],
    price: "$34.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
    image: productHero,
  },
  {
    title: "Super Rare Skin Pack | Ultra Exclusive OG Accounts",
    platforms: ["PlayStation", "Xbox", "PC"],
    price: "$39.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
    image: thumb2,
  },
];

const OtherOffers = () => {
  return (
    <div className="marketplace-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Other Offers</h2>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Zap className="w-3 h-3 text-marketplace-success" />
          Compare alternatives (Instant delivery)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {offers.map((offer, i) => (
          <div key={i} className="rounded-lg border border-border bg-muted/20 overflow-hidden hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="aspect-video w-full overflow-hidden">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
              {offer.platforms.map((p) => (
                <span key={p} className="inline-flex items-center gap-1 bg-muted/60 rounded px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  <Gamepad2 className="w-2.5 h-2.5" />
                  {p}
                </span>
              ))}
            </div>
            <p className="text-xs text-foreground font-medium leading-snug line-clamp-2">
              {offer.title}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Zap className="w-3 h-3 text-marketplace-success" />
              Instant
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{offer.seller}</span>
              <div className="flex items-center gap-0.5 ml-1">
                <Star className="w-2.5 h-2.5 fill-marketplace-gold text-marketplace-gold" />
                <span>{offer.rating} ({offer.reviews})</span>
              </div>
            </div>
            <p className="text-lg font-bold text-foreground">{offer.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherOffers;
