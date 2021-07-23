import {Component, Input, OnInit} from '@angular/core';
import {BasketComponent} from "../basket.component";

@Component({
  selector: 'app-card-basket',
  templateUrl: './card-basket.component.html',
  styleUrls: ['./card-basket.component.scss']
})
export class CardBasketComponent implements OnInit {
  @Input() order: BasketComponent | any;
  @Input() changeCounts: BasketComponent | any;


  countOfPizza: number = 1;
  constructor() {
  }

  ngOnInit(): void {
  }

  countInInput(event: any) {
    const value = event.target.value;
    this.countOfPizza = value;
    if (value < 1) {
      this.countOfPizza = 1;
    }
  };

  changeCount(symbol: string) {
    switch (symbol) {
      case '+': {
        this.changeCounts();
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
