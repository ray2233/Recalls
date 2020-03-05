import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FdaorangelistcompaniesService } from '../../services/fdaorangelistcompanies.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-fda-orangecompany-list',
  templateUrl: './fda-orange-company-list.component.html',
  styleUrls: ['./fda-orange-company-list.component.scss']
})
export class FDAOrangeListComponent implements OnInit {
  companyName: string;
  orangecompanies;
  constructor(private fdaorangelistcompaniesService: FdaorangelistcompaniesService) { }

  ngOnInit () {
    this.orangecompanies = this.fdaorangelistcompaniesService.fetchOrangeListCompanies();
  }  
    //fetch company names in HTML table//
    //private fetchOrangeListCompanies() {
      //this
          //.companynamesService
          //.fetchOrangeListCompanies()
          //.subscribe((data) => {
           //   this.orangecompanies = data;    
          //});
     // }

  // showProductNameTextbox(){
  //   const get_showInput = document.getElementById('productName') as HTMLInputElement;
  //       if (get_showInput.checked = true) {
  //           setTimeout(function() {
  //               (<HTMLElement>document.querySelector('#product_name')).style.display = 'block';
  //             }, 500);
  //           setTimeout(function() {
  //               (<HTMLElement>document.querySelector('#free_search')).style.display = 'none';
  //             }, 500);
  //       }
  //       const uncheckradio_freesearch = document.getElementById('freeSearch') as HTMLInputElement;
  //       uncheckradio_freesearch.checked = false;
  //       // (<HTMLFormElement>document.getElementById("free_search")).value ="";
  //   }
  // showFreeSearchTextbox(){
  //   const get_showInput = document.getElementById('freeSearch') as HTMLInputElement;
    
  //       if (get_showInput.checked = true) {
  //           setTimeout(function() {
  //               (<HTMLElement>document.querySelector('#free_search')).style.display = 'block';
  //             }, 500);
  //           setTimeout(function() {
  //               (<HTMLElement>document.querySelector('#product_name')).style.display = 'none';
  //             }, 500);
  //       }
  //       //(<HTMLFormElement>document.querySelector('#product_name')).value = '';
  //       const uncheckradio_product = document.getElementById('productName') as HTMLInputElement;
  //       uncheckradio_product.checked = false;
  //   }  
}
