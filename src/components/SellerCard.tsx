import { Star, ExternalLink, BadgeCheck } from "lucide-react";

const SellerCard = () => {
  return (
    <div className="marketplace-card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            G
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-foreground">GoldMarket</span>
              <BadgeCheck className="w-4 h-4 text-marketplace-info" />
            </div>
            <p className="text-xs text-muted-foreground">Trusted Seller</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-marketplace-gold text-marketplace-gold" />
          ))}
        </div>
        <span className="font-medium text-foreground">100%</span>
        <span>Positive (11 reviews)</span>
      </div>

      <p className="text-xs text-muted-foreground">Verified marketplace partner</p>

      <button className="w-full text-xs text-primary hover:underline flex items-center justify-center gap-1 py-1.5 rounded border border-border hover:bg-accent transition-colors">
        <ExternalLink className="w-3 h-3" />
        View Profile
      </button>
    </div>
  );
};

export default SellerCard;
