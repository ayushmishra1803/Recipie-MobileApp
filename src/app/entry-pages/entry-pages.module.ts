import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryPagesPageRoutingModule } from './entry-pages-routing.module';

import { EntryPagesPage } from './entry-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryPagesPageRoutingModule
  ],
  declarations: [EntryPagesPage]
})
export class EntryPagesPageModule {}
