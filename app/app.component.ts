import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NG2_MAP_DIRECTIVES, Ng2MapComponent } from "ng2-map";

@Component({
	selector: 'my-app',
	template: `
		<div id="map">
			<ng2-map center="Brampton, Canada"></ng2-map>
		</div>
	`,
	directives: [NG2_MAP_DIRECTIVES]
})

export class AppComponent {
	constructor() {
		Ng2MapComponent.apiUrl = "https://maps.google.com/maps/api/js?key=AIzaSyD2WDXhbeEApgUu1Poa3V6LR6Qx4u5RY8w";
	}
}