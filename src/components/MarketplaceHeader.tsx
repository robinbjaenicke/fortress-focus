import { Search, Globe, User } from "lucide-react";

const MarketplaceHeader = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-extrabold tracking-tight text-foreground">
            Loot<span className="text-primary">Edge</span>
          </h1>
          <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-1.5 gap-2 w-80">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search marketplace..."
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="hidden sm:flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> English / USD</span>
          <button className="flex items-center gap-1.5 marketplace-badge hover:bg-accent transition-colors">
            <User className="w-3.5 h-3.5" /> Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
