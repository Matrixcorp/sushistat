import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { RolesComponent } from './products/roles/roles.component';
import { SetsComponent } from './products/sets/sets.component';
import { ProductsComponent } from './products/products.component';
import { SushiComponent } from './products/sushi/sushi.component';
import { WockComponent } from './products/wock/wock.component';
import { SoupsComponent } from './products/soups/soups.component';
import { DrinksComponent } from './products/drinks/drinks.component';
import { AdditionsComponent } from './products/additions/additions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    MainPageComponent,
    AboutUsComponent,
    DeliveryComponent,
    DiscountsComponent,
    RolesComponent,
    SetsComponent,
    ProductsComponent,
    SushiComponent,
    WockComponent,
    SoupsComponent,
    DrinksComponent,
    AdditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
