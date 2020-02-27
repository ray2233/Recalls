import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CompanyFilterPipe } from './pipes/company-filter.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { freeSearchFilterPipe } from './pipes/freesearch-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FDAOrangeListComponent } from './components/fda-orangecompany-list/fda-orange-company-list.component';
import { FdaOrangeCompanyPipe } from './pipes/fda-orange-company.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent, 
    CompanyListComponent,
    freeSearchFilterPipe,
    CompanyFilterPipe,
    ProductFilterPipe,
    FDAOrangeListComponent,
    FdaOrangeCompanyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutes, 
    HttpClientModule
  ],
  providers: [],
  exports: [
  freeSearchFilterPipe,
  CompanyFilterPipe,
  ProductFilterPipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
