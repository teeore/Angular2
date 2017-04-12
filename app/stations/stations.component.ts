import { Component, OnInit, Output, EventEmitter }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Stations } from './stations';
import { StationService } from './stations.service';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { StationDetailsComponent } from '../station-details/station-details.component';



@Component({
    selector: 'stations',
    templateUrl: 'app/stations/stations.component.html',
    styleUrls: ['app/stations/stations.component.css'],
    directives: [ROUTER_DIRECTIVES, StationDetailsComponent]
})
export class StationsComponent {
    stations: Observable<Stations[]>;
    @Output() valueSelected = new EventEmitter();
    @Output() labelSelected = new EventEmitter();
    selectedStation : any;


    constructor(private _stationService: StationService) {
    }


    ngOnInit() { 
        this.getAllStations(); 
    };

    getInitValues() {
        this.selectedStation = this.stations[0];
        this.labelSelected.emit(this.selectedStation.name)
        this.valueSelected.emit(this.selectedStation.id)
    }

    onChange(event) {
        this.valueSelected.emit(event.target.value)
        this.labelSelected.emit(event.target.selectedOptions[0].label)
    };

    getAllStations() {
        // this.stations = this._stationService.getStations();
           this._stationService.getStations()
             .subscribe(
               stations => this.stations = stations,
               error =>  this.errorMessage = <any>error,
               () => this.getInitValues()
            );
           
    };


}
