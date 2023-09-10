import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifinetworksListComponent } from './wifinetworks-list.component';

describe('WifinetworksListComponent', () => {
  let component: WifinetworksListComponent;
  let fixture: ComponentFixture<WifinetworksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WifinetworksListComponent]
    });
    fixture = TestBed.createComponent(WifinetworksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
