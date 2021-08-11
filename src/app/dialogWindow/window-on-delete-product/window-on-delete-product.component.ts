import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-window-on-delete-product',
  templateUrl: './window-on-delete-product.component.html',
  styleUrls: ['./window-on-delete-product.component.scss']
})
export class WindowOnDeleteProductComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<WindowOnDeleteProductComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
  deleteProduct(){
    this.data.deleteProduct();
    this.dialogRef.close();
  }
}
