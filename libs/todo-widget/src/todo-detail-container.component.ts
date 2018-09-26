import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService, TodoItem } from './todo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
  selector: 'bb-todo-detail-container',
  template: `
  <ng-container *ngIf="todo | async as item">
    <bb-todo-detail
      [todo]="item"
    ></bb-todo-detail>
  </ng-container>`,
})
export class TodoDetailContainerComponent implements OnInit, OnDestroy {
  todo: Observable<TodoItem | undefined> = this.todoService.item;
  unsubscribeItemId: any;
  readonly itemId: Observable<string | null> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id'))
  );
  constructor(private todoService: TodoService, private route: ActivatedRoute) {};
 
  ngOnInit() {
    this.unsubscribeItemId = this.itemId.subscribe((id: string | null) => {
      if (id !== null) {
        this.todoService.getItem(id);
      }
    })
  }
 
  ngOnDestroy() {
    this.unsubscribeItemId.unsubscribe();
  }
}