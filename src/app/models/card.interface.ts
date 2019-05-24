import { PlayerTypes } from './player-types.enum';

export interface Card {
    cardTitle: string;
    playCost: number;
    playEffect: any;
    playerType: PlayerTypes;
    isRevealed: boolean;
}
