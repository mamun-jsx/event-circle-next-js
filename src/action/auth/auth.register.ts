import axiosInstance from "@/lib/axios";
import { Role } from "@/Types/enum/Roles";
import { IRegisterFormInput, TApiResponse } from "@/Types/fetchDataType";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface ApiResponse extends TApiResponse {
  token: string;
  data: {
    user: UserData;
    token: string;
    email: string;
  };
}

export const registerUser = async (payload: IRegisterFormInput): Promise<ApiResponse> => {
  const data_response = await axiosInstance.post<ApiResponse>(
    "/auth/register",
    payload,
  );
  return data_response as unknown as ApiResponse;
};
