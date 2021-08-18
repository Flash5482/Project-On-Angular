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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AdminPageComponent} from './admin-page/admin-page.component';
import {SlideLineComponent} from './slide-line/slide-line.component';
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";

import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from "@angular/material/expansion";
import {DialogOnCreateOrderComponent} from "./dialogWindow/dialog-on-createOrder/dialog-on-createOrder.component";
import {WindowOnDeleteProductComponent} from './dialogWindow/window-on-delete-product/window-on-delete-product.component';
import {ProgressBarOnDeleteComponent} from "./progressBar/progress-bar-on-delete/progress-bar-on-delete.component";
import {LoginComponent} from './login/login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {WindowOnLogOutComponent} from './dialogWindow/window-on-log-out/window-on-log-out.component';
import {AdminGuard} from "./login/admin.guard";
import {TokenInterceptor} from "./login/token.interceptor";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  {path: '', component: PizzaComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'salad', component: SaladComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'dessert', component: DessertComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'delivery', component: AdminPageComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
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
    AdminPageComponent,
    SlideLineComponent,
    DialogOnCreateOrderComponent,
    WindowOnDeleteProductComponent,
    ProgressBarOnDeleteComponent,
    LoginComponent,
    WindowOnLogOutComponent,
    SearchComponent,
  ],
  imports: [
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    DragDropModule,
    MatSelectModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatOptionModule,
  ],
  providers: [PizzaService, OrderService, {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
