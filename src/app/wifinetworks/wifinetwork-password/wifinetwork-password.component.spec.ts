import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifinetworkPasswordComponent } from './wifinetwork-password.component';

describe('WifinetworkPasswordComponent', () => {
  let component: WifinetworkPasswordComponent;
  let fixture: ComponentFixture<WifinetworkPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WifinetworkPasswordComponent]
    });
    fixture = TestBed.createComponent(WifinetworkPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
