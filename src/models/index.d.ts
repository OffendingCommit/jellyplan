import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Reaction {
  NEUTRAL = "NEUTRAL",
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
  FAVORITE = "FAVORITE"
}



type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PreparationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealMealComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DateMealMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recipe {
  readonly id: string;
  readonly name: string;
  readonly ingredients?: string | null;
  readonly instructions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}

export declare class Preparation {
  readonly id: string;
  readonly type: string;
  readonly duration?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Preparation, PreparationMetaData>);
  static copyOf(source: Preparation, mutator: (draft: MutableModel<Preparation, PreparationMetaData>) => MutableModel<Preparation, PreparationMetaData> | void): Preparation;
}

export declare class MealComponent {
  readonly id: string;
  readonly name: string;
  readonly tags?: string[] | null;
  readonly meals?: (MealMealComponent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MealComponent, MealComponentMetaData>);
  static copyOf(source: MealComponent, mutator: (draft: MutableModel<MealComponent, MealComponentMetaData>) => MutableModel<MealComponent, MealComponentMetaData> | void): MealComponent;
}

export declare class Meal {
  readonly id: string;
  readonly title: string;
  readonly tags?: (string | null)[] | null;
  readonly isNew?: boolean | null;
  readonly hasLeftovers?: boolean | null;
  readonly reaction?: Reaction | keyof typeof Reaction | null;
  readonly isTakeOut?: boolean | null;
  readonly isOpenFreeform?: boolean | null;
  readonly isSpecialOccasion?: boolean | null;
  readonly MealComponents?: (MealMealComponent | null)[] | null;
  readonly dates?: (DateMeal | null)[] | null;
  readonly Recipe?: Recipe | null;
  readonly Preparation?: Preparation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mealRecipeId?: string | null;
  readonly mealPreparationId?: string | null;
  constructor(init: ModelInit<Meal, MealMetaData>);
  static copyOf(source: Meal, mutator: (draft: MutableModel<Meal, MealMetaData>) => MutableModel<Meal, MealMetaData> | void): Meal;
}

export declare class Date {
  readonly id: string;
  readonly date?: string | null;
  readonly Meals?: (DateMeal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Date, DateMetaData>);
  static copyOf(source: Date, mutator: (draft: MutableModel<Date, DateMetaData>) => MutableModel<Date, DateMetaData> | void): Date;
}

export declare class MealMealComponent {
  readonly id: string;
  readonly mealComponent: MealComponent;
  readonly meal: Meal;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MealMealComponent, MealMealComponentMetaData>);
  static copyOf(source: MealMealComponent, mutator: (draft: MutableModel<MealMealComponent, MealMealComponentMetaData>) => MutableModel<MealMealComponent, MealMealComponentMetaData> | void): MealMealComponent;
}

export declare class DateMeal {
  readonly id: string;
  readonly meal: Meal;
  readonly date: Date;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DateMeal, DateMealMetaData>);
  static copyOf(source: DateMeal, mutator: (draft: MutableModel<DateMeal, DateMealMetaData>) => MutableModel<DateMeal, DateMealMetaData> | void): DateMeal;
}