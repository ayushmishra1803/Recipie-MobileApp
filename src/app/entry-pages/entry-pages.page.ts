import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-entry-pages",
	templateUrl: "./entry-pages.page.html",
	styleUrls: ["./entry-pages.page.scss"],
})
export class EntryPagesPage implements OnInit {
	constructor(private storage: Storage, private router: Router) {}

	ngOnInit() {}
	startApp() {
		this.storage
			.set("FirsTimeUsers", true)
			.then((re) => {
        console.log(re);
        
				this.router.navigate(["/home"]);
			})
			.catch((re) => {
				console.log(re);
			});
	}
}
