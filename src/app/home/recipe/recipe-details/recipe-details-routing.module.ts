import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailsPage } from './recipe-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDetailsPage
  },
  {
    path: 'single-recipe-details',
    loadChildren: () => import('./single-recipe-details/single-recipe-details.module').then( m => m.SingleRecipeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetailsPageRoutingModule {}
