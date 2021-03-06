import {Component, Input, OnInit} from '@angular/core';
import {PizzaComponent} from "../pizza.component";
import {PizzaService} from "../../pizza-service.service";

interface OrderPizza {
  titles: string,
  prices: number,
  img: string,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pizzaItem: PizzaComponent | any;
  @Input() setDataToStorage: PizzaComponent | any;

  countOfPizza: number = 1;
  public objectForOrderData = {};

  constructor(public servicePizza: PizzaService) {
  }

  ngOnInit(): void {
  }

  setOrder(price: any, count: any, title: string, img: string) {
    this.servicePizza.showCircle = true;
    this.objectForOrderData = {
      price,
      count,
      title,
      img,
    };
    this.setDataToStorage(this.objectForOrderData);
    this.servicePizza.moveLine = true;
    this.servicePizza.disabledButton = true;
    setTimeout(() => {
      this.servicePizza.moveLine = false;
      this.servicePizza.disabledButton = false;
    }, 1000);
  }

  countInInput(event: any) {
    const value = event.target.value;
    this.countOfPizza = value;
    if (isNaN(value) || value <= 1) {
      event.target.value = 1;
      this.countOfPizza = 1;
    }
  }

  changeCount(symbol: string) {
    switch (symbol) {
      case '+': {
        this.countOfPizza++;
        if (this.countOfPizza > 200) {
          this.countOfPizza = 200;
        }
        break;
      }
      case '-': {
        this.countOfPizza--;
        if (this.countOfPizza < 1) {
          this.countOfPizza = 1;
        }
        break;
      }
      default:
        break;
    }
  }
}
