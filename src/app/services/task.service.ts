import { Injectable } from '@angular/core';
import { Task } from '../Task';
// import { Tasks } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  // observables are like promises
  /*Observables are a powerful asynchronous programming concept used in Angular for handling events, HTTP requests
   real-time data streams, and more. 
  They are a core part of RxJS (Reactive Extensions for JavaScript). */

  getTasks(): Observable<Task[]> {
    // 'of' --->  'convert Values into observables type to resolve it with .subscribe'
    // const tasks = of(Tasks);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task,httpOptions);
  } 
}
