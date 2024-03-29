import { Storage } from "@ionic/storage";
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private storage: Storage,
		private router: Router,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	ngOnInit() {
		this.storage
			.get("FirsTimeUsers")
			.then((re) => {
				console.log(re + " then");

				if (re === null) {
					this.router.navigate(["/entry-pages"]);
				} else {
					this.router.navigate(["/home"]);
				}
			})
			.catch((re) => {
				console.log(re);
			});
	}
}
