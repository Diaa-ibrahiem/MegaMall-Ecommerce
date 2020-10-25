import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsPageComponent } from '../../pages/terms-page/terms-page.component';

const routes: Routes = [{ path: '', component: TermsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsRoutingModule {}
