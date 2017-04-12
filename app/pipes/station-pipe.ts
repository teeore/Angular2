import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
	name: "stationPipe"
	// pure: false
})

export class stationPipe implements PipeTransform  {
	transform(value, stationValue) {
		if (value == null) {
			return null;
		} 

		return value.filter(item => item.stationId == stationValue);
	}
}