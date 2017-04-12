System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router', './stations/stations.service', './station-details/station-details.service', './demographics/demographics.service', './stations/stations.component', './station-details/station-details.component', './demographics/demographics.component', './slider/slider.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, stations_service_1, station_details_service_1, demographics_service_1, stations_component_1, station_details_component_1, demographics_component_1, slider_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stations_service_1_1) {
                stations_service_1 = stations_service_1_1;
            },
            function (station_details_service_1_1) {
                station_details_service_1 = station_details_service_1_1;
            },
            function (demographics_service_1_1) {
                demographics_service_1 = demographics_service_1_1;
            },
            function (stations_component_1_1) {
                stations_component_1 = stations_component_1_1;
            },
            function (station_details_component_1_1) {
                station_details_component_1 = station_details_component_1_1;
            },
            function (demographics_component_1_1) {
                demographics_component_1 = demographics_component_1_1;
            },
            function (slider_component_1_1) {
                slider_component_1 = slider_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'SQAD';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'sqad-app',
                        templateUrl: 'app/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, stations_component_1.StationsComponent, station_details_component_1.StationDetailsComponent, demographics_component_1.DemosComponent, slider_component_1.sliderComponent],
                        providers: [stations_service_1.StationService,
                            demographics_service_1.DemographicsService,
                            station_details_service_1.StationDetailService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map