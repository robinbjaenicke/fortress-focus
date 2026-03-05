import { useIsMobile } from "@/hooks/use-mobile";

const StickyBuyBar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-4 py-3 flex items-center justify-between gap-4 lg:hidden">
      <span className="text-xl font-extrabold text-foreground">$24.99</span>
      <button className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm">
        Buy Now
      </button>
    </div>
  );
};

export default StickyBuyBar;
