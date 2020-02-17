# Homestellar

## Description

The application uses the GraphQL server at https://demo.astrograph.io/graphql

It provides three simple views:

- A live list of the 50 most recent transactions (payments), most recent at the top;
- A live summary of the assets involved in the transactions, with total transactions and amount for each asset, sorted in descending order of number of transactions;
- Clicking on the assets list, a panel at the bottom loads the details of the selected asset.

Account IDs link to their summary page on https://stellarscan.io/account/, and the asset domain, if present, is also clickable.

The view is responsive.

The app components are unit tested.

### Some Issues: 

The service errors out randomly, it seems to be a schema issue; I am not showing these errors in the UI but logging and suppressing them.

For some reason, the subscription lags behind the real time.

The amounts exchanged, at least for some assets, seem to be expressed in micro units.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

