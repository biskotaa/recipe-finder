
export interface IRecipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  url?: string;
}

export interface IRecipeResponse {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  url?: string;
}
