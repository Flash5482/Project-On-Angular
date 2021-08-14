import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";
import {WindowOnLogOutComponent} from "../dialogWindow/window-on-log-out/window-on-log-out.component";
import {Router} from "@angular/router";

export interface navItem {
  title: string,
  image: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  orderArray: any;
  showCircle: boolean | any;
  isAdmin: boolean | any;
  statusLogin: boolean | any;


  constructor(public service: PizzaService, private route: Router, public dialog: MatDialog,) {

  }

  public closeMenu = () => {
    this.showMenu = false;
  };


  ngOnInit(): void {

    this.isAdmin = localStorage.getItem('isAdmin')
    this.service.isAdmin = JSON.parse(this.isAdmin);

    this.statusLogin = localStorage.getItem('statusLogin')
    this.service.statusLogin = JSON.parse(this.statusLogin);

    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);

    if (this.orderArray.length > 0) {
      this.service.showCircle = true;
    } else {
      this.service.showCircle = false;
    }
  }

  logout() {
    if (this.service.statusLogin) {
      this.dialog.open(WindowOnLogOutComponent, {width: '500px'});
    } else {
      this.route.navigate(['login']);
    }
  }


  navItems: navItem[] = [
    {
      title: "Pizza",
      image: "assets/img/nav_pizza.svg",
      path: "pizza"
    }, {
      title: "Salad",
      image: "assets/img/salad.svg",
      path: "salad"
    }, {
      title: "Dessert",
      image: "assets/img/cake.svg",
      path: "dessert"
    }, {
      title: "Drinks",
      image: "assets/img/cocktail.svg",
      path: "drinks"
    }, {
      title: "Basket",
      image: "assets/img/shopping-cart.svg",
      path: "basket"
    }
  ]

  public moveMenu() {
    this.showMenu = !this.showMenu;
  }


}
