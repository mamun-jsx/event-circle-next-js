import axiosInstance from "@/lib/axios";
import {
  IAuthResponseForLogin,
  ILoginFormInputLogin,
} from "@/Types/fetchDataType";

export const loginUser = async (
  data: ILoginFormInputLogin,
): Promise<IAuthResponseForLogin | undefined> => {
  try {
    const data_response = await axiosInstance.post<IAuthResponseForLogin>(
      "/auth/login",
      data,
    );
    return data_response as unknown as IAuthResponseForLogin;
  } catch (error) {
    console.log(error);
  }
};
