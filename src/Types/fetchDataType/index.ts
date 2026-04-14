export interface ILoginFormInputLogin {
  email: string;
  password: string;
}

export interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
}

// types/auth.ts
export interface IAuthResponseForLogin {
  success: boolean;
  message: string;
  token: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}
