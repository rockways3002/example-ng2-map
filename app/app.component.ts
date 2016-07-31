import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NG2_MAP_DIRECTIVES  } from "ng2-map";


@Component({
	selector: 'my-app',
	template: `
		<div id="map">
			<ng2-map  [center]="Brampton, Canada"></ng2-map>
		</div>
	`,
	directives: [NG2_MAP_DIRECTIVES],
})

export class AppComponent {

}