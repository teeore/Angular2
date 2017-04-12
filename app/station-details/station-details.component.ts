import { Component, OnInit, Input }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StationDetails } from './station-details';
import { StationDetailService } from './station-details.service';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { stationPipe } from '../pipes/station-pipe';
import { demoPipe } from '../pipes/demo-pipe';
import { sliderPipe } from '../pipes/slider-pipe';

@Component({
    selector: 'station-details',
    templateUrl: 'app/station-details/station-details.component.html',
    styleUrls: ['app/station-details/station-details.component.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: [stationPipe, demoPipe, sliderPipe]
})

export class StationDetailsComponent implements OnInit {

        @Input() stationValue: number;
        @Input() stationLabel: string;
        @Input() demoLabel: string;
        @Input() demoValue: number;
        @Input() minTime: number;
        @Input() maxTime: number;
        // pageTitle: string = 'October 29th, 2015 New York';
        stationDetails: Observable<StationDetails[]>;    

    constructor(private _stationDetailService: StationDetailService) {}

    ngOnInit() { 
        this.getAllStationDetails(); 
        this.updatetimeSlot = '6'
    };


    getAllStationDetails() {
        this._stationDetailService.getStationDetails()
            .subscribe(
                stationDetails => this.stationDetails = stationDetails,
                error => this.errorMessage = <any>error);
    }
    
}
