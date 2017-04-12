System.register(['@angular/core', '@angular/router', '../station-details/station-details.component', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, router_1, station_details_component_1, primeng_1;
    var sliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (station_details_component_1_1) {
                station_details_component_1 = station_details_component_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            sliderComponent = (function () {
                function sliderComponent() {
                    this.rangeValues = [1080, 1380];
                    this.time = 'PM';
                    this.startRange = new core_1.EventEmitter();
                    this.endRange = new core_1.EventEmitter();
                }
                sliderComponent.prototype.sliderChange = function (event) {
                    this.updateTime();
                };
                sliderComponent.prototype.updateTime = function () {
                    // update ui
                    var firstVal = this.rangeValues[0], lastVal = this.rangeValues[1], first_hour = firstVal / 60 % 24, last_hour = lastVal / 60 % 24, first_min = firstVal % 60, last_min = lastVal % 60;
                    var getRange = [];
                    getRange.push(first_hour, last_hour);
                    this.startTime = this.getTime(first_hour, first_min);
                    this.endTime = this.getTime(last_hour, last_min);
                    this.timeRange = this.startTime + ' - ' + this.endTime;
                    // send EventEmitter
                    this.startRange.emit(firstVal);
                    this.endRange.emit(lastVal);
                };
                sliderComponent.prototype.getTime = function (hours, mins) {
                    if (hours < 12) {
                        this.time = 'AM';
                    }
                    else {
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
                };
                sliderComponent.prototype.ngOnInit = function () {
                    this.updateTime();
                };
                ;
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], sliderComponent.prototype, "startRange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], sliderComponent.prototype, "endRange", void 0);
                sliderComponent = __decorate([
                    core_1.Component({
                        selector: 'slider',
                        templateUrl: 'app/slider/slider.component.html',
                        styleUrls: ['app/slider/slider.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, station_details_component_1.StationDetailsComponent, primeng_1.Slider]
                    }), 
                    __metadata('design:paramtypes', [])
                ], sliderComponent);
                return sliderComponent;
            }());
            exports_1("sliderComponent", sliderComponent);
        }
    }
});
//# sourceMappingURL=slider.component.js.map