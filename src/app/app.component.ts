import { Component } from '@angular/core';
import {PizzaService} from "./pizza-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: PizzaService) {
  }
  ngOnInit(): void {
  }


  title = 'Project-On-Angular';
}
