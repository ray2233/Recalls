import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fdaOrangeCompanyFilter'
})
export class FdaOrangeCompanyPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.companyName.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
  }
}
