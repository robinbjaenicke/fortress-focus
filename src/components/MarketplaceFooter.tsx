import { Star } from "lucide-react";

const MarketplaceFooter = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-muted-foreground">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm">Service</h4>
            <ul className="space-y-1.5">
              {["Contact us", "Terms of Service", "Blog", "Help center"].map(item => (
                <li key={item}><a href="#" className="hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm">Legal</h4>
            <ul className="space-y-1.5">
              {["Privacy Policy", "Warranty", "DMCA", "Refund Policy"].map(item => (
                <li key={item}><a href="#" className="hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm">Partners</h4>
            <ul className="space-y-1.5">
              {["Sell with us", "Partner program", "Trading Protection"].map(item => (
                <li key={item}><a href="#" className="hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-foreground">Trustpilot</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-marketplace-gold text-marketplace-gold" />
                ))}
              </div>
              <span className="text-foreground font-medium ml-1">4.7</span>
            </div>
            <p className="text-xs text-muted-foreground">Exclusive Warranty Included</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground text-center">
          © 2026 All rights reserved. LootEdge Ltd, Ekalis 24, Larnaca 6037, Cyprus, Reg. No. HE477622
        </div>
      </div>
    </footer>
  );
};

export default MarketplaceFooter;
