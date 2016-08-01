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
		Ng2MapComponent['apiUrl'] = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDkhPCU3nX_JsXMvg2N5riJM0KF1XSgz4";
	}
}