import { Card } from 'src/app/models/card.interface';
import { CorporationRemoteServer } from './corporation-remote-server.interface';

export interface CorporationState {
    researchAndDevelopment: Card[];
    headquarters: Card[];
    archives: Card[];
    remoteServers: CorporationRemoteServer[];
}
