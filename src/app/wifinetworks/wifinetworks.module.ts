import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifinetworksListComponent } from './wifinetworks-list/wifinetworks-list.component';
import { SortByStrenghtPipe } from './sort-by-strenght.pipe';
import { WifinetworkPasswordComponent } from './wifinetwork-password/wifinetwork-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WifinetworksListComponent,
    SortByStrenghtPipe,
    WifinetworkPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [WifinetworksListComponent]
})
export class WifinetworksModule { }
