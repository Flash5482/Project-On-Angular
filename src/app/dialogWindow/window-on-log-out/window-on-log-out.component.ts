import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PizzaService} from "../../pizza-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-window-on-log-out',
  templateUrl: './window-on-log-out.component.html',
  styleUrls: ['./window-on-log-out.component.scss']
})
export class WindowOnLogOutComponent implements OnInit {

  constructor(public service: PizzaService, private route: Router, public dialogRef: MatDialogRef<WindowOnLogOutComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  logOut() {
    this.route.navigate(['login']);
    this.service.statusLogin = false;
    sessionStorage.setItem('statusLogin', 'false');
    this.service.isAdmin = false;
    localStorage.clear();
    this.dialogRef.close();
  }

}
