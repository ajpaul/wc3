import { Component, Input, Directive } from '@angular/core';
import { BbTemplate } from '@backbase/foundation-ang/core';

interface TodoItem {
  id: string;
  title: string;
  dueDate: Date;
}

@Component({
  selector: 'bb-todo-list',
  template: `
  <ul class='list-group'>
    <li *ngFor="let todo of todos" class='list-group-item'>
      <ng-container
        bbTodoDescriptionCustomizable
        [bbHostRef]="hostRef"
        [bbTemplateContext]="todo">
      </ng-container>
      <a bbRouterLink="/{{todo.id}}">Edit</a>
    </li>
  </ul>
  <ng-template bbTodoDescriptionCustomizable let-hostRef let-todo="context">
    {{ todo.title }}
  </ng-template>
  `,
})
export class TodoListComponent {
  @Input() todos: Array<TodoItem> = [];
  readonly hostRef = this;
}
@Directive({
  selector: '[bbTodoDescriptionCustomizable]'
})
export class TodoDescriptionCustomizableDirective extends BbTemplate<TodoListComponent, undefined> {}