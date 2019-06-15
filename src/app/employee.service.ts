import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private _url: string = "http://localhost:3000/employees/";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(
      retry(3),
      catchError(error => {
        if(error.status == 404){
          return throwError('page not found');
        }
        else if(error.status == 500 || 502 || 503 || 504 ){
          return throwError('you are unauthorized or forbidden');
        }
        else{
          return throwError('something went wrong');
        }
      })

    );
  }
  getEmployeeById(id: number): Observable <IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url + id).pipe(
      retry(3),
      catchError(error => {
        if(error.status == 404){
          return throwError('page not found');
        }
        else if(error.status == 401 || 403 ){
          return throwError('you are unauthorized or forbidden');
        }
        else{
          return throwError('something went wrong');
        }
      })

    );
  }
  

  //error handling 2 option client and server side or by status code
  // private handleError(ex: HttpErrorResponse){
  //   if(ex.error instanceof ErrorEvent){
  //     console.log('client side error', ex.error.message);
  //   }
  //   else {
  //     console.log('server side error', ex.error.message);
  //   }
  //  return throwError ('something went wrong');
  // }
 
}