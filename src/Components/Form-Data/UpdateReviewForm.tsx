"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ReviewData {
  id: string;
  rating: number;
  comment: string;
}

// Remove "async" from the function definition
export default function UpdateReviewForm({
  initialData,
  token,
}: {
  initialData: ReviewData;
  token?: string;
}) {
  const [rating, setRating] = useState(initialData?.rating || 5);
  const [comment, setComment] = useState(initialData?.comment || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (rating > 10 || rating < 1) {
      toast.error("Rating must be between 1 and 10");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/${initialData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ rating, comment }),
        },
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(data.message || "Review updated!");
        router.push("/dashboard/my-reviews");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm font-medium">Rating (1-10)</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full rounded h-32"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`p-2 rounded text-white transition-colors ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-black cursor-pointer"
        }`}
      >
        {loading ? "Updating..." : "Update Review"}
      </button>
    </form>
  );
}
