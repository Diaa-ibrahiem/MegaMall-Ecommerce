import { Cart } from './../Model/cart';
import { Product } from 'src/app/shared/Model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root',
})
export class AddToCardService {
  public CartListSubjet = new BehaviorSubject([]);
  public likeListSubject = new BehaviorSubject([]);
  constructor() {}

  addCart(cart: Cart) {
    let current = this.CartListSubjet.getValue();
    let dublicatValue = current.find(
      (current) => current.product.title === cart.product.title
    );
    if (dublicatValue) dublicatValue.quantity += cart.quantity;
    else current.push(cart);
    this.CartListSubjet.next(current);
    localStorage.setItem('res', JSON.stringify(current));
  }

  addLikes(cart: Cart) {
    let current = this.likeListSubject.getValue();
    let dub = current.find((c) => c.product.title === cart.product.title);
    if (dub) dub.quantity += cart.quantity;
    else current.push(cart);
    this.likeListSubject.next(current);
    localStorage.setItem('likes', JSON.stringify(current));
  }
  removeFromCart(index) {
    let current = this.CartListSubjet.getValue();
    current.splice(index, 1);
    this.CartListSubjet.next(current);
    localStorage.setItem('res', JSON.stringify(current));
  }
  removeFromLike(index) {
    let current = this.likeListSubject.getValue();
    current.splice(index, 1);
    this.likeListSubject.next(current);
    localStorage.setItem('likes', JSON.stringify(current));
  }

  ReloadCart(cartlist) {
    this.CartListSubjet.next(cartlist);
  }
}
