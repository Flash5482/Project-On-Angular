import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketComponent} from "../basket.component";

@Component({
  selector: 'app-card-basket',
  templateUrl: './card-basket.component.html',
  styleUrls: ['./card-basket.component.scss']
})
export class CardBasketComponent implements OnInit {
  @Input() order: BasketComponent | any;
  @Input() changeCounts: BasketComponent | any;
  @Input() orderArray: BasketComponent | any;
  @Output() getOrderArrayStatusChange = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
  }
  deleteProductFromOrder(title: any){
    this.orderArray = this.orderArray.filter((item: any) => item.title !== title);
    sessionStorage.setItem("orderData", JSON.stringify(this.orderArray));
    this.getOrderArrayStatusChange.emit(this.orderArray);
  }
}
