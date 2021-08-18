import {Component, OnInit} from '@angular/core';
import {PizzaService} from "./pizza-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public service: PizzaService) {
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
