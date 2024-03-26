import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TrackChainComponent} from "./track-chain/track-chain.component";
import {ChainHistoryComponent} from "./chain-history/chain-history.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'track-chain', component: TrackChainComponent},
  { path: 'chain-history/:id', component: ChainHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGuiRoutingModule { }
