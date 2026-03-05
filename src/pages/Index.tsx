import MarketplaceHeader from "@/components/MarketplaceHeader";
import MarketplaceFooter from "@/components/MarketplaceFooter";
import ProductMedia from "@/components/ProductMedia";
import DescriptionCard from "@/components/DescriptionCard";
import PurchaseCard from "@/components/PurchaseCard";
import SellerCard from "@/components/SellerCard";
import TrustCards from "@/components/TrustCards";
import ReviewsSection from "@/components/ReviewsSection";
import OtherOffers from "@/components/OtherOffers";
import StickyBuyBar from "@/components/StickyBuyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader />

      <main className="max-w-7xl mx-auto px-4 py-6 pb-20 lg:pb-6">
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

        {/* Main Grid - flat children with CSS order for mobile reordering */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ProductMedia: order 1 mobile, spans left on desktop */}
          <div className="lg:col-span-2 lg:row-start-1 order-1">
            <ProductMedia />
          </div>

          {/* PurchaseCard: order 2 on mobile (right after image+title), right col on desktop */}
          <div className="order-2 lg:order-none lg:row-start-1 lg:row-span-3 lg:col-start-3 space-y-4">
            <PurchaseCard />
            <SellerCard className="hidden lg:block" />
            <TrustCards className="hidden lg:block" />
          </div>

          {/* DescriptionCard: order 3 on mobile */}
          <div className="lg:col-span-2 lg:row-start-2 order-3">
            <DescriptionCard />
          </div>

          {/* Seller + Trust on mobile only (after description) */}
          <div className="order-4 lg:hidden space-y-4">
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
