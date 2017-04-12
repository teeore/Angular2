import { Component, OnInit, Output, EventEmitter }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { StationDetailsComponent } from '../station-details/station-details.component';
import { Slider } from 'primeng/primeng';

declare var jQuery: any;



@Component({
    selector: 'slider',
    templateUrl: 'app/slider/slider.component.html',
    styleUrls: ['app/slider/slider.component.css'],
    directives: [ROUTER_DIRECTIVES, StationDetailsComponent, Slider]
})

export class sliderComponent {
    timeRange: string;
    rangeValues: any[] = [1080,1380];
    time: string = 'PM';
    startTime: any;
    endTime: any;
    @Output() startRange = new EventEmitter();
    @Output() endRange = new EventEmitter();

    sliderChange(event) {
        this.updateTime();
    }

    updateTime() {
        // update ui
        var firstVal: number = this.rangeValues[0],
            lastVal: number = this.rangeValues[1],
            first_hour: number = firstVal / 60 % 24,
            last_hour: number = lastVal / 60 % 24,
            first_min: number = firstVal % 60,
            last_min: number = lastVal % 60;

        var getRange = [];
        getRange.push(first_hour, last_hour);
        this.startTime = this.getTime(first_hour, first_min);
        this.endTime = this.getTime(last_hour, last_min);
        this.timeRange = this.startTime + ' - ' + this.endTime;   

        // send EventEmitter
        this.startRange.emit(firstVal);
        this.endRange.emit(lastVal);
    }

    getTime(hours, mins) {
        if (hours < 12) {
            this.time = 'AM';
        } else {
            this.time = 'PM';
        }

        if (hours == 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        if (mins.length == 1) {
            mins = '0' + mins;
        }
        return hours + ':' + mins + '' + this.time;
     }

    ngOnInit() { 
        this.updateTime();
    };

}

