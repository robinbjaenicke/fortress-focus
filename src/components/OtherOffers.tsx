import { Zap, Star, Gamepad2 } from "lucide-react";

const offers = [
  {
    title: "With Email, Guaranteed 5-20 Random Skins",
    platform: "PlayStation",
    price: "$5.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
  },
  {
    title: "With At Least One RARE SKIN (OG Ghoul Trooper, OG Renegade R...)",
    platform: "PlayStation",
    price: "$34.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
  },
  {
    title: "With At Least One SUPER RARE SKIN",
    platform: "PlayStation",
    price: "$39.99",
    seller: "GoldMarket",
    rating: "100.00%",
    reviews: 11,
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
          <div key={i} className="rounded-lg border border-border bg-muted/20 p-3 space-y-2.5 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Gamepad2 className="w-3 h-3" />
              {offer.platform}
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
        ))}
      </div>
    </div>
  );
};

export default OtherOffers;
