export const schema = {
  models: {
    Date: {
      name: 'Date',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        date: {
          name: 'date',
          isArray: false,
          type: 'AWSDate',
          isRequired: false,
          attributes: [],
        },
        breakfast: {
          name: 'breakfast',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        lunch: {
          name: 'lunch',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        dinner: {
          name: 'dinner',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Dates',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: 'b4d344a2107891a5b26addebc181d20a',
};
