import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit  {
  arrayOfOrders: [] | any;
  arrayOfOrdersInProgress: [] | any;
  arrayOfOrdersDone: [] | any;
  showBlock: boolean = false;
  showItem: boolean = false;
  products: any;
  allOrders: any;
  panelOpenState = false;


  constructor(public service: PizzaService) {
  }

  ngOnInit(): void {
    this.service.showSearchInput = false;

    this.service.getOrder().subscribe(response => {
      this.allOrders = JSON.parse(JSON.stringify(response));
      this.arrayOfOrders = this.allOrders.filter((item: any) => {
        item.product = JSON.parse(item.product);
        return item.status === "todo"
      });
      this.arrayOfOrdersInProgress = this.allOrders.filter((item: any) => item.status === "inprogress");
      this.arrayOfOrdersDone = this.allOrders.filter((item: any) => item.status === "done");
      this.showItem = true;
    });
  }


  drop(event: CdkDragDrop<string[] | any>) {
    console.log(event.previousContainer.data[event.previousIndex]);
    console.log(event.previousContainer.data[event.previousIndex].id, event.container.id);

    let object = {
      id: event.previousContainer.data[event.previousIndex].id,
      status: event.container.id
    }
    this.service.updateStatus(object);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.arrayOfOrders, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
