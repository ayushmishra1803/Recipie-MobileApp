import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooddetailsPage } from './fooddetails.page';

const routes: Routes = [
  {
    path: '',
    component: FooddetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooddetailsPageRoutingModule {}
