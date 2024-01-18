import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExpirationTime() {
  const ONE_HOUR_IN_SECONDS = 3600;

  const date = new Date();
  date.setMilliseconds(ONE_HOUR_IN_SECONDS);
  return date;
}
