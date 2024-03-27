import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackChainService {

  constructor(public http: HttpClient) { }

  public getChainHistory(id: string): Observable<string> {
    return this.http.get<any>(environment.apiUrl + 'chain-history/' + id);
  }
}
