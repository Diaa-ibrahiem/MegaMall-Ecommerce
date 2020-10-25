import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { TopProdSidebarComponent } from './component/indexPageFolder/top-prod-sidebar/top-prod-sidebar.component';
import { CartCompComponent } from './component/cart-comp/cart-comp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LikeCompComponent } from './component/like-comp/like-comp.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { ChangeQuantitycompComponent } from '../shared/component/change-quantitycomp/change-quantitycomp.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { HomeModule } from './Modules/home/home.module';
import { AboutModule } from './Modules/about/about.module';
import { TermsModule } from './Modules/terms/terms.module';
import { LoginModule } from './Modules/login/login.module';
import { ContactModuleModule } from './Modules/contact-module/contact-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopProdSidebarComponent,
    CartCompComponent,
    LikeCompComponent,
    HeaderComponent,
    FooterComponent,
    ChangeQuantitycompComponent,
    NotFoundComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastNoAnimationModule.forRoot({
      preventDuplicates: true,
      timeOut: 1000,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslation,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoreRoutingModule,
    ToastNoAnimationModule,
  ],
  providers: [],
})
export class CoreModule {}

export function CreateTranslation(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
