import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { FoodDatabaseService } from "./../../../service/foodDataBase/food-database.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-details",
	templateUrl: "./details.page.html",
	styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
	constructor(private service: FoodDatabaseService, private router: Router) {}
	dataobs = new Observable<{ hints: any[]; parsed: any[] }>();
	DataHint: any[] = [];
	dataSub = new Subscription();
	Dataparsed: any[] = [];

	ngOnInit() {
		this.dataobs = this.service.getFoodFromDatabase();
		this.dataSub = this.dataobs.subscribe((re) => {
			console.log(re + "relog");
			this.DataHint = re.hints;
			this.Dataparsed = re.parsed;
			console.log(this.Dataparsed);

			console.log(this.DataHint);
		});
	}
	details(data: any[]) {
		this.service.setDetails(data);
		this.router.navigate(["//home/tabs/foodsearch/details/fooddetails"]);
	}
}
