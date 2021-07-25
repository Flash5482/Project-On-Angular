import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  saladArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;
    this.pizzaServ.search().subscribe(response => {
      this.saladArray = response;
      this.saladArray = this.saladArray.filter((item: any) => item.type === "salad");
    });
  }

  ngOnInit(): void {
  }

}
