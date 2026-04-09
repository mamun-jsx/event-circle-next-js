import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}
const EventsDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  console.log(id);

  return <div>Events_ {id} __Details</div>;
};

export default EventsDetails;
