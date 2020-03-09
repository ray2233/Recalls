import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FdaorangelistcompaniesService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
          .pipe(map((res: Response) => res),
            catchError(error => throwError(error.message || error))
    );
  }
}
