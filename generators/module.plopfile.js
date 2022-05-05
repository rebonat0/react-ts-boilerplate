module.exports = function (plop) {
    plop.setGenerator('module', {
      description: 'generates a new module',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Please, enter the module name',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../src/store/{{lowerCase name}}.store.ts',
          templateFile: 'templates/store.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/types/{{lowerCase name}}.types.ts',
          templateFile: 'templates/types.template.ts.hbs',
        },
        {
            type: 'add',
            path: '../src/services/{{lowerCase name}}.service.ts',
            templateFile: 'templates/service.template.ts.hbs',
        },
        {
          type: 'append',
          path: '../src/types/index.ts',
          pattern: new RegExp('// export_types'),
          template: 'export * from \'./{{lowerCase name}}.types\';'
        },
        {
          type: 'append',
          path: '../src/store/index.ts',
          pattern: new RegExp('// import_model'),
          template: 'import { {{lowerCase name}} } from \'./{{lowerCase name}}.store\';'
        },
        {
          type: 'append',
          path: '../src/store/index.ts',
          pattern: new RegExp('// use_model'),
          template: '\xA0\xA0\xA0\xA0{{lowerCase name}},',
        },
        {
          type: 'append',
          path: '../src/store/index.ts',
          pattern: new RegExp('// type_model'),
          template: '\xA0\xA0\xA0\xA0{{lowerCase name}}: typeof {{lowerCase name}},',
        },
      ],
    });
  };
  