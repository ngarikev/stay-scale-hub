import { useEffect, useState } from "react";
import { Review } from "@/types/Review";
import ReviewList from "@/components/Reviews/ReviewsList";

interface Props {
  apartmentId: string;
  renderAction?: (addReview: (review: Review) => void) => React.ReactNode;
}

export default function Reviews({ apartmentId, renderAction }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      const allReviews: Review[] = JSON.parse(saved);
      setReviews(allReviews.filter(r => r.apartmentId === apartmentId));
    }
  }, [apartmentId]);

  function addReview(review: Review) {
    const saved = localStorage.getItem("reviews");
    const allReviews: Review[] = saved ? JSON.parse(saved) : [];

    const updated = [...allReviews, review];
    localStorage.setItem("reviews", JSON.stringify(updated));

    setReviews(prev => [...prev, review]);
  }

  return (
    <div className="space-y-4">
      {renderAction && renderAction(addReview)}
      <ReviewList reviews={reviews} />
    </div>
  );
}
