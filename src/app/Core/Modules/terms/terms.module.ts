import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsRoutingModule } from './terms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TermsCompComponent } from '../../component/terms-comp/terms-comp.component';
import { TermsPageComponent } from '../../pages/terms-page/terms-page.component';

@NgModule({
  declarations: [TermsCompComponent, TermsPageComponent],
  imports: [CommonModule, TermsRoutingModule, TranslateModule],
})
export class TermsModule {}
