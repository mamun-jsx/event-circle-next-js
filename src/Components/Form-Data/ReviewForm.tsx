"use client";

import { useState } from "react";
import { Star, Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ReviewForm({
  eventId,
  userId,
  token,
}: {
  eventId: string;
  userId: string;
  token: string;
}) {
  const [rating, setRating] = useState(10);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ eventId, userId, rating, comment }),
        },
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Thank you for your review!");
        router.push("/dashboard/my-reviews");
      } else if (res.status === 409) {
        toast.error("You already review this event!");
        router.push("/dashboard/my-reviews");
      } else {
        toast.error(data?.message);
      }
    } catch (err) {
      toast.error("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white border border-gray-100 p-8 rounded-3xl shadow-xl shadow-gray-100/50"
    >
      <div>
        <label className="text-sm font-bold text-gray-700 block mb-3">
          Rate the event
        </label>
        <div className="flex gap-2">
          {[2, 4, 6, 8, 10].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="transition-all transform hover:scale-110 active:scale-95"
            >
              <Star
                className={`w-10 h-10 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-200"
                }`}
              />
            </button>
          ))}
          <span className="ml-4 text-2xl font-black text-gray-300 self-center">
            {rating}/10
          </span>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold text-gray-700 block mb-2">
          Your Experience
        </label>
        <textarea
          required
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What did you like or dislike about this event?"
          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-ec-accent/5 focus:border-ec-accent outline-none transition-all placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ec-accent transition-all disabled:bg-gray-300 shadow-lg shadow-black/5"
      >
        {loading ? (
          <Loader2 className="animate-spin w-5 h-5" />
        ) : (
          <>
            <span>Post Review</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
