import {Component, OnInit} from '@angular/core';
import {PizzaService} from "./pizza-service.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute: string | any;
  constructor(public service: PizzaService,private router: Router) {

  }

  ngOnInit(): void {


    this.service.search().subscribe(response => {
      let pizzaArray = response;
      sessionStorage.setItem('products', JSON.stringify(pizzaArray));
      this.service.isDataLoaded= true;
    });
  }

  title = 'Project-On-Angular';
}
