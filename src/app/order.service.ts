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




  constructor() { }

}
