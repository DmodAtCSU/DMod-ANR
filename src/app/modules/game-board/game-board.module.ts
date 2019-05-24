import { NgModule } from '@angular/core';
import { CorporationServerComponent } from './components/corporation/corporation-server/corporation-server.component';
import { CorporationBoardComponent } from './components/corporation/corporation-board/corporation-board.component';
import { GameBoardRoutingModule } from './game-board-routing.module';

@NgModule({
    imports: [
        GameBoardRoutingModule
    ],
    declarations: [
        CorporationBoardComponent,
        CorporationServerComponent
    ],
    providers: []
})
export class GameBoardModule { }
