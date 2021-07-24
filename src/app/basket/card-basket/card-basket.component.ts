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
  @Input() deleteProductFromOrder: BasketComponent | any;
  @Input() orderArray: BasketComponent | any;


  countOfPizza: number = 1;
  constructor() {
  }
  ngOnInit(): void {
  }

}
