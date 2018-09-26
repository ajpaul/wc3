import { Component } from '@angular/core';
import { TodoService, TodoItem } from './todo.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'bb-todo-list-container',
  template: `
  <bb-todo-list
    [todos]="todos | async"
  ></bb-todo-list>`,
})
export class TodoListContainerComponent {
  todos: Observable<Array<TodoItem>>;
  constructor(private todoService: TodoService) {
    this.todos = todoService.items;
  }
}