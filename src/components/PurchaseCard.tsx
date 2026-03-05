import { Zap, Shield, Mail, KeyRound, Clock, TrendingUp, ShieldCheck, Monitor, Gamepad2, Smartphone } from "lucide-react";

const PurchaseCard = () => {
  return (
    <div className="marketplace-card p-5 space-y-4">
      {/* Platform badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="marketplace-badge flex items-center gap-1">
          <Monitor className="w-3 h-3" />
          PC
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Gamepad2 className="w-3 h-3" />
          PlayStation
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Gamepad2 className="w-3 h-3" />
          Xbox
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Gamepad2 className="w-3 h-3" />
          Nintendo
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Smartphone className="w-3 h-3" />
          Mobile
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Zap className="w-3 h-3 text-marketplace-success" />
          Instant Delivery
        </span>
        <span className="marketplace-badge flex items-center gap-1">
          <Shield className="w-3 h-3 text-marketplace-info" />
          Warranty
        </span>
      </div>

      {/* Headline */}
      <p className="text-sm font-semibold text-foreground">
        Verified Fortnite Account — Instant Access
      </p>

      {/* Price */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">Price:</p>
        <p className="text-3xl font-extrabold text-foreground">$24.99</p>
      </div>

      {/* Benefit stack */}
      <div className="space-y-2 bg-muted/30 rounded-lg p-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-3.5 h-3.5 text-marketplace-success shrink-0" />
          <span>Instant delivery (under 5 minutes)</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="w-3.5 h-3.5 text-marketplace-success shrink-0" />
          <span>Full email access included</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <KeyRound className="w-3.5 h-3.5 text-marketplace-success shrink-0" />
          <span>Email/login change guaranteed</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-3.5 h-3.5 text-marketplace-success shrink-0" />
          <span>Warranty protection</span>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm">
        Buy Now
      </button>

      {/* Secure payment */}
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          
          Secure payment process
        </p>
        <p className="text-xs text-muted-foreground/70">
          Delivered immediately after payment.
        </p>
      </div>

      {/* Urgency */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-marketplace-urgency bg-marketplace-urgency/10 rounded-md py-1.5">
        <TrendingUp className="w-3 h-3" />
        High-demand account type
      </div>
    </div>);

};

export default PurchaseCard;