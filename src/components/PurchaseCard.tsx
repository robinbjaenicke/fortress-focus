import { Zap, Shield, Mail, KeyRound, Clock, TrendingUp, ShieldCheck } from "lucide-react";

const PurchaseCard = () => {
  return (
    <div className="marketplace-card p-5 space-y-4">
      {/* Platform badge */}
      <div className="flex items-center gap-2">
        <span className="marketplace-badge flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.153 0-3.21-1.263-4.834-4.003-5.808C12.273 3.4 10.47 2.98 8.985 2.596zM2 17.67c2.355.86 4.756 1.295 6.625.443 1.642-.748 1.895-2.321.085-3.18-1.252-.594-3.004-.976-4.671-1.635C1.64 12.37.753 11.143.753 9.238c0-2.016 1.3-3.37 3.96-3.849l2.275 4.228c-1.585.086-3.34.465-3.34 1.542 0 .89 1.24 1.279 2.703 1.748 2.926.937 5.073 2.162 5.073 4.807 0 3.04-2.313 4.672-6.265 4.406L2 17.67z" /></svg>
          PlayStation
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
          <ShieldCheck className="w-4 h-4 text-primary" />
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