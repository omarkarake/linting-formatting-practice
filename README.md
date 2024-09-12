# LintingFormattingPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Documenting eslint errors:

PS C:\Users\Amalitech\Desktop\Learning material\linting-formatting-practice> npm run lint

> linting-formatting-practice@0.0.0 lint
> ng lint

Linting "linting-formatting-practice"...

C:\Users\Amalitech\Desktop\Learning material\linting-formatting-practice\src\app\app.component.ts
20:3 warning Lifecycle interface 'OnInit' should be implemented for method 'ngOnInit'. (https://angular.io/styleguide#style-09-01) @angular-eslint/use-lifecycle-interface
21:9 error 'x' is never reassigned. Use 'const' instead prefer-const

✖ 2 problems (1 error, 1 warning)
1 error and 1 warning potentially fixable with the `--fix` option.

Lint warnings found in the listed files.

Lint errors found in the listed files.

## Documenting the eslint erros fixed:

PS C:\Users\Amalitech\Desktop\Learning material\linting-formatting-practice> npm run lint

> linting-formatting-practice@0.0.0 lint
> ng lint

Linting "linting-formatting-practice"...

All files pass linting.

PS C:\Users\Amalitech\Desktop\Learning material\linting-formatting-practice>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
