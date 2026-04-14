export enum EventTypeEnum {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}
export interface IAddFormInputEvent {
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: EventTypeEnum;
  registrationFee: number;
  isFeatured: boolean;
  organizer: {
    name: string;
    email: string;
  };
}
