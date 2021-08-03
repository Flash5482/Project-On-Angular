import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketComponent} from "../basket.component";
import {PizzaService} from "../../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card-basket',
  templateUrl: './card-basket.component.html',
  styleUrls: ['./card-basket.component.scss']
})
export class CardBasketComponent implements OnInit {
  @Input() order: BasketComponent | any;
  @Input() changeCounts: BasketComponent | any;
  @Input() orderArray: BasketComponent | any;
  @Input() totalPrice: BasketComponent | any;
  @Input() title: BasketComponent | any;
  @Output() getTitle = new EventEmitter();

  constructor(public service: PizzaService) {
  }

  ngOnInit(): void {
  }

  deleteProductFromOrder(title: any) {
    this.service.showWindowDelete();
    this.getTitle.emit(title);
  }



}
