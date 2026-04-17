import axiosIntance from "@/lib/axios";
import { Role } from "@/Types/enum/Roles";
import { IRegisterFormInput } from "@/Types/fetchDataType";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface ApiResponse {
  success: boolean;
  message: string;
  token: string;
  data: {
    user: UserData;
    token: string;
  };
}

export const registerUser = async (payload: IRegisterFormInput) => {
  const data_response = await axiosIntance.post<ApiResponse>(
    "/auth/register",
    payload,
  );
  console.log("data_response", data_response);
  return data_response;
  
};
