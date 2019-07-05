import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentApiService} from "../services/student-api.service";
import {Student} from "../student";
import {AddressDTO} from "../address";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() student: Student;
  @Input() address :AddressDTO;
  outputJson: any;
  @Input() showAdd : boolean;
  @Input() showUpdate : boolean;
  constructor(private router: Router, private studentApiService: StudentApiService) {
    this.showAdd = false;
    this.showUpdate = false;
    this.student = new Student();
    this.student.address = new AddressDTO();
  }

  showAddScreen() {
    this.showAdd = true;
    this.student = new Student();
  }
  showUpdateScreen(dataStudents) {

    this.student = new Student();
    this.student.address = new AddressDTO();
    this.showUpdate = true;
    this.student.studentId=dataStudents.studentId;
    this.student.email=dataStudents.email;
    this.student.firstName=dataStudents.firstName;
    this.student.lastName=dataStudents.lastName;
    this.student.address=dataStudents.address;
  }
  ngOnInit() {
      this.studentApiService.getAllStudentDetail().subscribe(response => {
      this.outputJson = response;
      console.log('studentApiService', this.outputJson);
  });
  }

}
