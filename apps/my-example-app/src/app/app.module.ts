import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContainersModule } from '@backbase/foundation-ang/containers';
import { LoginWidgetModule } from '@backbase/retail-ang/iam';
import { ProductSummaryListWidgetModule } from '@backbase/retail-ang/product-summary';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import { PayordInitiateSepaPaymentWidgetModule } from '@backbase/retail-ang/payment-order';
import { ContactManagerWidgetModule } from '@backbase/retail-ang/contact';
import { ContactDataHttpModule } from '@backbase/data-ang/contact';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { TodoWidgetModule } from '@backbase/todo-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackbaseCoreModule,
    ProductSummaryListWidgetModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ContainersModule,                                                              
    LoginWidgetModule,                                                      
    ProductSummaryListWidgetModule,                                         
    TransactionsListWidgetModule,                                           
    PayordInitiateSepaPaymentWidgetModule,                                  
    ContactManagerWidgetModule,                                             
    ContactDataHttpModule, TodoWidgetModule  
  ],
  providers: [...environment.mockProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
