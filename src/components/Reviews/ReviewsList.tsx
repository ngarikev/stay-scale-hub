import { Review } from "../../types/Review";

interface Props {
  reviews: Review[];
}

export default function ReviewList({ reviews }: Props) {
  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 rounded">
          <p className="font-semibold">
            ⭐ {review.rating} / 5
          </p>
          <p>{review.comment}</p>
          <small className="text-gray-500">
            {new Date(review.createdAt).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
}
