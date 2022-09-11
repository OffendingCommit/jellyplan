import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DateMealsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

type MealTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealMealComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DateMeals {
  readonly id: string;
  readonly Date: Date;
  readonly mealID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dateMealsDateId: string;
  constructor(init: ModelInit<DateMeals, DateMealsMetaData>);
  static copyOf(source: DateMeals, mutator: (draft: MutableModel<DateMeals, DateMealsMetaData>) => MutableModel<DateMeals, DateMealsMetaData> | void): DateMeals;
}

export declare class Date {
  readonly id: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Date, DateMetaData>);
  static copyOf(source: Date, mutator: (draft: MutableModel<Date, DateMetaData>) => MutableModel<Date, DateMetaData> | void): Date;
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
  readonly meals?: (MealMealComponent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MealComponent, MealComponentMetaData>);
  static copyOf(source: MealComponent, mutator: (draft: MutableModel<MealComponent, MealComponentMetaData>) => MutableModel<MealComponent, MealComponentMetaData> | void): MealComponent;
}

export declare class Meal {
  readonly id: string;
  readonly title: string;
  readonly isNew?: boolean | null;
  readonly hasLeftovers?: boolean | null;
  readonly isTakeOut?: boolean | null;
  readonly isOpenFreeform?: boolean | null;
  readonly isSpecialOccasion?: boolean | null;
  readonly MealComponents?: (MealMealComponent | null)[] | null;
  readonly Recipe?: Recipe | null;
  readonly Preparation?: Preparation | null;
  readonly Tags?: (Tags | null)[] | null;
  readonly DateMeals?: (DateMeals | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mealRecipeId?: string | null;
  readonly mealPreparationId?: string | null;
  constructor(init: ModelInit<Meal, MealMetaData>);
  static copyOf(source: Meal, mutator: (draft: MutableModel<Meal, MealMetaData>) => MutableModel<Meal, MealMetaData> | void): Meal;
}

export declare class MealTags {
  readonly id: string;
  readonly name: string;
  readonly meals?: (Tags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MealTags, MealTagsMetaData>);
  static copyOf(source: MealTags, mutator: (draft: MutableModel<MealTags, MealTagsMetaData>) => MutableModel<MealTags, MealTagsMetaData> | void): MealTags;
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

export declare class Tags {
  readonly id: string;
  readonly meal: Meal;
  readonly mealTags: MealTags;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}