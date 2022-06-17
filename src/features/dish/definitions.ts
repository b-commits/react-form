export type DishType = Pizza | Sandwich | Soup;

export interface Dish {
  name: string;
  preparationTime: number;
  type: DishType;
}

export interface Pizza {
  numSlices: number;
  diameter: number;
}

export interface Sandwich {
  numSlices: number;
}

export interface Soup {
  spiciness: number;
}
