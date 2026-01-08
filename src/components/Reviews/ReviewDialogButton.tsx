import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Review } from "@/types/Review";

interface Props {
   apartmentId: string;
  onAddReview: (review: any) => void;
  disabled?: boolean;
}

export default function ReviewDialogButton({
  apartmentId,
  onAddReview,
  disabled,
}: Props) {
  const [open, setOpen] = useState(false);

  function handleAddReview(review: Review) {
    onAddReview(review);
    setOpen(false); // ✅ AUTO-CLOSE dialog
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={disabled}>
    {disabled ? "Review Submitted" : "Write a Review"}</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>

        <ReviewForm
          apartmentId={apartmentId}
          onAddReview={handleAddReview}
        />
      </DialogContent>
    </Dialog>
  );
}
