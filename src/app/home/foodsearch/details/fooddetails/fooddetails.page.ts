import { FoodDatabaseService } from "./../../../../service/foodDataBase/food-database.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-fooddetails",
	templateUrl: "./fooddetails.page.html",
	styleUrls: ["./fooddetails.page.scss"],
})
export class FooddetailsPage implements OnInit {
	constructor(private service: FoodDatabaseService) {}
	data: any;
	ngOnInit() {
    this.data = this.service.getDetails();
    console.log(this.data);
    
	}
}
