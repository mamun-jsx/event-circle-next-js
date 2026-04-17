import axiosIntance from "@/lib/axios";

// get all events
export const getAllEvents = async () => {
  try {
    const res = await axiosIntance.get("/api/events");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// get a single event
export const getSingleEvents = async (id: string) => {
  try {
    const res = await axiosIntance.get(`/api/events/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// buy ticket
export const buySingleTicket = async (payload: any) => {
  const res = await axiosIntance.post("/api/buy-ticket", payload);

  return res;
};

