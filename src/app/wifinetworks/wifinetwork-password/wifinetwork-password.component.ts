import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wifinetwork-password',
  templateUrl: './wifinetwork-password.component.html',
  styleUrls: ['./wifinetwork-password.component.css','../../app.component.css']
})
export class WifinetworkPasswordComponent implements OnChanges {
  title:string="";
  password: string="";
  @Input() selectedNetwork:string="";
  @Output() saveEvent=new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    const selectedNetwork=changes['selectedNetwork'];
    if (selectedNetwork.currentValue!=""){
       this.title=`Inserisci la password per la rete ${selectedNetwork.currentValue}`;
       this.password="";
    }
  }

  save(password:string){
    this.password=password;
    this.saveEvent.emit(this.password);
  }
}
