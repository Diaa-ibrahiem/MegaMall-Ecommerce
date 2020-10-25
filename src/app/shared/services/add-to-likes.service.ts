import { Cart } from './../Model/cart';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToLikesService {
  public LikeListToCartShop = new BehaviorSubject([]);
  constructor() {}

  AddLikeListToCartShop(product: Cart) {
    let current = this.LikeListToCartShop.getValue();
    let dublicate = current.find(
      (c) => c.product.title === product.product.title
    );
    if (dublicate) {
      dublicate.quantity += product.quantity;
    } else {
      current.push(product);
    }

    this.LikeListToCartShop.next(current);
  }
}
