import { Product } from './../common/product';
import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:4400/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{

    //To-Do need to url build

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

      return this.httpClient.get<GetResponse>(searchUrl).pipe(
        map(response => response._embedded.products)
      );
  }
}
interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
