import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  private servUrl = "http://localhost:3000/products";
  
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any> {
    return this.http.get(this.servUrl);
  }
}