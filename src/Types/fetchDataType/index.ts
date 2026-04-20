import { EventTypeEnum } from "../formData";

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

export interface IEvent {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:mm"
  venue: string;
  type: EventTypeEnum;
  registrationFee: number;
  isFeatured: boolean;
  organizerName: string;
  organizerEmail: string;
  reviews?: any[]; // Keep as any for now or define a proper Review interface
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
}

export type TApiResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
  url?: string;
};

