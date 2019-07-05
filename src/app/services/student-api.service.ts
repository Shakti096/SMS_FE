import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {StudentsComponent} from "../students/students.component";
import {Student} from "../student"
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http: HttpClient,private router: Router) {
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     return throwError(error);
    };
  }
//test
  addStudentDetails(data : Student): Observable<Student> {
    return this.http.post<Student>("http://localhost:9080/student/create", data).pipe(
      catchError(this.handleError<Student>('addStudentDetails'))
    );

  }
  getAllStudentDetail(): Observable<Student> {
    return this.http.get<Student>("http://localhost:9080/students").pipe(
      catchError(this.handleError<Student>('getAllStudentDetail'))
    );
  }
  //Get all
  updateStudentDetails(data: Student): Observable<Student> {
    return this.http.post<Student>("http://localhost:9080/student/update", data).pipe(
      catchError(this.handleError<Student>('addStudentDetails'))
    );

  }
}
