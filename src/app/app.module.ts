import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './components/product/product.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AddProductComponent } from './modals/add-product/add-product.component';

@NgModule({
  declarations: [
    AddProductComponent,
    AppComponent,
    CatalogComponent,
    DrawerComponent,
    ProductComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddProductComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
