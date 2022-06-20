import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum DishValidationErrors {
  REQUIRED = 'This field is required',
  NAME_LENGTH_EXCEEDED = 'Name cannot be longer than 10',
  PREPARATION_TIME_EXCEEDED = 'Preparation cannot take longer than 15',
  INCORRECT_TIME_FORMAT = 'Preparation time has an incorrect format',
}

const schema = yup.object({
  name: yup
    .string()
    .required(DishValidationErrors.REQUIRED)
    .min(10, DishValidationErrors.NAME_LENGTH_EXCEEDED),
  preparationTime: yup.string().required(DishValidationErrors.REQUIRED),
  type: yup.string().required(DishValidationErrors.REQUIRED),
});

export const validationSchema = yupResolver(schema);
