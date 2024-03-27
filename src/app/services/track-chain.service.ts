import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrackChainService {

  constructor(public http: HttpClient) { }

  public getChainHistory(id: string): void {
    this.http.get()
  }
}
