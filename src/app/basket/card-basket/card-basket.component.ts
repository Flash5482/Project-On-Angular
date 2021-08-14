import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BasketComponent} from "../basket.component";
import {PizzaService} from "../../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";
import {WindowOnDeleteProductComponent} from "../../dialogWindow/window-on-delete-product/window-on-delete-product.component";

@Component({
  selector: 'app-card-basket',
  templateUrl: './card-basket.component.html',
  styleUrls: ['./card-basket.component.scss']
})
export class CardBasketComponent {
  @Input() order: BasketComponent | any;
  @Input() changeCounts: BasketComponent | any;
  @Input() deleteProduct: BasketComponent | any;
  @Output() getTitle = new EventEmitter();


  constructor(public service: PizzaService, public dialog: MatDialog) {
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
