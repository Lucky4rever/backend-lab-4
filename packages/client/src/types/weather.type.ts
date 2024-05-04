import { Icon } from "./icon.type";

type Weather = {
  city: string;
  overall: string; 
  iconType: Icon;
  icon: string;
  pressure: number; 
  temperature: number;
  humidity: number;
};

export type { Weather };
