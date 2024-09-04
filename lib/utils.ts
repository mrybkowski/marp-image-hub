import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ImageKey {}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageDatabase: Record<keyof ImageKey, string> = {};
