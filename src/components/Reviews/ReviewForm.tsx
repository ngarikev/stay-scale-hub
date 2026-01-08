import { useState } from "react";
import { Review } from "@/types/Review";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  apartmentId: string;
  onAddReview: (review: Omit<Review, "userId">) => void;
}

export default function ReviewForm({ apartmentId, onAddReview }: Props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (rating === 0) return;

    const newReview: Review = {
        id: crypto.randomUUID(),
        apartmentId,
        rating,
        comment,
        createdAt: new Date().toISOString(),
        userId: ""
    };

    onAddReview({
  id: newReview.id,
  apartmentId: newReview.apartmentId,
  rating: newReview.rating,
  comment: newReview.comment,
  createdAt: newReview.createdAt,
});
    setRating(0);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ⭐ STAR RATING */}
      <div>
        <p className="font-medium mb-1">Your Rating</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
        {rating === 0 && (
          <p className="text-sm text-red-500">
            Please select a rating
          </p>
        )}
      </div>

      {/* COMMENT */}
      <div>
        <label className="block font-medium mb-1">
          Comment
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full border rounded-md p-2"
          placeholder="Share your experience..."
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Review
      </Button>
    </form>
  );
}

