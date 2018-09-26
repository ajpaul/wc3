// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { createMocksInterceptor, createMocks } from '@backbase/foundation-ang/data-http';
import { PortfolioSummaryDataHttpMocksProvider } from '@backbase/data-ang/portfolio-summary';
import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
import { TransactionsDataHttpMocksProvider } from '@backbase/data-ang/transactions';
import { PaymentOrdersDataHttpMocksProvider } from '@backbase/data-ang/payment-orders';
import { ContactDataHttpMocksProvider } from '@backbase/data-ang/contact';
import { TodoDataHttpMocksProvider } from '@backbase/reference-data-http-ang/todo';

export const environment = {
  production: false,
  mockProviders: [
    createMocksInterceptor(), 
    PortfolioSummaryDataHttpMocksProvider,
    ProductSummaryDataHttpMocksProvider,
    TransactionsDataHttpMocksProvider,
    PaymentOrdersDataHttpMocksProvider,
    ContactDataHttpMocksProvider,
    TodoDataHttpMocksProvider
  ],
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
