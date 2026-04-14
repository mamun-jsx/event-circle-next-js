import axiosIntance from "@/lib/axios";
import { IRegisterFormInput } from "@/Types/fetchDataType";

export const registerUser = async (payload: IRegisterFormInput) => {
  try {
    const data_response = await axiosIntance.post("/auth/register", payload);
    return data_response as any;
    
  } catch (error) {
    console.log(error);
  }
};
