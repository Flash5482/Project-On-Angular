import {Component, Input, OnInit} from '@angular/core';
import {PizzaComponent} from "../pizza.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pizzaItem: PizzaComponent | any;

  constructor() {
  }
  ngOnInit(): void {
  }

  countOfPizza: number = 1;
  sumPrice: number =0;


  setPrice(price: any,count:any){
    this.sumPrice = price * count;
    console.log(this.sumPrice)
  }
  countInInput(event: any){
    const value = event.target.value;

    this.countOfPizza = value;
    if(value > 200){
      this.countOfPizza = 200;
    }
  }
  changeCount(symbol: string){
    switch (symbol){
      case '+':{
        this.countOfPizza++;
        if(this.countOfPizza> 200){
          this.countOfPizza = 200;
        }
        break;
      }
      case '-':{
        this.countOfPizza--;
        if (this.countOfPizza < 1) {
          this.countOfPizza = 1;
        }
        break;
      }
      default: break;
    }
  }
}
