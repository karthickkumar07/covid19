import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) {

   }

   getCity():Observable<any>{
     const url="https://api.covid19india.org/state_district_wise.json"
     return this.http.get<any>(url)
    }

  

}
