import { Observable, Subscription } from "rxjs";
import { FoodDatabaseService } from "./../../../service/foodDataBase/food-database.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-details",
	templateUrl: "./details.page.html",
	styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
	constructor(private service: FoodDatabaseService) {}
	dataobs = new Observable();
	DataArray: any;
	dataSub = new Subscription();

	ngOnInit() {
		// this.dataobs = this.service.getFoodFromDatabase();
		// this.dataSub = this.dataobs.subscribe((re) => {
		// 	console.log(re + "relog");
		// 	this.DataArray = re;
		// 	console.log(this.DataArray);
		// });
	}
}
