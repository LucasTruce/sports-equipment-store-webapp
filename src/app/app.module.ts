import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './services/authentication/http-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/register/register.component';
import {ProductComponent} from './components/products/product/product.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';
import {CartDetailsComponent} from './components/cart/cart-details/cart-details.component';
import {AdminPanelComponent} from './components/admin/admin-panel/admin-panel.component';
import {AddProductComponent} from './components/admin/admin-panel/add-product/add-product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {EditProductComponent} from './components/admin/admin-panel/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    AdminPanelComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
