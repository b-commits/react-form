import { Dish } from '../types';

export interface FieldInputProps {
  name: keyof Dish;
  label: string;
}
