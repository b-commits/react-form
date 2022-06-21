import { Pizza, Sandwich, Soup } from '../../definitions/types';

export interface TextFieldInputProps {
  name: keyof Pizza | keyof Soup | keyof Sandwich;
  label: string;
}

export type NumberFieldInputProps = TextFieldInputProps & {
  allowDecimal?: boolean;
};

export interface SubmitMessageProps {
  successful: boolean;
  handleSnackbarClosure: any;
}
