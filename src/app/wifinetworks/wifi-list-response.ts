import { WifiDTO } from "./wifi-dto";

export interface WifiListResponse {
  completed:boolean;
  networks: WifiDTO[]
}
