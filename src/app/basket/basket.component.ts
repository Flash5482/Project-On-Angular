import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderArray: any;

  constructor(private service: OrderService) {
    //this.orderArray=this.service.getOrderData();
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);
    console.log( this.orderArray);
  }

  changeCounts = () =>{
    this.orderArray.find();

  }

  ngOnInit(): void {
  }

}
