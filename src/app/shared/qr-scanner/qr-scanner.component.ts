import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { type ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { BehaviorSubject, distinctUntilChanged, map, type Observable, shareReplay } from 'rxjs';
import {SharedModule} from "../shared.module";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
    selector: 'app-qr-scanner',
    templateUrl: './qr-scanner.component.html',
    styleUrls: ['./qr-scanner.component.scss'],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    ZXingScannerModule,
    SharedModule
  ],
    standalone: true
})
export class QrScannerComponent{
  @ViewChild('scanner') scanner!: ZXingScannerComponent;
  scanning = true;
  scanRes = '';
  devices$ = new BehaviorSubject<MediaDeviceInfo[]>([]);

  selectedDevice$: Observable<MediaDeviceInfo> = this.devices$.pipe(
  	map((device) => device[0]),
  	distinctUntilChanged(),
  	shareReplay(1)
  );

  enable$ = this.devices$.pipe(map(Boolean));

  toggleCamera$ = new BehaviorSubject<boolean>(false);

  startCamera = true;

  public scanSuccess (event: string): void {
  	this.scanRes = event;
  	this.scanning = false;
  }

  public scanError (error: Error): void {
  	console.error(error);
  }
}
