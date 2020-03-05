import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FdaorangelistcompaniesService {

  private servUrl = "http://localhost:3000/orangecompanies";
  
  constructor(private http: HttpClient) { }  
      
  fetchOrangeListCompanies() {
    return this.http.get(this.servUrl);
  }
}
