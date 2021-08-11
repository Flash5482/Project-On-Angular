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
  showWindowOnDelete: boolean = false;
  overflowOnDelete: string = 'visible';
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
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.apiKey

      })
    };
  }


  pizzaProducts: any;

  search() {
    return this.http.get('http://localhost:8080/products');
  }

  arrayOfPizza: any;

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
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.apiKey
      })
    }
    return this.http.get('http://localhost:8080/orders', this.httpOptions);
  }

  updateStatus(order: any) {
    this.apiKey = localStorage.getItem('apiKey');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.apiKey
      })
    }
    return this.http.put('http://localhost:8080/orders', order, this.httpOptions).subscribe(response => response);
  }

  statusLogin: any = false;

  login(credential: any) {
    console.log("First cred", this.httpOptions);

    return this.http.post('http://localhost:8080/login', credential).subscribe(response => {
        console.log('Password ', response);
        this.isAdmin = JSON.parse(JSON.stringify(response)).isAdmin;
        this.userId = JSON.parse(JSON.stringify(response)).userId;
        localStorage.setItem('userId', JSON.parse(JSON.stringify(response)).userId);
        localStorage.setItem('isAdmin', JSON.parse(JSON.stringify(response)).isAdmin);
        localStorage.setItem('apiKey', JSON.parse(JSON.stringify(response)).token);
        if (this.isAdmin) {
          this.router.navigate(['delivery']);
        } else {

          this.router.navigate(['pizza']);
        }
        this.statusLogin = true;
        sessionStorage.setItem('statusLogin', this.statusLogin);
        this.showError = false;

        console.log("Last cred", credential);

        return this.apiToken = response;
      }, catchError => {
        this.showError = true;
      }
    )
  }

  addUser(user: any) {
    return this.http.post('http://localhost:8080/users', user, this.httpOptions).subscribe(response => response);
  }

  getUser(userId: any) {
    this.apiKey = localStorage.getItem('apiKey');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.apiKey

      })
    };
    console.log('http://localhost:8080/users/' + userId)
    return this.http.get('http://localhost:8080/users/' + userId, this.httpOptions);

  }

  closeWindowDelete() {
    this.showWindowOnDelete = false;
    this.overflowOnDelete = 'visible';
  }

  showWindowDelete() {
    this.showWindowOnDelete = true;
    this.overflowOnDelete = 'hidden';
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
