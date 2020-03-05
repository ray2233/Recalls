import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CompanyFilterPipe } from './pipes/company-filter.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FDAOrangeListComponent } from './components/fda-orangecompany-list/fda-orange-company-list.component';
import { FdaOrangeCompanyPipe } from './pipes/fda-orange-company.pipe';
import { freeSearchFilterPipe } from './pipes/freesearch-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestCache } from './services/request-cache.service';
import { CachingInterceptor } from './services/caching-interceptor.service';

import { AppRoutes } from './app-routing.module';

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
  providers: [
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  exports: [
  freeSearchFilterPipe,
  CompanyFilterPipe,
  ProductFilterPipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
