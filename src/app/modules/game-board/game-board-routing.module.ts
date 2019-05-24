import { Routes, RouterModule } from '@angular/router';
import { CorporationBoardComponent } from './components/corporation/corporation-board/corporation-board.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: CorporationBoardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameBoardRoutingModule { }
