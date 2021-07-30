import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketComponent} from "../basket.component";
import {PizzaService} from "../../pizza-service.service";

@Component({
  selector: 'app-card-basket',
  templateUrl: './card-basket.component.html',
  styleUrls: ['./card-basket.component.scss']
})
export class CardBasketComponent implements OnInit {
  @Input() order: BasketComponent | any;
  @Input() changeCounts: BasketComponent | any;
  @Input() orderArray: BasketComponent | any;
  @Input() totalPrice:BasketComponent | any;
  @Output() getOrderArrayStatusChange = new EventEmitter();
  @Output() getIfExitOrderStatusChange = new EventEmitter();
  @Output() getTotalPriceStatusChange = new EventEmitter();

  @Input() ifExitOrder: boolean = true;

  constructor(public service: PizzaService) {
  }
  ngOnInit(): void {
  }

  deleteProductFromOrder(title: any) {

    if (this.orderArray.length === 1) {
      this.service.showCircle = false;
      this.ifExitOrder = false;
    }

    this.orderArray = this.orderArray.filter((item: any) => item.title !== title);
    sessionStorage.setItem("orderData", JSON.stringify(this.orderArray));


    this.getIfExitOrderStatusChange.emit(this.ifExitOrder);
    this.getOrderArrayStatusChange.emit(this.orderArray);

    this.totalPrice = this.orderArray.reduce((current: number, nex: any) => current + nex.price * nex.count, 0);
    this.getTotalPriceStatusChange.emit(this.totalPrice);
  }
}
