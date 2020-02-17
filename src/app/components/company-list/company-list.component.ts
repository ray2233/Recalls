import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CompanynamesService } from '../../services/companynames.service';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companyName: string;
  companies: any[] = [];
  @ViewChild('companytable', {}) companytable: ElementRef;  
  title = 'Company Names Excel';  
  //Export table to Excel//  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.companytable.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'companytable.xlsx');  
  }  

  constructor(private companynamesService: CompanynamesService) { 
    this.companies = this.companies.reduce(
      (results, current) => results.some(company => company === current.companyName) ? results : [...results, current.companyName],
      []
    );
  }

  ngOnInit () {
    this.fetchCompanies();
  }  
    //fetch company names in HTML table//
    private fetchCompanies() {
      this
          .companynamesService
          .fetchCompanies()
          .subscribe((data) => {
              this.companies = data;    
          });
      }
  }