import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {PizzaService} from "../pizza-service.service";
import {map, startWith} from "rxjs/operators";


export interface User {
  name: string;
}
export interface Products {
  title: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  orderArray: any;
  arrayOfTitleProducts: Products[] = [];

  filteredOptions:  any;

  constructor(public service: PizzaService) { }

  ngOnInit(): void {
    this.orderArray = sessionStorage.getItem("products");
    this.orderArray = JSON.parse(this.orderArray);
    this.arrayOfTitleProducts = this.orderArray.map((item: any) =>({title: item.title}));
    console.log(this.arrayOfTitleProducts);

    this.filteredOptions = this.searchInput.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.arrayOfTitleProducts.slice())
      );
  }
  displayFn(products: any): string {
    return products && products.title ? products.title : '';
  }

  private _filter(title: string) {
    const filterValue = title.toLowerCase();
    return this.arrayOfTitleProducts.filter(option => option.title.toLowerCase().includes(filterValue));
  }

}
