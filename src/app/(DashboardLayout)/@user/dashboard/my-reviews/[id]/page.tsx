import UpdateReviewForm from "@/Components/Form-Data/UpdateReviewForm";
import { getAuthUser } from "@/lib/current.auth";

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
  const review = json.data; // Use the data from your API

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Update Review</h1>
      <UpdateReviewForm initialData={review} token={user?.token} />
    </div>
  );
}
