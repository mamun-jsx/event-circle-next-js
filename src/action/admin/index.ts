import axiosIntance from "@/lib/axios";
import { IEvent } from "@/Types/fetchDataType";
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
    console.log("Axios action res.data--> ", res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// update events via ID

export const updateEvent = async (id: string, data: IEvent) => {
  try {
    const response = await axiosIntance.put(
      `/api/admin/update-event/${id}`,
      data,
    );
    console.log("Axios action res.data--> ", response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// delete event via ID
export const deleteEventById = async (id: string) => {
  try {
    const res = await axiosIntance.delete(`/api/admin/delete-event/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
