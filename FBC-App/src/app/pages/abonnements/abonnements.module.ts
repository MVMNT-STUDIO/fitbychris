import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonnementsPageRoutingModule } from './abonnements-routing.module';
import { AbonnementsPage } from './abonnements.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonnementsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AbonnementsPage]
})
export class AbonnementsPageModule {}
