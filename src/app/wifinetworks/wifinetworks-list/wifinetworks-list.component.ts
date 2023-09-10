import { Component,OnInit } from '@angular/core';
import { Wifi } from '../wifinetwork';
import { WifiserviceService } from '../wifiservice.service';

@Component({
  selector: 'app-wifinetworks-list',
  templateUrl: './wifinetworks-list.component.html',
  styleUrls: ['./wifinetworks-list.component.css', '../../app.component.css']
})
export class WifinetworksListComponent implements OnInit{
   title:string="Reti disponibili";
   selectedNetwork:string="";
   selectedBSSID:string="";
   selectedNetworkPassword:string="";
   networks: Wifi[]=[];
   connected:boolean=false;
   connectedNetwork: Wifi|undefined;
   saved: boolean|undefined;
   errorSaving: boolean|undefined;

   private static REFRESH_WIFI=20000;

   ngOnInit(): void {
    setInterval(()=>{
      this.wifiservice.getWifiNetworks().subscribe(wifiresponse =>{
        if (wifiresponse.completed){
          this.networks=wifiresponse.networks.map(wifi =>{
            return new Wifi(wifi.SSID,wifi.BSSID,wifi.RSSI);
          });
        }
      });
    },WifinetworksListComponent.REFRESH_WIFI);

    setInterval(()=>{
      this.wifiservice.getWifiInfo().subscribe(wifiresponse =>{
        this.connected=wifiresponse.connected;
        if (wifiresponse.connected){
        this.connectedNetwork=new Wifi(wifiresponse.SSID,"",0);
        }else{
          this.connectedNetwork=undefined;
        }
      });
    },WifinetworksListComponent.REFRESH_WIFI);



  }

  constructor(private wifiservice:WifiserviceService){
  }

   onRetrievePassword(selectedNetworkPassword: string){
    let saved=false;
    this.selectedNetworkPassword=selectedNetworkPassword;
    this.wifiservice.saveWifiNetwork({
        SSID: this.selectedNetwork,
        BSSID: this.selectedBSSID,
        password: selectedNetworkPassword
      }
    ).subscribe(reponse =>{
      if (saved){
        this.selectedNetwork="";
        this.saved=true;
      }else{
        this.errorSaving=true;
      }
    });
   }
}
