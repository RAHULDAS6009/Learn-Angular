import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
