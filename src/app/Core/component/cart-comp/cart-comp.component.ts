import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/shared/Model/product';
import { Cart } from './../../../shared/Model/cart';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { AddToLikesService } from 'src/app/shared/services/add-to-likes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-comp',
  templateUrl: './cart-comp.component.html',
  styleUrls: ['./cart-comp.component.css'],
})
export class CartCompComponent implements OnInit, OnDestroy {
  product: Array<Cart>;
  TotalPrice: number;
  shipping: number = 30;
  destroy: any;
  constructor(
    public Addtocart: AddToCardService,
    public likeser: AddToLikesService,
    public translate: TranslateService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.LoadCart();
  }
  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }
  LoadCart() {
    this.destroy = this.Addtocart.CartListSubjet.subscribe((Res) => {
      this.product = Res;
      let total = 0;
      for (let cart of this.product) {
        total += cart.product.price * cart.quantity;
      }
      this.TotalPrice = total;
    });
  }
  DeleteCart(index) {
    this.Addtocart.removeFromCart(index);
    this.toast.error('Done', 'Deleted item');
  }
  changeQuantity = (product, quantity) => {
    product.quantity = quantity;
    this.Addtocart.ReloadCart(this.product);
  };

  LoadCartFromLikeComponent() {
    this.destroy = this.Addtocart.CartListSubjet.subscribe((Res) => {
      this.product = Res;
      let total = 0;
      for (let cart of this.product) {
        total += cart.product.price * cart.quantity;
      }
      this.TotalPrice = total;
    });
  }
}
