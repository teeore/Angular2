import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "sliderPipe"
})

export class sliderPipe implements PipeTransform {
	transform(value, minTime, maxTime) {
		if (value == null) {
			return null;
		}
		return value.filter(item => item.time >= minTime <= maxTime);
}