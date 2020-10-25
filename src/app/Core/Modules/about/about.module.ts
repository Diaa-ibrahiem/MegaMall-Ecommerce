import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AboutCompComponent } from '../../component/about-comp/about-comp.component';
import { AboutPageComponent } from '../../pages/about-page/about-page.component';

@NgModule({
  declarations: [AboutCompComponent, AboutPageComponent],
  imports: [CommonModule, AboutRoutingModule, TranslateModule],
})
export class AboutModule {}
