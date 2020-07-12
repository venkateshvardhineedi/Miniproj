import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPPageRoutingModule } from './op-routing.module';

import { OPPage } from './op.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPPageRoutingModule
  ],
  declarations: [OPPage]
})
export class OPPageModule {}
