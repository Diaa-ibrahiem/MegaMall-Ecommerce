import { CartCompComponent } from './component/cart-comp/cart-comp.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
// import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LikeCompComponent } from './component/like-comp/like-comp.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'About',
    loadChildren: () =>
      import('./Modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'Terms',
    loadChildren: () =>
      import('./Modules/terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./Modules/contact-module/contact-module.module').then(
        (m) => m.ContactModuleModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signUp',
    loadChildren: () =>
      import('./Modules/signup/signup.module').then((m) => m.SignupModule),
  },
  { path: 'Cart', component: CartCompComponent },
  { path: 'wishList', component: LikeCompComponent },
  { path: 'prodDetails', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
