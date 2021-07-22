import {Injectable} from '@angular/core';

interface Pizza {
  title: string,
  ingredient: string,
  price: Number,
  img:string
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  arrayOfPizza: Pizza[] = [
    {
      title: "Cezario",
      ingredient: "creamy sauce, tomatoes, crispy salad, parmesan cheese, chicken, mozzarella cheese, quail eggs.",
      price: 200,
      img:"./assets/img/Kvatro-formadzhi.png"
    },
    {
      title: "Quattro Formaggi",
      ingredient: "cream sauce, parmesan cheese, mozzarella cheese, ricotta cheese, dorblu cheese, walnut, pear.",
      price: 212,
      img:"./assets/img/LA-P_yets-1.png"
    },
    {
      title: "Capricciosa",
      ingredient: "tomato sauce, mozzarella cheese,ham, fresh mushrooms.",
      price: 150,
      img:"./assets/img/Kaprichoza-1.png"
    },
    {
      title: "Hawaii",
      ingredient: "mozzarella, cream sauce, chicken fillet, corn, pineapple, olives, sweet pepper.",
      price: 170,
      img:"./assets/img/gavajska.png"
    },
    {
      title: "Pepperoni",
      ingredient: "mozzarella cheese, barbecue sauce, pepperoni, parmesan, arugula",
      price: 170,
      img:"./assets/img/paperoni.png"
    },
    {
      title: "Carbonara",
      ingredient: "Tomato sauce, ham, baked egg, mozzarella cheese, Bavarian sausages",
      price: 172,
      img:"./assets/img/karbonara_new.png"
    },
    {
      title: "Salami",
      ingredient: "tomato sauce, mozzarella cheese, salami",
      price: 149,
      img:"./assets/img/Salyami.png"
    },
    {
      title: "Pancetta",
      ingredient: "mozzarella, sweet and sour sauce, pork bacon, pepper, cucumber gherkin.",
      price: 163,
      img:"./assets/img/panchetta.png"
    },
    {
      title: "Diabola",
      ingredient: "tomato sauce, mozzarella cheese, chili pepper, pepperoni.",
      price: 157,
      img:"./assets/img/diabola_new.png"
    },
    {
      title: "Margarita",
      ingredient: "tomato sauce, mozzarella cheese, tomatoes.",
      price: 112,
      img:"./assets/img/Margaryta.png"
    },
    {
      title: "Parma",
      ingredient: "cream sauce, parmesan cheese, mozzarella cheese, prosciutto, arugula.",
      price: 196,
      img:"./assets/img/Parma.png"
    },
    {
      title: "Schinkarella",
      ingredient: "tomato sauce, mozzarella cheese, ham.",
      price: 196,
      img:"./assets/img/Proshuto.png"
    },
    {
      title: "Polo",
      ingredient: "mozzarella cheese, onion, mayonnaise, tomatoes, chicken.",
      price: 160,
      img:"./assets/img/Polo.png"
    },
  ];

  getArrayOfPizza(){
    return this.arrayOfPizza;
  }
}
