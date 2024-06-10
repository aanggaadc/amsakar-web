import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^08[0-9]{8,12}$/;
  return regex.test(phoneNumber);
};
