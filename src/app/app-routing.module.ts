import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from "./add-student/add-student.component";
import {StudentsComponent} from "./students/students.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    data: { title: 'Students Details' }
  },
  {
    path: 'students/add',
    component: AddStudentComponent,
    data: { title: 'Add Product' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
