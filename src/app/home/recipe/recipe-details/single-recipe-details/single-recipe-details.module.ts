import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleRecipeDetailsPageRoutingModule } from './single-recipe-details-routing.module';

import { SingleRecipeDetailsPage } from './single-recipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleRecipeDetailsPageRoutingModule
  ],
  declarations: [SingleRecipeDetailsPage]
})
export class SingleRecipeDetailsPageModule {}
