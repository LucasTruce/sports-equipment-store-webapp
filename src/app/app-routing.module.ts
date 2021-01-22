import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProductComponent} from './components/products/product/product.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';
import {CartDetailsComponent} from './components/cart/cart-details/cart-details.component';
import {AdminPanelComponent} from './components/admin/admin-panel/admin-panel.component';
import {AddProductComponent} from './components/admin/admin-panel/add-product/add-product.component';
import {EditProductComponent} from './components/admin/admin-panel/edit-product/edit-product.component';
import {AuthGuard} from './services/authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ProductComponent,
    children:
      [
        { path: '', component: ProductsListComponent},
        { path: ':id', component: ProductDetailsComponent }
      ]
  },
  {
    path: 'cartDetails',
    component: CartDetailsComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
    children:
      [
        { path: '', component: AddProductComponent},
        { path: 'edit-product/:id', component: EditProductComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
