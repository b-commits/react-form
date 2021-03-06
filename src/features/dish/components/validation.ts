import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum ValidationErrors {
  REQUIRED = 'This field is required',
  NAME_LENGTH_EXCEEDED = 'Name is too long',
  NAME_INSUFFICIENT_LENGTH = 'Name is too short',
  INCORRECT_TIME_FORMAT = 'Preparation time has an incorrect format',
  TOO_MANY_SLICES = "You can't have that many slices",
  MUST_BE_A_NUMBER = 'Must be a number',
  INSUFFICIENT_DIAMATER = 'This pizza needs to be bigger',
  DIAMETER_EXCEEDED = "Can't have this large of a pizza",
}

const schema = yup.object({
  name: yup
    .string()
    .required(ValidationErrors.REQUIRED)
    .min(3, ValidationErrors.NAME_INSUFFICIENT_LENGTH)
    .max(20, ValidationErrors.NAME_LENGTH_EXCEEDED),
  preparationTime: yup
    .string()
    .min(8, ValidationErrors.REQUIRED)
    .required(ValidationErrors.REQUIRED),
  type: yup.string().required(ValidationErrors.REQUIRED),
  numBreadSlices: yup
    .number()
    .typeError(ValidationErrors.REQUIRED)
    .min(1, ValidationErrors.REQUIRED)
    .max(100, ValidationErrors.TOO_MANY_SLICES),
  numPizzaSlices: yup
    .number()
    .typeError(ValidationErrors.REQUIRED)
    .min(1, ValidationErrors.REQUIRED)
    .max(100, ValidationErrors.TOO_MANY_SLICES),
  diameter: yup
    .number()
    .typeError(ValidationErrors.REQUIRED)
    .min(12, ValidationErrors.INSUFFICIENT_DIAMATER)
    .max(42.5, ValidationErrors.DIAMETER_EXCEEDED),
});

export const validationSchema = yupResolver(schema);
