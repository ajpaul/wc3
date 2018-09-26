import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { TodoDataHttpModule } from '@backbase/reference-data-http-ang/todo';
import { TodoWidgetComponent } from './todo-widget.component';
import { TodoListContainerComponent } from './todo-list-container.component';
import { TodoListComponent, TodoDescriptionCustomizableDirective } from './todo-list.component';
import { TodoDetailContainerComponent } from './todo-detail-container.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    TodoDataHttpModule,
    BackbaseCoreModule.withConfig({
        classMap: { TodoWidgetComponent }
      })
  ],
  declarations: [
    TodoListContainerComponent,
    TodoWidgetComponent,
    TodoListComponent,
    TodoDetailContainerComponent,
    TodoDetailComponent,
    TodoDescriptionCustomizableDirective,
  ],
  providers: [
    TodoService
  ],
  entryComponents: [
    TodoListContainerComponent,
    TodoDetailContainerComponent,
  ],
  exports: [TodoDescriptionCustomizableDirective] // DONT FORGET THIS GUY
})
export class TodoWidgetModule { }