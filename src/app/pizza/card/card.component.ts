import {Component, Input, OnInit} from '@angular/core';
import {PizzaComponent} from "../pizza.component";
import {OrderService} from "../../order.service";

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
  @Input() setDataOfPizza: PizzaComponent | any;
  @Input() getDataOfPizza: PizzaComponent | any;
  @Input() setDataToStorage: PizzaComponent | any;


  constructor(private service: OrderService) {

  }

  ngOnInit(): void {
  }

  countOfPizza: number = 1;
  sumPrice: number = 0;

  public arrayForOrderData = {};
  public array: [] | any;


  setOrder(price: any, count: any, title: string, img: string) {
    //this.sumPrice = price * count;
    this.arrayForOrderData = {
      price,
      count,
      title,
      img,
    };
    this.setDataToStorage(this.arrayForOrderData, this.array);
  }

  countInInput(event: any) {
    const value = event.target.value;
    this.countOfPizza = value;
    if (value < 1) {
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
