import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  // Get data with post method
  fetchSportsData(url:string,requestBody:any):any{
    return this.http.post(url,requestBody);

  }
}
