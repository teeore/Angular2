System.register(['@angular/core', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var DemographicsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            DemographicsService = (function () {
                function DemographicsService(_http, _defaultOptions) {
                    this._http = _http;
                    this._defaultOptions = _defaultOptions;
                    // private _DemographicsUrl = 'http://10.1.21.28/getAvailableDemos';
                    this._DemographicsUrl = 'api/demos/demos.json';
                }
                DemographicsService.prototype.getDemos = function () {
                    var body = 'dateRanges=20160417:20160417&marketIds=35';
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.get(this._DemographicsUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                    // return this._http.post(this._DemographicsUrl,
                    // body, {
                    //     headers: headers
                    // })
                };
                DemographicsService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                DemographicsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, http_1.RequestOptions])
                ], DemographicsService);
                return DemographicsService;
            }());
            exports_1("DemographicsService", DemographicsService);
        }
    }
});
//# sourceMappingURL=demographics.service.js.map