import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { ProductsComponent } from './products/products.component';
import { SushiComponent } from './products/sushi/sushi.component';
import { WockComponent } from './products/wock/wock.component';
import { SoupsComponent } from './products/soups/soups.component';
import { DrinksComponent } from './products/drinks/drinks.component';
import { AdditionsComponent } from './products/additions/additions.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Delivery', component: DeliveryComponent },
  { path: 'Discounts', component: DiscountsComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Wock', component: WockComponent },
  { path: 'sushi', component: SushiComponent },
  { path: 'soups', component:  SoupsComponent },
  { path: 'Drinks', component: DrinksComponent },
  { path: 'Additions', component: AdditionsComponent },
  { path: '**', redirectTo: 'home' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
