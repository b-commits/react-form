import axios from 'axios';
import { Dish } from '../definitions/types';
import { convertToDTO } from './dtoConverter';

const DISH_ENDPOINT: string = '/dishes';

export const dishApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const postDish = async (dish: Dish): Promise<Dish> => {
  console.log(convertToDTO(dish));
  const response = await dishApi.post(DISH_ENDPOINT, convertToDTO(dish));
  console.log(response);
  return response.data;
};
