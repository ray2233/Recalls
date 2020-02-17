//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: './components/header/header.component', component: HeaderComponent },
  { path: './components/footer/footer.component', component: FooterComponent },
  { path: './components/header/header.component', component: CompanyListComponent },
  { path: './components/product-list/product-list.component', component: ProductListComponent },
  { path: './app.component', component: AppComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });
export class AppRoutingModule { }
