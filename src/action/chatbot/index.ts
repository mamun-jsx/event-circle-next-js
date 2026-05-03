import axiosInstance from "@/lib/axios";
import { TApiResponse } from "@/Types/fetchDataType";

export const chatWithAI = async (message: string, history: { role: string; text: string }[]): Promise<TApiResponse<string> | undefined> => {
  try {
    const res = await axiosInstance.post("/api/chatbot", { message, history });
    return res as unknown as TApiResponse<string>;
  } catch (error) {
    console.error("Chatbot Action Error:", error);
  }
};
