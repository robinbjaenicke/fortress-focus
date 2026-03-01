import MarketplaceHeader from "@/components/MarketplaceHeader";
import MarketplaceFooter from "@/components/MarketplaceFooter";
import ProductMedia from "@/components/ProductMedia";
import DescriptionCard from "@/components/DescriptionCard";
import PurchaseCard from "@/components/PurchaseCard";
import SellerCard from "@/components/SellerCard";
import TrustCards from "@/components/TrustCards";
import ReviewsSection from "@/components/ReviewsSection";
import OtherOffers from "@/components/OtherOffers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-4">
          <span className="hover:text-foreground cursor-pointer">Fortnite</span>
          <span className="mx-2">/</span>
          <span className="hover:text-foreground cursor-pointer">Accounts</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">25–100 Skins</span>
        </nav>

        {/* Product Title */}
        <div className="mb-5">
          <h1 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
            Fortnite Account | 25–100 Skins | Rare & OG Chance | Full Access
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Upgrade your locker instantly — secure delivery & full ownership.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-5">
            <ProductMedia />
            <DescriptionCard />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <PurchaseCard />
            <SellerCard />
            <TrustCards />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="mt-6 space-y-5">
          <ReviewsSection />
          <OtherOffers />
        </div>
      </main>

      <MarketplaceFooter />
    </div>
  );
};

export default Index;
