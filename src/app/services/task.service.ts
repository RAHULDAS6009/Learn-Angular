import { Injectable } from '@angular/core';
import { Task } from '../Task';
// import { Tasks } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
   apiUrl:string="http://localhost:5000/tasks"
  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {  
    // const tasks = of(Tasks);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);
  }
}
