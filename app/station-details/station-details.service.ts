 import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { StationDetails } from './station-details';


@Injectable()
export class StationDetailService {
    private _stationsUrl = 'api/gridData/gridData.json';
    // private _stationsUrl = ' http://10.1.21.28/getGridData';
    StationDetails: StationDetails[];

    constructor(private _http: Http, protected _defaultOptions: RequestOptions) { }

    getStationDetails()  {
        let body = 'dateRanges=20160417:20160417&marketIds=35&demoIds=2';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // return this._http.post(this._stationsUrl,
        //      body, {
        //          headers: headers
        //      })
        return this._http.get(this._stationsUrl)
            .map((response: Response) => <StationDetails[]> response.json())
            // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
