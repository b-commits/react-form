export type Dish = Soup | Pizza | Sandwich;

export enum DishTypes {
  SOUP = 'soup',
  PIZZA = 'pizza',
  SANDWICH = 'sandwich',
  NOT_SET = '',
}

export interface Soup {
  name: string;
  preparationTime: string;
  type: DishTypes.SOUP | DishTypes.NOT_SET;
  spiciness: number;
}

export interface Pizza {
  name: string;
  preparationTime: string;
  type: DishTypes.PIZZA | DishTypes.NOT_SET;
  numPizzaSlices: number;
  diameter: number;
}

export interface Sandwich {
  name: string;
  preparationTime: string;
  type: DishTypes.SANDWICH | DishTypes.NOT_SET;
  numBreadSlices: number;
  numSlices: number;
}

export interface DTO {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}
