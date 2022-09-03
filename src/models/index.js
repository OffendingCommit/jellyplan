// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Date } = initSchema(schema);

export {
  Date
};