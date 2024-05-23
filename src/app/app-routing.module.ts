import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { RegesterComponent } from './components/regester/regester.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'regesters', component:RegesterComponent},
  {path:'login', component:LoginComponent},
  {path:'product', component:ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
