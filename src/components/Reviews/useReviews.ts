import { useEffect, useState } from "react";
import { Review } from "@/types/Review";
import { getCurrentUserId } from "@/lib/getCurrentUser";

export function useReviews(apartmentId: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const userId = getCurrentUserId();

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      const allReviews: Review[] = JSON.parse(saved);
      setReviews(allReviews.filter(r => r.apartmentId === apartmentId));
    }
  }, [apartmentId]);

  function addReview(review: Omit<Review, "userId">) {
    const saved = localStorage.getItem("reviews");
    const allReviews: Review[] = saved ? JSON.parse(saved) : [];

    const alreadyReviewed = allReviews.some(
      r =>
        r.apartmentId === apartmentId &&
        r.userId === userId
    );

    if (alreadyReviewed) {
      alert("You have already reviewed this apartment.");
      return;
    }

    const reviewWithUser: Review = {
      ...review,
      userId,
    };

    const updated = [...allReviews, reviewWithUser];
    localStorage.setItem("reviews", JSON.stringify(updated));

    setReviews(prev => [...prev, reviewWithUser]);
  }

  return { reviews, addReview };
}
