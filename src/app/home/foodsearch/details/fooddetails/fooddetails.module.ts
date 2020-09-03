import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooddetailsPageRoutingModule } from './fooddetails-routing.module';

import { FooddetailsPage } from './fooddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooddetailsPageRoutingModule
  ],
  declarations: [FooddetailsPage]
})
export class FooddetailsPageModule {}
