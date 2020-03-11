import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, take } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fda-orangecompany-list',
  templateUrl: './fda-orange-company-list.component.html',
  styleUrls: ['./fda-orange-company-list.component.scss']
})

export class FDAOrangeListComponent implements OnInit  {
  companyName;
  recalls;
  warningletters;
  item;
  items: any= [];

  constructor(private http: HttpClient) { 
    this.recalls = [];
    this.warningletters = [];
    this.companyName= 'XXX';
  }

  ngOnInit() {
    this.getRecalls();
  }

  getRecalls() {
    this.http.get('http://www.mocky.io/v2/5e6936ff2f00001ef4d8b331/items?field_company_name=nestle-purina-petcare').pipe(
      map( items => {
        const item = items[0];
        this.companyName = item.field_company_name;
        return item;
      }),
      mergeMap( item => {
        const recalls = this.http.get(`https://www.fda.gov/files/api/datatables/static/recalls-market-withdrawals.json?_=1583262918764?companyName=${item.field_company_name}`);
        const warningletters = this.http.get(`https://www.fda.gov/files/api/datatables/static/warning-letters.json?_=1583261915747?companyName=${item.field_company_name}`);

        return forkJoin([recalls, warningletters, of(item)]);
      }),
      take(1)
    ).subscribe( result => {
        this.recalls = result[0];
        this.warningletters = result[1];
        this.item = result[2]
    });
  }
}
