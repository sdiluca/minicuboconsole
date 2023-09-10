import { Injectable } from '@angular/core';
import { Wifi } from './wifinetwork';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WifiListResponse } from './wifi-list-response';
import { WifiDTO } from './wifi-dto';
import { WifiGetInfoResponse } from './wifi-get-info-response';
import { WifiSaveInfoRequest } from './wifi-save-info-request';
import { WifiSaveInfoResponse } from './wifi-save-info-response';

@Injectable({
  providedIn: 'root'
})
export class WifiserviceService {

  private networks: Wifi[]=[];
  private wifiListRestUrl="/rest/wifiList";
  private wifiSaveRestUrl="/rest/saveWifiInfo";
  private wifiGetInfoRestUrl="/rest/wifiInfo";

  constructor(private http: HttpClient) {}


  getWifiNetworks(): Observable<WifiListResponse>{
    return this.http.get<WifiListResponse>(this.wifiListRestUrl);
  }

  getWifiInfo(): Observable<WifiGetInfoResponse>{
    return this.http.get<WifiGetInfoResponse>(this.wifiGetInfoRestUrl);
  }

    saveWifiNetwork(request: WifiSaveInfoRequest): Observable<WifiSaveInfoResponse>{
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    return this.http.post<WifiSaveInfoResponse>(this.wifiSaveRestUrl,request, {headers: headers});

  }
}
