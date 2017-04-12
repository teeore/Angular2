System.register(['@angular/core', './stations.service', '@angular/router', '../station-details/station-details.component'], function(exports_1, context_1) {
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
    var core_1, stations_service_1, router_1, station_details_component_1;
    var StationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stations_service_1_1) {
                stations_service_1 = stations_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (station_details_component_1_1) {
                station_details_component_1 = station_details_component_1_1;
            }],
        execute: function() {
            StationsComponent = (function () {
                function StationsComponent(_stationService) {
                    this._stationService = _stationService;
                    this.valueSelected = new core_1.EventEmitter();
                    this.labelSelected = new core_1.EventEmitter();
                }
                StationsComponent.prototype.ngOnInit = function () {
                    this.getAllStations();
                };
                ;
                StationsComponent.prototype.getInitValues = function () {
                    this.selectedStation = this.stations[0];
                    this.labelSelected.emit(this.selectedStation.name);
                    this.valueSelected.emit(this.selectedStation.id);
                };
                StationsComponent.prototype.onChange = function (event) {
                    this.valueSelected.emit(event.target.value);
                    this.labelSelected.emit(event.target.selectedOptions[0].label);
                };
                ;
                StationsComponent.prototype.getAllStations = function () {
                    var _this = this;
                    // this.stations = this._stationService.getStations();
                    this._stationService.getStations()
                        .subscribe(function (stations) { return _this.stations = stations; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getInitValues(); });
                };
                ;
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StationsComponent.prototype, "valueSelected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StationsComponent.prototype, "labelSelected", void 0);
                StationsComponent = __decorate([
                    core_1.Component({
                        selector: 'stations',
                        templateUrl: 'app/stations/stations.component.html',
                        styleUrls: ['app/stations/stations.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, station_details_component_1.StationDetailsComponent]
                    }), 
                    __metadata('design:paramtypes', [stations_service_1.StationService])
                ], StationsComponent);
                return StationsComponent;
            }());
            exports_1("StationsComponent", StationsComponent);
        }
    }
});
//# sourceMappingURL=stations.component.js.map