import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { IonicStorageModule } from "@ionic/storage";
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		IonicStorageModule,
		FormsModule
	],
	declarations: [HomePage],
})
export class HomePageModule {}
