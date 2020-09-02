import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryPagesPage } from './entry-pages.page';

const routes: Routes = [
  {
    path: '',
    component: EntryPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryPagesPageRoutingModule {}
