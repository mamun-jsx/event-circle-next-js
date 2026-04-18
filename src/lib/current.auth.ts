import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  id: string;
  email: string;
  role: string;
};

export const getAuthUser = async () => {
  const token = (await cookies()).get("auth-token")?.value;

  if (!token) {
    return null;
  }

  try {
    const user = jwtDecode<TokenPayload>(token);

    return {
      token,
      id: user.id,
      email: user.email,
      role: user.role,
    };
  } catch (error) {
    return null;
  }
};
