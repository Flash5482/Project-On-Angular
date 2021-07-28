import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './header/nav/nav.component';
import {PizzaComponent} from './pizza/pizza.component';

import {RouterModule, Routes} from '@angular/router';
import {SaladComponent} from './salad/salad.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DessertComponent} from './dessert/dessert.component';
import {BasketComponent} from './basket/basket.component';
import {CardComponent} from './pizza/card/card.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {PizzaService} from "./pizza-service.service";
import {OrderService} from "./order.service";
import {CardBasketComponent} from './basket/card-basket/card-basket.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ValidateComponent } from './validate/validate.component';

const appRoutes: Routes = [
  {path: '', component: PizzaComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'salad', component: SaladComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'dessert', component: DessertComponent},
  {path: 'basket', component: BasketComponent},
  {path: '**', component: NotFoundComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PizzaComponent,
    SaladComponent,
    DrinksComponent,
    DessertComponent,
    BasketComponent,
    CardComponent,
    NotFoundComponent,
    CardBasketComponent,
    ValidateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,


  ],
  providers: [PizzaService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
