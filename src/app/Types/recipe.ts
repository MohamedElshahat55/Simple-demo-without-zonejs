export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  servings: number;
  image: string;
  rating: number;
  cuisine: string;
  mealType: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  tags: string[];
}

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
