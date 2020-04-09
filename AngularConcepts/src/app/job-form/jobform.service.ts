import { Injectable } from '@angular/core';

//used for making api calls 
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobformService {

  cityStateFinderApiKey = 'khjLzMxAQFIqT47oIe17tRT8LEnjz1P2awraUMrO8GLBIujI9N4Nqi3uxEsOGyDw';
  keytwo = '79EMaC90ubhVU9z6qRIxYWjPZfw4u7fdBKTm30Xrlne4muOnl1cz1YGOYrPYt7ub';
  cityStateFinderApi = 'https://www.zipcodeapi.com/rest/';
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Origin': '',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  findCityStateByZipCode(zipCode): Observable<any> {
    console.log('find city & state api called for ' + zipCode)
    return this.http.get('/api/'+this.cityStateFinderApiKey + '/info.json/' + zipCode + '/degrees');
    //this.cityStateFinderApiKey
  }

}
