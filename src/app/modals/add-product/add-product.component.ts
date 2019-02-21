import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
              @Inject(MAT_DIALOG_DATA) 
              public data: Product) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
