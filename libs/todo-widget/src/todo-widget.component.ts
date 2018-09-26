import { Component } from '@angular/core';
import { RoutableWidget, RouterService } from '@backbase/foundation-ang/core';
import { TodoListContainerComponent } from './todo-list-container.component';
import { TodoDetailContainerComponent } from './todo-detail-container.component';
 
@Component({
  selector: 'bb-todo-widget',
  template: '<bb-router-outlet></bb-router-outlet>',
  providers: [RouterService],
})
@RoutableWidget({
  routes: [
    { path: '', redirectTo: 'list', pathMatch: 'prefix' },
    { path: 'list', component: TodoListContainerComponent },
    { path: ':id', component: TodoDetailContainerComponent },
  ],
})
export class TodoWidgetComponent {}