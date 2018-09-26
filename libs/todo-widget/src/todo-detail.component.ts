import { Component, Input } from '@angular/core';
 
export interface TodoItem {
  title: string;
}
 
@Component({
  selector: 'bb-todo-detail',
  template: `
  <ng-container *ngIf="todo">
    {{ todo.title }}
  </ng-container>`,
})
export class TodoDetailComponent {
  @Input() todo: TodoItem | undefined;
}