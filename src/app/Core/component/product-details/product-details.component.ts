import { TranslateService } from '@ngx-translate/core';
import { Product } from './../../../shared/Model/product';
import { ViewProductService } from './../../../shared/services/view-product.service';
import { Component, OnInit } from '@angular/core';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  getProditem: Product;
  constructor(
    public ViewProductService: ViewProductService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loaditem();
  }

  loaditem() {
    this.getProditem = this.ViewProductService.productItem;
  }
}
