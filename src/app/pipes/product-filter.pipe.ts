import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products, productName): any {
    return productName ? products.filter(product => product.productName === productName) : products;
  }
}
