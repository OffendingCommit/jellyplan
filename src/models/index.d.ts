import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Date {
  readonly id: string;
  readonly date?: string | null;
  readonly breakfast?: string | null;
  readonly lunch?: string | null;
  readonly dinner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Date, DateMetaData>);
  static copyOf(source: Date, mutator: (draft: MutableModel<Date, DateMetaData>) => MutableModel<Date, DateMetaData> | void): Date;
}