import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/*A Subject in RxJS is a special type of Observable that allows values to be multicasted 
(i.e., multiple subscribers receive the same data). 
It acts as both an Observable and an Observer. */

/*
1. Why Use a Subject?
Unlike a normal Observable, a Subject allows multiple subscribers to receive the same data.

It can emit values manually using .next().

Used for cross-component communication in Angular.
 */

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
