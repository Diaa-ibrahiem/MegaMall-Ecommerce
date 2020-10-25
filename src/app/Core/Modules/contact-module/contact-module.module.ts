import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModuleRoutingModule } from './contact-module-routing.module';
import { ContactFormCompComponent } from '../../component/contact-form-comp/contact-form-comp.component';
import { ContactSideBarCompComponent } from '../../component/contact-side-bar-comp/contact-side-bar-comp.component';
import { ContactPageComponent } from '../../pages/contact-page/contact-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactFormCompComponent,
    ContactSideBarCompComponent,
    ContactPageComponent,
  ],
  imports: [CommonModule, ContactModuleRoutingModule, TranslateModule],
  exports: [
    ContactFormCompComponent,
    ContactSideBarCompComponent,
    ContactPageComponent,
    ContactModuleRoutingModule,
  ],
})
export class ContactModuleModule {}
