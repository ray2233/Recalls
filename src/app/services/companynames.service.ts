import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanynamesService {
  
  private servUrl = "https://www.fda.gov/files/api/datatables/static/warning-letters.json?_=1583261915747";
  
  constructor(private http: HttpClient) { }  
      
  fetchCompanies() {
    return this.http.get(this.servUrl);
  }
}
