System.register(['@angular/core', './station-details.service', '@angular/router', '../pipes/station-pipe', '../pipes/demo-pipe', '../pipes/slider-pipe'], function(exports_1, context_1) {
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
    var core_1, station_details_service_1, router_1, station_pipe_1, demo_pipe_1, slider_pipe_1;
    var StationDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (station_details_service_1_1) {
                station_details_service_1 = station_details_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (station_pipe_1_1) {
                station_pipe_1 = station_pipe_1_1;
            },
            function (demo_pipe_1_1) {
                demo_pipe_1 = demo_pipe_1_1;
            },
            function (slider_pipe_1_1) {
                slider_pipe_1 = slider_pipe_1_1;
            }],
        execute: function() {
            StationDetailsComponent = (function () {
                function StationDetailsComponent(_stationDetailService) {
                    this._stationDetailService = _stationDetailService;
                }
                StationDetailsComponent.prototype.ngOnInit = function () {
                    this.getAllStationDetails();
                    this.updatetimeSlot = '6';
                };
                ;
                StationDetailsComponent.prototype.getAllStationDetails = function () {
                    var _this = this;
                    this._stationDetailService.getStationDetails()
                        .subscribe(function (stationDetails) { return _this.stationDetails = stationDetails; }, function (error) { return _this.errorMessage = error; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StationDetailsComponent.prototype, "stationValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StationDetailsComponent.prototype, "stationLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StationDetailsComponent.prototype, "demoLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StationDetailsComponent.prototype, "demoValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StationDetailsComponent.prototype, "minTime", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StationDetailsComponent.prototype, "maxTime", void 0);
                StationDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'station-details',
                        templateUrl: 'app/station-details/station-details.component.html',
                        styleUrls: ['app/station-details/station-details.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [station_pipe_1.stationPipe, demo_pipe_1.demoPipe, slider_pipe_1.sliderPipe]
                    }), 
                    __metadata('design:paramtypes', [station_details_service_1.StationDetailService])
                ], StationDetailsComponent);
                return StationDetailsComponent;
            }());
            exports_1("StationDetailsComponent", StationDetailsComponent);
        }
    }
});
//# sourceMappingURL=station-details.component.js.map