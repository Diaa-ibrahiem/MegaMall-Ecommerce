import { TranslateService } from '@ngx-translate/core';
import { Cart } from './../../../shared/Model/cart';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { AddToLikesService } from 'src/app/shared/services/add-to-likes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-like-comp',
  templateUrl: './like-comp.component.html',
  styleUrls: ['./like-comp.component.css'],
})
export class LikeCompComponent implements OnInit, OnDestroy {
  public product: Array<Cart>;
  destroy: any;
  constructor(
    public AddtoCartSerev: AddToCardService,
    public AddAllToCartser: AddToLikesService,
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
    this.destroy = this.AddtoCartSerev.likeListSubject.subscribe((Res) => {
      this.product = Res;
    });
  }
  addToCart(product) {
    this.AddtoCartSerev.addCart(product);
    this.toast.success('added to cartList ', 'Done');
  }
  DeleteCart(index) {
    this.AddtoCartSerev.removeFromLike(index);
    this.toast.error('Deleted item ', 'Done');
  }

  AddAllToCart(product) {
    this.AddAllToCartser.AddLikeListToCartShop(product);
  }
}
