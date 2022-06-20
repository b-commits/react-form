import { Pizza, Sandwich, Soup } from '../../definitions/types';

export default interface FieldInputProps {
  name: keyof Pizza | keyof Soup | keyof Sandwich;
  label: string;
}
