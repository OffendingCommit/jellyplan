/* eslint-disable no-param-reassign */
import { DataStore } from 'aws-amplify';
import { Date } from './models/index';

export async function getDateService(date) {
  return DataStore.query(Date, (d) => d.date('eq', date.toISODate()));
}

export async function updateBreakfast({ id, breakfast }) {
  const original = await DataStore.query(Date, id);
  await DataStore.save(
    Date.copyOf(original, (updated) => {
      updated.breakfast = breakfast;
    })
  );
}

export async function updateLunch({ id, lunch }) {
  const original = await DataStore.query(Date, id);
  await DataStore.save(
    Date.copyOf(original, (updated) => {
      updated.lunch = lunch;
    })
  );
}

export async function updateDinner({ id, dinner }) {
  const original = await DataStore.query(Date, id);
  await DataStore.save(
    Date.copyOf(original, (updated) => {
      updated.dinner = dinner;
    })
  );
}

export async function updateAllMeals({ id, breakfast, lunch, dinner }) {
  const original = await DataStore.query(Date, id);
  await DataStore.save(
    Date.copyOf(original, (updated) => {
      updated.breakfast = breakfast;
      updated.lunch = lunch;
      updated.dinner = dinner;
    })
  );
}
