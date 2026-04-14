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
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
}
