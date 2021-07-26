import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinksArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;
    this.pizzaServ.search().subscribe(response => {
      this.drinksArray = response;
      this.drinksArray = this.drinksArray.filter((item: any) => item.type === "drinks");
    });
  }
  ngOnInit(): void {
  }

}
