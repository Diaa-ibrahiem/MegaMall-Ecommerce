import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpCompComponent } from '../../component/sign-up-comp/sign-up-comp.component';
import { SignUpPageComponent } from '../../pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [SignUpCompComponent, SignUpPageComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SignupModule {}
