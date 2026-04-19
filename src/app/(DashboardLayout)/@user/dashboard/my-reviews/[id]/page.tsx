import UpdateReviewForm from "@/Components/Form-Data/UpdateReviewForm";
import { getAuthUser } from "@/lib/current.auth";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UpdateReview({ params }: PageProps) {
  const user = await getAuthUser();
  const { id } = await params; // Correctly awaited for Next.js 15

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    },
  );

  const json = await res.json();
  const review = json.data;

  if (!review) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Review Not Found</h1>
        <p className="text-gray-500 mb-6">We couldn't find the review you're looking for.</p>
        <Link href="/dashboard/my-reviews" className="text-blue-600 hover:underline">
          Go back to my reviews
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Update Review</h1>
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <UpdateReviewForm initialData={review} token={user?.token} />
        </div>
      </div>
    </div>
  );
}
