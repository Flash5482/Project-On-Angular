import { Injectable } from '@angular/core';

interface order{
  title: string,
  price:number,
  img:string
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  public pizzaOfData: Array<string> = [];

  public setDataOfPizza = (data: any) => {
    return this.pizzaOfData.push(data);
  }
  public getDataOfPizza = () => {
    return this.pizzaOfData;
  }

  constructor() { }

}
