import {Component, Input, OnInit} from '@angular/core';
import {StudentApiService} from "../services/student-api.service";
import {Student} from "../student";
import {AddressDTO} from "../address";
import {Test} from "../test";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  outputJson: any;
  public student: Student;
  public address: AddressDTO;
  @Input() showAdd: boolean;

  alphaNumeric : string;
  constructor(private studentApiService: StudentApiService) {
    this.alphaNumeric = '^[A-Za-z0-9]+(?:[A-Za-z0-9]+)*$';
  }
  ngOnInit() {
    this.student = new Student();
    this.student.address = new AddressDTO();
    this.student.firstName='';
    this.student.lastName='';
    this.student.email='';
    this.student.address.addressLine1='';
    this.student.address.addressLine2='';
    this.student.address.city='';
    this.student.address.country='';
    this.student.address.postalCode='';
  }


  submitStudentDetails() {


    if (this.student.firstName === '' || !this.student.firstName.match(this.alphaNumeric)) {
      alert('Please enter valid first name ');
    } else if (this.student.lastName === '' || !this.student.lastName.match(this.alphaNumeric)) {
      alert('Please enter valid last name');
    } else if (this.student.address.addressLine1 === '') {
      alert('AddressLine1 can not be empty');
    } else if (this.student.address.city === '' || !this.student.address.city.match(this.alphaNumeric)) {
      alert('Please enter valid city name');
    } else if (this.student.address.country === '' || !this.student.address.country.match(this.alphaNumeric)) {
      alert('Please enter valid country name');
    } else if (this.student.address.postalCode === '' || !this.student.address.postalCode.match(this.alphaNumeric)) {
      alert('Please enter valid postal code');
    } else {
      this.studentApiService.addStudentDetails(this.student).subscribe(response => {
        this.outputJson = response;
      });
      this.showAdd = false;
      window.location.reload();
    }


  }
}
