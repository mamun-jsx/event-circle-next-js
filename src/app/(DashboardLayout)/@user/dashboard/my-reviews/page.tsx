import { getAuthUser } from "@/lib/current.auth";
import { Calendar, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

interface ReviewTable {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  eventId: string;
  event: {
    title: string;
    image?: string;
  };
  createdAt: string;
  updatedAt: string;
}
const MyReviews = async () => {
  const user = await getAuthUser();
  const userId = user?.id;
  const token = user?.token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-review/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

    const data = await res.json();
    const reviews: ReviewTable[] = data?.data || [];

    return (

    <div className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50 border-b border-gray-100">
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Rating
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Comment
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Event
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Date
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {reviews.map((review: ReviewTable) => (
            <tr
              key={review.id}
              className="hover:bg-gray-50/50 transition-colors"
            >
              {/* Event Column */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {review.event?.image ? (
                    <img
                      src={review.event.image}
                      alt={review.event.title}
                      className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {review.event?.title || "Unknown Event"}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {review.eventId.split("-")[0]}...
                    </span>
                  </div>
                </div>
              </td>
              {/* Rating Column */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">
                    {review.rating}
                  </span>
                  <span className="text-gray-400 text-xs">/10</span>
                </div>
              </td>

              {/* Comment Column */}
              <td className="px-6 py-4">
                <div className="flex items-start gap-2 max-w-xs">
                  <MessageSquare className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                  <p className="text-sm text-gray-600 line-clamp-2 italic">
                    "{review.comment}"
                  </p>
                </div>
              </td>


              {/* Date Column */}
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {new Date(review.createdAt).toLocaleDateString("en-GB")}
                </div>
              </td>
              <td className="px-6 py-4">
                <Link href={`/dashboard/my-reviews/${review.id}`}>
                  <button className="px-4 py-2 bg-ec-accent text-white rounded-lg">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {reviews.length === 0 && (
        <div className="py-20 text-center">
          <MessageSquare className="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-400 font-medium">No reviews found.</p>
          <p className="text-xs text-gray-300 mt-1">Visit an event to share your experiences!</p>
        </div>
      )}
    </div>
  );
  
};

export default MyReviews;
