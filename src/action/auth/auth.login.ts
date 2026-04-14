import axiosIntance from "@/lib/axios";
import {
  IAuthResponseForLogin,
  ILoginFormInputLogin,
} from "@/Types/fetchDataType";

export const loginUser = async (data: ILoginFormInputLogin) => {
  try {
    const data_response = await axiosIntance.post<IAuthResponseForLogin, IAuthResponseForLogin>(
      "/auth/login",
      data,
    );
    return data_response;
  } catch (error) {
    console.log(error);
  }
};
