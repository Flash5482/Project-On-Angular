import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {

  desertArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;
    this.pizzaServ.search().subscribe(response => {
      this.desertArray = response;
      this.desertArray = this.desertArray.filter((item: any) => item.type === "desserts");
    });
  }

  ngOnInit(): void {
  }

}
