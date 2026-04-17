import axiosInstance from "@/lib/axios";
import axiosIntance from "@/lib/axios";
import { IEvent } from "@/Types/fetchDataType";
import { IAddFormInputEvent } from "@/Types/formData";

export const getAllUser = async () => {
  return await axiosInstance.get("/api/admin/get-all-users");
};

// create an event
export const createEvent = async (data: IAddFormInputEvent) => {
  return await axiosInstance.post("/api/admin/create-event", data);
};

// update events via ID
export const updateEvent = async (id: string, data: IEvent) => {
  return await axiosInstance.put(`/api/admin/update-event/${id}`, data);
};

// delete event via ID
export const deleteEventById = async (id: string) => {
  return await axiosInstance.delete(`/api/admin/delete-event/${id}`);
};
