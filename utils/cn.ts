import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// To implenent a conditional class which can get merged wiuth Tailwind, we should istnall tailwind-mereg and clsx packages.. these two classes hel pup create cn cl;ass
//As a side note by shadcn these are offered to uis and there is no need to create cn utils.
//Tailwind merege superchatges tje tailwind to comiine and blend classses with tailwind native classses
