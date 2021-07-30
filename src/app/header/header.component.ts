import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PizzaService} from "../pizza-service.service";

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

  constructor(public service: PizzaService) {


  }

  public closeMenu = () => {
    this.showMenu = false;
  };



  ngOnInit(): void {
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);

    if (this.orderArray.length > 0) {
      this.service.showCircle = true;
    } else  {
      this.service.showCircle = false;
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
