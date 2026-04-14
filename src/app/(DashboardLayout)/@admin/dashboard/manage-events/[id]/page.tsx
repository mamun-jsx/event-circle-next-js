import { getSingleEvents } from "@/action/user";
import EditEventForm from "@/Components/Form-Data/EditEventForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

const EditEvents = async ({ params }: PageProps) => {
  const { id } = await params;
  const singleEvent = await getSingleEvents(id);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-black text-gray-900">Edit Event</h1>
        <p className="text-gray-500">
          Modify the details for {singleEvent.title}
        </p>
      </div>

      {/* Pass the server data to the Client Form */}
      <EditEventForm initialData={singleEvent} />
    </div>
  );
};

export default EditEvents;
