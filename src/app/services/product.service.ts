import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/product';

  constructor(public http: HttpClient) { }

  public create(product: Product): Observable<HttpResponse<string>> {
    return this.http.post(this.apiUrl, product,
      { observe: 'response', responseType: 'text' });
  }

  public read<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
