import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Pizza {
  title: string,
  ingredient: string,
  price: Number,
  img: string
}

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  array: [] | any;
  pizzaArray: [] | any;
  public showCircle: boolean = false;

  constructor(private http: HttpClient) {
  }

  search() {
    return this.http.get('http://localhost:8080/products');
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


  arrayOfPizza: Pizza[] = [
    {
      title: "Cezario",
      ingredient: "creamy sauce, tomatoes, crispy salad, parmesan cheese, chicken, mozzarella cheese, quail eggs.",
      price: 200,
      img: "./assets/img/Kvatro-formadzhi.png"
    },
    {
      title: "Quattro Formaggi",
      ingredient: "cream sauce, parmesan cheese, mozzarella cheese, ricotta cheese, dorblu cheese, walnut, pear.",
      price: 212,
      img: "./assets/img/LA-P_yets-1.png"
    },
    {
      title: "Capricciosa",
      ingredient: "tomato sauce, mozzarella cheese,ham, fresh mushrooms.",
      price: 150,
      img: "./assets/img/Kaprichoza-1.png"
    },
    {
      title: "Hawaii",
      ingredient: "mozzarella, cream sauce, chicken fillet, corn, pineapple, olives, sweet pepper.",
      price: 170,
      img: "./assets/img/gavajska.png"
    },
    {
      title: "Pepperoni",
      ingredient: "mozzarella cheese, barbecue sauce, pepperoni, parmesan, arugula",
      price: 170,
      img: "./assets/img/paperoni.png"
    },
    {
      title: "Carbonara",
      ingredient: "Tomato sauce, ham, baked egg, mozzarella cheese, Bavarian sausages",
      price: 172,
      img: "./assets/img/karbonara_new.png"
    },
    {
      title: "Salami",
      ingredient: "tomato sauce, mozzarella cheese, salami",
      price: 149,
      img: "./assets/img/Salyami.png"
    },
    {
      title: "Pancetta",
      ingredient: "mozzarella, sweet and sour sauce, pork bacon, pepper, cucumber gherkin.",
      price: 163,
      img: "./assets/img/panchetta.png"
    },
    {
      title: "Diabola",
      ingredient: "tomato sauce, mozzarella cheese, chili pepper, pepperoni.",
      price: 157,
      img: "./assets/img/diabola_new.png"
    },
    {
      title: "Margarita",
      ingredient: "tomato sauce, mozzarella cheese, tomatoes.",
      price: 112,
      img: "./assets/img/Margaryta.png"
    },
    {
      title: "Parma",
      ingredient: "cream sauce, parmesan cheese, mozzarella cheese, prosciutto, arugula.",
      price: 196,
      img: "./assets/img/Parma.png"
    },
    {
      title: "Schinkarella",
      ingredient: "tomato sauce, mozzarella cheese, ham.",
      price: 196,
      img: "./assets/img/Proshuto.png"
    },
    {
      title: "Polo",
      ingredient: "mozzarella cheese, onion, mayonnaise, tomatoes, chicken.",
      price: 160,
      img: "./assets/img/Polo.png"
    },
  ];


}
