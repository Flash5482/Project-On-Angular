import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../header.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() showNav: HeaderComponent | any;
  @Input() navItem: HeaderComponent | any;
  @Input() closeMenu: HeaderComponent | any;

  deleteActiveClass: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }



}
