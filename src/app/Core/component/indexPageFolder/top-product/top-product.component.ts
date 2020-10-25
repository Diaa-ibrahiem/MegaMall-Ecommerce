import { Cart } from './../../../../shared/Model/cart';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Model/product';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { GetDataHtppService } from 'src/app/shared/services/get-data-htpp.service';
import { ViewProductService } from 'src/app/shared/services/view-product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css'],
})
export class TopProductComponent implements OnInit, OnDestroy {
  ProdArray: Array<Product>;
  destroy: any;
  constructor(
    public cartServ: AddToCardService,
    public getData: GetDataHtppService,
    public ViewProd: ViewProductService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.LoadPro();
  }
  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }
  LoadPro() {
    this.destroy = this.getData.GetDataFromJson().subscribe((res: any) => {
      this.ProdArray = res;
    });
  }

  addToCart(product) {
    this.cartServ.addCart({ product, quantity: 1 });
    this.toast.success('added to cart list', 'Done');
  }
  addToLike(product) {
    this.cartServ.addLikes({ product, quantity: 1 });
    this.toast.success('added to like list', 'Done');
  }

  SendProductDetails(item) {
    this.ViewProd.ViewProd(item);
  }
}
