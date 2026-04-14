import axiosIntance from "@/lib/axios";
import { IAddFormInputEvent } from "@/Types/formData";

export const getAllUser = async () => {
  try {
    const res = await axiosIntance.get("/api/admin/get-all-users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// create an event
export const createEvent = async (data: IAddFormInputEvent) => {
  try {
    const res = await axiosIntance.post("/api/admin/create-event", data);
    console.log("Axios action res.data--> ",res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
