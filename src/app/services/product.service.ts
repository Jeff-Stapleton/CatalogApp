import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "http://localhost:5000/api/product"

  constructor(public http: HttpClient) { }

  public create<T>(product: Product): Observable<T>
  {
    return this.http.post<T>(this.apiUrl, product);
  }

  public read<T>(): Observable<T>
  {
    return this.http.get<T>(this.apiUrl);
  }
}
