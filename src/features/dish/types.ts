export type Dish = Soup | Pizza | Sandwich;

export interface Soup {
  name: string;
  preparationTime: string;
  type: 'Soup' | '';
  spiciness: string;
}

export interface Pizza {
  name: string;
  preparationTime: string;
  type: 'Pizza' | '';
  numSlices: number;
  diameter: number;
}

export interface Sandwich {
  name: string;
  preparationTime: string;
  type: 'Sandwich' | '';
  numSlices: number;
}
