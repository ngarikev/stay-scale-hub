import { Star } from "lucide-react";
import { Review } from "@/types/Review";

interface Props {
  reviews: Review[];
}

export default function AverageRating({ reviews }: Props) {
  if (reviews.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No reviews yet
      </p>
    );
  }

  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const rounded = Math.round(average * 10) / 10;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.round(average)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <span className="text-sm font-medium">
        {rounded}
      </span>

      <span className="text-sm text-muted-foreground">
        ({reviews.length} review{reviews.length > 1 && "s"})
      </span>
    </div>
  );
}
