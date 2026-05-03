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

export interface IReview {
  id: string;
  eventId: string;
  userId: string;
  userName?: string; // Optional if we use nested user
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
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
  reviews?: IReview[]; 
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
}

export type TApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  token?: string;
  url?: string;
};
