import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsearchPage } from './foodsearch.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsearchPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsearchPageRoutingModule {}
