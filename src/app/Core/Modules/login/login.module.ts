import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponentComponent } from '../../component/login-component/login-component.component';
import { LoginPageComponent } from '../../pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponentComponent, LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
