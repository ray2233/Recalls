import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
form: FormGroup;
products: any[] = [];

constructor(private productService: ProductService, private fb: FormBuilder) { 
  this.products = new Array<any>();
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
    showProductNameTextbox(){
      const get_showInput = document.getElementById('productName') as HTMLInputElement;
          if (get_showInput.checked = true) {
              setTimeout(function() {
                  (<HTMLElement>document.querySelector('#product_name')).style.display = 'block';
                }, 500);
              setTimeout(function() {
                  (<HTMLElement>document.querySelector('#free_search')).style.display = 'none';
                }, 500);
          }
          const uncheckradio_freesearch = document.getElementById('freeSearch') as HTMLInputElement;
          uncheckradio_freesearch.checked = false;
          // (<HTMLFormElement>document.getElementById("free_search")).value ="";
      }
    showFreeSearchTextbox(){
      const get_showInput = document.getElementById('freeSearch') as HTMLInputElement;
      
          if (get_showInput.checked = true) {
              setTimeout(function() {
                  (<HTMLElement>document.querySelector('#free_search')).style.display = 'block';
                }, 500);
              setTimeout(function() {
                  (<HTMLElement>document.querySelector('#product_name')).style.display = 'none';
                }, 500);
          }
          //(<HTMLFormElement>document.querySelector('#product_name')).value = '';
          const uncheckradio_product = document.getElementById('productName') as HTMLInputElement;
          uncheckradio_product.checked = false;
  
      }

}