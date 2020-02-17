import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {
  
  transform(companies, companyName): any {
    return companyName ? companies.filter(company => company.companyName === companyName) : companies;
  }
}
