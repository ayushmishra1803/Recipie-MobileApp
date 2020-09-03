import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRecipeDetailsPage } from './single-recipe-details.page';

const routes: Routes = [
  {
    path: '',
    component: SingleRecipeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRecipeDetailsPageRoutingModule {}
