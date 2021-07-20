import {Component, OnInit} from '@angular/core';

export interface navItem {
  title: string,
  image: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  showMenu: boolean = false;

  ngOnInit(): void {


  }

  navItems: navItem[] = [
    {
      title: "Pizza",
      image: "assets/img/nav_pizza.svg"
    }, {
      title: "Salad",
      image: "assets/img/salad.svg"
    }, {
      title: "Dessert",
      image: "assets/img/cake.svg"
    }, {
      title: "Drinks",
      image: "assets/img/cocktail.svg"
    }, {
      title: "Payment",
      image: "assets/img/wallet.svg"
    }, {
      title: "Basket",
      image: "assets/img/shopping-cart.svg"
    }
  ]

  public moveMenu() {
    this.showMenu = !this.showMenu;
  }

}
