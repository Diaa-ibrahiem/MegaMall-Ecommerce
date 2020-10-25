import { Product } from './../Model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewProductService {
  public productItem: Product;

  constructor() {}

  ViewProd(productDetails) {
    this.productItem = productDetails;
  }
}
