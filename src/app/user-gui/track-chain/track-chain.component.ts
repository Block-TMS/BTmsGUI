import { Component} from "@angular/core";
import {QrScannerComponent} from "../../shared/qr-scanner/qr-scanner.component";
import {SharedModule} from "../../shared/shared.module";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-track-chain',
  standalone: true,
  imports: [
    QrScannerComponent,
    SharedModule,
    FlexLayoutModule
  ],
  templateUrl: './track-chain.component.html',
  styleUrl: './track-chain.component.scss'
})
export class TrackChainComponent{

  public isMobile: boolean = false;

  public loading: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small,
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
