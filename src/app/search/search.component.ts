import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {User} from "../header/header.component";
import {Observable} from "rxjs";
import {PizzaService} from "../pizza-service.service";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  orderArray: any;
  arrayOfTitleProducts: any;
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]> | any;

  constructor(public service: PizzaService) { }

  ngOnInit(): void {
    this.orderArray = sessionStorage.getItem("products");
    this.orderArray = JSON.parse(this.orderArray);
    this.arrayOfTitleProducts = this.orderArray.map((item: any) =>({title: item.title}));
    console.log(this.arrayOfTitleProducts);

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

}
