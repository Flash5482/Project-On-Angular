import {Injectable} from "@angular/core";
import {PizzaService} from "../pizza-service.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private service: PizzaService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.statusLogin) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': this.service.apiKey
        }
      });
    }
    return next.handle(req);
  }
}
