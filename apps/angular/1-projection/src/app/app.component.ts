import { Component } from '@angular/core';
import { TeacherCardComponent } from './component/teacher-card/teacher-card.component';
import { StudentCardComponent } from './component/student-card/student-card.component';
import { CityCardComponent } from './component/city-card/city-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    TeacherCardComponent,
    StudentCardComponent,
    CityCardComponent
  ]
})
export class AppComponent {}
