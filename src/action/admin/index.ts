import axiosIntance from "@/lib/axios";

export const getAllUser = async () => {
  try {
    const res = await axiosIntance.get("/api/admin/get-all-users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
