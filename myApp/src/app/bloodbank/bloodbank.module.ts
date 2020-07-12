import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodbankPageRoutingModule } from './bloodbank-routing.module';

import { BloodbankPage } from './bloodbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodbankPageRoutingModule
  ],
  declarations: [BloodbankPage]
})
export class BloodbankPageModule {}
