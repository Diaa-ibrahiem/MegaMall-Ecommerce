import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BestsellerSidebarComponent } from '../../component/indexPageFolder/bestseller-sidebar/bestseller-sidebar.component';
import { BlogIndexComponent } from '../../component/indexPageFolder/blog-index/blog-index.component';
import { BrandsComponent } from '../../component/indexPageFolder/brands/brands.component';
import { CategoriesSidebarComponent } from '../../component/indexPageFolder/categories-sidebar/categories-sidebar.component';
import { DeveloperQouteSidebarComponent } from '../../component/indexPageFolder/developer-qoute-sidebar/developer-qoute-sidebar.component';
import { OnSaleComponent } from '../../component/indexPageFolder/on-sale/on-sale.component';
import { SitePropertiesComponent } from '../../component/indexPageFolder/site-properties/site-properties.component';
import { SliderComponent } from '../../component/indexPageFolder/slider/slider.component';
import { SponsersComponent } from '../../component/indexPageFolder/sponsers/sponsers.component';
import { SubscribeSidebarComponent } from '../../component/indexPageFolder/subscribe-sidebar/subscribe-sidebar.component';
import { TopProductComponent } from '../../component/indexPageFolder/top-product/top-product.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesSidebarComponent,
    BestsellerSidebarComponent,
    DeveloperQouteSidebarComponent,
    SubscribeSidebarComponent,
    SliderComponent,
    SitePropertiesComponent,
    TopProductComponent,
    OnSaleComponent,
    BrandsComponent,
    BlogIndexComponent,
    SponsersComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, TranslateModule],
  exports: [
    HomePageComponent,
    CategoriesSidebarComponent,
    BestsellerSidebarComponent,
    DeveloperQouteSidebarComponent,
    SubscribeSidebarComponent,
    SliderComponent,
    SitePropertiesComponent,
    TopProductComponent,
    OnSaleComponent,
    BrandsComponent,
    BlogIndexComponent,
    SponsersComponent,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
