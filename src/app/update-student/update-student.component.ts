import {Component, Input, OnInit} from '@angular/core';
import {StudentApiService} from "../services/student-api.service";
import {Student} from "../student";
import {AddressDTO} from "../address";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  outputJsonUpate: any;
  @Input() outputJson: any;
  @Input() student: Student;
  @Input() showUpdate: boolean;
  studentForm: FormGroup;
  alphaNumeric : string;
  constructor(private studentApiService: StudentApiService, private formBuilder: FormBuilder) {
    this.alphaNumeric = '^[A-Za-z0-9]+(?:[A-Za-z0-9]+)*$';
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.studentForm = this.formBuilder.group({
        studentId: [this.student.studentId],
        firstName: [this.student.firstName],
        lastName: [this.student.lastName],
        email: [this.student.email],
        addressLine1: [this.student.address.addressLine1],
        addressLine2: [this.student.address.addressLine2],
        city: [this.student.address.city],
        country: [this.student.address.country],
        postalCode: [this.student.address.postalCode]
      }
    );

    console.log('studentForm ', this.studentForm);
  }

  updateStudentDetails() {
    console.log('updateStudentDetails', this.studentForm.controls['firstName'].value);

    this.student.studentId = this.studentForm.controls['studentId'].value;
    this.student.firstName = this.studentForm.controls['firstName'].value;
    this.student.lastName = this.studentForm.controls['lastName'].value;
    this.student.email = this.studentForm.controls['email'].value;
    this.student.address.addressLine1 = this.studentForm.controls['addressLine1'].value;
    this.student.address.addressLine2 = this.studentForm.controls['addressLine2'].value;
    this.student.address.city = this.studentForm.controls['city'].value;
    this.student.address.country = this.studentForm.controls['country'].value;
    this.student.address.postalCode = this.studentForm.controls['postalCode'].value;

    this.submitFormWithValidation();

  }

  submitFormWithValidation() {
    if (this.student.firstName === '' || !this.student.firstName.match(this.alphaNumeric)) {
      alert('Please enter valid first name ');
    } else if (this.student.lastName === '' || !this.student.lastName.match(this.alphaNumeric)) {
      alert('Please enter valid last name');
    } else if (this.student.address.addressLine1==='') {
      alert('AddressLine1 can not be empty');
    } else if (this.student.address.city==='' || !this.student.address.city.match(this.alphaNumeric)) {
      alert('Please enter valid city name');
    } else if (this.student.address.country==='' || !this.student.address.country.match(this.alphaNumeric)) {
      alert('Please enter valid country name');
    } else if (this.student.address.postalCode==='' || !this.student.address.postalCode.match(this.alphaNumeric)) {
      alert('Please enter valid postal code');
    } else {
      this.studentApiService.updateStudentDetails(this.student).subscribe(response => {
        this.outputJsonUpate = response;
        console.log('studentApiService response', this.outputJsonUpate)
      });
      this.showUpdate = false;
      window.location.reload();
    }
  }
}
