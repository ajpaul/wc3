import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
 
import {
  TodoItems,
  TodoItem as TodoDataItem,
  TodoDataHttpService,
} from '@backbase/reference-data-http-ang/todo';
 
export interface TodoItem {
  id: string;
  title: string;
  dueDate: Date;
}
 
@Injectable()
export class TodoService {
  private readonly id = new ReplaySubject<string>();
 
  constructor(private readonly data: TodoDataHttpService) {}
 
  readonly items: Observable<Array<TodoItem>> = this.data.getTodos()
    .pipe(map((response: HttpResponse<TodoItems>): Array<TodoItem> => {
      return response.body
        ? response.body.map(itemFromData)
        : [];
    }));
 
  readonly item: Observable<TodoItem | undefined> =
    this.id.pipe(
      switchMap((id: string) =>
        this.data.getTodosRecordByTodoId(id).pipe(
          map((response: HttpResponse<TodoDataItem>): TodoItem | undefined => {
            return response.body
              ? itemFromData(response.body)
              : undefined;
          })
        )
      )
    );
 
  getItem(id: string) {
    this.id.next(id);
  }
}
 
function itemFromData(record: TodoDataItem): TodoItem {
  return {
    id: record.id,
    title: record.value.title,
    dueDate: new Date(record.value.dueDate),
  };
}