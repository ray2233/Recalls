import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-fda-orangecompany-list></app-fda-orangecompany-list> 
    <app-company-list></app-company-list> 
    <app-product-list></app-product-list>  
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'active-litigation';
}
