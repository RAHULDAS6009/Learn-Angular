import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
let id=10;
@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  text?: string;
  day?: string;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text && !this.reminder) {
      alert('Input all the feilds ');
      return;
    }

    const newTask:Task = {
      text: this.text!,
      day: this.day!,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
