import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

interface Pizza {
  title: string,
  ingredient: string,
  price: Number,
  img: string
}

@Injectable({
  providedIn: 'root'
})

export class PizzaService implements OnInit {
  array: [] | any;
  pizzaArray: [] | any;
  public showCircle: boolean = false;
  public moveLine: boolean = false;
  disabledButton: boolean | any;
  apiToken: string | any;
  apiKey: string | any;
  isAdmin: boolean = false;
  httpOptions: any;
  isDataLoaded: boolean = false;
  showError: boolean = false;
  userId: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.apiKey = localStorage.getItem('apiKey');

  }

  search() {
    return this.http.get('http://localhost:8080/products');
  }

  setProductsToSessionStorage(typeProducts: string) {
    if (sessionStorage.getItem('products')) {
      this.pizzaArray = sessionStorage.getItem("products");
      this.pizzaArray = JSON.parse(this.pizzaArray);
      this.pizzaArray = this.pizzaArray.filter((item: any) => item.type === typeProducts);
    } else {
      this.search().subscribe(response => {
        this.pizzaArray = response;
        sessionStorage.setItem('products', JSON.stringify(this.pizzaArray))
        this.pizzaArray = this.pizzaArray.filter((item: any) => item.type === typeProducts);
      });
    }
    this.isDataLoaded = true;
    return this.pizzaArray;
  }

  postOrder(order: any) {
    return this.http.post('http://localhost:8080/orders', order).subscribe(response => response);
  }


  getOrder() {
    this.apiKey = localStorage.getItem('apiKey');
    return this.http.get('http://localhost:8080/orders');
  }

  updateStatus(order: any) {
    return this.http.put('http://localhost:8080/orders', order).subscribe(response => response);
  }

  statusLogin: any = false;

  login(credential: any) {
    return this.http.post('http://localhost:8080/login', credential).subscribe(response => {

        this.statusLogin = true;
        this.isAdmin = JSON.parse(JSON.stringify(response)).isAdmin;
        this.userId = JSON.parse(JSON.stringify(response)).userId;
        localStorage.setItem('userId', JSON.parse(JSON.stringify(response)).userId);
        localStorage.setItem('isAdmin', JSON.parse(JSON.stringify(response)).isAdmin);
        localStorage.setItem('apiKey', JSON.parse(JSON.stringify(response)).token);
        localStorage.setItem('statusLogin', this.statusLogin);

        if (this.isAdmin) {
          this.router.navigate(['delivery']);
        } else {
          this.router.navigate(['pizza']);
        }
        this.showError = false;
      }, catchError => {
        this.showError = true;
      }
    )
  }

  failSignUp: boolean = true;

  addUser(user: any) {
    return this.http.post('http://localhost:8080/users', user).subscribe(response => {
        this.failSignUp = true;
      },
      catchError => this.failSignUp = false);
  }

  getUser(userId: any) {
    return this.http.get('http://localhost:8080/users/' + userId);
  }

  move() {
    this.moveLine = true;
    setTimeout(() => {
      this.moveLine = false;
    }, 1000);
  }

  setDataToStorage(arrayForOrderData: [] | any) {
    if (sessionStorage.getItem("orderData") === null) {
      sessionStorage.setItem("orderData", JSON.stringify([arrayForOrderData]));
      this.showCircle = true;
    } else {
      this.array = sessionStorage.getItem("orderData");
      this.array = JSON.parse(this.array);
      const productOne = this.array.find((item: any) => item.title === arrayForOrderData.title);
      if (productOne) {
        productOne.count += arrayForOrderData.count;
        sessionStorage.setItem("orderData", JSON.stringify(this.array));
      } else {
        sessionStorage.setItem("orderData", JSON.stringify([...this.array, arrayForOrderData]));
      }
    }
  }


}
