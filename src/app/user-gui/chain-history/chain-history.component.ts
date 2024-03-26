import {Component, OnInit} from "@angular/core";
import {FlexModule} from "@angular/flex-layout";
import {QrScannerComponent} from "../../shared/qr-scanner/qr-scanner.component";
import {SharedModule} from "../../shared/shared.module";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chain-history',
  standalone: true,
	imports: [
		FlexModule,
		QrScannerComponent,
		SharedModule
	],
  templateUrl: './chain-history.component.html',
  styleUrl: './chain-history.component.scss'
})
export class ChainHistoryComponent implements OnInit{
  id: string | null = null; // Initialize id as null or appropriate default value

  public isMobile: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small,
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
