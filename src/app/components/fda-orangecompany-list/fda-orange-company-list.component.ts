import { Component } from '@angular/core';
import { FdaorangelistcompaniesService } from '../../services/fdaorangelistcompanies.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fda-orangecompany-list',
  templateUrl: './fda-orange-company-list.component.html',
  styleUrls: ['./fda-orange-company-list.component.scss']
})

export class FDAOrangeListComponent {
  items: Object;
  searchTerm$ = new Subject<string>();

  constructor(private fdaorangelistcompaniesService: FdaorangelistcompaniesService) {
    
    this.fdaorangelistcompaniesService.search(this.searchTerm$)
      .subscribe(data => {
      this.items = data['items'];
      });
  }
    resetList () {
     this.items = '';
     (<HTMLFormElement>document.getElementById("company_name")).value ='';
     (<HTMLFormElement>document.getElementById("not_found")).style.display = 'none';
   }
}
