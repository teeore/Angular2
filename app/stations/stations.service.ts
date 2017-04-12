import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Stations } from './stations';


@Injectable()
export class StationService {
    private _stationsUrl = 'api/stations/stations.json';
    // private _stationsUrl = ' http://10.1.21.28/getAvailableStations';
    stations: Stations[];

    constructor(private _http: Http, protected _defaultOptions: RequestOptions) {

    }


getStations() {
    let body = 'dateRanges=20160417:20160417&marketIds=35&demoIds=2&stationIds=136&timeRanges=5:60';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // return this._http.post(this._stationsUrl,
    //     body, {
    //          headers: headers
    //      })
    return this._http.get(this._stationsUrl)
        .map((response: Response) => <Stations[]> response.json())
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
