import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CompanyFilterPipe } from './pipes/company-filter.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent, 
    CompanyListComponent,
    FilterPipe,
    CompanyFilterPipe,
    ProductFilterPipe
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
  FilterPipe,
  CompanyFilterPipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
