import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { StationService } from './stations/stations.service';
import { StationDetailService } from './station-details/station-details.service';
import { DemographicsService } from './demographics/demographics.service';

import { StationsComponent } from './stations/stations.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { DemosComponent } from './demographics/demographics.component';
import { sliderComponent } from './slider/slider.component';




@Component({
    selector: 'sqad-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES, StationsComponent, StationDetailsComponent, DemosComponent, sliderComponent],
    providers: [StationService,
                DemographicsService,
                StationDetailService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS,
                ]
})
// @Routes([
//     { path: '/', component: SingleGridComponent },
//     // { path: '/products', component: ProductListComponent },
//     // { path: '/product/:id', component: ProductDetailComponent }
// ])
export class AppComponent {
    pageTitle: string = 'SQAD';
}
