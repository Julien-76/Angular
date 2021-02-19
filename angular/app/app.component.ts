import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TODO_FORM_CREATE } from 'src/app/forms/todo.form';
import { Todo } from 'src/app/models/todo.model';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoFormCreate = new FormGroup(TODO_FORM_CREATE);
  todoes: Array<Todo> = [];

  handleSubmit() {
    if (this.todoFormCreate.valid) {
      const value = this.todoFormCreate.value;
      if (value.id) {
        const todo = this.todoes.find(t => t.id == value.id);
        todo.title = value.title;
        todo.description = value.description;
        todo.dueDate = moment(value.dueDate).toDate();
      } else {
        
        this.todoes.push(new Todo(new Date(value.dueDate), {title: value.title, description: value.description}));
      }
    }

    
    this.todoFormCreate.patchValue({id: null, title: null, description: null, dueDate: moment().format("YYYY-MM-DD")});
    this.todoFormCreate.get('title').markAsPristine();
  }

  editAction(todo: Todo) {
    const dueDate = moment(todo.dueDate).format("YYYY-MM-DD");
    this.todoFormCreate.patchValue({id: todo.id, title: todo.title, description: todo.description, dueDate});
  }
}
