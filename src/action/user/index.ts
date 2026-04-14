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
