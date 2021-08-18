import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";
import {WindowOnLogOutComponent} from "../dialogWindow/window-on-log-out/window-on-log-out.component";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {animate} from "@angular/animations";

export interface navItem {
  title: string,
  image: string,
  path: string
}

export interface User {
  name: string;
}
export interface Products {
  title: string;
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

  searchInput = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];

  filteredOptions: Observable<User[]> | any;
  //filteredOptions: Observable<Products[]> | any;


  constructor(public service: PizzaService, private route: Router, public dialog: MatDialog,) {

  }

  public closeMenu = () => {
    this.showMenu = false;
  };

  arrayOfTitleProducts: [] | any;



  ngOnInit(): void {
    this.orderArray = sessionStorage.getItem("products");
    this.orderArray = JSON.parse(this.orderArray);
    this.arrayOfTitleProducts = this.orderArray.map((item: any) =>({title: item.title}));
    console.log(this.arrayOfTitleProducts);

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


    this.filteredOptions = this.searchInput.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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
