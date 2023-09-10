
 export enum SIGNAL_STRENGTH{
  UNUSABLE,
  WEAK,
  MEDIUM,
  STRONG
};

export class Wifi {
  SSID: string;
  BSSID: string;
  RSSI: number;
  signalStrength: SIGNAL_STRENGTH;
  signalStrenghEnum: typeof SIGNAL_STRENGTH=SIGNAL_STRENGTH;

  public constructor(SSID: string,BSSID: string,RSSI: number){
    this.SSID=SSID;
    this.BSSID=BSSID;
    this.RSSI=RSSI;
    this.signalStrength=this.getSignalStrenght(RSSI);
  }


  private getSignalStrenght(RSSI: number): SIGNAL_STRENGTH{
    let result: SIGNAL_STRENGTH=SIGNAL_STRENGTH.UNUSABLE;
    if (RSSI<=-90){
      result= SIGNAL_STRENGTH.UNUSABLE;
    }else if (RSSI<=-80&&RSSI>-90){
      result= SIGNAL_STRENGTH.WEAK;
    }else if(RSSI<=-67&&RSSI>-80){
      result= SIGNAL_STRENGTH.MEDIUM;
    }else if(RSSI>-67){
      result= SIGNAL_STRENGTH.STRONG;
    }
    return result;
  }

}
