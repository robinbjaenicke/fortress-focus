import { Mail, KeyRound, UserCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

const TrustCards = () => {
  return (
    <div className="space-y-3">
      {/* Full Access Card */}
      <div className="marketplace-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          Full Access Included
        </h3>
        <p className="text-xs text-muted-foreground">
          You receive full control of the account, including access to the email.
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="w-3 h-3 text-primary" />
            Full email access
          </li>
          <li className="flex items-center gap-2">
            <KeyRound className="w-3 h-3 text-primary" />
            Password & recovery change supported
          </li>
          <li className="flex items-center gap-2">
            <UserCheck className="w-3 h-3 text-primary" />
            Ownership transfer guidance
          </li>
        </ul>
      </div>

      {/* Marketplace Protection */}
      <div className="marketplace-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" style={{ color: '#3db8a5' }} />
          Marketplace Protection
        </h3>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          {[
            "Seller verification",
            "Warranty coverage",
            "Secure transaction",
            "Support if issues occur",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-marketplace-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustCards;
