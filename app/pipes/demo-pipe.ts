import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
	name: "demoPipe"
	// pure: false
})

export class demoPipe implements PipeTransform  {
	transform(value, demoValue, minTime) {
		if (value == null) {
			return null;
		} 

		return value.filter(item => item.demographicId == demoValue);
	}
}