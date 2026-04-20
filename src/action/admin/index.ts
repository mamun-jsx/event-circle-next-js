import axiosInstance from "@/lib/axios";
import { IEvent, TApiResponse } from "@/Types/fetchDataType";
import { IAddFormInputEvent } from "@/Types/formData";

export const getAllUser = async () => {
  return await axiosInstance.get("/api/admin/get-all-users");
};

// create an event
export const createEvent = async (data: IAddFormInputEvent): Promise<TApiResponse<IEvent>> => {
  return (await axiosInstance.post("/api/admin/create-event", data)) as unknown as TApiResponse<IEvent>;
};

// update events via ID
export const updateEvent = async (id: string, data: IEvent): Promise<TApiResponse<IEvent>> => {
  return (await axiosInstance.put(`/api/admin/update-event/${id}`, data)) as unknown as TApiResponse<IEvent>;
};

// delete event via ID
export const deleteEventById = async (id: string): Promise<TApiResponse> => {
  return (await axiosInstance.delete(`/api/admin/delete-event/${id}`)) as unknown as TApiResponse;
};

