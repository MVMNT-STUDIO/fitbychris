import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberMichPageRoutingModule } from './ueber-mich-routing.module';

import { UeberMichPage } from './ueber-mich.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberMichPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [UeberMichPage]
})
export class UeberMichPageModule {}
