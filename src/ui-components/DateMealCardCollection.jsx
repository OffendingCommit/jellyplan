/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from '@aws-amplify/ui-react/internal';
import { DateMeals, Meal, MealComponent, MealTags } from '../models';
import MealCard from './MealCard';
import { Collection } from '@aws-amplify/ui-react';
export default function DateMealCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: 'dateID',
    operand: 'DATE_ID',
    operator: 'eq',
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const mealComponentItems = useDataStoreBinding({
    type: 'collection',
    model: MealComponent,
  }).items;
  const mealTagsItems = useDataStoreBinding({
    type: 'collection',
    model: MealTags,
  }).items;
  const dateMealsItems = useDataStoreBinding({
    type: 'collection',
    model: DateMeals,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: 'collection',
    model: Meal,
    criteria: itemsFilter,
  }).items.map((item) => ({
    ...item,
    MealComponents: mealComponentItems.filter(
      (model) => model.meal === item.id
    ),
    Tags: mealTagsItems.filter((model) => model.meal === item.id),
    DateMeals: dateMealsItems.filter((model) => model.mealID === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, 'DateMealCardCollection')}
    >
      {(item, index) => (
        <MealCard
          meal={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MealCard>
      )}
    </Collection>
  );
}
