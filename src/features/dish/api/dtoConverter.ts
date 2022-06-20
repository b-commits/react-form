import { Dish, DishTypes, DTO } from '../definitions/types';
import { SPICINESS_DEFAULT_VALUE } from '../utils/ColorScale';

export const convertToDTO = (dish: Dish) => {
  let dto: DTO = {
    name: dish.name,
    preparation_time: dish.preparationTime,
    type: dish.type,
  };

  if (dish.type === DishTypes.PIZZA) {
    dto.no_of_slices = dish.numPizzaSlices;
    dto.diameter = dish.diameter;
  }

  if (dish.type === DishTypes.SOUP) {
    dto.spiciness_scale = dish.spiciness
      ? dish.spiciness
      : SPICINESS_DEFAULT_VALUE;
  }

  if (dish.type === DishTypes.SANDWICH) {
    dto.slices_of_bread = dish.numBreadSlices;
  }
  return dto;
};
