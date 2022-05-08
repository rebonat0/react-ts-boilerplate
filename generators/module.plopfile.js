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
        {
          type: 'add',
          path: '../src/types/{{lowerCase name}}.types.ts',
          templateFile: 'templates/types.template.ts.hbs',
        },
        {
          type: 'append',
          path: '../src/types/index.ts',
          pattern: new RegExp('// export_types'),
          template: 'export * from \'./{{lowerCase name}}.types\';'
        },
        {
          type: 'add',
          path: '../src/services/{{lowerCase name}}.service.ts',
          templateFile: 'templates/service.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/lists/{{lowerCase name}}-list/index.tsx',
          templateFile: 'templates/list.component.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/forms/{{lowerCase name}}-form/index.tsx',
          templateFile: 'templates/form.component.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/pages/app/{{lowerCase name}}/{{lowerCase name}}-create.screen.tsx',
          templateFile: 'templates/create.module.page.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/pages/app/{{lowerCase name}}/{{lowerCase name}}-edit.screen.tsx',
          templateFile: 'templates/edit.module.page.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/pages/app/{{lowerCase name}}/{{lowerCase name}}-list.screen.tsx',
          templateFile: 'templates/list.module.page.template.ts.hbs',
        },
        {
          type: 'append',
          path: '../src/routes/index.tsx',
          pattern: new RegExp('// import_screen'),
          template: `
          import { {{pascalCase name}}ListScreen } from \'../pages/app/{{lowerCase name}}/{{lowerCase name}}-list.screen\';
          import { {{pascalCase name}}EditScreen } from \'../pages/app/{{lowerCase name}}/{{lowerCase name}}-edit.screen\';
          import { {{pascalCase name}}CreateScreen } from \'../pages/app/{{lowerCase name}}/{{lowerCase name}}-create.screen\';
          `,
        },
        {
          type: 'append',
          path: '../src/routes/index.tsx',
          pattern: new RegExp('// use_screen'),
          template: `
            { path: 'app/{{lowerCase name}}', element: <{{pascalCase name}}ListScreen />},
            { path: 'app/{{lowerCase name}}/:id/update', element: <{{pascalCase name}}EditScreen />},
            { path: 'app/{{lowerCase name}}/new', element: <{{pascalCase name}}CreateScreen />},
          `,
        },
        {
          type: 'append',
          path: '../src/layout/dashboard/sidebar-config.tsx',
          pattern: new RegExp('// declare_menu_module'),
          template: `
            {
              title: '{{pascalCase name}}',
              path: '/app/{{lowerCase name}}',
              icon: getIcon(gridFill),
            },
          `,
        },
      ],
    });
  };
  