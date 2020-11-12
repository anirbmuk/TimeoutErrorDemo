import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, Subject, throwError, TimeoutError } from 'rxjs';
import { catchError, mergeMap, timeout } from 'rxjs/operators';

import { Dummy } from './data/dummydata.interface';

@Injectable()
export class FetchService {

  private api = 'api/items'; // TODO: Change this to api/item to throw error

  private actionSubject = new Subject();

  public action$ = this.actionSubject.asObservable();

  constructor(private http: HttpClient) {}

  public output$ = this.action$.pipe(
    mergeMap(objectid => {
      let url = this.api;
      if (objectid > 0) {
        url = `${this.api}/${objectid}`;
        return this.http.get<Dummy>(url).pipe(
          timeout(250) // TODO: Comment out timeout to see api in action
        );
      } else {
        return throwError({ body: { error: 'Some other error' } });
      }
    }),
    catchError(e => this.handleError(e))
  );

  public setObjectid(objectid: number): void {
    this.actionSubject.next(objectid);
  }

  private handleError(error: any): Observable<Dummy> {
    if (error instanceof TimeoutError) {
      return of({id: -1, value: 'Timed out!'});
    }
    return of({id: -1, value: error.body.error });
  }

}
