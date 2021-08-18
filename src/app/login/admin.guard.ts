import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PizzaService} from "../pizza-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  isAdmin: boolean | any;

  constructor(private route: Router, service: PizzaService) {
    this.isAdmin = localStorage.getItem("isAdmin");
    this.isAdmin = JSON.parse(this.isAdmin);
    if (!this.isAdmin) {
      this.route.navigate(['pizza']);
    }


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(ActivatedRouteSnapshot);
    return this.isAdmin;
  }


}
