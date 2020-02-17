import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productName: string;
  products: any[] = [];
  @ViewChild('producttable', {}) producttable: ElementRef;  
  title = 'Product Names Excel';  
  //Export table to Excel//  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.producttable.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'producttable.xlsx');  
  }  

constructor(private productService: ProductService) { 
  this.products = this.products.reduce(
    (results, current) => results.some(product => product === current.productName) ? results : [...results, current.productName],
    []
  );
}

ngOnInit () {
  this.fetchProducts();
  }
  
  //fetch product names in HTML table//
  private fetchProducts() {
    this
        .productService
        .fetchProducts()
        .subscribe((data) => {
            this.products = data;    
        });
    }
  resetProductsDropdown() {
    var DropdownList = (document.getElementById("product_name")) as HTMLSelectElement;
    var SelectedIndex = DropdownList.selectedIndex = 0;
    this.productName = ''; //reset Products dropdown filter//
    }     
}