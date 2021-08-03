import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  arrayOfOrders: [] | any;
  arrayOfOrdersInProgress: [] | any;
  arrayOfOrdersDone: [] | any;
  showBlock: boolean = false;

  constructor(public service: PizzaService) {
    service.getOrder().subscribe(response => {
      let allOrders = JSON.parse(JSON.stringify(response));
      this.arrayOfOrders = allOrders.filter((item: any) => item.status === "todo");
      this.arrayOfOrdersInProgress = allOrders.filter((item: any) => item.status === "inprogress");
      this.arrayOfOrdersDone =allOrders.filter((item: any) => item.status === "done");
    });

  }

  ngOnInit(): void {

  }


  drop(event: CdkDragDrop<string[] | any>) {

    console.log(event.container.id);
    this.service.updateStatus(event.previousContainer.data[event.previousIndex],event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.arrayOfOrders/*event.container.data*/, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
