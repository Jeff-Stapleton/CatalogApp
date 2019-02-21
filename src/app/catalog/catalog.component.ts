import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { AddProductComponent } from '../modals/add-product/add-product.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  // [
  //   // { name: "Product 1", description: "Description 1", quantity: 1 },
  //   // { name: "Product 2", description: "Description 2", quantity: 2 },
  //   // { name: "Product 3", description: "Description 3", quantity: 3 },
  //   // { name: "Product 4", description: "Description 4", quantity: 4 },
  //   // { name: "Product 5", description: "Description 5", quantity: 5 },
  //   // { name: "Product 6", description: "Description 6", quantity: 6 },
  //   // { name: "Product 7", description: "Description 7", quantity: 7 },
  //   // { name: "Product 8", description: "Description 8", quantity: 8 },
  //   // { name: "Product 9", description: "Description 9", quantity: 9 },
  // ];

  constructor(public productService: ProductService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.read<Product[]>().subscribe(productList => {
      this.products = productList;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '300px',
      width: '600px',
      data: new Product()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

}
