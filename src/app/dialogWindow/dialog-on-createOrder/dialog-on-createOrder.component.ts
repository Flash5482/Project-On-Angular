import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-on-createOrder',
  templateUrl: './dialog-on-createOrder.component.html',
  styleUrls: ['./dialog-on-createOrder.component.scss']
})
export class DialogOnCreateOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('orderData');
  }

}
