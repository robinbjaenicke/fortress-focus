import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  { user: "St****AB", date: "February 20, 2026", rating: 5 },
  { user: "RN****AY", date: "January 20, 2026", rating: 5 },
  { user: "Ch****Od", date: "January 20, 2026", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <div className="marketplace-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Seller Rating</h2>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>

      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
        <CheckCircle2 className="w-3 h-3 text-marketplace-success" />
        Recent successful deliveries from verified buyers
      </p>

      <div className="space-y-3">
        {reviews.map((review, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                {review.user.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{review.user}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-marketplace-gold text-marketplace-gold" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
