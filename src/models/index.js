// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DateMeals, Date, Recipe, Preparation, MealComponent, Meal, MealTags, MealMealComponent, Tags } = initSchema(schema);

export {
  DateMeals,
  Date,
  Recipe,
  Preparation,
  MealComponent,
  Meal,
  MealTags,
  MealMealComponent,
  Tags
};