import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackChainRoutingModule } from './track-chain-routing.module';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { SharedModule } from '../shared/shared.module';
import { FlexModule } from '@angular/flex-layout';
import { QrScannerComponent } from '../shared/qr-scanner/qr-scanner.component';



@NgModule({
    declarations: [
        ScanQrComponent
    ],
    imports: [
        CommonModule,
        TrackChainRoutingModule,
        SharedModule,
        FlexModule,
        QrScannerComponent
    ]
})
export class TrackChainModule { }
