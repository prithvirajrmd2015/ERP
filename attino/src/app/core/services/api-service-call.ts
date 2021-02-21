// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJs
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from './config';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ApiHttpService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}

  public get = (url: string, options?: any): Observable<any> =>
    this.http.get(BASE_URL + url, options).pipe(
      retry(1),
      catchError(this.handleError)
    );;

  public post = (url: string, data: any, options?: any): Observable<any> =>
    this.http.post(BASE_URL + url, data, options);

  public put = (url: string, data: any, options?: any): Observable<any> =>
    this.http.put(BASE_URL + url, data, options);

  public delete = (url: string, options?: any): Observable<any> =>
    this.http.delete(BASE_URL + url, options);

    handleError(error:any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
