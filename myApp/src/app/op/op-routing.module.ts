import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPPage } from './op.page';

const routes: Routes = [
  {
    path: '',
    component: OPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPPageRoutingModule {}
