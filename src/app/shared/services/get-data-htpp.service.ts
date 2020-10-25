import { Product } from 'src/app/shared/Model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataHtppService {
  constructor(public http: HttpClient) {}
  public GetDataFromJson() {
    return this.http.get<Product>('./assets/mock-data/products.json');
  }
}
