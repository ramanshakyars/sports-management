import { Routes } from '@angular/router';
import { CricketComponent } from './components/cricket/cricket.component';
import { TennisComponent } from './components/tennis/tennis.component';
import { SoccerComponent } from './components/soccer/soccer.component';

export const routes: Routes = [
    {path:'',component:CricketComponent},
    {path:'tennis',component:TennisComponent},
    {path:'soccer',component:SoccerComponent},
];
