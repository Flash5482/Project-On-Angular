import { Component } from '@angular/core';
import {PizzaService} from "./pizza-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: PizzaService) {



    service.search().subscribe(response => {
       let pizzaArray = response;
        sessionStorage.setItem('products', JSON.stringify(pizzaArray));
        service.isDataLoaded= true;
      });

   /* service.getOrder().subscribe(response => {
     let allOrders = JSON.parse(JSON.stringify(response));
        service.showItem=true;
    });*/

  }



  title = 'Project-On-Angular';
}
