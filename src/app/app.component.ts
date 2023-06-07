import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = true;
  title = 'myapp';
  users: any[] = [
    { id: 101, name: 'raju', city: 'hyd', salary: 220000 },
    { id: 101, name: 'raju', city: 'hyd', salary: 220000 },
    { id: 101, name: 'raju', city: 'hyd', salary: 220000 },
    { id: 101, name: 'raju', city: 'hyd', salary: 220000 },
    { id: 101, name: 'raju', city: 'hyd', salary: 220000 },
  ];
}
