import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-slide-line',
  templateUrl: './slide-line.component.html',
  styleUrls: ['./slide-line.component.scss']
})
export class SlideLineComponent implements OnInit {

  constructor(public service : PizzaService) { }

  ngOnInit(): void {
  }

}
