// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Reaction = {
  "NEUTRAL": "NEUTRAL",
  "LIKE": "LIKE",
  "DISLIKE": "DISLIKE",
  "FAVORITE": "FAVORITE"
};

const { Recipe, Preparation, MealComponent, Meal, Date, MealMealComponent, DateMeal } = initSchema(schema);

export {
  Recipe,
  Preparation,
  MealComponent,
  Meal,
  Date,
  MealMealComponent,
  DateMeal,
  Reaction
};