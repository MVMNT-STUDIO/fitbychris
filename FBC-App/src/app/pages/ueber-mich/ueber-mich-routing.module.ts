import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UeberMichPage } from './ueber-mich.page';

const routes: Routes = [
  {
    path: '',
    component: UeberMichPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UeberMichPageRoutingModule {}
