import { Component, OnInit, Output, EventEmitter }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Demographics } from './demographics';
import { DemographicsService } from './demographics.service';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { StationDetailsComponent } from '../station-details/station-details.component';



@Component({
    selector: 'demographics',
    templateUrl: 'app/demographics/demographics.component.html',
    styleUrls: ['app/demographics/demographics.component.css'],
    directives: [ROUTER_DIRECTIVES, StationDetailsComponent]
})

export class DemosComponent {
    demographics: Observable<Demographics[]>;
    @Output() valueDemo = new EventEmitter();
    @Output() labelDemo = new EventEmitter();
    selectedDemo: any;


    constructor(private _demographicsService: DemographicsService) {
     }


    ngOnInit() { 
        this.getAllDemos();
    };

    getInitValues() {
        this.selectedDemo = this.demographics[12];
        this.labelDemo.emit(this.selectedDemo.name)
        this.valueDemo.emit(this.selectedDemo.id)
        // console.log('this.selectedDemo ', this.selectedDemo.id, this.selectedDemo.name)
    }

    onChange(event) {
        this.valueDemo.emit(event.target.value)
        this.labelDemo.emit(event.target.selectedOptions[0].label)
    };


    getAllDemos() {
        this._demographicsService.getDemos()
             .subscribe(
                   demographics => this.demographics = demographics,
                   error =>  this.errorMessage = <any>error,
                   () => this.getInitValues()
               );
    };
}

