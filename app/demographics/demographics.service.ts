import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Demographics } from './demographics';



@Injectable()
export class DemographicsService {
    // private _DemographicsUrl = 'http://10.1.21.28/getAvailableDemos';
        private _DemographicsUrl = 'api/demos/demos.json';

    Demographics: Demographics[];

    constructor(private _http: Http, protected _defaultOptions: RequestOptions) { }

    getDemos() {
        let body = 'dateRanges=20160417:20160417&marketIds=35';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this._http.get(this._DemographicsUrl)
            .map((response: Response) => <Demographics[]> response.json())
         // .do(data => console.log('All: ' +  Response))
            .catch(this.handleError);
             
             // return this._http.post(this._DemographicsUrl,
             // body, {
             //     headers: headers
             // })
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
