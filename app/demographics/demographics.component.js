System.register(['@angular/core', './demographics.service', '@angular/router', '../station-details/station-details.component'], function(exports_1, context_1) {
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
    var core_1, demographics_service_1, router_1, station_details_component_1;
    var DemosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demographics_service_1_1) {
                demographics_service_1 = demographics_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (station_details_component_1_1) {
                station_details_component_1 = station_details_component_1_1;
            }],
        execute: function() {
            DemosComponent = (function () {
                function DemosComponent(_demographicsService) {
                    this._demographicsService = _demographicsService;
                    this.valueDemo = new core_1.EventEmitter();
                    this.labelDemo = new core_1.EventEmitter();
                }
                DemosComponent.prototype.ngOnInit = function () {
                    this.getAllDemos();
                };
                ;
                DemosComponent.prototype.getInitValues = function () {
                    this.selectedDemo = this.demographics[12];
                    this.labelDemo.emit(this.selectedDemo.name);
                    this.valueDemo.emit(this.selectedDemo.id);
                    // console.log('this.selectedDemo ', this.selectedDemo.id, this.selectedDemo.name)
                };
                DemosComponent.prototype.onChange = function (event) {
                    this.valueDemo.emit(event.target.value);
                    this.labelDemo.emit(event.target.selectedOptions[0].label);
                };
                ;
                DemosComponent.prototype.getAllDemos = function () {
                    var _this = this;
                    this._demographicsService.getDemos()
                        .subscribe(function (demographics) { return _this.demographics = demographics; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getInitValues(); });
                };
                ;
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DemosComponent.prototype, "valueDemo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DemosComponent.prototype, "labelDemo", void 0);
                DemosComponent = __decorate([
                    core_1.Component({
                        selector: 'demographics',
                        templateUrl: 'app/demographics/demographics.component.html',
                        styleUrls: ['app/demographics/demographics.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, station_details_component_1.StationDetailsComponent]
                    }), 
                    __metadata('design:paramtypes', [demographics_service_1.DemographicsService])
                ], DemosComponent);
                return DemosComponent;
            }());
            exports_1("DemosComponent", DemosComponent);
        }
    }
});
//# sourceMappingURL=demographics.component.js.map