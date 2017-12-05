import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AlumnosService {
	data: any;
	results = [];


	constructor() {
		this.data = null;
	}

	load() {



	}

}