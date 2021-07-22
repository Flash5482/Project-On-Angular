import {Component, OnInit} from '@angular/core';

export interface navItem {
  title: string,
  image: string,
  path:string
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
   public  closeMenu = ()=>{
    this.showMenu= false;
  };
  ngOnInit(): void {


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
      title: "Payment",
      image: "assets/img/wallet.svg",
      path: "payment"
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
