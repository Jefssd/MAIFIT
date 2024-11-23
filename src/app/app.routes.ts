import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'view-product', component: ViewProductComponent }
];
