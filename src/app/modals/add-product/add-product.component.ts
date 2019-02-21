import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public newProduct: Product;
  public nameController: FormControl = new FormControl('', [Validators.required]);
  public quantityController: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);

  constructor(public productService: ProductService,
              public dialogRef: MatDialogRef<AddProductComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Product) { }

  createProduct(newProduct: Product) {
    this.productService.create(newProduct).subscribe(
    response => {
      this.dialogRef.close();
    },
    error => {
      const errorResponse = error as HttpErrorResponse;
      if (errorResponse.status === 422) {
        this.nameController.setErrors({ nameAlreadyExists: true });
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.nameController.markAsTouched();
    this.quantityController.markAsTouched();

    if (!this.nameController.hasError('required')
    && !this.quantityController.hasError('required')
    && !this.quantityController.hasError('min')) {
      this.createProduct(this.data);
    }
  }
}
