import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public todos: string[] = [];

  public todoForm = new FormGroup({
    todo: new FormControl('', Validators.required)
  });

  public onSubmit(): void {
    const newTodo = this.todoForm.value.todo;
    if (newTodo !== '') {
      this.todos.push(newTodo);
      this.todoForm.setValue({
        todo: ''
      });
    }
  }
  removeItem(): void {
    this.removeItem().deleteItem(this.todos);
  }
}
