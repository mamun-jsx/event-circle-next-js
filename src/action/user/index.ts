import axiosInstance from "@/lib/axios";
import { IEvent, TApiResponse } from "@/Types/fetchDataType";

// get all events
export const getAllEvents = async (): Promise<TApiResponse<IEvent[]> | undefined> => {
  try {
    const res = await axiosInstance.get("/api/events");
    return res as unknown as TApiResponse<IEvent[]>;
  } catch (error) {
    console.log(error);
  }
};

// get a single event
export const getSingleEvents = async (id: string): Promise<TApiResponse<IEvent> | undefined> => {
  try {
    const res = await axiosInstance.get(`/api/events/${id}`);

    return res as unknown as TApiResponse<IEvent>;
  } catch (error) {
    console.log(error);
  }
};

// get my tickets
export const getMyTickets = async (email: string, token?: string): Promise<TApiResponse<any[]> | undefined> => {
  try {
    const res = await axiosInstance.get(`/api/get-my-ticket/${email}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res as unknown as TApiResponse<any[]>;
  } catch (error) {
    console.log(error);
  }
};
