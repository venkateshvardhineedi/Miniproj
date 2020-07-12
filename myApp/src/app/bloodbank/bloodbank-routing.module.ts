import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodbankPage } from './bloodbank.page';

const routes: Routes = [
  {
    path: '',
    component: BloodbankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodbankPageRoutingModule {}
