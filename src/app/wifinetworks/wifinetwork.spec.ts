import { Wifi } from './wifinetwork';

describe('Wifi', () => {
  it('should create an instance', () => {
    expect(new Wifi('','',0)).toBeTruthy();
  });
});
