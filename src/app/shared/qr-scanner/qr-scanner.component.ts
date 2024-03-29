import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { type ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { BehaviorSubject, distinctUntilChanged, map, type Observable, shareReplay } from 'rxjs';
import {SharedModule} from "../shared.module";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";

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
export class QrScannerComponent implements OnInit{
  @ViewChild('scanner') scanner!: ZXingScannerComponent;
  devices = new BehaviorSubject<MediaDeviceInfo[]>([]);

  selectedDevice: Observable<MediaDeviceInfo> = this.devices.pipe(
  	map((device) => device[0]),
  	distinctUntilChanged(),
  	shareReplay(1),
  );

  enable = this.devices.pipe(map(Boolean));

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>()

  //toggleCamera = new BehaviorSubject<boolean>(false);

  startCamera = true;

  constructor(private router: Router) {
  }

  public ngOnInit() {
    this.enable.subscribe(res => {
      this.loading.emit(res);
    })
  }

  public scanSuccess (event: string): void {
    this.router.navigate([`/user/chain-history`, event]);
  }

  public scanError (error: Error): void {
  	console.error(error);
  }
}
