export enum DAYS {
  "monday",
  "tuesday",
  "wednessday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
}

export enum PERIODS {
  AM = "AM",
  PM = "PM",
}

export interface ITime {
  hours: number;
  minutes: number;
  period: keyof typeof PERIODS;
}

export interface IStoreTime {
  isClosed: boolean;
  opensAt: ITime;
  closesAt: ITime;
}

export interface IStore {
  _id: string;
  name: string;
  address: string;
  phoneNumber: number;
  email: string;
  timing: {
    monday: IStoreTime;
    tuesday: IStoreTime;
    wednessday: IStoreTime;
    thursday: IStoreTime;
    friday: IStoreTime;
    saturday: IStoreTime;
    sunday: IStoreTime;
  };
  description: string;
}

export interface IStoreManyResponse {
  success: boolean;
  message: string;
  data: IStore[];
}

export interface IStoreOneResponse {
  success: boolean;
  message: string;
  data: IStore;
}
