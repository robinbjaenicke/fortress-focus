import { Monitor, Gamepad2, Smartphone, Package, Sparkles, Star, Gift } from "lucide-react";

const DescriptionCard = () => {
  return (
    <div className="marketplace-card p-5 space-y-6">
      <h2 className="text-lg font-bold text-foreground">Description</h2>

      {/* What You Receive */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Package className="w-4 h-4 text-primary" />
          What You Receive
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="trust-check mt-0.5">✓</span>
            Fortnite account with <strong className="text-foreground">25–100 skins</strong>
          </li>
          <li className="flex items-start gap-2">
            <span className="trust-check mt-0.5">✓</span>
            Full email ownership (full control)
          </li>
          <li className="flex items-start gap-2">
            <span className="trust-check mt-0.5">✓</span>
            Email/login change guaranteed
          </li>
          <li className="flex items-start gap-2">
            <span className="trust-check mt-0.5">✓</span>
            <span className="flex items-center gap-1.5 flex-wrap">
              Platforms:
              <span className="inline-flex items-center gap-1 marketplace-badge"><Monitor className="w-3 h-3" /> PC</span>
              <span className="inline-flex items-center gap-1 marketplace-badge"><Gamepad2 className="w-3 h-3" /> PlayStation</span>
              <span className="inline-flex items-center gap-1 marketplace-badge"><Gamepad2 className="w-3 h-3" /> Xbox</span>
              <span className="inline-flex items-center gap-1 marketplace-badge"><Gamepad2 className="w-3 h-3" /> Nintendo</span>
              <span className="inline-flex items-center gap-1 marketplace-badge"><Smartphone className="w-3 h-3" /> Mobile</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-border" />

      {/* Skin Chances */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Skin Chances
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* 80% Rare */}
          <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-marketplace-rare/20 text-marketplace-rare">
                80% Chance
              </span>
              <span className="text-xs font-semibold text-foreground">Rare Skin</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {["The Reaper", "Royale Knight", "Raven", "Omega", "Elite Agent", "Travis Scott", "Mako Glider", "Blue Squire"].map(skin => (
                <li key={skin} className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-marketplace-rare" />
                  {skin}
                </li>
              ))}
            </ul>
          </div>

          {/* 20% Super Rare */}
          <div className="rounded-lg border border-marketplace-gold/30 bg-marketplace-gold/5 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-marketplace-gold/20 text-marketplace-gold">
                20% Chance
              </span>
              <span className="text-xs font-semibold text-foreground">SUPER RARE Skin</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {["OG Ghoul Trooper", "OG Renegade Raider", "OG Aerial Assault", "Black Knight", "Ikonik", "Galaxy", "OG Skull Trooper"].map(skin => (
                <li key={skin} className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-marketplace-gold" />
                  {skin}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Fair Selection Note */}
      <div className="text-xs text-muted-foreground italic bg-muted/20 rounded-lg p-3">
        Each account is uniquely selected. No recycled inventories.
      </div>

      {/* Bundle Bonus */}
      <div className="flex items-start gap-2 bg-marketplace-gold/5 border border-marketplace-gold/20 rounded-lg p-3">
        <Gift className="w-4 h-4 text-marketplace-gold shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">Bundle Bonus:</strong> Buy 5 of the SAME listing → guaranteed at least one SUPER RARE skin.
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
