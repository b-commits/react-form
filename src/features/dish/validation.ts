import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum DishValidationErrors {
  REQUIRED = 'This field is required',
  PREPARATION_TIME_EXCEEDED = 'Preparation cannot take longer than 15',
  INCORRECT_TIME_FORMAT = 'Preparation time has an incorrect format',
}

const schema = yup.object({
  name: yup.string().required(DishValidationErrors.REQUIRED).min(10),
  preparationTime: yup.string().required(),
});

export const resolvedSchema = yupResolver(schema);
