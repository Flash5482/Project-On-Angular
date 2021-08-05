import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketComponent} from "../basket.component";
import {PizzaService} from "../../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";
import {WindowOnDeleteProductComponent} from "../../dialogWindow/window-on-delete-product/window-on-delete-product.component";

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

  @Input() deleteProduct: BasketComponent | any;

  constructor(public service: PizzaService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  deleteProductFromOrder(title: any) {
    this.dialog.open(WindowOnDeleteProductComponent, {
        width: '600px', height: "200px", data: {
          deleteProduct: this.deleteProduct
        }
      },
    );
    this.getTitle.emit(title);
  }


}
