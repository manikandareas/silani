export interface Forecast {
   success: boolean;
   message: string | null;
   data: Data;
}

export interface Data {
   issue: Issue;
   areas: Area[];
}

export interface Area {
   id: string;
   latitude: string;
   longitude: string;
   coordinate: string;
   type: string;
   region: string;
   level: string;
   description: string;
   domain: string;
   tags: string;
   params: Param[];
}

export interface Param {
   id: string;
   description: string;
   type: Type;
   times: Time[];
}

export interface Time {
   type: Type;
   h?: string;
   datetime: string;
   value?: string;
   day?: string;
   celcius?: string;
   fahrenheit?: string;
   code?: string;
   name?: string;
   deg?: string;
   card?: string;
   sexa?: string;
   kt?: string;
   mph?: string;
   kph?: string;
   ms?: string;
}

// export enum Type {
//     Daily = "daily",
//     Hourly = "hourly",
// }

type Type = "daily" | "hourly";
export interface Issue {
   timestamp: string;
   year: string;
   month: string;
   day: string;
   hour: string;
   minute: string;
   second: string;
}
