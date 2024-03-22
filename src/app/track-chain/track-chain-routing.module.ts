import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ScanQrComponent } from './scan-qr/scan-qr.component';

const routes: Routes = [
    { path: '', component: ScanQrComponent , pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackChainRoutingModule { }
