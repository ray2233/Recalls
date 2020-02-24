import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanynamesService {
  
  private servUrl = "http://localhost:4000/companies";
  
  constructor(private http: HttpClient) { }  
      
  fetchCompanies(): Observable<any> {
    return this.http.get(this.servUrl);
  }
}
