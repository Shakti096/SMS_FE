import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-portal';
  student_id: number;
  student_name: string;
  student_address: string;
  updated_at: Date;
  student_title :String;
}
